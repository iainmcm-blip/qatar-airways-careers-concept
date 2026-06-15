import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "ghostDark" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 focus-visible:ring-offset-2";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  // iridescent gradient fill — primary action
  primary:
    "bg-button-iris text-white shadow-[0_10px_30px_-10px_rgba(104,102,204,0.7)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(104,102,204,0.85)]",
  // outline on dark surfaces
  ghost:
    "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  // outline on light surfaces
  ghostDark:
    "border border-indigo-200 text-indigo-700 hover:border-lavender-400 hover:text-lavender-500",
  // solid light button on dark surfaces
  light:
    "bg-white text-indigo-800 hover:-translate-y-0.5 hover:bg-indigo-100",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type,
  onClick,
}: CommonProps & {
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
