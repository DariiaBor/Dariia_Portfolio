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
    period: "Ноябрь 2024 - настоящее время",
    description:
      "Проектирую FinTech- и enterprise-продукты в выделенных командах. Веду дизайн от discovery и анализа процессов до передачи в разработку и контроля реализации.",
    projects: [
      {
        title: "Страховая экосистема «Дело Жизни» | B2B и B2C",
        points: [
          {
            text: "Спроектировала личные кабинеты клиента и агента и сквозные сценарии оформления и обработки заявлений в системе с несколькими ролями и более чем 10 вовлечёнными подразделениями."
          },
          {
            text: "Изучила текущие процессы, роли участников договора и юридические ограничения; перевела ручной документооборот в цифровые сценарии с автозаполнением, проверкой данных и онлайн-валидацией."
          },
          {
            title: "Результат:",
            text: "заполнение заявления ускорилось с 45 до 15 минут, выпуск полиса - с 3 дней до 2 часов; операционные ошибки снизились на 48%, более 20% агентов перешли в личный кабинет."
          },
          {
            text: "Создала библиотеку компонентов, токены и документацию по состояниям; команда стала собирать типовые экраны и модули в 2 раза быстрее. Проект получил золото Workspace Digital Awards 2026; CSI дизайна и UX - 10/10."
          }
        ]
      },
      {
        title: "Мобильный личный кабинет НПФ",
        points: [
          {
            text: "Провела аудит CJM и переработала главный экран и ключевые мобильные сценарии, упростив поиск данных и переход к программе долгосрочных сбережений."
          },
          {
            title: "Результат:",
            text: "время поиска данных сократилось с 42 до 14 секунд; переход к сценарию ПДС вырос в 1,8 раза; нагрузка на клиентский сервис снизилась на 30%."
          }
        ]
      }
    ]
  },
  {
    company: "Lifescape",
    role: "Lead Product Designer",
    period: "Март 2024 — Октябрь 2024",
    description:
      "Платформа персонализированного подбора лечебного питания для людей с хроническими заболеваниями.",
    points: [
      {
        text: "Сформировала дизайн-стратегию и архитектуру MVP, определив основу продукта и логику ключевых пользовательских сценариев."
      },
      {
        text: "Руководила командой из 3 дизайнеров; внедрила регулярные Design Review и системное менторство. Команда получила единый процесс проверки решений, а выходные макеты стали качественнее и консистентнее."
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
        text: "Спроектировала и довела до запуска более 10 цифровых продуктов в FinTech, e-commerce и EdTech."
      },
      {
        text: "Вела полный цикл: собирала требования, проводила интервью со стейкхолдерами, прорабатывала и представляла решения заказчикам, сопровождала проект до запуска."
      },
      {
        title: "Результат:",
        text: "заказчики получали готовые к запуску решения и проходили путь от постановки задачи до финальной презентации в едином дизайн-процессе."
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

            {"projects" in exp ? (
              <div className="flex flex-col gap-5 mt-2">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="flex flex-col gap-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#111827] tracking-tight">
                      {project.title}
                    </h4>

                    <ul className="flex flex-col gap-2 list-none p-0 mt-0 text-base text-[#4B5563] font-sans leading-relaxed">
                      {project.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
                          <span>
                            {"title" in point && point.title ? (
                              <>
                                <strong className="font-semibold text-[#111827]">
                                  {point.title}
                                </strong>{" "}
                              </>
                            ) : null}
                            {fixOrphans(point.text)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-2 list-none p-0 mt-1 text-base text-[#4B5563] font-sans leading-relaxed">
                {exp.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
                    <span>
                      {"title" in point && point.title ? (
                        <>
                          <strong className="font-semibold text-[#111827]">
                            {point.title}
                          </strong>{" "}
                        </>
                      ) : null}
                      {fixOrphans(point.text)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}