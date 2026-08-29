import { Github, Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contactItems, profile } from "@/lib/content";
import type { ContactIcon } from "@/lib/content";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const iconMap: Record<ContactIcon, LucideIcon> = {
  mail: Mail,
  wechat: MessageCircle,
  github: Github,
};

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="联系我"
          title="一起捏点什么吧"
          subtitle="如果你有有趣的想法、合作机会，或者只是想聊聊，欢迎随时来找我。"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.label} delay={index * 0.12}>
                <ClayCard hover className="flex h-full flex-col items-center p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-mint/15 text-clay-mint-dark shadow-clay-sm">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 break-all text-sm font-semibold text-clay-mint-dark underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 break-all text-sm font-semibold text-clay-muted">
                      {item.value}
                    </p>
                  )}
                </ClayCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <footer className="mt-24 border-t border-clay-ink/10 py-8 text-center text-sm text-clay-muted">
        <p>
          © {year} {profile.name} · 用 Next.js 与薄荷糖捏制 🍃
        </p>
      </footer>
    </section>
  );
}
