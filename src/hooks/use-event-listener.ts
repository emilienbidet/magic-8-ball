import { useEffect } from "preact/hooks";

type EventCallback = () => void;

export function useEventListener(callback: EventCallback) {
  useEffect(() => {
    const handleClick = () => {
      callback();
    };

    const handleKeydown = () => {
      callback();
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
}
