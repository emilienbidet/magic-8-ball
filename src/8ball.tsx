import { useState } from "preact/hooks";
import { use8Ball } from "./hooks/use-8ball";
import { answers, pickRandomAnswer } from "./lib/magic-8-ball";
import { cn } from "./utils/cn";
import { useEventListener } from "./hooks/use-event-listener";

export function Magic8Ball() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { text, position, rotation, isReady, roll } = use8Ball(answers);

  useEventListener(roll);

  return (
    <div
      className={cn(
        "magic bg-black text-white rounded-full size-80 aspect-square flex items-center justify-center",
        {
          "animate-shake-n-zoom": isAnimating,
        }
      )}
    >
      <div className="inner-magic text-black rounded-full size-44 aspect-square overflow-hidden flex items-center justify-center relative">
        <div
          className={cn(
            "absolute scale triangle flex justify-center w-48 h-40 pt-4 opacity-0 transition-opacity duration-500 ease-in-out bg-[#3148FF] text-white",
            { "opacity-100": isReady }
          )}
          style={{
            transform: `rotate(${rotation}deg) translate(${position.offsetX}px, ${position.offsetY}px)`,
          }}
        >
          <span className="text-center uppercase [word-spacing:100vw] text-sm">{text}</span>
        </div>
      </div>
    </div>
  );
}
