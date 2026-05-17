"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { GRAD_VERT, GRAD_FRAG, SCHEME5_COLORS, SCHEME5_PARAMS } from "@/lib/gradient-config";

interface LandingpageProps {
  lines: string[];
}

export default function Landingpage({ lines }: LandingpageProps) {
  const heroRef      = useRef<HTMLDivElement>(null);      // Three.js mount + hero container
  const containerRef = useRef<HTMLDivElement>(null);      // GSAP 3-D tilt target
  const headingRef   = useRef<HTMLHeadingElement>(null);  // GSAP entrance + parallax drift

  // ── Three.js liquid gradient ─────────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mount = heroRef.current;
    if (!mount) return;

    // Renderer — mounts directly into the hero div
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Pin the canvas behind the text overlay; prevent it from blocking pointer events.
    // Pass false to setSize so Three.js never overrides these CSS values.
    Object.assign(renderer.domElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
      pointerEvents: "none",
    });
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 50;

    const getViewSize = () => {
      const h = Math.abs(camera.position.z * Math.tan((camera.fov * Math.PI) / 360) * 2);
      return { width: h * camera.aspect, height: h };
    };

    // ── TouchTexture ──────────────────────────────────────────────────────────
    const TOUCH_SIZE = 64;
    const MAX_AGE    = 64;
    const RADIUS     = 0.25 * TOUCH_SIZE;

    const tCanvas = document.createElement("canvas");
    tCanvas.width = tCanvas.height = TOUCH_SIZE;
    const tCtx = tCanvas.getContext("2d")!;
    tCtx.fillStyle = "black";
    tCtx.fillRect(0, 0, TOUCH_SIZE, TOUCH_SIZE);
    const touchTexture = new THREE.Texture(tCanvas);

    type TrailPoint = { x: number; y: number; age: number; force: number; vx: number; vy: number };
    const trail: TrailPoint[] = [];
    const lastTouch = { x: 0.5, y: 0.5 };

    const addTouch = (pt: { x: number; y: number }) => {
      const dx = pt.x - lastTouch.x;
      const dy = pt.y - lastTouch.y;
      if (dx === 0 && dy === 0) return;
      const d     = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
      lastTouch.x = pt.x;
      lastTouch.y = pt.y;
      trail.push({ x: pt.x, y: pt.y, age: 0, force, vx: dx / d, vy: dy / d });
    };

    const updateTouch = () => {
      tCtx.fillStyle = "black";
      tCtx.fillRect(0, 0, TOUCH_SIZE, TOUCH_SIZE);

      const speed = 1 / MAX_AGE;
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        const f = p.force * speed * (1 - p.age / MAX_AGE);
        p.x += p.vx * f;
        p.y += p.vy * f;
        p.age++;
        if (p.age > MAX_AGE) { trail.splice(i, 1); continue; }

        const t = p.age / MAX_AGE;
        let intensity = t < 0.3
          ? Math.sin((t / 0.3) * (Math.PI / 2))
          : -(1 - (t - 0.3) / 0.7) * ((1 - (t - 0.3) / 0.7) - 2);
        intensity *= p.force;

        const px  = p.x * TOUCH_SIZE;
        const py  = (1 - p.y) * TOUCH_SIZE;
        const off = TOUCH_SIZE * 5;
        const col = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;

        tCtx.shadowOffsetX = off;
        tCtx.shadowOffsetY = off;
        tCtx.shadowBlur    = RADIUS;
        tCtx.shadowColor   = `rgba(${col}, ${0.2 * intensity})`;
        tCtx.beginPath();
        tCtx.fillStyle = "rgba(255,0,0,1)";
        tCtx.arc(px - off, py - off, RADIUS, 0, Math.PI * 2);
        tCtx.fill();
      }
      touchTexture.needsUpdate = true;
    };

    // ── Uniforms ──────────────────────────────────────────────────────────────
    const { C1, C2, C3, C4, C5, C6, DARK_NAVY } = SCHEME5_COLORS;
    const { SPEED, INTENSITY, GRADIENT_SIZE, GRADIENT_COUNT, W1, W2, GRAIN } = SCHEME5_PARAMS;

    const v3 = (c: readonly [number, number, number]) => new THREE.Vector3(...c);

    const uniforms = {
      uTime:          { value: 0 },
      uResolution:    { value: new THREE.Vector2() },
      uColor1:        { value: v3(C1) },
      uColor2:        { value: v3(C2) },
      uColor3:        { value: v3(C3) },
      uColor4:        { value: v3(C4) },
      uColor5:        { value: v3(C5) },
      uColor6:        { value: v3(C6) },
      uSpeed:         { value: SPEED },
      uIntensity:     { value: INTENSITY },
      uTouchTexture:  { value: touchTexture },
      uGrainIntensity:{ value: GRAIN },
      uDarkNavy:      { value: v3(DARK_NAVY) },
      uGradientSize:  { value: GRADIENT_SIZE },
      uGradientCount: { value: GRADIENT_COUNT },
      uColor1Weight:  { value: W1 },
      uColor2Weight:  { value: W2 },
    };

    // ── Geometry + material ───────────────────────────────────────────────────
    const { width: vw, height: vh } = getViewSize();
    const geometry = new THREE.PlaneGeometry(vw, vh);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: GRAD_VERT,
      fragmentShader: GRAD_FRAG,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // ── Resize — observes heroRef directly, always in sync ────────────────────
    const setSize = () => {
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      // false = do not override the CSS height we set above
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const vs = getViewSize();
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(vs.width, vs.height);
      uniforms.uResolution.value.set(
        w * renderer.getPixelRatio(),
        h * renderer.getPixelRatio()
      );
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(mount);

    // ── Animation loop ────────────────────────────────────────────────────────
    let lastTime = performance.now();
    let rafId = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const now   = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1); // seconds, capped at 100ms
      lastTime = now;
      uniforms.uTime.value += delta;
      updateTouch();
      renderer.render(scene, camera);
    };
    rafId = requestAnimationFrame(tick);

    // ── Mouse / touch ─────────────────────────────────────────────────────────
    const onPointerMove = (e: PointerEvent) => {
      addTouch({ x: e.clientX / window.innerWidth, y: 1 - e.clientY / window.innerHeight });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      ro.disconnect();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      mesh.geometry.dispose();
      material.dispose();
      touchTexture.dispose();
    };
  }, []);

  // ── GSAP entrance — word-split slide-up ──────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordInners = headingRef.current?.querySelectorAll<HTMLElement>(".word-inner");
      if (!wordInners?.length) return;

      gsap.fromTo(
        wordInners,
        { yPercent: 110 },
        { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.07, delay: 0.3 }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  // ── GSAP 3-D tilt + parallax drift ───────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    const heading   = headingRef.current;
    if (!container || !heading) return;

    gsap.set(container, { transformPerspective: 1000 });

    const tiltX  = gsap.quickSetter(container, "rotateX", "deg");
    const tiltY  = gsap.quickSetter(container, "rotateY", "deg");
    const shiftX = gsap.quickSetter(heading,   "x",       "px");
    const shiftY = gsap.quickSetter(heading,   "y",       "px");

    const target = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    const LERP   = 0.07;

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width  * 0.5)) / (rect.width  * 0.5)));
      target.y = Math.max(-1, Math.min(1, (e.clientY - (rect.top  + rect.height * 0.5)) / (rect.height * 0.5)));
    };

    const tick = () => {
      smooth.x += (target.x - smooth.x) * LERP;
      smooth.y += (target.y - smooth.y) * LERP;
      tiltX(-smooth.y * 7);
      tiltY( smooth.x * 9);
      shiftX( smooth.x * 10);
      shiftY( smooth.y *  6);
    };

    gsap.ticker.add(tick);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onMove);
      gsap.set(container, { rotateX: 0, rotateY: 0, clearProps: "transformPerspective" });
      gsap.set(heading,   { x: 0, y: 0 });
    };
  }, []);

  return (
    /*
      heroRef is the Three.js mount AND the outer hero container.
      overflow-hidden prevents any brief over-draw from creating a scrollbar.
      The Three.js canvas is appended here by useEffect — no separate component.
    */
    <div
      ref={heroRef}
      className="landingly relative w-full lg:h-[calc(100vh+80px)] min-h-[calc(80vh+80px)] overflow-hidden"
    >
      {/* Text overlay — sits above the gradient (z-10), allows pointer events */}
      <div className="absolute top-0 left-0 right-0 lg:h-screen min-h-[80vh] z-10 flex items-center justify-center text-center pt-24 lg:pt-0">
        <div ref={containerRef} className="w-full">
          {/*
            mix-blend-mode: screen
            · Dark bg (#0a0a0a): gradient colours glow through letterforms
            · Light bg (#ffffff): screen against white is a no-op — text stays readable
          */}
          <h1
            ref={headingRef}
            className="flex flex-col items-center gap-2 lg:gap-4 w-full px-6 lg:px-14"
            style={{ mixBlendMode: "screen" }}
          >
            {lines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(/\s+/).map((word, wordIdx) => (
                  <span
                    key={wordIdx}
                    className="inline-block overflow-hidden align-bottom mr-[0.2em] last:mr-0"
                  >
                    <span className="word-inner inline-block">{word}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}
