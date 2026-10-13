import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

// Якорные ссылки
const navLinks = [
  { label: "Проекты", href: "/#projects", targetId: "projects" },
] as const;

// Ссылки для связи
const CONTACT_LINKS = {
  telegram: "https://t.me/Dariiabor",
  email: "mailto:dariiaborart@gmail.com",
  phone: "tel:+79939809039",
};

const iconButtonClassName =
  "flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-gray-100/80 backdrop-blur-sm text-[#111827] transition-all duration-200 hover:bg-gray-200/90 hover:text-[#111827] active:scale-95 cursor-pointer";

// Кнопка без дополнительного свечения, чистая заливка
const primaryCtaClassName =
  "flex h-[40px] shrink-0 items-center justify-center rounded-full bg-[#111827] px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1E45FB] active:scale-95 cursor-pointer";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  // Универсальный хэндлер для плавного скролла по якорям
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    href: string
  ) => {
    closeMobileMenu();

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
    <div className="fixed top-6 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        className={`relative flex items-center justify-between rounded-full border border-white/60 bg-white/70 px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/5" : "shadow-none"
        }`}
      >
        {/* Left: Avatar + Name */}
        <div className="flex shrink-0 items-center z-10 gap-3">
          <img
            src="/Image_me.jpg"
            alt="Дария Борисенкова"
            className="w-[40px] h-[40px] rounded-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
            }}
          />
          <Link
            to="/"
            className="truncate font-semibold text-base tracking-tight text-[#111827]"
            onClick={closeMobileMenu}
          >
            Дария Борисенкова
          </Link>
        </div>

        {/* Center: Links (Absolute Centering) */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex">
          {navLinks.map(({ label, href, targetId }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleAnchorClick(e, targetId, href)}
              className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#111827] cursor-pointer"
            >
              {label}
            </a>
          ))}

          {/*
          <Link
            to="/about"
            className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#111827] cursor-pointer"
            activeProps={{ className: "text-[#1E45FB]" }}
          >
            Обо мне
          </Link>
          */}

          <Link
            to="/resume"
            className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#111827] cursor-pointer"
            activeProps={{ className: "text-[#1E45FB]" }}
          >
            Резюме
          </Link>
        </div>

        {/* Right: Desktop Action Group */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex z-10">
          <a
            href={CONTACT_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryCtaClassName}
          >
            Telegram
          </a>
          <a
            href={CONTACT_LINKS.email}
            aria-label="Написать на почту"
            className={iconButtonClassName}
          >
            <Mail size={20} strokeWidth={2} />
          </a>
          <a
            href={CONTACT_LINKS.phone}
            aria-label="Позвонить"
            className={iconButtonClassName}
          >
            <Phone size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Right: Mobile Burger Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMobileOpen((open) => !open)}
          className={`${iconButtonClassName} lg:hidden z-10`}
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Menu size={20} strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="mt-2 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg shadow-black/5 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map(({ label, href, targetId }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleAnchorClick(e, targetId, href)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-[#4B5563] transition-colors hover:bg-white/60 hover:text-[#111827]"
              >
                {label}
              </a>
            ))}

            {/*
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="rounded-xl px-3 py-2.5 text-base font-medium text-[#4B5563] transition-colors hover:bg-white/60 hover:text-[#111827]"
              activeProps={{ className: "text-[#1E45FB] bg-white/60" }}
            >
              Обо мне
            </Link>
            */}

            <Link
              to="/resume"
              onClick={closeMobileMenu}
              className="rounded-xl px-3 py-2.5 text-base font-medium text-[#4B5563] transition-colors hover:bg-white/60 hover:text-[#111827]"
              activeProps={{ className: "text-[#1E45FB] bg-white/60" }}
            >
              Резюме
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-gray-200/60 pt-4">
            <a
              href={CONTACT_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className={`${primaryCtaClassName} w-full`}
            >
              Написать в Telegram
            </a>
            <div className="flex items-center justify-center gap-3">
              <a
                href={CONTACT_LINKS.email}
                aria-label="Написать на почту"
                onClick={closeMobileMenu}
                className={iconButtonClassName}
              >
                <Mail size={20} strokeWidth={2} />
              </a>
              <a
                href={CONTACT_LINKS.phone}
                aria-label="Позвонить"
                onClick={closeMobileMenu}
                className={iconButtonClassName}
              >
                <Phone size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}