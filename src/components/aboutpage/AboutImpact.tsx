import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AboutImpactProps {
  isDark?: boolean;
}

export function AboutImpact({ isDark = false }: AboutImpactProps) {
  return (
    <section className="w-full py-28 sm:py-36 flex flex-col justify-center items-center my-12">
      <div className="max-w-5xl w-full px-6 sm:px-12 flex flex-col items-center">
        
        {/* Шапка блока */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16 pt-12">
          <motion.span
            animate={{
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
              color: isDark ? "#6885FF" : "#4B5563",
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest border"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 — Масштаб</span>
          </motion.span>

          <motion.h2
            animate={{ color: isDark ? "#FFFFFF" : "#111827" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight"
          >
            От выполнения задач — <br className="hidden sm:inline" />
            к управлению контекстом
          </motion.h2>

          <motion.p
            animate={{ color: isDark ? "#9CA3AF" : "#4B5563" }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Со временем роль дизайнера расширилась: от точечной отрисовки макетов до системной работы с процессами и гипотезами.
          </motion.p>
        </div>

        {/* Сетка из двух карточек Canopy Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Раньше */}
          <motion.div
            animate={{
              backgroundColor: isDark ? "#121622" : "#FFFFFF",
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
            }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-2xl border flex flex-col justify-between gap-8 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                Раньше
              </span>
              <span className="text-xs text-gray-400 font-mono">01</span>
            </div>

            <div className="flex flex-col gap-3">
              <motion.h3
                animate={{ color: isDark ? "#E5E7EB" : "#111827" }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold"
              >
                Локальное исполнение
              </motion.h3>
              <motion.p
                animate={{ color: isDark ? "#9CA3AF" : "#6B7280" }}
                transition={{ duration: 0.5 }}
                className="text-sm leading-relaxed"
              >
                Получение готового ТЗ, проектирование отдельных экранов и передача в разработку.{" "}
                <span className={isDark ? "text-gray-200" : "text-gray-900 font-medium"}>
                  Фокус на закрытии задачи.
                </span>
              </motion.p>
            </div>
          </motion.div>

          {/* Сейчас */}
          <motion.div
            animate={{
              backgroundColor: isDark ? "#161B2A" : "#F4F6FF",
              borderColor: isDark ? "rgba(104, 133, 255, 0.4)" : "rgba(104, 133, 255, 0.2)",
            }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-2xl border flex flex-col justify-between gap-8 relative overflow-hidden shadow-sm"
          >
            {isDark && (
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#6885FF]/20 rounded-full blur-2xl pointer-events-none" />
            )}

            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono font-semibold text-[#6885FF] uppercase tracking-widest">
                Сейчас
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#6885FF]/10 text-[#6885FF] text-xs font-mono">
                Системность
              </span>
            </div>

            <div className="flex flex-col gap-3 z-10">
              <motion.h3
                animate={{ color: isDark ? "#FFFFFF" : "#111827" }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold"
              >
                Продуктовый контекст
              </motion.h3>
              <motion.p
                animate={{ color: isDark ? "#D1D5DB" : "#4B5563" }}
                transition={{ duration: 0.5 }}
                className="text-sm leading-relaxed"
              >
                Формирование вводных, выявление ограничений, синхронизация команды и валидация гипотез.{" "}
                <span className={isDark ? "text-[#D1F366] font-medium" : "text-[#6885FF] font-medium"}>
                  Интерфейс — финальный этап решения.
                </span>
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}