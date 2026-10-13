import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AgeDemographicData {
  ageGroup: string;
  female: number;
  male: number;
}

const data: AgeDemographicData[] = [
  { ageGroup: "До 30", female: 13000, male: 15709 },
  { ageGroup: "30–35", female: 75694, male: 90928 },
  { ageGroup: "35–40", female: 302266, male: 300944 },
  { ageGroup: "40–45", female: 396881, male: 353668 },
  { ageGroup: "45–50", female: 365686, male: 310525 },
  { ageGroup: "50–55", female: 327051, male: 266090 },
  { ageGroup: "55–60", female: 211188, male: 168123 },
  { ageGroup: "60–70", female: 83525, male: 91176 },
  { ageGroup: "70–80", female: 28000, male: 44576 },
  { ageGroup: "80+", female: 20000, male: 25169 },
  { ageGroup: "Нет данных", female: 56915, male: 47631 },
];

const MAX_VALUE = 800000;

export const DemographicsChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("ru-RU").format(num);

  const handleBarClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="pt-2 pb-10 max-w-4xl mx-auto w-full text-left font-sans"
      onClick={() => setActiveIndex(null)}
    >
      {/* Флэт карточка */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8">
        {/* Организация и легенда */}
        <div className="mb-6 select-none">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3.5">
            Клиенты НПФ Эволюция
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#2563eb] rounded-full shrink-0" />
              <span>Женщины</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-[#f43f5e] rounded-full shrink-0" />
              <span>Мужчины</span>
            </div>
          </div>
        </div>

        {/* Главный контейнер графика с фиксированной осью Y */}
        <div className="w-full relative flex pt-4">
          {/* Фиксированная ось Y */}
          <div className="w-11 sm:w-16 shrink-0 h-[320px] sm:h-[360px] flex flex-col justify-between pr-2 sm:pr-4 relative z-20 bg-white pointer-events-none select-none">
            {[800000, 600000, 400000, 200000].map((val) => (
              <span
                key={val}
                className="text-[10px] sm:text-xs text-zinc-400 font-mono text-right transform -translate-y-1/2"
              >
                {formatNumber(val)}
              </span>
            ))}
            <span className="text-[10px] sm:text-xs text-zinc-400 font-mono text-right transform -translate-y-1/2">
              0
            </span>
          </div>

          {/* Область скролла */}
          <div className="flex-1 overflow-x-auto touch-pan-x touch-pan-y scrollbar-none relative">
            <div className="min-w-[580px] sm:min-w-full">
              {/* Сетка линий Y */}
              <div className="absolute inset-0 top-0 h-[320px] sm:h-[360px] flex flex-col justify-between pointer-events-none">
                {[800000, 600000, 400000, 200000].map((val) => (
                  <div key={val} className="w-full border-b border-zinc-200/80" />
                ))}
                <div className="w-full" />
              </div>

              {/* Область столбцов */}
              <div className="h-[320px] sm:h-[360px] border-b border-zinc-200/80 flex items-end justify-between gap-2 sm:gap-2.5 relative">
                {data.map((item, idx) => {
                  const total = item.female + item.male;
                  const totalHeightPct = (total / MAX_VALUE) * 100;
                  const femaleHeightPct = (item.female / total) * 100;
                  const isActive = activeIndex === idx;

                  // Для высоких столбцов тултип рисуем внутри столбца/ниже, для низких — сверху
                  const isTallBar = totalHeightPct > 65;

                  return (
                    <div
                      key={idx}
                      className={`flex-1 flex flex-col items-center h-full justify-end group min-w-0 cursor-pointer transition-all ${
                        isActive ? "z-50" : "z-10"
                      }`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onClick={(e) => handleBarClick(idx, e)}
                    >
                      {/* Составной столбец */}
                      <div
                        className={`w-full max-w-[36px] sm:max-w-[44px] flex flex-col rounded-t-md relative transition-all duration-200 ${
                          isActive
                            ? "brightness-110 scale-[1.02]"
                            : "group-hover:brightness-105"
                        }`}
                        style={{ height: `${totalHeightPct}%` }}
                      >
                        {/* Общая сумма над столбцом */}
                        <span className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[11px] font-medium text-zinc-500 select-none whitespace-nowrap">
                          {formatNumber(total)}
                        </span>

                        {/* Умный тултип: открывается вниз для высоких столбцов и вверх для низких */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className={`absolute z-50 bg-zinc-900/95 backdrop-blur-md text-white rounded-xl p-2.5 shadow-2xl text-xs space-y-1 pointer-events-none min-w-[130px] ${
                                isTallBar
                                  ? "top-8"
                                  : "bottom-full mb-6"
                              } ${
                                idx === 0
                                  ? "left-0"
                                  : idx === data.length - 1
                                  ? "right-0 left-auto"
                                  : "left-1/2 -translate-x-1/2"
                              }`}
                            >
                              <div className="font-semibold border-b border-zinc-700/80 pb-1 text-zinc-300">
                                {item.ageGroup}
                              </div>
                              <div className="flex items-center justify-between text-[#f43f5e] font-medium pt-0.5">
                                <span>Мужчины:</span>
                                <span className="font-mono">
                                  {formatNumber(item.male)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[#3b82f6] font-medium">
                                <span>Женщины:</span>
                                <span className="font-mono">
                                  {formatNumber(item.female)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-zinc-300 font-semibold border-t border-zinc-700/80 pt-1 mt-1">
                                <span>Всего:</span>
                                <span className="font-mono">
                                  {formatNumber(total)}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Цветные сегменты столбца */}
                        <div className="w-full h-full rounded-t-md overflow-hidden flex flex-col">
                          <div
                            className="w-full bg-[#f43f5e] relative min-h-[2px]"
                            style={{ height: `${100 - femaleHeightPct}%` }}
                          />
                          <div
                            className="w-full bg-[#2563eb] relative min-h-[2px]"
                            style={{ height: `${femaleHeightPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Подписи оси X */}
              <div className="flex justify-between gap-2 sm:gap-2.5 pt-3 pb-2">
                {data.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex justify-center items-start text-center min-w-0"
                  >
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium leading-tight select-none transition-colors duration-150 ${
                        activeIndex === idx
                          ? "text-zinc-900 font-semibold"
                          : "text-zinc-500"
                      }`}
                    >
                      {item.ageGroup}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DemographicsChart;