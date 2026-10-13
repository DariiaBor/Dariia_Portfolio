import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, CheckCircle2 } from "lucide-react";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

interface StepItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  pathD: string;
}

const steps: StepItem[] = [
  {
    id: "problem",
    num: "01",
    title: "Проблема",
    desc: "Бизнес-цели и боли пользователей",
    pathD: "M 100 0 V 50 H 400 V 100",
  },
  {
    id: "context",
    num: "02",
    title: "Контекст",
    desc: "Аналитика процессов и ограничений",
    pathD: "M 300 0 V 50 H 400 V 100",
  },
  {
    id: "hypothesis",
    num: "03",
    title: "Гипотеза",
    desc: "Сценарии и поиск продуктовой логики",
    pathD: "M 500 0 V 50 H 400 V 100",
  },
  {
    id: "prototype",
    num: "04",
    title: "Прототип",
    desc: "Интерактивные проверки и UX-тесты",
    pathD: "M 700 0 V 50 H 400 V 100",
  },
];

export function AboutMindset() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepState, setStepState] = useState<"loading" | "success" | "flowing">("loading");

  useEffect(() => {
    // Ускоренные тайминги
    const timer1 = setTimeout(() => setStepState("success"), 450);
    const timer2 = setTimeout(() => setStepState("flowing"), 850);
    const timer3 = setTimeout(() => {
      setStepState("loading");
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-10 font-sans select-none overflow-hidden"
    >
      {/* Точный силуэт формы папки */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="classicFolderClipPath" clipPathUnits="objectBoundingBox">
            <path d="M 0.1,0 H 0.38 C 0.42,0 0.45,0.03 0.48,0.08 L 0.54,0.2 C 0.56,0.23 0.59,0.25 0.63,0.25 H 0.9 C 0.95,0.25 1,0.3 1,0.35 V 0.9 C 1,0.95 0.95,1 0.9,1 H 0.1 C 0.05,1 0,0.95 0,0.9 V 0.1 C 0,0.05 0.05,0 0.1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Шапка */}
      <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
        <span className="text-[12px] font-semibold text-[#1E45FB] uppercase tracking-wider">
          Процесс
        </span>

        <h2 className="text-[36px] font-bold tracking-tight text-[#111827] leading-tight">
          {fixOrphans("Сначала логика, потом пиксели")}
        </h2>

        <p className="text-[20px] font-normal text-[#4B5563] leading-relaxed">
          {fixOrphans("Любой интерфейс начинается с понимания ограничений, процессов и реальных болей. Только так получается удобный продукт.")}
        </p>
      </div>

      {/* Интерактивный поток */}
      <div className="w-full flex flex-col items-center gap-0 pt-4">
        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {steps.map((item, index) => {
            const isActive = index === activeIndex;
            const isSuccess = isActive && (stepState === "success" || stepState === "flowing");
            const isLoading = isActive && stepState === "loading";

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setStepState("loading");
                }}
                className="relative p-6 pt-7 bg-white cursor-pointer flex flex-col justify-between h-[170px]"
                style={{
                  clipPath: "url(#classicFolderClipPath)",
                }}
              >
                {/* Индикатор: Серая цифра -> Лоадер -> Свежая галочка */}
                <div className="flex items-center w-full relative z-10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {isSuccess ? (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 rounded-full bg-[#00C853] text-white flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </motion.div>
                    ) : isLoading ? (
                      <Loader2 className="w-5 h-5 text-[#1E45FB] animate-spin" />
                    ) : (
                      <span className="text-sm font-mono font-bold text-gray-400">
                        {item.num}
                      </span>
                    )}
                  </div>
                </div>

                {/* Текст карточки */}
                <div className="flex flex-col gap-1 text-left relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-snug">
                    {fixOrphans(item.desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SVG Траектории и Динамичная Быстрая Искра */}
        <div className="w-full h-16 relative hidden md:block">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Базовые направляющие */}
            {steps.map((step) => (
              <path
                key={step.id}
                d={step.pathD}
                stroke="#E5E7EB"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* Быстрая бегущая искра */}
            {stepState === "flowing" && (
              <motion.path
                key={`spark-path-${activeIndex}`}
                d={steps[activeIndex].pathD}
                stroke="#1E45FB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{
                  pathLength: 0.15,
                  pathOffset: 0,
                  opacity: 0,
                }}
                animate={{
                  pathOffset: [0, 0.85],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            )}
          </svg>
        </div>

        {/* Финальная кнопка */}
        <motion.div
          animate={stepState === "flowing" ? { scale: [1, 1.04, 1] } : {}}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="relative group mt-4 md:mt-0"
        >
          <div className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#D1F366] text-[#111827] font-medium">
            <CheckCircle2 className="w-5 h-5 text-[#111827]" />
            <span className="text-sm md:text-base font-semibold tracking-wide text-[#111827]">
              {fixOrphans("Работающее решение")}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}