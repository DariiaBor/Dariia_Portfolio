import { Container } from "@/components/ui/container";
import avatar from "@/assets/daria-avatar.jpg";

const domains = [
  "FinTech & Banking",
  "Complex B2B Systems",
  "Design Systems & Variables",
  "AI Workflows",
];

export function Hero() {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <img
              src={avatar}
              alt="Дарья — Senior Product Designer"
              width={816}
              height={816}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Senior Product Designer • 5+ лет в продукте
          </div>

          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Проектирую сложные FinTech-экосистемы и масштабируемые Enterprise-сервисы.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
            Перевожу хаотичные бизнес-процессы в понятные цифровые продукты с высокой
            операционной эффективностью.
          </p>

          <ul className="mb-10 flex flex-wrap justify-center gap-2">
            {domains.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-accent-mono transition-colors hover:border-border-hover hover:text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#cases"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all duration-200 hover:scale-[1.03] hover:bg-accent-hover sm:w-auto"
            >
              Смотреть кейсы ↓
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:scale-[1.02] hover:border-border-hover sm:w-auto"
            >
              Подробнее обо мне →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
