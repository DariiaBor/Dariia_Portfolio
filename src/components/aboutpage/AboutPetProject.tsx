import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function AboutPetProject() {
  return (
    <section className="w-full min-h-[80vh] py-24 sm:py-32 flex flex-col justify-center items-center relative overflow-hidden text-white">
      {/* Тонкая продуктовая сетка на фоне (как на Canopy) */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Разъезжающаяся стеклянная шторка / Арка */}
      <motion.div
        initial={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", opacity: 0 }}
        whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-12 inset-x-4 sm:inset-x-12 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-md pointer-events-none shadow-[0_0_80px_rgba(209,243,102,0.03)]"
      />

      {/* Нежное зелёное свечение снизу */}
      <div className="absolute bottom-10 w-96 h-48 bg-[#D1F366]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Центральный контент */}
      <div className="max-w-4xl w-full px-6 text-center flex flex-col items-center gap-6 z-10">
        
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D1F366]/10 text-[#D1F366] text-xs font-mono font-semibold uppercase tracking-widest border border-[#D1F366]/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pet Project</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]"
        >
          Поэтому мне интересно <br />
          создавать своё.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-400 text-base sm:text-xl max-w-2xl leading-relaxed font-light"
        >
          В свободное время я развиваю собственный продукт — от идеи и исследования проблемы до структуры сервиса и автоматизации процессов.
        </motion.p>

        {/* Микро-теги процессов */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-gray-400"
        >
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">idea</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">structure</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">automation</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#D1F366] text-[#0A0D14] font-semibold">product</span>
        </motion.div>

        {/* Кнопка с переходом */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-6"
        >
          <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#D1F366] text-[#0A0D14] font-semibold text-sm hover:bg-[#bce442] transition-colors shadow-lg shadow-[#D1F366]/10">
            <span>Смотреть проект</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}