import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "../components/aboutpage/AboutHero";
import { AboutMindset } from "../components/aboutpage/AboutMindset";
import { AboutSectionWrapper } from "../components/aboutpage/AboutSectionWrapper";
import { AboutExploration } from "../components/aboutpage/AboutExploration";
import { AboutCTA } from "../components/aboutpage/AboutCTA";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Обо мне — Дария",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <main className="min-h-screen pt-28 pb-24 font-sans bg-transparent">
        {/* Верхний светлый контент с расширенной сеткой */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-20 sm:gap-28 md:gap-36 items-center">
          <AboutHero />
          <AboutMindset />
        </div>

        {/* Единый тёмный блок (Impact + PetProject) */}
        <AboutSectionWrapper />

        {/* Нижний светлый контент */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-20 sm:gap-28 md:gap-36 items-center">
          <AboutExploration />
          <AboutCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}