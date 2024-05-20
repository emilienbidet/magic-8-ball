import { useEffect } from "preact/hooks";
import { useDebounce } from "./hooks/use-debounce";
import { pickRandomAnswer } from "./lib/magic-8-ball";

export function Magic8Ball() {
  const [debouncedAnswer, answer, setAnswer] = useDebounce(undefined, 500);

  const changeAnswer = () => {
    console.log("changeAnswer");
    setAnswer(pickRandomAnswer());
  };

  useEffect(() => {
    document.addEventListener("click", changeAnswer);
    document.addEventListener("keydown", changeAnswer);

    return () => {
      document.removeEventListener("click", changeAnswer);
      document.removeEventListener("keydown", changeAnswer);
    };
  }, []);

  return (
    <div className="bg-black text-white rounded-full w-[75vw] aspect-square flex items-center justify-center">
      <div className="bg-white text-black rounded-full w-[40vw] aspect-square overflow-hidden flex items-center justify-center">
        <span className="text-center">{debouncedAnswer}</span>
      </div>
    </div>
  );
}
