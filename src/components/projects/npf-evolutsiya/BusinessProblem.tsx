import { Frown } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const BusinessProblem = () => {
  const problems = [
    {
      id: "01",
      title: "ТЗ без контекста",
      description:
        "Дизайн не участвовал в формировании задач. Отсутствие контекста и смены требований приводили к бесконечным правкам и переделкам.",
    },
    {
      id: "02",
      title: "Потеря контакта с заказчиком",
      description:
        "Презентация решений шла через PM сторонней команды. Потеря контекста приводила к долгим согласованиям и искажению фидбека.",
    },
    {
      id: "03",
      title: "Низкий CSI дизайна",
      description:
        "Накопившиеся проблемы снизили satisfaction-метрики. Моей основной задачей стало найти истинные причины и выстроить доверие заново.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="py-6 sm:py-10 md:py-12 max-w-4xl mx-auto w-full">
      {/* Шапка блока — слева на мобилке, по центру на десктопе */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-left md:text-center max-w-2xl md:mx-auto mb-8 md:mb-16"
      >
        <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#1e45fb] block mb-2 md:mb-3">
          ПРОБЛЕМА БИЗНЕСА
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-5 tracking-tight">
          Сломанный дизайн-процесс
        </h2>
        <p className="text-zinc-600 text-[16px] leading-relaxed">
          На старте дизайн-команда работала как исполнитель ТЗ, а низкий CSI подрывал доверие партнёра. Моей задачей стало взять процессы под контроль и выстроить коммуникацию с бизнесом.
        </p>
      </motion.div>

      {/* Карточки */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0"
      >
        {problems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={`flex flex-col justify-start gap-4 md:gap-8 md:px-8 first:pl-0 last:pr-0 ${
              index !== 0 ? "md:border-l md:border-zinc-200" : ""
            }`}
          >
            <div>
              <Frown className="w-7 h-7 md:w-8 md:h-8 text-zinc-400 stroke-[1.75]" />
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 text-[18px] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BusinessProblem;

