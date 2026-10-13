import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface InDevProps {
  screenshots?: string[];
  categoryTag?: string;
  prevLink?: string;
  nextLink?: string;
}

const defaultScreenshots = [
  "/projects/travelmania/travelmania-main.png",
  "/projects/travelmania/travelmania-excursion.png",
  "/projects/travelmania/travelmania-order.png",
];

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

export const InDev: React.FC<InDevProps> = ({
  screenshots,
  categoryTag = "Travel / B2C + B2B",
  prevLink = "/projects/qupro-qseller",
  nextLink = "/projects/lifescape",
}) => {
  const images =
    screenshots && screenshots.length > 0 ? screenshots : defaultScreenshots;

  const animClass =
    "sm:animate-in sm:fade-in sm:slide-in-from-bottom-3 sm:duration-700 sm:fill-mode-backwards";

  return (
    <section className="relative w-full flex flex-col items-center font-['Manrope',sans-serif]">
      {/* Шапка и заголовок кейса — добавлен pt-10 для мобилок */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start sm:items-center text-left sm:text-center pt-10 sm:pt-0">
        <div
          className={`w-full flex items-center justify-between mb-6 text-sm text-gray-500 ${animClass} delay-75`}
        >
          <Link
            to={"/" as any}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-[#111827] transition-colors w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>На главную</span>
          </Link>

          <span className="text-xs font-semibold tracking-wider text-gray-400">
            {categoryTag}
          </span>
        </div>

        <div className="w-full flex flex-col items-start sm:items-center justify-center py-6 sm:py-10">
          <h1
            className={`text-2xl sm:text-3xl md:text-[38px] font-bold text-[#111827] leading-[32px] sm:leading-[38px] md:leading-[46px] tracking-[-0.5px] md:tracking-[-0.8px] max-w-[760px] mb-4 ${animClass} delay-200`}
          >
            {fixOrphans("Кейс скоро появится")}
          </h1>

          <p
            className={`text-base sm:text-lg md:text-[18px] text-[#4B5563] leading-[24px] sm:leading-[28px] md:leading-[30px] max-w-[660px] ${animClass} delay-300`}
          >
            {fixOrphans(
              "Готовлю описание, а пока можно взглянуть на скриншоты ниже."
            )}
          </p>
        </div>
      </div>

      {/* Полноширинная карусель */}
      <div
        className={`w-screen -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 pt-4 sm:pt-6 pb-12 sm:pb-16 ${animClass} delay-500`}
      >
        <div className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory py-4">
          <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 w-max mx-auto items-center justify-start">
            {images.map((src, index) => (
              <div
                key={index}
                className="snap-center shrink-0 flex items-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.08] bg-white"
              >
                <img
                  src={src}
                  alt={`Скриншот ${index + 1}`}
                  className="max-h-[25vh] sm:max-h-[45vh] md:max-h-[50vh] w-auto object-contain block select-none pointer-events-none rounded-xl sm:rounded-2xl"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Переключатель кейсов снизу */}
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex items-center justify-between pt-2 w-full gap-4"
        >
          <Link
            to={prevLink as any}
            className="group flex items-center gap-3 text-base sm:text-lg font-semibold text-zinc-900 hover:text-[#1E45FB] transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-white text-zinc-900 group-hover:bg-[#1E45FB] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
              <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>
            <span className="hidden sm:inline">Предыдущий кейс</span>
          </Link>

          <Link
            to={nextLink as any}
            className="group flex items-center gap-3 text-base sm:text-lg font-semibold text-zinc-900 hover:text-[#1E45FB] transition-colors duration-200"
          >
            <span className="hidden sm:inline">Следующий кейс</span>
            <div className="w-10 h-10 rounded-full bg-white text-zinc-900 group-hover:bg-[#1E45FB] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InDev;