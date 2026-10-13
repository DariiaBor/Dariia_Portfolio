import { motion } from "framer-motion";

interface SolutionStep {
  number: number;
  title: string;
  description?: string;
  features?: string[];
  imageSrc: string[];
  imageAlt: string;
}

const solutionsData: SolutionStep[] = [
  {
    number: 1,
    title: "Главный экран",
    features: [
      "Разделение контента: вынесла личные накопления на первый план, а витрину услуг выделила в отдельный блок для лучшей фокусировки.",
      "Понятная ценность ПДС: заменила сложную аббревиатуру на наглядную выгоду продукта, что повысило вовлечённость в 1.8 раза на тестах.",
      "Контекстная помощь: встроила подсказки и частые вопросы прямо в сценарии — 8 из 10 пользователей нашли ответы сами (прогноз снижения нагрузки на саппорт на 30%).",
    ],
    imageSrc: [
      "/projects/npf-evolutsiya/npf-main1.png",
      "/projects/npf-evolutsiya/npf-main2.png",
      "/projects/npf-evolutsiya/npf-main3.png",
    ],
    imageAlt: "Главный экран",
  },
  {
    number: 2,
    title: "Прозрачность накоплений",
    features: [
      "Зачем нужно: возвращает клиенту чувство контроля над деньгами и снимает тревогу за счет понятной структуры счета.",
      "Иерархия: сверху разместила детализацию текущего баланса, ниже — прогноз будущих выплат с кнопкой «Как увеличить».",
      "Польза: наглядный график показывает динамику роста средств и выгоду при подключении программы ПДС.",
      "Операции и история: отобразила последние транзакции прямо на главном экране с быстрым переходом к детальной истории начислений.",
    ],
    imageSrc: [
      "/projects/npf-evolutsiya/npf-details1.png",
      "/projects/npf-evolutsiya/npf-details2.png",
      "/projects/npf-evolutsiya/npf-details3.png",
    ],
    imageAlt: "Прозрачность накоплений",
  },
  {
    number: 3,
    title: "Пенсионная витрина",
    features: [
      "Зачем нужно: просто и привлекательно объясняет сложную государственную программу сбережений с фокусом на выгоду.",
      "Фокус на выгоде: вынесла софинансирование от государства на первый план, чтобы сразу зацепить внимание пользователя.",
      "Быстрый расчет: интегрировала компактный калькулятор для моментальной оценки ежегодного дохода и налоговых вычетов.",
      "Ответы на страхи: добавила короткий FAQ прямо в интерфейс, сняв сомнения о сроках и правилах вывода средств.",
      "Конверсия: сделала сквозную кнопку «Начать копить», ведущую напрямую к оформлению без лишних шагов.",
    ],
    imageSrc: [
      "/projects/npf-evolutsiya/npf-program1.png",
      "/projects/npf-evolutsiya/npf-program2.png",
      "/projects/npf-evolutsiya/npf-program3.png",
    ],
    imageAlt: "Пенсионная витрина",
  },
  {
    number: 4,
    title: "Калькулятор накоплений",
    features: [
      "Зачем нужно: помогает пользователю примерять финансовый продукт на себя и наглядно увидеть будущую выгоду.",
      "Гибкая настройка: сделала управление параметрами выплат интуитивным через удобные поля и переключатели.",
      "Наглядные данные: интерактивный график показывает, как сложный процент и господдержка увеличивают итоговую сумму.",
      "Прозрачность: расчет будущих ежемесячных выплат происходит в реальном времени, помогая принять взвешенное решение.",
      "Конверсия: обеспечила бесшовный переход от расчетов к оформлению через целевую кнопку «Открыть программу».",
    ],
    imageSrc: [
      "/projects/npf-evolutsiya/npf-calc1.png",
      "/projects/npf-evolutsiya/npf-calc2.png",
      "/projects/npf-evolutsiya/npf-calc3.png",
    ],
    imageAlt: "Калькулятор накоплений",
  },
  {
    number: 5,
    title: "Дизайн-система",
    features: [
      "Дизайн-токены: настроила переменные для цветов, типографики и отступов для централизованного обновления стилей.",
      "Атомарный подход: разложила UI-кит от базовых элементов до сложных интерфейсных модулей для быстрого прототипирования.",
      "Документация: описала состояния компонентов и правила их применения, упростив передачу макетов в разработку.",
    ],
    imageSrc: [
      "/projects/npf-evolutsiya/npf-design-system.png",
    ],
    imageAlt: "Дизайн-система",
  },
];

export function DesignSolutions() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="w-full flex flex-col items-center text-left sm:text-center gap-8 sm:gap-12 py-4 sm:py-12"
    >
      <div className="flex flex-col items-start sm:items-center max-w-2xl w-full">
        <span className="text-[12px] font-semibold uppercase text-[#1E45FB] tracking-[0.6px] leading-[18px] mb-[8px] sm:mb-[12px]">
          Дизайн-решения
        </span>

        <h2 className="text-[24px] sm:text-[36px] font-bold text-zinc-900 leading-[32px] sm:leading-[40px] tracking-[-0.6px] sm:tracking-[-0.9px] mb-[12px] sm:mb-4 text-left sm:text-center">
          От абстрактных цифр к наглядной выгоде
        </h2>

        <p className="text-base text-zinc-600 leading-relaxed font-normal text-left sm:text-center">
          Трансформировала сложную терминологию в понятные сценарии, где
          пользователь видит реальную пользу продукта и легко принимает
          решение.
        </p>
      </div>

      {/* Блок 0: Два мобильных экрана (уменьшены для мобильных) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.6,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="w-full flex justify-center"
      >
        <div className="flex items-start justify-center gap-3 sm:gap-6">
          <div className="w-[140px] sm:w-[240px] md:w-[270px] flex justify-center">
            <img
              src="/projects/npf-evolutsiya/npf-programs.png"
              alt="Главный экран — вариант 1"
              className="w-full h-auto object-contain block"
            />
          </div>

          <div className="w-[140px] sm:w-[240px] md:w-[270px] flex justify-center">
            <img
              src="/projects/npf-evolutsiya/npf-payment.png"
              alt="Главный экран — вариант 2"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-3xl flex flex-col gap-8 sm:gap-16 pt-2 sm:pt-4">
        {solutionsData.map((step) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="w-full flex flex-col items-start text-left gap-2 sm:gap-3"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
              {step.number}.
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
              {step.title}
            </h3>

            {step.description && (
              <p className="text-base text-zinc-600 leading-relaxed mt-0.5 sm:mt-1">
                {step.description}
              </p>
            )}

            {step.features && (
              <ul className="flex flex-col gap-1.5 pl-1 mt-0.5 sm:mt-1">
                {step.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />

                    <p className="text-base text-zinc-600 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {/* Три экрана в ряд — оставлены без изменений */}
            {step.number < 5 && (
              <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                {step.imageSrc.map((src, idx) => (
                  <div
                    key={src}
                    className="w-1/3 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`${step.imageAlt} — экран ${idx + 1}`}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Дизайн-система */}
            {step.number === 5 && (
              <div className="w-full aspect-[16/9] rounded-lg sm:rounded-2xl border border-zinc-200/80 overflow-hidden flex items-center justify-center mt-2 sm:mt-3">
                <img
                  src={step.imageSrc[0]}
                  alt={step.imageAlt}
                  className="w-full h-full object-contain shadow-none"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}