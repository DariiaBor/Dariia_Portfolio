import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

const cards = [
  {
    id: 0,
    label: "Живопись",
    tag: "Эстетика",
    description: "Живопись научила меня видеть форму, ритм и детали — и замечать то, что легко пропустить.",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 1,
    label: "Структура",
    tag: "Мышление",
    description: "Дизайн научил меня превращать наблюдения в структуру — и искать логику за формой.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    label: "Продукт",
    tag: "Контекст",
    description: "Работа с продуктами научила меня смотреть шире интерфейса — на людей, процессы, бизнес и ограничения.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
];

export function AboutHero() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col items-start gap-4 py-2"
    >
      {/* Кнопка возврата */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-[#111827] transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> На главную
      </Link>

      {/* Центральный текстовый блок */}
      <div className="w-full flex flex-col items-center text-center gap-3 max-w-4xl mx-auto pt-10 sm:pt-14 pb-12 sm:pb-16">
        {/* Бейдж Обо мне */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D1F366] text-[#111827] text-xs font-semibold font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Обо мне</span>
        </span>

        {/* Главный заголовок */}
        <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#111827] tracking-tight leading-[1.12] font-sans">
          {fixOrphans("Соединяю эстетику, логику и бизнес.")}
        </h1>

        {/* Прежний подзаголовок */}
        <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-2xl font-sans pt-1">
          {fixOrphans(
            "Искусство, дизайн и продуктовый подход сложились в мой способ смотреть на систему целиком и находить связи, скрытые от первого взгляда."




          )}
        </p>
      </div>

      {/* Полноширинный контейнер карточек */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-3 h-[420px] md:h-[480px] w-full">
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-6 md:p-8 select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? "flex-[3.5] md:flex-[4]"
                    : "flex-[1] hover:flex-[1.2]"
                }`}
              >
                {/* Фон и оверлей */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.img}
                    alt={card.label}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? "scale-105" : "scale-100 filter brightness-75"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      isActive
                        ? "bg-gradient-to-t from-black/80 via-black/30 to-black/20"
                        : "bg-black/50 hover:bg-black/30"
                    }`}
                  />
                </div>

                {/* Верх: Тег и порядковый номер */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span
                    className={`px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? "opacity-100 translate-y-0 delay-300"
                        : "opacity-0 -translate-y-2 delay-0"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <span
                    className={`text-white/70 font-mono text-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? "opacity-100 translate-y-0 delay-300"
                        : "opacity-0 -translate-y-2 delay-0"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Плюс-индикатор для свернутой карточки */}
                <div
                  className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-all duration-300 ${
                    isActive ? "opacity-0 scale-75 delay-0" : "opacity-100 scale-100 delay-200"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D1F366] text-[#111827] flex items-center justify-center shadow-lg">
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Низ: Заголовок и подзаголовок */}
                <div
                  className={`relative z-10 flex flex-col gap-2 text-left mt-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-300 pointer-events-auto"
                      : "opacity-0 translate-y-3 delay-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {card.label}
                  </h3>

                  <p className="text-sm md:text-base text-gray-200 font-sans leading-relaxed max-w-md">
                    {fixOrphans(card.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}