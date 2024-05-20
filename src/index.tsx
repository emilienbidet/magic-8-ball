import { hydrate, prerender as ssr } from "preact-iso";
import { Magic8Ball } from "./8ball";
import "./style.css";

export function App() {
  return (
    <div className="w-full h-[calc(100dvh-1rem)] flex flex-col items-center justify-between gap-8 p-4">
      <h1 className="text-xl font-bold">Magic 8 Ball</h1>
      <Magic8Ball />
      <p className="italic text-center text-sm text-gray-700">
        Cliquer n'importe où pour avoir une réponse de la boule magique
      </p>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
