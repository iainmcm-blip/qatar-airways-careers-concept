"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, FIND_JOBS } from "@/lib/nav";
import { Wordmark } from "./Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function TopNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(23,5,51,0.08),0_8px_30px_-18px_rgba(23,5,51,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 py-4 md:px-12">
        <Wordmark tone={solid ? "dark" : "light"} />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[14.5px] font-medium transition-colors",
                  solid
                    ? active
                      ? "text-lavender-500"
                      : "text-indigo-600 hover:text-lavender-500"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-lavender-400 after:transition-all",
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={FIND_JOBS.href} size="md">
            {FIND_JOBS.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            solid ? "text-indigo-700" : "text-white"
          )}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-all",
                open ? "top-2 rotate-45" : "top-0.5"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition-opacity",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-all",
                open ? "top-2 -rotate-45" : "top-3.5"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-indigo-100 bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2.5 text-[15px] font-medium",
                pathname === item.href
                  ? "bg-lavender-50 text-lavender-500"
                  : "text-indigo-600 hover:bg-cloud"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href={FIND_JOBS.href} className="mt-2 w-full">
            {FIND_JOBS.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
