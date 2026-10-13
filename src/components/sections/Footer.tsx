import React from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";

const fixOrphans = (text: string): string => {
  if (!text) return "";
  return text.replace(
    /(\s|^)(в|во|без|до|из|к|ко|на|по|о|об|обо|от|при|с|со|у|за|над|под|про|для|и|а|но|или)\s+/gi,
    "$1$2\u00A0"
  );
};

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    href: string
  ) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      navigate({ to: href });
    }
  };

  return (
    <footer className="relative w-full bg-[#111827] text-gray-300 pt-8 pb-6 px-4 sm:px-8 md:px-12 xl:px-16 overflow-hidden border-t border-gray-800/80 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
        {/* Основные 3 колонки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
          {/* КОЛОНКА 1: Навигация */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-['Plus_Jakarta_Sans',sans-serif]">
              Навигация
            </span>
            <ul className="flex flex-col gap-1.5 text-sm font-medium">
              <li>
                <a
                  href="/#projects"
                  onClick={(e) =>
                    handleAnchorClick(e, "projects", "/#projects")
                  }
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block cursor-pointer"
                >
                  Проекты
                </a>
              </li>

              {/*
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block cursor-pointer"
                  activeProps={{ className: "text-[#1E45FB]" }}
                >
                  Обо мне
                </Link>
              </li>
              */}

              <li>
                <Link
                  to="/resume"
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block cursor-pointer"
                  activeProps={{ className: "text-[#1E45FB]" }}
                >
                  Резюме
                </Link>
              </li>
            </ul>
          </div>

          {/* КОЛОНКА 2: Контакты */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-['Plus_Jakarta_Sans',sans-serif]">
              Связь
            </span>
            <ul className="flex flex-col gap-1.5 text-sm font-medium">
              <li>
                <a
                  href="mailto:dariiaborart@gmail.com"
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block"
                >
                  dariiaborart@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Dariiabor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="tel:+79939809039"
                  className="text-gray-300 hover:text-[#1E45FB] transition-colors duration-200 inline-block"
                >
                  +7 (993) 980-90-39
                </a>
              </li>
            </ul>
          </div>

          {/* КОЛОНКА 3: Локация и Формат */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-['Plus_Jakarta_Sans',sans-serif]">
              Локация & Формат
            </span>
            <div className="flex flex-col gap-1 text-sm leading-relaxed text-gray-300">
              <p className="font-medium text-white">
                {fixOrphans("РФ, Санкт-Петербург")}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {fixOrphans(
                  "Удалённая работа из любой точки мира или гибрид / офис в городе."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Нижний бар (Bottom Bar) */}
        <div className="pt-5 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-['Plus_Jakarta_Sans',sans-serif]">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Dariia Borisenkova
          </p>

          {/* Индикатор статуса с зеленым импульсом */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-400 font-medium">
              Available for product design opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;