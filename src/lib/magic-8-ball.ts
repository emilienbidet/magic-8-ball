import { pickRandomItem } from "../utils/pick-random-item";

const positiveAnswers = [
  "Oui. Catégorique.",
  "Oui",
  "Probablement",
  "Oui oui tkt",
  "Pourquoi pas",
  "Absolument.",
  "C'est possible",
  "C'est le destin",
];

const negativeAnswers = [
  "Non",
  "Probablement pas",
  "Dans tes rêves",
  "Nong.",
  "Sympa... mais non",
  "Oui mais non",
  "Ça se complique...",
  "Tout indique que non.",
  "C'est mort, déso.",
  "Non, jamais",
  "Absolument pas.",
];

const neutralAnswers = [
  "Je ne sais pas",
  "Peut-être",
  "Je ne sais pas",
  "T'as un problème toi",
  "Bong...",
  "Bof",
  "AH (celui de Denis Brogniart)",
  "Une chance sur deux",
  "Mieux vaut ne pas te le dire maintenant.",
  "Impossible de prédire pour le moment.",
];

export const answers = [
  ...positiveAnswers,
  ...negativeAnswers,
  ...neutralAnswers,
];

export function pickRandomAnswer() {
  return pickRandomItem(answers);
}
