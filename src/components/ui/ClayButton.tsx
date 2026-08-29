import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ClayButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function ClayButton({
  href,
  variant = "primary",
  className,
  children,
  onClick,
}: ClayButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold transition-all duration-200 select-none",
    variant === "primary" &&
      "bg-clay-mint text-white shadow-mint hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-pressed",
    variant === "secondary" &&
      "bg-clay-surface text-clay-ink shadow-clay hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-pressed",
    className,
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
