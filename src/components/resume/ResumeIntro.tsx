import React from 'react'
import { Download, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const fixOrphans = (text: string): string => {
  if (!text) return ""
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  )
}

export function ResumeIntro() {
  return (
    <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards">
      {/* Кнопка возврата */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-[#111827] transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> На главную
      </Link>

      {/* Заголовок и подзаголовок */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight">
          Дария Борисенкова
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] font-sans leading-relaxed">
          {fixOrphans("Senior Product Designer · Complex Systems · FinTech · B2B/B2C")}
        </p>
      </div>

      {/* Белая кнопка скачивания без границы с серым ховером */}
      <div>
        <a
          href="/Dariia_Borisenkova_CV.pdf" 
          download="Dariia_Borisenkova_CV.pdf"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-200/80 text-[#111827] text-sm font-medium transition-colors duration-200 cursor-pointer w-fit border-none shadow-none"
        >
          <Download className="w-4 h-4 text-[#4B5563]" />
          Скачать резюме (PDF)
        </a>
      </div>
    </div>
  )
}