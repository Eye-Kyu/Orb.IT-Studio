import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/work-data";

export const metadata: Metadata = {
  title: "Now",
  description: "What's on the bench at Studio Mizan right now — live from our public repositories.",
  alternates: { canonical: "https://studiomizani.com/now" },
};

// Re-fetch from GitHub at most once an hour.
export const revalidate = 3600;

const GITHUB_USER = "Eye-Kyu";
// Repos that shouldn't appear on the public feed.
const HIDDEN = new Set(["linuxgit", "Note-Taking-App", "Orb.IT-Studio"]);

// Map repo names to case-study slugs so the feed links into the portfolio.
const REPO_TO_CASE: Record<string, string> = {
  SkyFreshLogistics: "bravair-logistics",
  "Wanderer-Tribe": "wanderer-tribe",
  "County-supermarket": "county-supermarket",
  "School-Management": "school-manager",
  "Mwakie-Visuals": "mwakie-visuals",
  "Smart-POS": "smart-pos",
  "Fleetstar-Cars": "fleetstar-cars",
};

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
  fork: boolean;
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=30&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as Repo[];
    return data.filter((r) => !r.fork && !HIDDEN.has(r.name)).slice(0, 10);
  } catch {
    return [];
  }
}

function ago(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

function prettyName(name: string) {
  return name.replace(/[-_]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
}

export default async function NowPage() {
  const repos = await getRepos();
  const caseTitles = new Map(caseStudies.map((c) => [c.slug, c.client]));

  return (
    <main id="main" className="w-full overflow-x-hidden">
      <section className="px-4 lg:px-14 pt-28 lg:pt-36 pb-12">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-6 lg:text-[13px]">Studio Mizan / Now</p>
        <h1 className="text-[clamp(3.5rem,12vw,150px)] leading-[0.9] tracking-tight" style={{ fontFamily: "borish" }}>
          ON THE BENCH.
        </h1>
        <p className="max-w-xl mt-8 text-base lg:text-lg opacity-60 leading-relaxed">
          A live feed of what we&apos;re building, straight from our public repositories. No polish, no
          press release — just the work, as it moves.
        </p>
      </section>

      <section className="px-4 lg:px-14 pb-24">
        {repos.length === 0 ? (
          <p className="opacity-50 text-sm py-10 border-t border-foreground/10 lg:text-base">
            The feed is taking a breather. Check back shortly — or see{" "}
            <Link href="/work" className="underline underline-offset-4">finished work</Link>.
          </p>
        ) : (
          <ol className="flex flex-col">
            {repos.map((r) => {
              const caseSlug = REPO_TO_CASE[r.name];
              return (
                <li
                  key={r.name}
                  className="grid grid-cols-1 lg:grid-cols-[160px_1fr_auto] gap-2 lg:gap-10 py-7 border-t border-foreground/10"
                >
                  <p className="text-[10px] tracking-[0.22em] uppercase opacity-45 pt-1.5 lg:text-[13px]">
                    Updated {ago(r.pushed_at)}
                  </p>
                  <div>
                    <p className="text-2xl lg:text-3xl leading-tight">
                      {caseSlug ? caseTitles.get(caseSlug) : prettyName(r.name)}
                    </p>
                    {r.description && <p className="text-sm opacity-55 mt-2 max-w-xl lg:text-base">{r.description}</p>}
                    {r.language && (
                      <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mt-3 lg:text-[13px]">{r.language}</p>
                    )}
                  </div>
                  <div className="flex lg:flex-col gap-4 lg:gap-2 lg:items-end text-xs tracking-[0.18em] uppercase pt-1 lg:text-sm">
                    {caseSlug && (
                      <Link href={`/work/${caseSlug}`} className="hover:text-[#EAB308]">
                        Case study →
                      </Link>
                    )}
                    {r.homepage && (
                      <a href={r.homepage} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-[#EAB308]">
                        Live ↗
                      </a>
                    )}
                    <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-[#EAB308]">
                      Code ↗
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </main>
  );
}
