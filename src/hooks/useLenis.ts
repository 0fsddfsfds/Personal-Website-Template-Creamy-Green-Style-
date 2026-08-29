"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const win = window as unknown as { __lenis?: Lenis | null };
    win.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 300);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      gsap.ticker.remove(tick);
      lenis.destroy();
      win.__lenis = null;
    };
  }, []);
}
