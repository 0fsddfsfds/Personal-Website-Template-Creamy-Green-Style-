"use client";

import { createElement, useLayoutEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type ScrollRevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
};

export default function ScrollReveal({
  as: Tag = "div",
  className,
  children,
  delay = 0,
  y = 30,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = stagger > 0 ? Array.from(el.children) : el;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger,
          scrollTrigger: { trigger: el, start: "top 85%", once },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger, once]);

  return createElement(
    Tag,
    { ref: ref as React.Ref<HTMLElement>, className },
    children,
  );
}
