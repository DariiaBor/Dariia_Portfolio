import React, { useEffect, useRef, useState } from "react";

interface MockupItem {
  id: number;
  title: string;
  imageSrc: string;
  badge: string;
}

const MOCKUPS: MockupItem[] = [
  {
    id: 1,
    title: "Главный экран платформы",
    badge: "B2B / B2C Hub",
    imageSrc: "/projects/delo-zhizni/dz-main.jpg",
  },
  {
    id: 2,
    title: "Детальная страница полиса",
    badge: "Policy Management",
    imageSrc: "/projects/delo-zhizni/dz-policy-details.jpg",
  },
  {
    id: 3,
    title: "Калькулятор страховых продуктов",
    badge: "Calculator",
    imageSrc: "/projects/delo-zhizni/dz-calculator.jpg",
  },
  {
    id: 4,
    title: "Реестр и статус обращений",
    badge: "Claims List",
    imageSrc: "/projects/delo-zhizni/dz-claims.jpg",
  },
  {
    id: 5,
    title: "Оформление страхового случая",
    badge: "Claim Creation",
    imageSrc: "/projects/delo-zhizni/dz-create-claim.jpg",
  },
];

export function ProjectMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.75,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const duplicatedMockups = [...MOCKUPS, ...MOCKUPS];

  return (
    // Уменьшили отступы на мобилке: py-3 sm:py-6 md:py-12
    <div ref={containerRef} className="relative w-full overflow-hidden py-3 sm:py-6 md:py-12 group">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Бегущий трек */}
      <div 
        className="flex w-max gap-4 sm:gap-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: "marquee 60s linear infinite",
          animationPlayState: isVisible ? "running" : "paused",
        }}
      >
        {duplicatedMockups.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative w-[300px] sm:w-[480px] md:w-[560px] aspect-[16/10] rounded-xl border border-gray-200 bg-white overflow-hidden flex-shrink-0"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}