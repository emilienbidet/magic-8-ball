import { useEffect, useRef } from "preact/hooks";

type EventCallback = () => void;

export function useEventListener(callback: EventCallback) {
  const shakeThreshold = 10;
  const lastShakeTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleClick = () => {
      callback();
    };

    const handleKeydown = () => {
      callback();
    };

    const handleMotionEvent = (event: DeviceMotionEvent) => {
      const acceleration = event.acceleration;
      if (!acceleration) return;

      const shakeMagnitude = Math.sqrt(
        (acceleration.x || 0) ** 2 +
          (acceleration.y || 0) ** 2 +
          (acceleration.z || 0) ** 2
      );

      if (shakeMagnitude > shakeThreshold) {
        const now = Date.now();
        if (now - lastShakeTimeRef.current > 200) {
          lastShakeTimeRef.current = now;
          callback();
        }
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("devicemotion", handleMotionEvent);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("devicemotion", handleMotionEvent);
    };
  }, [callback]);
}
