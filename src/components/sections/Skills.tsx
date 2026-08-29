"use client";

import { useLayoutEffect, useRef } from "react";
import {
  Atom,
  Braces,
  Box,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills } from "@/lib/content";
import type { SkillIcon } from "@/lib/content";
import { gsap } from "@/lib/gsap";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const iconMap: Record<SkillIcon, LucideIcon> = {
  react: Atom,
  typescript: Braces,
  three: Box,
  gsap: Sparkles,
  design: Palette,
  backend: Server,
};

function SkillBar({ level }: { level: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bar.style.width = `${level}%`;
      return;
    }

    const tween = gsap.fromTo(
      bar,
      { width: "0%" },
      {
        width: `${level}%`,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 92%", once: true },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [level]);

  return (
    <div className="mt-4 h-3.5 w-full overflow-hidden rounded-full bg-clay-bg shadow-clay-sm">
      <div
        ref={barRef}
        className="h-full rounded-full bg-gradient-to-r from-clay-mint-light via-clay-mint to-clay-mint-dark"
        style={{ width: "0%" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="技能"
          title="我的工具箱"
          subtitle="每天都在打磨这些技能，让创意稳稳落地。"
        />

        <ScrollReveal
          stagger={0.1}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <ClayCard key={skill.name} hover className="p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-mint/15 text-clay-mint-dark shadow-clay-sm">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold">
                  {skill.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-clay-muted">
                  {skill.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-clay-muted">
                  <span>熟练度</span>
                  <span>{skill.level}%</span>
                </div>
                <SkillBar level={skill.level} />
              </ClayCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
