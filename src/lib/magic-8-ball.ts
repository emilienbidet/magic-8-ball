import { pickRandomItem } from "../utils/pick-random-item";

const positiveAnswers = [
  "Oui",
  "Mais à fond c'est le destin",
  "Oui. Catégorique.",
  "Franchement fonce.",
  "C’est écrit dans les étoiles.",
  "Go for it",
];

const negativeAnswers = [
  "Non",
  "Peut-être",
  "Je ne sais pas",
  "Probablement",
  "Probablement pas",
  "Dans tes rêves",
  "Nong.",
  "T'aimerais mais je crois pas",
  "T'as un problème toi",
  "Sympa... mais non",
  "Bong...",
  "Je sais même pas quoi répondre",
  "Oui mais non",
  "Bof",
  "Ça se complique...",
  "Oui, mais tu ne vas pas aimer.",
  "Tout indique que non.",
  "L’univers conspire pour toi !",
  "C'est mort, déso.",
];

export const answers = [...positiveAnswers, ...negativeAnswers];

export function pickRandomAnswer() {
  return pickRandomItem(answers);
}
