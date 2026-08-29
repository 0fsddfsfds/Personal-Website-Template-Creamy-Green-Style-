import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <span className="inline-flex items-center rounded-full bg-clay-mint/15 px-4 py-1.5 text-sm font-bold text-clay-mint-dark shadow-clay-sm">
        {eyebrow}
      </span>
      <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-clay-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
