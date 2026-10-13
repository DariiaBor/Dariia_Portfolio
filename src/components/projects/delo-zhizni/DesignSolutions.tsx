import { motion } from "framer-motion";

interface SolutionStep {
  number: number;
  title: string;
  description?: string;
  features?: string[];
  imageSrc: string;
  imageAlt: string;
}

const solutionsData: SolutionStep[] = [
  {
    number: 1,
    title: "ЛК агента: высокая скорость работы",
    features: [
      "Компактные таблицы для мгновенного считывания данных.",
      "Умные фильтры с приоритизацией задач по срочности (истекающие полисы, платежи).",
      "Прогрессивное раскрытие информации для снижения когнитивной нагрузки.",
    ],
    imageSrc: "/projects/delo-zhizni/dz-main-agent.jpg",
    imageAlt: "ЛК агента",
  },
  {
    number: 2,
    title: "ЛК клиента: ясность и доверие",
    features: [
      "Визуализация: Наглядные карточки полисов с индикацией статусов оплат.",
      "Читаемость: Понятный язык без сложного юридического жаргона.",
      "Иерархия: Интерфейс без визуального шума для максимального удобства пользования.",
    ],
    imageSrc: "/projects/delo-zhizni/dz-main.jpg",
    imageAlt: "ЛК клиента",
  },
  {
    number: 3,
    title: "Умный калькулятор: конверсия и прозрачность",
    features: [
      "Для агентов: Быстрый расчет тарифов по готовым шаблонам для ускорения сделок.",
      "Для клиентов: Прозрачная детализация цены, формирующая доверие к выбранному плану.",
      "Точность: Автоматические расчеты, полностью исключающие ручные ошибки и финансовые риски.",
    ],
    imageSrc: "/projects/delo-zhizni/dz-calculator.jpg",
    imageAlt: "Умный калькулятор",
  },
  {
    number: 4,
    title: "Подача заявления: оптимизированная логика",
    features: [
      "Умные формы: пошаговая навигация по табам, автозаполнение данных и проверка полей в реальном времени.",
      "Электронная подпись: бесшовное дистанционное подписание страховых документов через SMS-коды.",
      "Контроль качества: блокировка финальной отправки формы до полной верификации данных системой.",
    ],
    imageSrc: "/projects/delo-zhizni/dz-create-claim.jpg",
    imageAlt: "Подача заявления",
  },
  {
    number: 5,
    title: "Масштабируемая дизайн-система",
    description:
      "Разработала UI-библиотеку и синхронизировала её с кодом через дизайн-токены, описав состояния и поведение компонентов в документации. Это позволило команде разработки в 2 раза быстрее собирать типовые экраны и сократило дизайн-долг.",
    imageSrc: "/projects/delo-zhizni/dz-design-system.jpg",
    imageAlt: "Масштабируемая дизайн-система",
  },
];

export function DesignSolutions() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full flex flex-col items-center text-left sm:text-center gap-8 sm:gap-12 py-4 sm:py-12"
    >
      {/* Главный заголовочный блок */}
      <div className="flex flex-col items-start sm:items-center max-w-2xl w-full">
        <span className="text-[12px] font-semibold uppercase text-[#1E45FB] tracking-[0.6px] leading-[18px] mb-[8px] sm:mb-[12px]">
          Дизайн-решения
        </span>

        <h2 className="text-[24px] sm:text-[36px] font-bold text-zinc-900 leading-[32px] sm:leading-[40px] tracking-[-0.6px] sm:tracking-[-0.9px] mb-[12px] sm:mb-4 text-left sm:text-center">
          От бизнес-логики к интерфейсу
        </h2>

        <p className="text-base text-zinc-600 leading-relaxed font-normal text-left sm:text-center">
          Я трансформировала инсайты исследований в сквозную цифровую экосистему, где интерфейсы для агента и клиента работают с единой базой данных.
        </p>
      </div>

      {/* Блок 0: Двойной скриншот (Десктоп + Мобилка) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-3xl flex flex-row items-center justify-between gap-3 sm:gap-4"
      >
        {/* Десктопная версия (уменьшили скругление до rounded-lg на мобиле) */}
        <div className="flex-[1.6] min-w-0 rounded-lg sm:rounded-xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden flex items-center justify-center">
          <img
            src="/projects/delo-zhizni/dz-details-1440.jpg"
            alt="Десктопная версия интерфейса"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* Мобильная версия */}
        <div className="flex-[0.45] min-w-0 rounded-md sm:rounded-lg border border-zinc-200/80 bg-zinc-50/50 overflow-hidden flex items-center justify-center">
          <img
            src="/projects/delo-zhizni/dz-details-360.jpg"
            alt="Мобильная версия интерфейса"
            className="w-full h-auto object-contain block"
          />
        </div>
      </motion.div>

      {/* Перечень шагов 1..5 */}
      <div className="w-full max-w-3xl flex flex-col gap-8 sm:gap-16 pt-2 sm:pt-4">
        {solutionsData.map((step) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full flex flex-col items-start text-left gap-2 sm:gap-3"
          >
            {/* Номер шага */}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
              {step.number}.
            </span>

            {/* Заголовок шага */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
              {step.title}
            </h3>

            {/* Описание процессом/текстом */}
            {step.description && (
              <p className="text-base text-zinc-600 leading-relaxed mt-0.5 sm:mt-1">
                {step.description}
              </p>
            )}

            {/* Список фичей */}
            {step.features && (
              <ul className="flex flex-col gap-1.5 pl-1 mt-0.5 sm:mt-1">
                {step.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                    <p className="text-base text-zinc-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Контейнер для интерфейса (уменьшили до rounded-lg на мобиле) */}
            <div className="w-full aspect-[16/10] rounded-lg sm:rounded-2xl border border-zinc-200/80 bg-zinc-50 overflow-hidden flex items-center justify-center mt-2 sm:mt-3">
              <img
                src={step.imageSrc}
                alt={step.imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}