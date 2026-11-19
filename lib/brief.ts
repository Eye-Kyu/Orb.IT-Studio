// Shared by the contact form (live estimate) and the server action (validation +
// email). Keep this file free of server-only imports.

import { services } from "@/lib/services-data";

export const BUDGET_OPTIONS = [
  "Under KSh 50k",
  "KSh 50k – 150k",
  "KSh 150k – 500k",
  "KSh 500k – 1M",
  "KSh 1M+",
  "Let's discuss",
] as const;

export const TIMELINE_OPTIONS = ["ASAP", "Within 1 month", "1-3 months", "Just exploring"] as const;

// Indicative delivery time per service, in weeks [min, max].
// These are planning ranges, not quotes — tune them to how you actually work.
export const SERVICE_WEEKS: Record<string, [number, number]> = {
  "web-design": [3, 6],
  "graphic-design": [1, 2],
  branding: [2, 4],
  "app-development": [8, 16],
  "it-consulting": [1, 3],
  "digital-marketing": [4, 8],
  "support-maintenance": [1, 2],
};

const BUDGET_SCORES: Record<string, number> = {
  "Under KSh 50k": 1,
  "KSh 50k – 150k": 2,
  "KSh 150k – 500k": 3,
  "KSh 500k – 1M": 4,
  "KSh 1M+": 5,
  "Let's discuss": 3,
};

const TIMELINE_SCORES: Record<string, number> = {
  ASAP: 3,
  "Within 1 month": 2,
  "1-3 months": 1,
  "Just exploring": 0,
};

export type LeadPriority = "Hot" | "Warm" | "Cold";

export function scoreLead(budget: string, timeline: string, servicesCount: number): LeadPriority {
  const budgetScore = BUDGET_SCORES[budget] ?? 0;
  const timelineScore = TIMELINE_SCORES[timeline] ?? 0;
  const servicesScore = servicesCount >= 4 ? 2 : servicesCount >= 2 ? 1 : 0;
  const total = budgetScore + timelineScore + servicesScore;
  if (total >= 7) return "Hot";
  if (total >= 4) return "Warm";
  return "Cold";
}

const VALID_SLUGS = new Set(services.map((s) => s.slug));

export function sanitizeServices(slugs: string[]): string[] {
  return Array.from(new Set(slugs.filter((s) => VALID_SLUGS.has(s)))).slice(0, 10);
}

export interface BriefEstimate {
  services: { slug: string; title: string; weeks: [number, number] }[];
  weeks: [number, number] | null;
  phases: string[];
  fit: "great" | "phased" | "tight" | "open";
  fitMessage: string;
}

// Services run partly in parallel: the floor is the longest single service,
// the ceiling is the longest plus half of everything else.
export function estimateBrief(slugs: string[], budget: string, timeline: string): BriefEstimate {
  const picked = sanitizeServices(slugs)
    .map((slug) => {
      const s = services.find((x) => x.slug === slug)!;
      return { slug, title: s.title, weeks: SERVICE_WEEKS[slug] ?? [2, 4] };
    });

  let weeks: [number, number] | null = null;
  if (picked.length) {
    const mins = picked.map((p) => p.weeks[0]);
    const maxes = picked.map((p) => p.weeks[1]).sort((a, b) => b - a);
    const min = Math.max(...mins);
    const max = Math.round(maxes[0] + maxes.slice(1).reduce((a, b) => a + b, 0) * 0.5);
    weeks = [min, Math.max(min, max)];
  }

  // Merge each service's process headings, in order, without duplicates.
  const phases: string[] = [];
  for (const p of picked) {
    const svc = services.find((x) => x.slug === p.slug)!;
    for (const step of svc.process) {
      if (!phases.includes(step.heading)) phases.push(step.heading);
    }
  }

  const budgetScore = BUDGET_SCORES[budget] ?? 0;
  const heavy = picked.length >= 3 || picked.some((p) => p.slug === "app-development");
  const rushed = timeline === "ASAP" || timeline === "Within 1 month";

  let fit: BriefEstimate["fit"] = "open";
  let fitMessage = "Pick a budget and timeline and we'll tell you honestly how it fits.";
  if (budget && picked.length) {
    if (budget === "Let's discuss") {
      fit = "open";
      fitMessage = "No problem — we'll shape scope and budget together on the first call.";
    } else if (heavy && budgetScore <= 2) {
      fit = "tight";
      fitMessage = "Ambitious for this budget. We'd suggest starting with the most valuable piece and growing from there.";
    } else if (rushed && weeks && weeks[0] > 4) {
      fit = "phased";
      fitMessage = "We can start right away and ship in phases — the first piece goes live while the rest is built.";
    } else {
      fit = "great";
      fitMessage = "This looks like a solid fit. Let's talk.";
    }
  }

  return { services: picked, weeks, phases, fit, fitMessage };
}

export function formatWeeks(w: [number, number] | null) {
  if (!w) return "—";
  return w[0] === w[1] ? `~${w[0]} weeks` : `${w[0]}–${w[1]} weeks`;
}
