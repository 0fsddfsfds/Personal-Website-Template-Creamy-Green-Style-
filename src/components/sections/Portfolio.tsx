import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/content";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="作品集"
          title="捏过的那些小玩意儿"
          subtitle="每一个项目都是一次实验：关于动效、关于交互，也关于让技术变得可爱。"
        />

        <ScrollReveal stagger={0.12} className="grid gap-7 sm:grid-cols-2">
          {projects.map((project) => (
            <ClayCard key={project.title} hover className="overflow-hidden">
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-clay-mint-light via-clay-mint to-clay-mint-dark">
                <span
                  aria-hidden
                  className="text-6xl drop-shadow-sm transition-transform duration-300 hover:scale-110"
                >
                  {project.emoji}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 gap-1 text-clay-muted">
                    {project.href && (
                      <a
                        href={project.href}
                        aria-label={`${project.title} 项目链接`}
                        className="rounded-full p-2 transition-colors hover:bg-clay-mint/15 hover:text-clay-mint-dark"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label={`${project.title} 代码仓库`}
                        className="rounded-full p-2 transition-colors hover:bg-clay-mint/15 hover:text-clay-mint-dark"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-clay-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-clay-mint/15 px-3 py-1 text-xs font-bold text-clay-mint-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ClayCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
