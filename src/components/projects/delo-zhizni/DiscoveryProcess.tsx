import { motion, Variants } from "framer-motion";

export const DiscoveryProcess = () => {
  const discoverySteps = [
    {
      id: "1",
      title: "Разбираемся, кто за что отвечает",
      description:
        "Получила от заказчика карту стейкхолдеров: более 10 отделов, вовлеченных в процессы.",
      insights: [
        {
          label: "Инсайт",
          paragraphs: [
            "Мой интерфейс должен стать «переводчиком» между клиентом и этой сложной внутренней кухней.",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Погружаемся в предметную область. Карта ролей",
      description:
        "Изучила, как устроен страховой договор: кто такой страхователь, застрахованные и выгодоприобретатели, и как они связаны.",
      insights: [
        {
          label: "Инсайт",
          paragraphs: [
            "Ошибка в отображении этих связей — это прямые юридические риски.",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Анализируем текущие процессы. As-Is модель",
      description:
        "Изучила инструкции сотрудников, шаблоны и регламентированные схемы процессов.",
      insights: [
        {
          label: "Инсайт",
          paragraphs: [
            "Используется ручная цепочка инструментов, поэтому малейшая опечатка — и документ теряется.",
          ],
        },
      ],
    },
    {
      id: "4",
      title: "Понимание пользователей. Фреймворк JTBD",
      description:
        "Проанализировала мотивы и ключевые боли клиентов (B2C) и агентов (B2B).",
      insights: [
        {
          label: "Инсайт",
          paragraphs: [
            "Клиентам важна прозрачность: видеть картину по полисам в одном месте, легко обновлять данные и подписывать документы без страха ошибиться.",
            "Агентам нужна скорость: мгновенно находить историю клиента, видеть критические сроки и оформлять новые заявления без риска возврата от юристов.",
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
      className="pt-10 pb-3 sm:pb-6 max-w-4xl mx-auto w-full"
    >
      {/* Заголовок с подзаголовком (8px на мобилке, 12px на десктопе) */}
      <div className="text-left mb-8 sm:mb-12">
        <span className="text-[#1e45fb] text-[12px] font-semibold uppercase tracking-wider block mb-[8px] sm:mb-3">
          DISCOVERY
        </span>
        <h2 className="text-[24px] leading-[32px] tracking-[-0.6px] sm:text-4xl sm:leading-tight sm:tracking-tight font-bold text-zinc-900">
          Анализ бизнес-процессов
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
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-5 sm:py-6 items-start"
          >
            {/* Левая колонка: Заголовок и Описание */}
            <div className="md:col-span-6 flex flex-col gap-2">
              <h3 className="text-zinc-900 font-semibold text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Правая колонка: Единый блок Инсайта с несколькими абзацами */}
            <div className="md:col-span-6 flex flex-col gap-6">
              {item.insights.map((insight, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="text-zinc-900 font-semibold text-lg leading-snug">
                    {insight.label}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {insight.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-zinc-600 text-[16px] leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};