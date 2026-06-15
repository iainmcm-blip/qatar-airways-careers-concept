"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function SubNav({ items }: { items: { label: string; id: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-30 border-b border-indigo-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] gap-1 overflow-x-auto px-4 md:px-12">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={cn(
              "whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-medium transition-colors",
              active === it.id
                ? "border-lavender-400 text-lavender-600"
                : "border-transparent text-indigo-400 hover:text-indigo-700"
            )}
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}
