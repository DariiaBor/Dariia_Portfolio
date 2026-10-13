import React from "react";
import { motion } from "framer-motion";
import { Palette, Box, Cpu } from "lucide-react";

const principles = [
  {
    icon: Palette,
    title: "От искусства к продукту",
    description:
      "Бэкграунд в живописи помогает чувствовать форму, композицию и работать с визуал-сторителлингом на глубоком уровне.",
  },
  {
    icon: Box,
    title: "3D и объёмное мышление",
    description:
      "Экспериментирую с пространственными интерфейсами, Blender и свет-преломлениями для создания выразительных visual assets.",
  },
  {
    icon: Cpu,
    title: "AI & Vibe-coding",
    description:
      "Использую современные LLM и вайб-кодинг для быстрого прототипирования гипотез и сборки интерактивных интерфейсов.",
  },
];

export function AboutApproach() {
  return (
    <section className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1E45FB] font-sans">
          Философия
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
          Мой подход к работе
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-md rounded-[24px] p-6 sm:p-8 flex flex-col gap-4 border-none shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#111827]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">
                {item.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}