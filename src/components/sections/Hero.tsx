import { ChevronDown } from "lucide-react";
import { profile } from "@/lib/content";
import ClayButton from "@/components/ui/ClayButton";
import ScrollReveal from "@/components/animations/ScrollReveal";
import HeroScene from "@/components/three/HeroScene";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-32">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-clay-surface px-5 py-2 text-sm font-bold text-clay-mint-dark shadow-clay-sm">
            <span aria-hidden>👋</span>
            {profile.slogan}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <h1 className="font-display mt-6 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.greeting}
            <span className="block text-clay-mint-dark">{profile.name}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <p className="mt-6 text-xl font-semibold text-clay-ink sm:text-2xl">
            {profile.role}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.36}>
          <p className="mt-4 max-w-xl leading-relaxed text-clay-muted">
            {profile.bio}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.48}>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
            <ClayButton href="#portfolio">查看作品</ClayButton>
            <ClayButton href="#contact" variant="secondary">
              联系我
            </ClayButton>
          </div>
        </ScrollReveal>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-clay-mint-dark">
        <ChevronDown className="h-8 w-8" strokeWidth={2.5} />
      </div>
    </section>
  );
}
