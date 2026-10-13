import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface Project {
  id: string;
  title: string;
  image?: string;
  metrics?: string[];
  badge?: string;
  headline: string;
  description: string;
  tags: string[];
}

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

const projectsData: Project[] = [
  {
    id: "delo-zhizni",
    title: "Дело Жизни",
    image: "/projects/delo-zhizni.jpg",
    metrics: ["-48% error rate", "3d → 2h issuance"],
    headline: "Цифровая платформа страхового бизнеса.",
    description:
      "Оцифровала ручные процессы и спроектировала единую экосистему личных кабинетов для клиентов и агентов.",
    tags: ["InsurTech", "Enterprise B2B", "B2С", "Process Automation"],
  },
  {
    id: "npf-evolutsiya",
    title: "НПФ Эволюция",
    image: "/projects/npf-evolutsiya.jpg",
    metrics: ["1.8x conversion", "-30% support load"],
    headline: "Перезапуск мобильного приложения фонда.",
    description:
      "Упростила ключевые сценарии, увеличив конверсию в целевое действие и рост доверия к продукту.",
    tags: ["FinTech", "Mobile App", "Product Strategy"],
  },
  {
    id: "qupro-qseller",
    title: "Qupro / Qseller",
    image: "/projects/qupro-qseller.jpg",
    badge: "Ещё пишу кейс",
    headline: "Multi-role экосистема для покупки и продажи автомобилей.",
    description:
      "Выстроила единую логику для покупателей, продавцов и бизнеса, связав несколько платформ и десятки сценариев в целостный пользовательский опыт.",
    tags: ["AutoTech", "Marketplace", "Multi-role Systems"],
  },
  {
    id: "travelmania",
    title: "Travelmania",
    image: "/projects/travelmania.jpg",
    badge: "Ещё пишу кейс",
    headline: "Двухсторонняя TravelTech-экосистема.",
    description:
      "Систематизировала сценарии поиска, бронирования и конструктора маршрутов, выстроив понятный пользовательский путь для туристов и гидов.",
    tags: ["TravelTech", "Marketplace", "UX Architecture"],
  },
  {
    id: "lifescape",
    title: "Lifescape",
    image: "/projects/lifescape.jpg",
    badge: "Ещё пишу кейс",
    headline: "HealthTech-продукт 0→1 для нескольких пользовательских сегментов.",
    description:
      "С нуля сформировала продуктовую стратегию, CJM и ключевые E2E-сценарии платформы в плотной связке с C-level и аналитиками.",
    tags: ["HealthTech", "0→1", "Product Strategy"],
  },
];

const ITEM_HEIGHT = 40;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string>(projectsData[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeIndex = projectsData.findIndex((p) => p.id === activeId);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });
  const sparkTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 200;
      let currentActive = projectsData[0].id;

      for (const project of projectsData) {
        const el = cardRefs.current[project.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentActive = project.id;
          }
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProject = (id: string) => {
    const el = cardRefs.current[id];
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative w-full py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-14 items-start">
        
        {/* Мобильный заголовок */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex lg:hidden flex-col items-start text-left gap-2 w-full"
        >
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#1E45FB] font-sans">
            Проекты
          </span>
          <h2 className="text-[24px] leading-[33px] tracking-[-0.6px] md:text-[36px] md:leading-[45px] md:tracking-[-0.9px] font-bold text-[#111827]">
            Избранные кейсы
          </h2>
        </motion.div>

        {/* Левая липкая колонка (Desktop) */}
        <div className="hidden lg:flex lg:sticky lg:top-24 w-60 shrink-0 flex-col gap-4 z-10">
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#1E45FB] font-sans pl-7">
            Избранные кейсы
          </span>

          <div className="relative flex flex-col overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <motion.div
              className="absolute left-[11px] w-1.5 h-1.5 rounded-full bg-[#1E45FB] z-20"
              animate={{
                top: activeIndex * ITEM_HEIGHT + 17,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />

            <motion.div
              className="absolute left-[13px] w-[1px] bg-gray-200 pointer-events-none overflow-hidden z-10"
              animate={{
                top: activeIndex * ITEM_HEIGHT + 30,
                bottom: 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              <motion.div
                style={{ y: sparkTranslateY }}
                className="w-full h-24 bg-gradient-to-b from-transparent via-[#1E45FB] to-transparent"
              />
            </motion.div>

            {projectsData.map((project) => {
              const isActive = activeId === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => scrollToProject(project.id)}
                  style={{ height: `${ITEM_HEIGHT}px` }}
                  className={`group relative flex items-center pl-7 pr-3 rounded-xl text-sm transition-colors duration-300 whitespace-nowrap text-left ${
                    isActive
                      ? "text-[#111827] font-semibold"
                      : "text-[#9CA3AF] font-medium hover:text-[#4B5563]"
                  }`}
                >
                  <span>{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Правая колонка с карточками */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex-1 w-full flex flex-col gap-6 md:gap-8"
        >
          {projectsData.map((project) => {
            return (
              <Link
                key={project.id}
                to="/projects/$projectId"
                params={{ projectId: project.id }}
                className="block no-underline"
              >
                <motion.div
                  variants={cardVariants}
                  ref={(el) => {
                    cardRefs.current[project.id] = el;
                  }}
                  className="group relative bg-white rounded-[24px] p-5 sm:p-6 md:p-8 border border-transparent shadow-none transition-all duration-300 ease-out md:hover:border-[#D1F366] md:hover:scale-[1.012] flex flex-col gap-3.5 sm:gap-5 md:gap-6 cursor-pointer"
                >
                  {/* Шапка карточки */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                      {project.title}
                    </h3>

                    {/* Метрики или Плоский Бадж */}
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-nowrap shrink-0">
                      {project.badge && (
                        <span className="px-3.5 py-1 text-[11px] sm:text-xs font-medium text-[#111827] bg-[#F3F4F6] rounded-full tracking-wide whitespace-nowrap">
                          {project.badge}
                        </span>
                      )}

                      {project.metrics && project.metrics.length > 0 && (
                        <>
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-3 py-1 text-[11px] sm:text-xs font-medium text-white bg-[#111827] rounded-full tracking-wide whitespace-nowrap"
                            >
                              {metric}
                            </span>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Контейнер превью */}
                  <div 
                    className="w-full rounded-xl overflow-hidden relative bg-gray-50 h-[180px] sm:h-[240px] md:h-[280px] lg:h-[310px]"
                    style={{
                      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
                      maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 md:group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full border border-gray-200/60 rounded-xl flex items-center justify-center text-center p-4">
                        <span className="text-[#9CA3AF] font-medium text-xs sm:text-sm">
                          [ Скриншот личного кабинета / интерфейса ]
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Нижний блок: Текст + Теги + Кнопка */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
                    <div className="flex-1 max-w-2xl flex flex-col gap-2.5 sm:gap-3">
                      <p className="text-sm sm:text-base leading-relaxed font-sans text-[#4B5563]">
                        <strong className="font-bold text-[#111827] pr-1.5 font-sans">
                          {fixOrphans(project.headline)}
                        </strong>
                        <span>{fixOrphans(project.description)}</span>
                      </p>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#9CA3AF] font-medium pt-0.5">
                        {project.tags.map((tag, i) => (
                          <React.Fragment key={tag}>
                            {i > 0 && <span className="text-gray-300">•</span>}
                            <span className="hover:text-[#4B5563] transition-colors">
                              {tag}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:flex w-10 h-10 rounded-full bg-gray-100 text-[#111827] items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:bg-[#1E45FB] group-hover:text-white shadow-none">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectsSection;