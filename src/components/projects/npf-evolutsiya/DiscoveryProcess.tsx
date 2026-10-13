import React from "react";
import { motion, Variants } from "framer-motion";

interface Insight {
  label: string;
  paragraphs: string[];
}

interface DiscoveryStep {
  id: string;
  title: string;
  description: string;
  image?: string;
  insights: Insight[];
}

export const DiscoveryProcess = () => {
  const discoverySteps: DiscoveryStep[] = [
    {
      id: "1",
      title: "Интервью со стейкхолдерами",
      description:
        "Инициировала встречи с бизнесом, чтобы собрать внутренние гипотезы, проблемы и цели фонда.",
      insights: [
        {
          label: "Инсайт",
          paragraphs: [
            "Из-за непрозрачного интерфейса клиенты не видели структуру своих денег и не понимали логику выплат. Это рождало недоверие, приводило к потере лояльности и оттоку вкладчиков к конкурентам.",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Анализ отзывов пользователей",
      description:
        "Изучила более 300 отзывов в Google Play и App Store, чтобы выявить главные боли реальной аудитории.",
      image: "/projects/npf-evolutsiya/npf-evo-review.jpg",
      insights: [
        {
          label: "Инсайты",
          paragraphs: [
            "1. Люди не понимали, где именно находятся их накопления, что вызывало тревогу и недоверие.",
            "2. Программа ПДС была запрятана так глубоко, что пользователи её не находили, из-за чего у фонда проседала конверсия.",
            "3. Попытка изменить личные данные или подать заявление превращалась в сложный квест, что приводило к низким оценкам и перегружало поддержку.",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Сегментирование аудитории по фреймворку JTBD",
      description:
        "Изучила запросы пользователей фонда (от 35 до 60 лет) и выделила три главных типа клиентских работ",
      insights: [
        {
          label: "Job 1. Максимизация доходности",
          paragraphs: [
            "Когда я управляю своими пенсионными накоплениями, я хочу видеть подробные условия выплат и прозрачные графики доходности, чтобы быть уверенным, что я не совершаю ошибку в стратегии и успею накопить на достойную жизнь.",
          ],
        },
        {
          label: "Job 2. Создание подушки безопасности",
          paragraphs: [
            "Когда я задумываюсь о будущем или поддержке родителей, я хочу быстро разобраться в условиях ПДС и настроить автоплатеж в пару кликов, чтобы финансы работали «на фоне», не отвлекая меня сложными терминами и долгими сценариями.",
          ],
        },
        {
          label: "Job 3. Решение сервисных вопросов",
          paragraphs: [
            "Когда мне нужно подать заявление на выплату, изменить реквизиты или получить справку, я хочу иметь под рукой понятный пошаговый алгоритм с подсказками, чтобы быть уверенным, что всё принято верно и мне не нужно идти в офис для решения проблемы.",
          ],
        },
      ],
    },
  ];

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="pt-10 pb-3 sm:pb-6 max-w-4xl mx-auto w-full text-left font-sans"
    >
      {/* Заголовок с подзаголовком */}
      <div className="text-left mb-8 sm:mb-12">
        <span className="text-[#1e45fb] text-[12px] font-semibold uppercase tracking-wider block mb-[8px] sm:mb-3">
          DISCOVERY
        </span>
        <h2 className="text-[24px] leading-[32px] tracking-[-0.6px] sm:text-4xl sm:leading-tight sm:tracking-tight font-bold text-zinc-900">
          Анализ болевых точек
        </h2>
      </div>

      {/* Таблица */}
      <div className="divide-y divide-zinc-200/80 border-t border-zinc-200/80">
        {discoverySteps.map((item, index) => (
          <motion.div
            key={item.id}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05 }}
            className="py-5 sm:py-6"
          >
            {/* Текстовые колонки */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
              {/* Левая колонка: Заголовок и Описание */}
              <div className="md:col-span-6 flex flex-col gap-2">
                <h3 className="text-zinc-900 font-semibold text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Правая колонка: Блок Инсайтов и JTBD задач */}
              <div className="md:col-span-6 flex flex-col gap-6">
                {item.insights.map((insight, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h4 className="text-zinc-900 font-semibold text-lg leading-snug">
                      {insight.label}
                    </h4>
                    <div className="flex flex-col gap-3">
                      {insight.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-zinc-600 text-[16px] leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DiscoveryProcess;