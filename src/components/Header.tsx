import { MessageCircle } from "lucide-react";
import { useCurrentLesson } from "../store/slices/player";
import { useAppSelector } from "../store";

export const Header = () => {
  const { currentLesson, currentModule } = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  if (isCourseLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo "{currentModule?.title}"
        </span>
      </div>
      <button className="flex items-center gap-2 bg-red-700 rounded px-3 py-2 text-sm font-medium text-white hover:bg-red-600">
        <MessageCircle className="w-4 h-4" />
        Deixar feedback
      </button>
    </div>
  );
};
