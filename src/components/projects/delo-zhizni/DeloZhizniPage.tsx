import { HeroBackground } from "../../HeroBackground";
import { Footer } from "../../sections/Footer";
import { DeloZhizniHero } from "./DeloZhizniHero";
import { ProjectMetrics } from "./ProjectMetrics";
import { BusinessProblem } from "./BusinessProblem";
import { DiscoveryProcess } from "./DiscoveryProcess";
import { BpmnFlow } from "./BpmnFlow";
import { ProjectTask } from "./ProjectTask";
import { DesignSolutions } from "./DesignSolutions";
import { ProjectResults } from "./ProjectResults";
import { ScrollTracer } from "./ScrollTracer";

export function DeloZhizniPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip flex flex-col justify-between">
      
      {/* 1. Динамический фон только для первого экрана */}
      <div className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
        <HeroBackground />
      </div>

      {/* 2. Основной контент */}
      <main className="w-full flex-1 pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent font-['Manrope',sans-serif]">
        
        {/* Первый блок — Hero */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8 sm:gap-16">
          <DeloZhizniHero />
        </div>

        {/* Последующие блоки */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-16">
          
          <ProjectMetrics />

          <ScrollTracer variant="left-to-center" />

          <BusinessProblem />

          <ScrollTracer variant="right-to-left" />

          <DiscoveryProcess />

          <BpmnFlow />

          <ScrollTracer variant="center-to-center" />

          <ProjectTask />

          <ScrollTracer variant="center-to-center" />

          <DesignSolutions />

          {/* Соединитель перед результатами */}
          <ScrollTracer variant="center-to-left" />

          {/* Новый блок "Бизнес-результаты" */}
          <ProjectResults />

        </div>

      </main>

      {/* 3. Единый футер */}
      <Footer />

    </div>
  );
}