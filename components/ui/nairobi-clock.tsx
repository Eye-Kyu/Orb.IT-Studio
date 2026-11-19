"use client";
import { useEffect, useState } from "react";

// Studio hours in Nairobi (EAT, UTC+3). Adjust to taste.
const OPEN_HOUR = 8;
const CLOSE_HOUR = 18;

export function nairobiNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const hour = parseInt(get("hour"), 10) % 24;
  const minute = parseInt(get("minute"), 10);
  return { hour, minute, weekday: get("weekday"), label: `${get("hour")}:${get("minute")}` };
}

function status(hour: number, weekday: string) {
  const weekend = weekday === "Sat" || weekday === "Sun";
  if (!weekend && hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    return { open: true, text: "In the studio — replies within a few hours" };
  }
  if (hour >= 22 || hour < 6) return { open: false, text: "Nairobi's asleep — we'll reply first thing" };
  return { open: false, text: "Out of hours — we'll reply next working morning" };
}

export default function NairobiClock({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<ReturnType<typeof nairobiNow> | null>(null);

  useEffect(() => {
    setNow(nairobiNow());
    const id = setInterval(() => setNow(nairobiNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Render a stable placeholder on the server to avoid hydration mismatch.
  if (!now) {
    return <p className="text-xs opacity-0 lg:text-sm" aria-hidden>Nairobi --:--</p>;
  }

  const s = status(now.hour, now.weekday);

  return (
    <div className="flex flex-col gap-1" role="status">
      <p className="text-xs tracking-[0.18em] uppercase flex items-center gap-2 lg:text-sm">
        <span
          aria-hidden
          className={`inline-block w-1.5 h-1.5 rounded-full ${s.open ? "bg-teal-500 animate-pulse" : "bg-foreground/30"}`}
        />
        Nairobi <span className="tabular-nums">{now.label}</span> EAT
      </p>
      {!compact && <p className="text-xs opacity-50 lg:text-sm">{s.text}</p>}
    </div>
  );
}
