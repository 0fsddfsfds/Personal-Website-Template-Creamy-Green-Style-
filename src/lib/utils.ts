import type Lenis from "lenis";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  return (window as unknown as { __lenis?: Lenis | null }).__lenis ?? null;
}

export function scrollToSection(hash: string) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(hash, { offset: -16, duration: 1.2 });
    return;
  }
  if (typeof document !== "undefined") {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}
