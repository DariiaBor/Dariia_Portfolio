import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

const mobilePhotos = [
  { id: 1, src: "/about/Me_1.jpg", alt: "Обо мне 1" },
  { id: 2, src: "/about/Me_2.jpg", alt: "Обо мне 2" },
  { id: 3, src: "/about/Me_3.jpg", alt: "Обо мне 3" },
  { id: 4, src: "/about/Me_4.jpg", alt: "Обо мне 4" },
];

export function AboutSection() {
  return (
    <section className="relative w-full py-12 xl:py-32 px-4 sm:px-8 md:px-12 xl:px-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-8">
        {/* 1. ТОЛЬКО МОБИЛЬНАЯ КАРУСЕЛЬ (< sm) */}
        <div className="w-full sm:hidden order-1">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 pb-2">
            {mobilePhotos.map((photo) => (
              <div
                key={photo.id}
                className="shrink-0 snap-center w-[78vw] max-w-[280px] h-[340px] rounded-[24px] overflow-hidden bg-gray-100 shadow-xs"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. ПЛАНШЕТНЫЙ ВЕЕРНЫЙ КОЛЛАЖ (sm...xl) */}
        <div className="hidden sm:flex xl:hidden relative w-full max-w-md md:max-w-lg h-[260px] items-center justify-center order-1">
          {/* Фото 3 — Крайнее левое */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-2 md:left-6 top-6 w-36 md:w-40 h-48 md:h-52 rounded-[22px] bg-gray-100 overflow-hidden shadow-xs"
          >
            <img
              src="/about/Me_3.jpg"
              alt="Обо мне 3"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Фото 1 — Левое центральное */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-[22%] top-1 w-40 md:w-44 h-52 md:h-56 rounded-[22px] bg-gray-200 overflow-hidden z-10 shadow-sm"
          >
            <img
              src="/about/Me_1.jpg"
              alt="Обо мне 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Фото 4 — Заднее правое */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute right-[20%] top-0 w-38 md:w-42 h-50 md:h-54 rounded-[22px] bg-gray-100 overflow-hidden z-0 shadow-xs"
          >
            <img
              src="/about/Me_4.jpg"
              alt="Обо мне 4"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Фото 2 — Крайнее правое */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="absolute right-2 md:right-6 top-8 w-38 md:w-42 h-50 md:h-54 rounded-[22px] bg-gray-200 overflow-hidden z-20 shadow-md"
          >
            <img
              src="/about/Me_2.jpg"
              alt="Обо мне 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* 3. ДЕСКТОП: Левый блок с фото (≥ xl) */}
        <div className="hidden xl:flex relative w-[300px] h-[460px] items-center justify-center shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            className="absolute left-16 top-0 w-56 h-76 rounded-[28px] bg-gray-200 overflow-hidden cursor-pointer transition-shadow duration-300"
          >
            <img
              src="/about/Me_3.jpg"
              alt="Обо мне 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            className="absolute left-0 top-32 w-52 h-68 rounded-[28px] bg-gray-100 overflow-hidden z-10 cursor-pointer transition-shadow duration-300"
          >
            <img
              src="/about/Me_1.jpg"
              alt="Обо мне 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* 4. ЦЕНТРАЛЬНЫЙ ТЕКСТОВЫЙ БЛОК */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full xl:max-w-xl xl:min-w-[480px] text-left sm:text-center flex flex-col items-start sm:items-center gap-6 z-10 px-2 order-2 xl:order-none"
        >
          <div className="flex flex-col items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#1E45FB] font-sans">
              Обо мне
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111827] leading-snug sm:leading-tight">
              {fixOrphans("Сложность — моя рабочая среда")}
            </h2>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#4B5563] leading-relaxed font-sans">
              {fixOrphans(
                "Проектирую продукты на стыке дизайна, бизнеса и технологий. Люблю разбираться в неопределённости, находить структуру и превращать неоднозначные задачи в понятные решения."
              )}
            </p>

            <p className="text-base sm:text-lg md:text-xl font-normal text-[#4B5563] leading-relaxed font-sans">
              {fixOrphans(
                "Начинала с живописи, сегодня экспериментирую с AI, 3D и вайб-кодингом."
              )}
            </p>
          </div>

          {/*
          <Link to="/about">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="mt-2 px-6 py-3 rounded-full bg-[#111827] hover:bg-[#1E45FB] text-white text-sm font-medium transition-colors duration-300 shadow-none cursor-pointer"
            >
              Мой подход
            </motion.button>
          </Link>
          */}
        </motion.div>

        {/* 5. ДЕСКТОП: Правый блок с фото (≥ xl) */}
        <div className="hidden xl:flex relative w-[300px] h-[460px] items-center justify-center shrink-0">
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            className="absolute right-0 top-2 w-52 h-68 rounded-[28px] bg-gray-100 overflow-hidden cursor-pointer transition-shadow duration-300"
          >
            <img
              src="/about/Me_4.jpg"
              alt="Обо мне 4"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            className="absolute right-12 top-32 w-56 h-76 rounded-[28px] bg-gray-200 overflow-hidden z-10 cursor-pointer transition-shadow duration-300"
          >
            <img
              src="/about/Me_2.jpg"
              alt="Обо мне 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;