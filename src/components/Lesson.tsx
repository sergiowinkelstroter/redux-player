import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export const Lesson = ({
  onPlay,
  duration,
  title,
  isCurrent = false,
}: LessonProps) => {
  return (
    <button
      onClick={onPlay}
      disabled={isCurrent}
      className={`flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 ${
        isCurrent && "text-red-500"
      }`}
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-red-500" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
};
