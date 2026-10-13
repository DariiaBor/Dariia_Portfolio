import React from "react";
import { motion } from "framer-motion";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

const visualArtifacts = [
  {
    title: "painting",
    category: "Traditional Oil",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "liminal space",
    category: "Blender / personal project",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "3d scene",
    category: "Lighting & Materials",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "visual experiment",
    category: "Glass & Refraction",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "AI exploration",
    category: "Generative Art",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80",
  },
];

export function AboutExploration() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1E45FB]">
          05 — Исследования
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#111827] tracking-tight">
          {fixOrphans("Мне интересно исследовать.")}
        </h2>
        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
          {fixOrphans(
            "Вне работы я рисую, создаю 3D-сцены и лиминальные пространства, экспериментирую с визуалами и новыми инструментами. Просто потому, что мне нравится исследовать форму, пространство и новые способы что-то создавать."
          )}
        </p>
      </div>

      {/* Интерактивная галерея-сетка без постоянных надписей (hover) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full">
        {visualArtifacts.map((item, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-sm ${
              idx === 0 ? "col-span-2 md:col-span-2 aspect-[16/9]" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Появляющиеся при наведении подписи */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <span className="text-xs font-mono text-[#D1F366]">{item.title}</span>
              <span className="text-xs text-white/90">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}