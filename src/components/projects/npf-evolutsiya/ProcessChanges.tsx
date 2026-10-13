import React from "react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Вернула коммуникацию дизайна с бизнесом",
    description:
      "Добилась прямого общения дизайнеров со стейкхолдерами вместо передачи решений через посредников.",
  },
  {
    id: "02",
    title: "Инициировала Discovery-этап",
    description:
      "Обосновала необходимость выделения ресурсов и времени на исследования до начала разработки макетов.",
  },
  {
    id: "03",
    title: "Организовала интервью с заказчиком",
    description:
      "Провела глубинные интервью с генеральным директором и PO фонда, чтобы выявить истинные цели бизнеса и проблемы продукта.",
  },
];

export const ProcessChanges = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="py-6 sm:py-10 md:py-12 w-full text-left">
      {/* Шапка блока */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-2xl mb-8 md:mb-12"
      >
        <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#1e45fb] block mb-2 md:mb-3">
          Процессы
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Что я изменила
        </h2>
      </motion.div>

      {/* Прозрачный контейнер карточки без тени */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full bg-transparent border border-zinc-200/80 rounded-2xl sm:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 shadow-none"
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="p-6 sm:p-8 flex flex-col justify-start text-left gap-4 md:gap-6"
          >
            {/* Большая цифра с градиентом в прозрачность */}
            <span className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-[#1e45fb] via-[#1e45fb]/60 to-transparent bg-clip-text text-transparent select-none">
              {step.id}
            </span>

            {/* Заголовок и описание */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h3 className="text-[18px] font-semibold text-zinc-900 tracking-tight leading-snug">
                {step.title}
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessChanges;