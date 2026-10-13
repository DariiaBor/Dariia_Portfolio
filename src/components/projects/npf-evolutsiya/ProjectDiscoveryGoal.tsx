import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export function ProjectDiscoveryGoal() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Отслеживаем скролл относительно блока
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const text =
    "Я сместила фокус с макетов на сам процесс. И обосновала необходимость Discovery, чтобы сперва изучить контекст бизнеса и боли пользователей.";

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="w-full max-w-3xl mx-auto py-8 sm:py-20 text-left sm:text-center">
      {/* Левое выравнивание на мобилке, по центру на десктопе */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] flex flex-wrap justify-start sm:justify-center gap-x-[0.28em] gap-y-1">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={index} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </section>
  );
}

// Вспомогательный компонент для каждого слова
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Приглушенный базовый слой */}
      <span className="absolute opacity-20 text-zinc-900 select-none">
        {children}
      </span>
      {/* Активный проявляющийся слой */}
      <motion.span style={{ opacity }} className="text-zinc-900">
        {children}
      </motion.span>
    </span>
  );
}

export default ProjectDiscoveryGoal;