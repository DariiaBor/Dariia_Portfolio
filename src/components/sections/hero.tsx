import { Container } from "@/components/ui/container";
import portrait from "@/assets/daria-portrait.png.asset.json";

const domains = [
  "FinTech & Banking",
  "Complex B2B Systems",
  "Design Systems & Variables",
  "AI Workflows",
];

export function Hero() {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-20">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="h-16 w-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <img
              src={portrait.url}
              alt="Дарья — Senior Product Designer"
              width={694}
              height={697}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Senior Product Designer • 5+ лет в продукте
          </div>

          <h1 className="mt-8 mb-8 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            Проектирую сложные{" "}
            <span className="bg-gradient-to-r from-primary to-accent-hover bg-clip-text text-transparent">
              FinTech-экосистемы
            </span>{" "}
            и масштабируемые Enterprise-сервисы.
          </h1>

          <p className="mb-10 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
            Перевожу хаотичные бизнес-процессы в понятные цифровые продукты с высокой
            операционной эффективностью.
          </p>

          <ul className="mb-10 flex flex-wrap justify-center gap-2">
            {domains.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-border bg-surface-subtle/60 px-3 py-1.5 text-xs font-medium text-accent-mono transition-colors hover:bg-surface-subtle"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#cases"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_4px_14px_oklch(0.456_0.249_273.1_/_0.25)] transition-all duration-200 hover:bg-accent-hover hover:shadow-lift sm:w-auto"
            >
              Смотреть кейсы ↓
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-subtle sm:w-auto"
            >
              Подробнее обо мне →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
