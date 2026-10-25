import React from "react";
import { createPortal } from "react-dom";
import { motion, Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface Project {
  id: string;
  title: string;
  image?: string;
  metrics?: string[];
  badge?: string;
  headline: string;
  description?: string;
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
    image: "/projects/DZ-preview-dark.png",
    metrics: ["-48% error rate", "3d → 2h issuance"],
    headline: "Цифровая экосистема страхования",
    description:
      "Оцифровала ручные процессы и спроектировала единый портал для агентов и клиентов, сократив выпуск полиса с 3 дней до 2 часов.",
    tags: ["InsurTech", "Web", "Enterprise B2B", "B2С"],
  },
  {
    id: "npf-evolutsiya",
    title: "НПФ Эволюция",
    image: "/projects/EVO-preview-2.png",
    metrics: ["1.8x conversion", "-30% support load"],
    headline: "Перезапуск мобильного приложения фонда",
    description:
      "Проработала ключевые сценарии: увеличила конверсию в программу сбережений в 1.8 раза и снизила нагрузку на поддержку на 30%.",
    tags: ["FinTech", "Mobile App", "B2C"],
  },
  {
    id: "qupro-qseller",
    title: "Qupro / Qseller",
    image: "/projects/Qupro-preview.png",
    badge: "Ещё пишу кейс",
    headline: "Автомобильный маркетплейс с B2B и B2C кабинетами",
    tags: ["AutoTech", "Web", "Mobile App", "B2B", "B2C"],
  },
  {
    id: "travelmania",
    title: "Travelmania",
    image: "/projects/TM-preview.png",
    badge: "Ещё пишу кейс",
    headline: "Платформа бронирования экскурсий по всему миру",
    tags: ["TravelTech", "Web", "B2B", "B2C"],
  },
  {
    id: "lifescape",
    title: "Lifescape",
    image: "/projects/Lifescape-preview.png",
    badge: "Ещё пишу кейс",
    headline: "Приложение персонального подбора лечебного питания",
    tags: ["HealthTech", "Mobile App", "B2C"],
  },
];

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

const projectsWithPendingDescription = [
  "qupro-qseller",
  "travelmania",
  "lifescape",
];

export function ProjectsSection() {
  const [cursorPosition, setCursorPosition] = React.useState({
    x: 0,
    y: 0,
  });

  const [isDescriptionVisible, setIsDescriptionVisible] =
    React.useState(false);

  const [activeProjectId, setActiveProjectId] = React.useState<
    string | null
  >(null);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    projectId: string
  ) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });

    setActiveProjectId(projectId);
  };

  const handleImageMouseEnter = (projectId: string) => {
    setActiveProjectId(projectId);
    setIsDescriptionVisible(true);
  };

  const handleImageMouseLeave = () => {
    setIsDescriptionVisible(false);
    setActiveProjectId(null);
  };

  const showDescription =
    isMounted &&
    isDescriptionVisible &&
    activeProjectId !== null &&
    projectsWithPendingDescription.includes(activeProjectId);

  return (
    <section
      id="projects"
      className="relative w-full py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left md:items-center md:text-center gap-2 lg:gap-4 w-full mb-6 md:mb-10 lg:mb-14"
        >
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#1E45FB] font-sans">
            Проекты
          </span>

          <h2 className="text-[24px] leading-[33px] tracking-[-0.6px] md:text-[36px] md:leading-[45px] md:tracking-[-0.9px] font-bold text-[#111827]">
            Избранные кейсы
          </h2>
        </motion.div>

        {/* Бенто-сетка */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-x-8 lg:gap-y-12 items-stretch"
        >
          {projectsData.map((project) => {
            const isFeatured =
              project.id === "delo-zhizni" ||
              project.id === "npf-evolutsiya";

            const hasPendingDescription =
              projectsWithPendingDescription.includes(project.id);

            return (
              <Link
                key={project.id}
                to="/projects/$projectId"
                params={{ projectId: project.id }}
                className={`block no-underline min-w-0 h-full text-left ${
                  isFeatured ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <motion.div
                  variants={cardVariants}
                  className="group relative bg-transparent p-0 m-0 border-none shadow-none flex flex-col h-full cursor-pointer"
                >
                  {/* Изображение */}
                  <div
                    className="relative w-full shrink-0 rounded-[24px] overflow-hidden"
                    onMouseEnter={
                      hasPendingDescription
                        ? () => handleImageMouseEnter(project.id)
                        : undefined
                    }
                    onMouseMove={
                      hasPendingDescription
                        ? (event) =>
                            handleImageMouseMove(event, project.id)
                        : undefined
                    }
                    onMouseLeave={
                      hasPendingDescription
                        ? handleImageMouseLeave
                        : undefined
                    }
                  >
                    <div
                      className={`w-full rounded-[24px] overflow-hidden relative bg-transparent ${
                        isFeatured ? "aspect-[16/9]" : "aspect-[16/9]"
                      }`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`block w-full h-full rounded-[24px] transition-transform duration-500 ${
                            isFeatured
                              ? "object-cover object-center md:group-hover:scale-[1.02]"
                              : "object-contain object-center md:group-hover:scale-[1.02]"
                          }`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full border border-gray-200/60 rounded-[24px] flex items-center justify-center text-center p-4">
                          <span className="text-[#9CA3AF] font-medium text-xs sm:text-sm">
                            [ Скриншот личного кабинета / интерфейса ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Бейджи и метрики поверх изображения */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 overflow-x-auto scrollbar-none flex-nowrap z-20 pointer-events-none">
                      {project.badge && (
                        <span className="px-3.5 py-1 text-[11px] sm:text-xs font-medium text-[#111827] bg-white/90 backdrop-blur-md rounded-full shadow-sm tracking-wide whitespace-nowrap">
                          {project.badge}
                        </span>
                      )}

                      {project.metrics && project.metrics.length > 0 && (
                        <>
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-3 py-1 text-[11px] sm:text-xs font-medium text-white bg-[#111827] backdrop-blur-md rounded-full shadow-sm tracking-wide whitespace-nowrap"
                            >
                              {metric}
                            </span>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Текстовый блок */}
                  <div className="w-full min-w-0 flex flex-col gap-3 pt-4 pb-1 px-0 text-left">
                    <div className="w-full min-w-0 flex flex-col gap-1.5 md:gap-4 lg:gap-1.5">
                      <span className="text-xs sm:text-sm text-[#9CA3AF] font-medium tracking-normal p-0 m-0">
                        {project.title}
                      </span>

                      <h3 className="w-full text-xl sm:text-2xl font-bold text-[#111827] tracking-tight p-0 m-0">
                        {fixOrphans(project.headline)}
                      </h3>

                      {project.description && (
                        <p className="w-full text-sm sm:text-base leading-relaxed font-sans text-[#4B5563] p-0 m-0 font-normal break-words pt-0.5">
                          <span>{fixOrphans(project.description)}</span>
                        </p>
                      )}
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-2 text-xs text-[#9CA3AF] font-medium pt-0.5">
                      {project.tags.map((tag, i) => (
                        <React.Fragment key={tag}>
                          {i > 0 && (
                            <span className="text-gray-300">•</span>
                          )}

                          <span className="hover:text-[#4B5563] transition-colors">
                            {tag}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>

      {/* Плашка вне карточек, чтобы не обрезалась */}
      {showDescription &&
        createPortal(
          <div
            aria-hidden="true"
            className="pointer-events-none fixed z-[9999] rounded-full bg-[#d1f366] px-4 py-2 text-sm font-medium leading-tight text-[#111827] shadow-sm whitespace-nowrap"
            style={{
              left: cursorPosition.x + 12,
              top: cursorPosition.y + 12,
            }}
          >
            Описание в процессе
          </div>,
          document.body
        )}
    </section>
  );
}

export default ProjectsSection;