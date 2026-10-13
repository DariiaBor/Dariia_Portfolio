import React from 'react'

const fixOrphans = (text: string): string => {
  if (!text) return ""
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  )
}

const experiences = [
  {
    company: "MEN IN DEV",
    role: "Senior Product Designer",
    period: "Ноябрь 2024 — Август 2026",
    description: "End-to-End разработка B2C/B2B продуктов · FinTech · Digital Ecosystems",
    points: [
      {
        title: "2M+ MAU — НПФ «Будущее» и НПФ «Эволюция»:",
        text: "Руководила проектированием мобильного приложения и веб-кабинетов для клиентов, работая со сквозными сценариями внутри пенсионной экосистемы."
      },
      {
        title: "НПФ «Эволюция» — FinTech:",
        text: "Оптимизировала ключевые сценарии мобильного приложения, увеличив конверсию в 1,8 раза и снизив обращения в поддержку на 30%."
      },
      {
        title: "Масштабируемая дизайн-система:",
        text: "Разработала токенизированную систему компонентов на Variables, Tokens и Auto Layout, сократив Time-to-Market новых фич в 2 раза и синхронизировав дизайн с frontend-разработкой."
      },
      {
        title: "«Дело Жизни» — InsurTech:",
        text: "Оцифровала ручные страховые процессы, сократив время выполнения задач с 3 дней до 2 часов и количество ошибок на 48%. Проект получил Gold на Workspace Digital Awards 2026."
      }
    ]
  },
  {
    company: "Lifescape",
    role: "Lead Product Designer",
    period: "Март 2024 — Октябрь 2024",
    description: "HealthTech startup · B2C · Мобильная платформа для подбора питания",
    points: [
      {
        title: "Продукт 0→1:",
        text: "С нуля сформировала продуктовую стратегию, CJM, визуальный язык и ключевые мобильные сценарии сервиса для пользователей с индивидуальными потребностями в питании — совместно с C-level и основателями."
      },
      {
        title: "Leadership:",
        text: "Руководила командой из 3 дизайнеров, формировала и распределяла backlog, проводила Design Review и выстраивала регулярную обратную связь для роста команды и качества решений."
      },
      {
        title: "DesignOps:",
        text: "Спроектировала базовую UI-библиотеку и процессы handoff, создав основу для стабильной и масштабируемой работы дизайна с разработкой."
      }
    ]
  },
  {
    company: "Проектная занятость",
    role: "Product Designer",
    period: "2021 — 2024",
    description: "Digital Products · FinTech · E-commerce · Travel · EdTech",
    points: [
      {
        title: "B2C и B2B продукты:",
        text: "Работала с IT-холдингами и стартапами над маркетплейсами, TravelTech-сервисами, FinTech-продуктами и платформами для бизнеса — от пользовательских витрин до сложных личных кабинетов."
      },
      {
        title: "Multi-role и data-heavy системы:",
        text: "Проектировала продукты с несколькими типами пользователей, сложной логикой и большими объёмами данных — дашборды, аналитические панели и системы управления."
      }
    ]
  }
]

export function ResumeProjects() {
  return (
    <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards pt-8 sm:pt-8">
      
      {/* Заголовок секции с разделителем */}
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-normal text-[#9CA3AF] tracking-normal">
          Опыт
        </h2>
        <div className="h-[1px] bg-gray-300 flex-1" />
      </div>

      {/* Список мест работы */}
      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                {exp.company} | {exp.role}
              </h3>
              <span className="text-[#9CA3AF] text-sm sm:text-base shrink-0 font-normal">
                {exp.period}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#4B5563] font-normal">
              {fixOrphans(exp.description)}
            </p>

            <ul className="flex flex-col gap-2 list-none p-0 mt-1 text-base text-[#4B5563] font-sans leading-relaxed">
              {exp.points.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
                  <span>
                    <strong className="font-semibold text-[#111827]">{point.title}</strong>{" "}
                    {fixOrphans(point.text)}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  )
}