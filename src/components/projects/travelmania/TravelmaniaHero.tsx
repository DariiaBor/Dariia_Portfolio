import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

export function NpfEvolutsiyaHero() {
  const animClass = "sm:animate-in sm:fade-in sm:slide-in-from-bottom-3 sm:duration-700 sm:fill-mode-backwards";

  return (
    /* Убрали жесткий min-h на мобиле, оставили его только для sm: */
    <section className="relative w-full sm:min-h-[calc(100vh-7rem)] pt-0 pb-6 flex flex-col justify-between items-start sm:items-center text-left sm:text-center font-['Manrope',sans-serif]">
      
      {/* Заменили -bottom-32 на bottom-0, чтобы оверлей не вылезал на следующий блок */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-100vw] top-16 bottom-0 z-0 bg-gradient-to-b from-transparent via-[#F9FAFB]/80 via-30% to-[#F9FAFB] to-100%"
      />

      {/* Контентная часть */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between items-start sm:items-center">
        
        {/* Шаг 1: Навигация */}
        <div className={`w-full flex items-center justify-between mb-6 text-sm text-gray-500 ${animClass} delay-75`}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-[#111827] transition-colors w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>На главную</span>
          </Link>
          <span className="text-xs font-semibold tracking-wider text-gray-400">
            FinTech / B2C
          </span>
        </div>

        {/* Шаг 2: Средняя секция — Логотип, Заголовок, Описание */}
        <div className="w-full flex-1 flex flex-col items-start sm:items-center justify-center py-6 sm:py-10">
          
          {/* Логотип */}
          <div className={`mb-6 sm:mb-8 ${animClass} delay-150`}>
            <img
              src="/projects/npf-evolutsiya/npf-evo-logo.jpg"
              alt="НПФ Эволюция Logo"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border border-gray-200/60"
            />
          </div>

          {/* Заголовок */}
          <h1 className={`text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] leading-[32px] sm:leading-[38px] md:leading-[46px] tracking-[-0.5px] md:tracking-[-0.8px] max-w-[760px] mb-4 ${animClass} delay-200`}>
            {fixOrphans("НПФ Эволюция: Перезапуск мобильного приложения")}
          </h1>

          {/* Подзаголовок */}
          <p className={`text-base sm:text-lg md:text-[18px] text-[#4B5563] leading-[24px] sm:leading-[28px] md:leading-[30px] max-w-[660px] ${animClass} delay-300`}>
            {fixOrphans("Спроектировала интуитивное приложение фонда, которое упростило контроль накоплений и увеличило целевые конверсии.")}
          </p>

        </div>

        {/* Шаг 3: Разделитель и Метаданные */}
        <div className={`w-full pt-4 ${animClass} delay-500`}>
          
          <div className="w-full border-t border-[#E5E7EB] mb-6 sm:mb-8" />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-left">
            
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Focus</span>
              <p className="text-sm font-medium text-[#111827] leading-snug">
                {fixOrphans("Product Strategy, Stakeholder Management, UX Research, UX/UI")}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</span>
              <p className="text-sm font-medium text-[#111827] leading-snug">
                Lead Product Designer
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Timeline</span>
              <p className="text-sm font-medium text-[#111827] leading-snug">
                2025–2026
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Platform</span>
              <p className="text-sm font-medium text-[#111827] leading-snug">
                Mobile
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Users</span>
              <p className="text-sm font-medium text-[#111827] leading-snug">
                {fixOrphans("Вкладчики, Клиенты НПФ")}
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}