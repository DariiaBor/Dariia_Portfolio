import React from "react";
import { motion } from "framer-motion";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

export function AboutCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start gap-8 w-full pt-8 pb-12 border-t border-gray-200/80"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-[#111827] tracking-tight leading-snug max-w-2xl">
        {fixOrphans("Если в задаче пока больше вопросов, чем ответов — мне, скорее всего, будет интересно.")}
      </h2>

      <a
        href="https://t.me/Dariiabor"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111827] hover:bg-[#1E45FB] text-white font-medium text-base transition-colors duration-200 active:scale-95 shadow-md cursor-pointer"
      >
        Обсудить проект →
      </a>
    </motion.section>
  );
}