import React, { useRef, useState, useEffect } from "react";
import { Briefcase, BarChart3, Puzzle, Users } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

interface ExpertiseItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ExpertiseCard({
  item,
  index,
  total,
  smoothProgress,
  isMobile,
}: {
  item: ExpertiseItem;
  index: number;
  total: number;
  smoothProgress: any;
  isMobile: boolean;
}) {
  const Icon = item.icon;
  const centerOffset = index - (total - 1) / 2;

  const rotateDesktop = useTransform(smoothProgress, [0, 1], [centerOffset * 3.5, 0]);
  const xDesktop = useTransform(smoothProgress, [0, 1], [centerOffset * -70, 0]);
  const yDesktop = useTransform(smoothProgress, [0, 1], [Math.abs(centerOffset) * 6, 0]);

  // Плавная и последовательная задержка для каждой карточки на мобиле
  const mobileCardDelay = 0.45 + index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-20px" : "-30px" }}
      transition={{
        duration: isMobile ? 0.6 : 0.5,
        delay: isMobile ? mobileCardDelay : index * 0.1,
        ease: isMobile ? [0.25, 0.1, 0.25, 1.0] : [0.16, 1, 0.3, 1],
      }}
      style={{
        rotate: isMobile ? 0 : rotateDesktop,
        x: isMobile ? 0 : xDesktop,
        y: isMobile ? 0 : yDesktop,
      }}
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative bg-white/90 backdrop-blur-md rounded-[24px] p-6 sm:p-7 lg:p-8 border-none flex flex-col gap-4 lg:gap-5 shadow-none overflow-hidden will-change-transform z-10 hover:z-20"
    >
      <div className="relative z-10 w-12 h-12 rounded-xl bg-gray-100/80 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D1F366]">
        <Icon
          className="relative z-10 w-6 h-6 text-[#111827] transition-colors duration-300 group-hover:text-[#111827]"
          strokeWidth={1.8}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-lg lg:text-xl font-bold text-[#111827] tracking-tight leading-snug [text-wrap:balance]">
          {item.title}
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed font-sans [text-wrap:balance]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const expertiseData: ExpertiseItem[] = [
    {
      icon: Briefcase,
      title: "Масштабные системы",
      description:
        "Проектирую цифровые продукты с\u00A0десятками ролей, комплексной логикой и\u00A0высокой ценой ошибки.",
    },
    {
      icon: BarChart3,
      title: "Бизнес‑эффект",
      description:
        "Создаю решения, которые снижают операционные затраты и\u00A0улучшают ключевые продуктовые метрики.",
    },
    {
      icon: Puzzle,
      title: "Кризисные продукты",
      description:
        "Разруливаю проекты с\u00A0конфликтующими требованиями и\u00A0сложными стейкхолдерами.",
    },
    {
      icon: Users,
      title: "Дизайн‑культура",
      description:
        "Создаю дизайн-системы, процессы и стандарты, которые масштабируют работу команды и\u00A0ускоряют разработку.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-6 sm:py-12 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6 md:gap-14 items-start sm:items-center">
        {/* Заголовок с мягкой задержкой после Hero */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 16 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
          transition={{
            duration: isMobile ? 0.55 : 0.6,
            delay: isMobile ? 0.35 : 0,
            ease: isMobile ? [0.25, 0.1, 0.25, 1.0] : [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-start sm:items-center text-left sm:text-center gap-2 md:gap-4 max-w-2xl"
        >
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#1E45FB] font-sans">
            Сильные стороны
          </span>
          <h2 className="text-[24px] leading-[33px] tracking-[-0.6px] md:text-[36px] md:leading-[45px] md:tracking-[-0.9px] font-bold text-[#111827]">
            В чём моя ключевая экспертиза
          </h2>
        </motion.div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              item={item}
              index={index}
              total={expertiseData.length}
              smoothProgress={smoothProgress}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;