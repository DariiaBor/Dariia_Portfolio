import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Plus } from "lucide-react";

interface ServiceItem {
  id: string;
  label: string;
  pathD: string;
}

const services: ServiceItem[] = [
  { id: "dev", label: "Web Development", pathD: "M 100 0 V 70 H 300 V 140" },
  { id: "marketing", label: "Marketing", pathD: "M 230 0 V 70 H 300 V 140" },
  { id: "design", label: "Design", pathD: "M 370 0 V 70 H 300 V 140" },
  { id: "software", label: "Software Development", pathD: "M 500 0 V 70 H 300 V 140" },
];

export function ServicesFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepState, setStepState] = useState<"loading" | "success" | "flowing">("loading");

  useEffect(() => {
    const timer1 = setTimeout(() => setStepState("success"), 700);
    const timer2 = setTimeout(() => setStepState("flowing"), 1200);
    const timer3 = setTimeout(() => {
      setStepState("loading");
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [activeIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-5xl mx-auto p-8 bg-white rounded-3xl border border-gray-200/80 shadow-xl flex flex-col items-center gap-8"
    >
      {/* Верхний ряд карточек */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {services.map((item, index) => {
          const isActive = index === activeIndex;
          const isSuccess = isActive && (stepState === "success" || stepState === "flowing");
          const isLoading = isActive && stepState === "loading";

          return (
            <div
              key={item.id}
              className={`relative p-5 rounded-2xl border transition-all duration-500 ${
                isActive
                  ? "border-[#1E45FB]/40 bg-[#1E45FB]/[0.04] shadow-md scale-[1.02]"
                  : "border-gray-200 bg-gray-50/60 opacity-60"
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </motion.div>
                ) : isLoading ? (
                  <Loader2 className="w-5 h-5 text-[#1E45FB] animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
              </div>

              <span className="text-sm font-semibold text-gray-900">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* SVG-линии с бегущим потоком */}
      <div className="w-full h-24 relative flex justify-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 600 140" fill="none">
          {/* Базовые серые направляющие */}
          <path d="M 100 0 V 70 H 300 V 140" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M 230 0 V 70 H 300 V 140" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M 370 0 V 70 H 300 V 140" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M 500 0 V 70 H 300 V 140" stroke="#E5E7EB" strokeWidth="2" />

          {/* Бегущий импульс при передаче данных */}
          {stepState === "flowing" && (
            <motion.path
              d={services[activeIndex].pathD}
              stroke="url(#pulse-gradient-light)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          <defs>
            <linearGradient id="pulse-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E45FB" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Целевой блок */}
      <motion.div
        animate={stepState === "flowing" ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="w-5 h-5 rounded-full bg-[#1E45FB] flex items-center justify-center text-xs">
          <Plus className="w-3.5 h-3.5 text-white" />
        </div>
        <span>Your Business</span>
      </motion.div>
    </motion.section>
  );
}