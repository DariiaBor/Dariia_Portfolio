import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { HeroBackground } from "@/components/HeroBackground";
import { Hero } from "@/components/sections/hero";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProjectsSection } from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";
import { Footer } from "@/components/sections/Footer";

const title = "Дария — Senior Product Designer, FinTech & Enterprise";
const description =
  "Портфолио продуктового дизайнера: сложные FinTech-экосистемы, Enterprise-сервисы, дизайн-системы и AI-воркфлоу.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Контейнер-обёртка со сквозным фоном для Hero и Экспертизы */}
        <div className="relative w-full">
          {/* 1. Единый Canvas/SVG паттерн сетки */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <HeroBackground />
          </div>

          {/* 2. Плавный градиент в цвет фона к концу второго блока */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background"
          />

          {/* 3. Контент первых двух блоков поверх сетки */}
          <div className="relative z-10">
            <Hero />
            <ExpertiseSection />
          </div>
        </div>

        {/* Последующие блоки идут на стандартном чистом фоне */}
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}