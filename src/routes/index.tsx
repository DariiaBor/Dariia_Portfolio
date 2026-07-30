import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";

const title = "Дарья — Senior Product Designer, FinTech & Enterprise";
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
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  );
}
