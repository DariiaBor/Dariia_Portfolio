import React from 'react'

const productDesignSkills = [
  "End-to-End Product Design", "Design Systems", "B2C & B2B", "Cross-Platform Design", "Mobile Design",
  "User Flows", "CJM", "JTBD", "Discovery", "CustDev", "Interviews",
  "Usability Testing", "A/B Testing", "UX Analytics", "Accessibility",
  "User Experience (UX)", "UI design"
]

const strategyLeadershipSkills = [
  "Design Strategy", "DesignOps", "Design Specs", "Handoff",
  "Design Review", "Stakeholder Management", "Trade-offs", "Leadership",
  "Mentoring", "Team Development", "Systems Thinking"
]

const guidelinesSkills = [
  "HIG", "Material Design 3", "Mobile Guidelines"
]

const tools = [
  "Figma", "Zeroheight", "Miro", "HTML/CSS", "AppMetrica", "Яндекс Метрика",
  "Вебвизор", "Amplitude", "Mixpanel", "Google Analytics 4", "Hotjar",
  "Pathway", "AI Workflows", "Jira", "Agile", "Confluence"
]

const languages = [
  "Русский", "Английский (C1)", "Французский (B1)", "Испанский (B1)"
]

export function ResumeSkills() {
  return (
    <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards pt-8 sm:pt-8">
      
      {/* Заголовок секции с разделителем */}
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-normal text-[#9CA3AF] tracking-normal">
          Навыки
        </h2>
        <div className="h-[1px] bg-gray-300 flex-1" />
      </div>

      {/* Подблоки навыков */}
      <div className="flex flex-col gap-6">
        
        {/* Product Design */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-semibold text-[#111827]">
            Product Design
          </h3>
          <div className="flex flex-wrap gap-2">
            {productDesignSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm text-[#4B5563]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Strategy & Leadership */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-semibold text-[#111827]">
            Strategy & Leadership
          </h3>
          <div className="flex flex-wrap gap-2">
            {strategyLeadershipSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm text-[#4B5563]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-semibold text-[#111827]">
            Guidelines
          </h3>
          <div className="flex flex-wrap gap-2">
            {guidelinesSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm text-[#4B5563]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Инструменты */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-semibold text-[#111827]">
            Инструменты
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm text-[#4B5563]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Языки */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-semibold text-[#111827]">
            Языки
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm text-[#4B5563]"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}