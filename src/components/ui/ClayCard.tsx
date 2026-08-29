import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ClayCardProps = {
  className?: string;
  children: ReactNode;
  hover?: boolean;
};

export default function ClayCard({
  className,
  children,
  hover = false,
}: ClayCardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] bg-clay-surface shadow-clay",
        hover &&
          "transition-transform duration-300 ease-out hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
