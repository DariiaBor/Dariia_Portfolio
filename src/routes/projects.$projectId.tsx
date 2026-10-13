import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { DeloZhizniPage } from "@/components/projects/delo-zhizni/DeloZhizniPage";
import { LifescapePage } from "@/components/projects/lifescape/LifescapePage";
import { NpfEvolutsiyaPage } from "@/components/projects/npf-evolutsiya/NpfEvolutsiyaPage";
import { QuproQsellerPage } from "@/components/projects/qupro-qseller/QuproQsellerPage";
import { TravelmaniaPage } from "@/components/projects/travelmania/TravelmaniaPage";

const projectTitles: Record<string, string> = {
  "delo-zhizni": "Дело Жизни — Дария",
  "npf-evolutsiya": "НПФ Эволюция — Дария",
  "qupro-qseller": "QuPro & QSeller — Дария",
  "travelmania": "Travelmania — Дария",
  "lifescape": "LifeScape — Дария",
};

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectPageRoute,
  head: ({ params }) => {
    const title = projectTitles[params.projectId] || "Кейс — Дария";
    return {
      meta: [
        {
          title,
        },
      ],
    };
  },
});

function ProjectPageRoute() {
  const { projectId } = Route.useParams();

  useEffect(() => {
    const title = projectTitles[projectId] || "Кейс — Дария";
    document.title = title;
  }, [projectId]);

  switch (projectId) {
    case "delo-zhizni":
      return <DeloZhizniPage />;

    case "npf-evolutsiya":
      return <NpfEvolutsiyaPage />;

    case "qupro-qseller":
      return <QuproQsellerPage />;

    case "travelmania":
      return <TravelmaniaPage />;

    case "lifescape":
      return <LifescapePage />;

    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] text-[#111827]">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl font-bold">
              Проект «{projectId}» в разработке
            </h1>
            <p className="text-sm text-gray-500">
              Страница кейса скоро появится
            </p>
          </div>
        </div>
      );
  }
}