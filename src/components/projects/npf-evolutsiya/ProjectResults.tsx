import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MetricItem {
  value: string;
  description: string;
}

const metricsData: MetricItem[] = [
  {
    value: "– 66% Time on Task",
    description:
      "Время поиска ключевых прогнозов по пенсии сократилось с 42 до 14 секунд.",
  },
  {
    value: "95% Success Rate",
    description:
      "Пользователи практически безошибочно справились с критически важными сервисными задачами.",
  },
  {
    value: "x1.8 Intent",
    description:
      "Почти вдвое больше пользователей стали переходить к сценарию оформления ПДС.",
  },
  {
    value: "– 30% нагрузки на саппорт",
    description:
      "8 из 10 респондентов нашли ответы на вопросы внутри интерфейса.",
  },
];

export function ProjectResults() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full pt-6 pb-2 sm:pt-12 sm:pb-4 flex flex-col gap-8 sm:gap-12"
    >
      {/* Заголовочный блок */}
      <div className="flex flex-col items-start text-left">
        <span className="text-[12px] font-semibold uppercase text-[#1E45FB] tracking-[0.6px] leading-[18px] mb-[8px] sm:mb-[12px]">
          ЮЗАБИЛИТИ-ТЕСТЫ
        </span>

        <h2 className="text-[24px] sm:text-[36px] font-bold text-zinc-900 leading-[32px] sm:leading-[40px] tracking-[-0.6px] sm:tracking-[-0.9px]">
          Результаты и валидация
        </h2>
      </div>

      {/* Двухколоночная сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10">
        {metricsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-start text-left gap-2 sm:gap-2.5"
          >
            <span className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug">
              {item.value}
            </span>

            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Блок навигации между кейсами */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex items-center justify-between pt-2 w-full gap-4"
      >
        {/* Кнопка Предыдущий кейс */}
        <a
          href="/projects/delo-zhizni"
          className="group flex items-center gap-3 text-base sm:text-lg font-semibold text-zinc-900 hover:text-[#1E45FB] transition-colors duration-200"
        >
          <div className="w-10 h-10 rounded-full bg-white text-zinc-900 group-hover:bg-[#1E45FB] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </div>
          <span className="hidden sm:inline">Предыдущий кейс</span>
        </a>

        {/* Кнопка Следующий кейс */}
        <a
          href="/projects/qupro-qseller"
          className="group flex items-center gap-3 text-base sm:text-lg font-semibold text-zinc-900 hover:text-[#1E45FB] transition-colors duration-200"
        >
          <span className="hidden sm:inline">Следующий кейс</span>
          <div className="w-10 h-10 rounded-full bg-white text-zinc-900 group-hover:bg-[#1E45FB] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </a>
      </motion.div>
    </motion.section>
  );
}