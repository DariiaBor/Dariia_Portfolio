import React from 'react'

const fixOrphans = (text: string): string => {
  if (!text) return ""
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  )
}

const awards = [
  {
    title: "Workspace Digital Awards (2026):",
    text: "1 место в номинации «Финансы, банки, страхование»"
  },
  {
    title: "Tagline Awards (2025):",
    text: "3 место в номинации «Travel»"
  }
]

export function ResumeAwards() {
  return (
    <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards pt-8 sm:pt-8">
      
      {/* Заголовок секции с разделителем */}
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-normal text-[#9CA3AF] tracking-normal">
          Награды
        </h2>
        <div className="h-[1px] bg-gray-300 flex-1" />
      </div>

      {/* Список наград */}
      <ul className="flex flex-col gap-2 list-none p-0 text-base text-[#4B5563] font-sans leading-relaxed">
        {awards.map((award, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mt-2.5 shrink-0" />
            <span>
              <strong className="font-semibold text-[#111827]">{award.title}</strong>{" "}
              {fixOrphans(award.text)}
            </span>
          </li>
        ))}
      </ul>

    </section>
  )
}