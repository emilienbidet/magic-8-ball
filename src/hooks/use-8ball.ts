import { pickRandomItem } from "../utils/pick-random-item";
import { useDebounce } from "./use-debounce";

export interface I8BallResponse {
  text: string;
  position: {
    offsetX: number;
    offsetY: number;
  },
  rotation: number;
}

const generateBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function use8Ball(answers: string[]) {
  const initState = () => ({
    text: pickRandomItem(answers),
    rotation: generateBetween(-25, 25),
    position: {
      offsetX: generateBetween(-10, 10),
      offsetY: generateBetween(-10, 20)
    }
  });

  const [debouncedState, state, setState] = useDebounce<I8BallResponse>({
    text: undefined,
    rotation: undefined,
    position: {
      offsetX: 0,
      offsetY: 0
    }
  }, 500);
  const { text, rotation, position } = debouncedState;
  const isReady = state.text === text && state.text !== undefined;

  const reRoll = () => {
    setState(initState());
  }

  return {
    text,
    position,
    rotation,
    isReady,
    roll: reRoll
  };
}
