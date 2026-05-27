// Scheme 5 colour constants (raw floats — hero.tsx constructs THREE.Vector3 instances)
export const SCHEME5_COLORS = {
  C1:       [0.918, 0.706, 0.031] as const, // #EAB308 Yellow
  C2:       [0.0,   0.259, 0.22 ] as const, // #004238 Dark Teal
  C3:       [0.918, 0.706, 0.031] as const, // Yellow (repeated)
  C4:       [0.0,   0.0,   0.0  ] as const, // #000000 Black
  C5:       [0.918, 0.706, 0.031] as const, // Yellow (repeated)
  C6:       [0.0,   0.0,   0.0  ] as const, // Black (repeated)
  DARK_NAVY:[0.039, 0.055, 0.153] as const, // #0a0e27
} as const;

export const SCHEME5_PARAMS = {
  SPEED:          1.5,
  INTENSITY:      1.8,
  GRADIENT_SIZE:  0.45,
  GRADIENT_COUNT: 12.0,
  W1:             0.5,  // suppresses orange
  W2:             1.8,  // amplifies teal / navy
  GRAIN:          0.08,
} as const;

// ── Vertex shader ─────────────────────────────────────────────────────────────
export const GRAD_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}
`;

// ── Fragment shader (Scheme 5 gradient + touch distortion + bottom fade) ──────
export const GRAD_FRAG = /* glsl */ `
uniform float uTime;
uniform vec2  uResolution;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform float uSpeed;
uniform float uIntensity;
uniform sampler2D uTouchTexture;
uniform float uGrainIntensity;
uniform vec3  uDarkNavy;
uniform float uGradientSize;
uniform float uGradientCount;
uniform float uColor1Weight;
uniform float uColor2Weight;

varying vec2 vUv;

float grain(vec2 uv, float time) {
  vec2 g = uv * uResolution * 0.5;
  return fract(sin(dot(g + time, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
}

vec3 getGradientColor(vec2 uv, float time) {
  float r = uGradientSize;

  vec2 c1  = vec2(0.5 + sin(time*uSpeed*0.40)*0.40, 0.5 + cos(time*uSpeed*0.50)*0.40);
  vec2 c2  = vec2(0.5 + cos(time*uSpeed*0.60)*0.50, 0.5 + sin(time*uSpeed*0.45)*0.50);
  vec2 c3  = vec2(0.5 + sin(time*uSpeed*0.35)*0.45, 0.5 + cos(time*uSpeed*0.55)*0.45);
  vec2 c4  = vec2(0.5 + cos(time*uSpeed*0.50)*0.40, 0.5 + sin(time*uSpeed*0.40)*0.40);
  vec2 c5  = vec2(0.5 + sin(time*uSpeed*0.70)*0.35, 0.5 + cos(time*uSpeed*0.60)*0.35);
  vec2 c6  = vec2(0.5 + cos(time*uSpeed*0.45)*0.50, 0.5 + sin(time*uSpeed*0.65)*0.50);
  vec2 c7  = vec2(0.5 + sin(time*uSpeed*0.55)*0.38, 0.5 + cos(time*uSpeed*0.48)*0.42);
  vec2 c8  = vec2(0.5 + cos(time*uSpeed*0.65)*0.36, 0.5 + sin(time*uSpeed*0.52)*0.44);
  vec2 c9  = vec2(0.5 + sin(time*uSpeed*0.42)*0.41, 0.5 + cos(time*uSpeed*0.58)*0.39);
  vec2 c10 = vec2(0.5 + cos(time*uSpeed*0.48)*0.37, 0.5 + sin(time*uSpeed*0.62)*0.43);
  vec2 c11 = vec2(0.5 + sin(time*uSpeed*0.68)*0.33, 0.5 + cos(time*uSpeed*0.44)*0.46);
  vec2 c12 = vec2(0.5 + cos(time*uSpeed*0.38)*0.39, 0.5 + sin(time*uSpeed*0.56)*0.41);

  float i1  = 1.0 - smoothstep(0.0, r, length(uv - c1));
  float i2  = 1.0 - smoothstep(0.0, r, length(uv - c2));
  float i3  = 1.0 - smoothstep(0.0, r, length(uv - c3));
  float i4  = 1.0 - smoothstep(0.0, r, length(uv - c4));
  float i5  = 1.0 - smoothstep(0.0, r, length(uv - c5));
  float i6  = 1.0 - smoothstep(0.0, r, length(uv - c6));
  float i7  = 1.0 - smoothstep(0.0, r, length(uv - c7));
  float i8  = 1.0 - smoothstep(0.0, r, length(uv - c8));
  float i9  = 1.0 - smoothstep(0.0, r, length(uv - c9));
  float i10 = 1.0 - smoothstep(0.0, r, length(uv - c10));
  float i11 = 1.0 - smoothstep(0.0, r, length(uv - c11));
  float i12 = 1.0 - smoothstep(0.0, r, length(uv - c12));

  vec2 ru1 = uv - 0.5;
  float a1 = time * uSpeed * 0.15;
  ru1 = vec2(ru1.x*cos(a1) - ru1.y*sin(a1), ru1.x*sin(a1) + ru1.y*cos(a1)) + 0.5;

  vec2 ru2 = uv - 0.5;
  float a2 = -time * uSpeed * 0.12;
  ru2 = vec2(ru2.x*cos(a2) - ru2.y*sin(a2), ru2.x*sin(a2) + ru2.y*cos(a2)) + 0.5;

  float ri1 = 1.0 - smoothstep(0.0, 0.8, length(ru1 - 0.5));
  float ri2 = 1.0 - smoothstep(0.0, 0.8, length(ru2 - 0.5));

  vec3 col = vec3(0.0);
  col += uColor1 * i1  * (0.55 + 0.45*sin(time*uSpeed*1.0)) * uColor1Weight;
  col += uColor2 * i2  * (0.55 + 0.45*cos(time*uSpeed*1.2)) * uColor2Weight;
  col += uColor3 * i3  * (0.55 + 0.45*sin(time*uSpeed*0.8)) * uColor1Weight;
  col += uColor4 * i4  * (0.55 + 0.45*cos(time*uSpeed*1.3)) * uColor2Weight;
  col += uColor5 * i5  * (0.55 + 0.45*sin(time*uSpeed*1.1)) * uColor1Weight;
  col += uColor6 * i6  * (0.55 + 0.45*cos(time*uSpeed*0.9)) * uColor2Weight;
  col += uColor1 * i7  * (0.55 + 0.45*sin(time*uSpeed*1.4)) * uColor1Weight;
  col += uColor2 * i8  * (0.55 + 0.45*cos(time*uSpeed*1.5)) * uColor2Weight;
  col += uColor3 * i9  * (0.55 + 0.45*sin(time*uSpeed*1.6)) * uColor1Weight;
  col += uColor4 * i10 * (0.55 + 0.45*cos(time*uSpeed*1.7)) * uColor2Weight;
  col += uColor5 * i11 * (0.55 + 0.45*sin(time*uSpeed*1.8)) * uColor1Weight;
  col += uColor6 * i12 * (0.55 + 0.45*cos(time*uSpeed*1.9)) * uColor2Weight;

  col += mix(uColor1, uColor3, ri1) * 0.45 * uColor1Weight;
  col += mix(uColor2, uColor4, ri2) * 0.40 * uColor2Weight;

  col = clamp(col, vec3(0.0), vec3(1.0)) * uIntensity;
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(lum), col, 1.35);
  col = pow(col, vec3(0.92));
  float b1 = length(col);
  col = mix(uDarkNavy, col, max(b1 * 1.2, 0.15));
  float brt = length(col);
  if (brt > 1.0) col *= 1.0 / brt;

  return col;
}

void main() {
  vec2 uv = vUv;

  vec4 t   = texture2D(uTouchTexture, uv);
  float vx = -(t.r * 2.0 - 1.0);
  float vy = -(t.g * 2.0 - 1.0);
  float ti = t.b;
  uv.x += vx * 0.8 * ti;
  uv.y += vy * 0.8 * ti;

  float dist   = length(uv - 0.5);
  float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * ti;
  float wave   = sin(dist * 15.0 - uTime * 2.0) * 0.03 * ti;
  uv += vec2(ripple + wave);

  vec3 col = getGradientColor(uv, uTime);
  col += grain(uv, uTime) * uGrainIntensity;

  float ts = uTime * 0.5;
  col.r += sin(ts)       * 0.02;
  col.g += cos(ts * 1.4) * 0.02;
  col.b += sin(ts * 1.2) * 0.02;

  float b2 = length(col);
  col = mix(uDarkNavy, col, max(b2 * 1.2, 0.15));
  col = clamp(col, vec3(0.0), vec3(1.0));
  float brt2 = length(col);
  if (brt2 > 1.0) col *= 1.0 / brt2;

  // vUv.y = 1 at top of canvas (hero top), 0 at bottom — fade gradient out at bottom
  float fade = smoothstep(0.0, 0.22, vUv.y);
  gl_FragColor = vec4(col, fade);
}
`;
