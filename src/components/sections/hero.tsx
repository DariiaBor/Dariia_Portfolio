import { motion, Variants } from "framer-motion";

// Проверка мобильного устройства для адаптивной скорости анимации
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: isMobile ? 0.06 : 0.12,
      delayChildren: isMobile ? 0.02 : 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: isMobile ? 12 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.45 : 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const tagsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: isMobile ? 0.04 : 0.06,
      delayChildren: isMobile ? 0.1 : 0.3,
    },
  },
};

const tagItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0.35 : 0.6,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const tags = [
    "FinTech & Banking",
    "Complex B2B Systems",
    "Design Systems & Variables",
    "AI Workflows",
  ];

  return (
    <section className="relative flex min-h-0 sm:min-h-screen flex-col items-start sm:items-center justify-start sm:justify-center px-4 pt-28 pb-12 sm:pt-24 sm:pb-0 text-left sm:text-center overflow-hidden bg-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start sm:items-center justify-start sm:justify-center max-w-4xl z-10 w-full"
      >
        {/* Адаптивный бейдж роли */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex max-w-full items-center gap-1.5 whitespace-nowrap rounded-full border-none bg-[#D1F366] px-3.5 py-1.5 text-[11px] font-semibold text-[#111827] font-sans tracking-normal sm:px-4 sm:text-xs"
        >
          <span>Senior Product Designer</span>
          <span className="text-[#111827]/40 font-normal select-none">•</span>
          <span>Complex Digital Ecosystems</span>
        </motion.div>

        {/* Точно сбалансированный заголовок */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight text-[#111827] sm:text-[40px] md:text-[50px] lg:text-[52px] leading-[1.15] font-sans hyphens-none max-w-4xl text-left sm:text-center"
        >
          Превращаю сложные бизнес‑процессы в&nbsp;понятные{" "}
          <span className="text-[#1E45FB] inline-block">цифровые продукты</span>.
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-base text-[#4B5563] sm:text-lg md:text-xl font-sans leading-relaxed text-left sm:text-center"
        >
          Навожу порядок в&nbsp;работе компаний через&nbsp;дизайн: оцифровываю ручные сценарии, снижаю ошибки и&nbsp;создаю понятные интерфейсы для&nbsp;пользователей и&nbsp;бизнеса.
        </motion.p>

        {/* Теги без конфликтующих CSS-транзишенов */}
        <motion.div
          variants={tagsContainerVariants}
          className="mt-8 flex max-w-3xl flex-wrap justify-start sm:justify-center gap-2.5 font-sans"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={tagItemVariants}
              whileHover={{
                y: -3,
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#111827",
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="cursor-default rounded-full border-none bg-white/80 px-4 py-2 text-xs font-medium text-[#374151] backdrop-blur-xl"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export const Hero = HeroSection;
export default HeroSection;