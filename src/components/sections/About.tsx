import { aboutStats, aboutText, profile } from "@/lib/content";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="关于我"
          title="一点点自我介绍"
          subtitle="关于我的一切，都可以概括成：好奇、好玩、想把事情做好。"
        />

        <div className="grid gap-7 md:grid-cols-5">
          <ScrollReveal className="md:col-span-2">
            <ClayCard className="flex h-full flex-col items-center justify-center p-10 text-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-clay-mint-light via-clay-mint to-clay-mint-dark text-6xl shadow-mint">
                <span aria-hidden>🌱</span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-extrabold">
                {profile.name}
              </h3>
              <p className="mt-1 font-semibold text-clay-mint-dark">
                {profile.role}
              </p>
              <p className="mt-3 text-sm text-clay-muted">{profile.location}</p>
            </ClayCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="md:col-span-3">
            <ClayCard className="flex h-full flex-col justify-center p-10">
              {aboutText.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-clay-muted first:mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </ClayCard>
          </ScrollReveal>
        </div>

        <ScrollReveal
          stagger={0.12}
          className="mt-7 grid gap-6 sm:grid-cols-3"
        >
          {aboutStats.map((stat) => (
            <ClayCard key={stat.label} hover className="p-8 text-center">
              <div className="font-display text-4xl font-extrabold text-clay-mint-dark">
                {stat.value}
              </div>
              <p className="mt-1.5 text-sm font-semibold text-clay-muted">
                {stat.label}
              </p>
            </ClayCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
