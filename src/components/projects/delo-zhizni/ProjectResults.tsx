import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MetricItem {
  value: string;
  description: string;
}

const metricsData: MetricItem[] = [
  {
    value: "х3 к скорости",
    description:
      "Заполнение заявления сократилось с 45 до 15 минут, а выпуск полиса — с 3 дней до 2 часов.",
  },
  {
    value: "−48% ошибок",
    description:
      "Автозаполнение и онлайн-валидация снизили количество операционных ошибок.",
  },
  {
    value: ">20% Digital Adoption Rate",
    description:
      "Каждый 5-й агент перешёл на оформление полисов через личный кабинет.",
  },
  {
    value: "×2 к Time-to-Market",
    description:
      "Дизайн-система ускорила создание типовых модулей вдвое и снизила зависимость от дизайна.",
  },
];

const recognitionFeatures = [
  "Золото на Workspace Digital Awards 2026. Проект занял 1-е место в номинации «Финансы, банки, страхование».",
  "Высший балл по CSI. Получили 10/10 за дизайн и UX.",
  "Признание стейкхолдеров: проект получил публичную благодарность топ-менеджмента перед 200+ сотрудниками страховой как одно из ключевых цифровых обновлений.",
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
          4 месяца после запуска
        </span>

        <h2 className="text-[24px] sm:text-[36px] font-bold text-zinc-900 leading-[32px] sm:leading-[40px] tracking-[-0.6px] sm:tracking-[-0.9px]">
          Бизнес-результаты
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

      {/* Контейнер картинки со скруглениями и легкой серой рамкой */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full rounded-lg sm:rounded-2xl border border-zinc-200/80 bg-white overflow-hidden mt-2 sm:mt-4 p-0"
      >
        <img
          src="/projects/delo-zhizni/dz-ceremony.jpg"
          alt="Церемония награждения Workspace Digital Awards"
          className="w-full h-auto object-cover block bg-white"
        />
      </motion.div>

      {/* Блок признания индустрии */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-start text-left gap-2 sm:gap-3"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
          Признание индустрии и реакция команды
        </h3>

        {/* Список с оригинальными гапами */}
        <ul className="flex flex-col gap-1.5 pl-1 mt-0.5 sm:mt-1">
          {recognitionFeatures.map((text, idx) => (
            <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
              <p className="text-base text-zinc-600 leading-relaxed font-normal">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Блок перехода к следующему кейсу с минимальным нижним отступом */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex justify-end pt-2"
      >
        <a
          href="/projects/npf-evolutsiya"
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