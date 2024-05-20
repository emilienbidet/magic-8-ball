import { pickRandomItem } from "../utils/pick-random-item";

export interface I8BallResponse {
  text: string;
  rotation: number;
}

export function use8Ball(answers: string[]) {
  const getResponse = (): I8BallResponse => {
    return {
      text: pickRandomItem(answers),
      rotation: -25 + Math.floor(Math.random() * 50),
    };
  };

  return { getResponse };
}
