import { useState } from "preact/hooks";
import { useDebounce } from "./hooks/use-debounce";
import { pickRandomAnswer } from "./lib/magic-8-ball";
import { cn } from "./utils/cn";
import { useEventListener } from "./hooks/use-event-listener";

export function Magic8Ball() {
  const [debouncedAnswer, answer, setAnswer] = useDebounce<string | undefined>(
    undefined,
    500
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const changeAnswer = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setAnswer(pickRandomAnswer());
      setIsAnimating(false);
    }, 500);
  };

  useEventListener(changeAnswer);

  return (
    <div
      className={cn(
        "bg-black text-white rounded-full size-80 aspect-square flex items-center justify-center",
        {
          "animate-shake-n-zoom": isAnimating,
        }
      )}
    >
      <div className="bg-white text-black rounded-full size-44 aspect-square overflow-hidden flex items-center justify-center relative">
        <div
          className={cn(
            "absolute scale triangle flex justify-center w-40 h-32 pt-4 opacity-0 transition-opacity duration-500 ease-in-out bg-[#3148FF] text-white",
            { "opacity-100": answer == debouncedAnswer && answer != undefined }
          )}
        >
          <span className="text-center">{debouncedAnswer}</span>
        </div>
      </div>
    </div>
  );
}
