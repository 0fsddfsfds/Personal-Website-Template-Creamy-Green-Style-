"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import { scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-clay-surface/90 px-5 py-3 shadow-clay backdrop-blur-md">
        <button
          type="button"
          onClick={() => go("#hero")}
          className="font-display flex items-center gap-2 text-lg font-extrabold tracking-tight"
        >
          <span aria-hidden className="text-xl">
            🫧
          </span>
          {profile.name}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => go(link.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-clay-muted transition-colors hover:bg-clay-mint/15 hover:text-clay-mint-dark"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full p-2 text-clay-ink transition-colors hover:bg-clay-mint/15 md:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl bg-clay-surface p-3 shadow-clay-lg md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => go(link.href)}
              className="block w-full rounded-2xl px-4 py-3 text-left font-semibold text-clay-ink transition-colors hover:bg-clay-mint/15"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
