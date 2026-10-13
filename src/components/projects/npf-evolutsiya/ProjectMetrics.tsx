import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const beforeImg = "/projects/npf-evolutsiya/evo-before.png";
const afterImg = "/projects/npf-evolutsiya/evo-after.png";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
}

function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full max-w-[200px] sm:max-w-[230px] lg:max-w-[280px] h-[400px] sm:h-[450px] lg:h-[540px] overflow-hidden select-none group mx-auto">
      {/* Изображение "ПОСЛЕ" */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-zinc-400 font-medium text-sm">
        {afterImage ? (
          <img src={afterImage} alt="Стало (Новый интерфейс)" className="w-full h-full object-contain object-top" />
        ) : (
          <div className="flex flex-col items-center gap-1">
            <span className="text-zinc-500 font-semibold">Новый интерфейс (Стало)</span>
            <span className="text-xs text-zinc-400">iPhone 15 Pro</span>
          </div>
        )}
        <span className="absolute bottom-4 right-4 bg-zinc-900/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none z-10">
          Стало
        </span>
      </div>

      {/* Изображение "ДО" */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center text-zinc-500 font-medium text-sm"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        {beforeImage ? (
          <img src={beforeImage} alt="Было (Старый интерфейс)" className="w-full h-full object-contain object-top" />
        ) : (
          <div className="flex flex-col items-center gap-1">
            <span className="text-zinc-600 font-semibold">Старый интерфейс (Было)</span>
            <span className="text-xs text-zinc-400">iPhone 15 Pro</span>
          </div>
        )}
        <span className="absolute bottom-4 left-4 bg-zinc-900/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none z-10">
          Было
        </span>
      </div>

      {/* Ползунок */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-zinc-200/60 flex items-center justify-center text-zinc-600 text-xs font-bold gap-0.5">
          ‹›
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Сравнение до и после"
      />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProjectMetrics() {
  return (
    <section className="w-full my-12 sm:my-20 lg:my-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Слайдер с картинками — 1-й на мобиле, 2-й на lg */}
        <motion.div 
          className="order-1 lg:order-2 lg:col-span-7 w-full flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <BeforeAfterSlider 
            beforeImage={beforeImg}
            afterImage={afterImg}
          />
        </motion.div>

        {/* Метрики — 2-е на мобиле, 1-е на lg */}
        <motion.div 
          className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between divide-y divide-zinc-300/70 pr-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Метрика 1 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2 py-5 lg:py-6">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-normal leading-tight m-0">
              +66%
            </p>
            <p className="text-base leading-relaxed font-normal text-zinc-600 m-0">
              Скорость считывания данных
            </p>
          </motion.div>

          {/* Метрика 2 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2 py-5 lg:py-6">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-normal leading-tight m-0">
              x1.8
            </p>
            <p className="text-base leading-relaxed font-normal text-zinc-600 m-0">
              Увеличение конверсии в оформление ПДС
            </p>
          </motion.div>

          {/* Метрика 3 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2 py-5 lg:py-6">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-normal leading-tight m-0">
              −30%
            </p>
            <p className="text-base leading-relaxed font-normal text-zinc-600 m-0">
              Нагрузки на клиентскую поддержку
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default ProjectMetrics;