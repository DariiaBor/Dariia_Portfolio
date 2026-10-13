import React from 'react'

const fixOrphans = (text: string): string => {
  if (!text) return ""
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  )
}

export function ResumeExperience() {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards">
      <ul className="flex flex-col gap-3 list-none p-0 m-0 text-base text-[#4B5563] font-normal font-sans leading-relaxed">
        
        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
          <span>
            {fixOrphans("Senior Product Designer с 5+ лет опыта в FinTech, InsurTech и data-heavy продуктах.")}
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
          <span>
            {fixOrphans("Превращаю сложную бизнес-логику, технические ограничения и требования бизнеса в понятные и масштабируемые продуктовые решения.")}
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
          <span>
            {fixOrphans("Кризис-менеджер для дизайна. Подключаюсь к застрявшим проектам, нахожу узкие места, выстраиваю roadmap и помогаю команде довести продукт до результата.")}
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
          <span>
            {fixOrphans("Работаю с C-level и кросс-функциональными командами, формирую продуктовый vision, выстраиваю дизайн-процессы и развиваю команды.")}
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
          <span>
            {fixOrphans("Использую AI для ускорения Discovery, анализа данных, генерации гипотез и прототипирования.")}
          </span>
        </li>

      </ul>
    </section>
  )
}