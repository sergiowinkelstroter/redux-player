import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  numberOfLesson: number;
}

export const Module = ({ moduleIndex, numberOfLesson, title }: ModuleProps) => {
  const dispatch = useDispatch();

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return { currentLessonIndex, currentModuleIndex };
  });

  const lessons = useAppSelector((state) => {
    return state.player.course?.modules[moduleIndex].lessons;
  });
  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-base">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{numberOfLesson} aulas</span>
        </div>

        <ChevronDown className="h-5 w-5 ml-auto text-zinc-400 group-data-[state='open']:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const current =
                currentLessonIndex === lessonIndex &&
                currentModuleIndex === moduleIndex;
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                  isCurrent={current}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
