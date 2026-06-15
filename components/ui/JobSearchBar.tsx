"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function JobSearchBar({ tone = "onDark" }: { tone?: "onDark" | "onLight" }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (loc) params.set("loc", loc);
    router.push(`/jobs${params.toString() ? `?${params}` : ""}`);
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full flex-col gap-2 rounded-xl bg-white p-2 shadow-[0_24px_60px_-24px_rgba(8,2,18,0.6)] focus-within:ring-2 focus-within:ring-lavender-400 sm:flex-row sm:items-center sm:rounded-pill sm:p-1.5"
    >
      <div className="flex flex-1 items-center gap-3 px-4 py-2">
        <svg className="h-5 w-5 shrink-0 text-lavender-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Role, team or keyword"
          aria-label="Search roles"
          className="w-full bg-transparent text-[15px] text-indigo-800 placeholder:text-indigo-300 focus:outline-none"
        />
      </div>
      <div className="hidden h-7 w-px bg-indigo-100 sm:block" />
      <div className="flex flex-1 items-center gap-3 px-4 py-2">
        <svg className="h-5 w-5 shrink-0 text-lavender-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" />
        </svg>
        <input
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="Location"
          aria-label="Location"
          className="w-full bg-transparent text-[15px] text-indigo-800 placeholder:text-indigo-300 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-button-iris rounded-pill px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
      >
        Search jobs
      </button>
    </form>
  );
}
