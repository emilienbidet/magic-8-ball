import { useEffect, useRef } from "preact/hooks";

type EventCallback = () => void;

export function useEventListener(callback: EventCallback) {
  const shakeThreshold = 15;
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
        if (now - lastShakeTimeRef.current > 1000) {
          lastShakeTimeRef.current = now;
          callback();
        }
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("devicemotion", handleMotionEvent);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("devicemotion", handleMotionEvent);
    };
  }, [callback]);
}
