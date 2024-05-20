import { hydrate, prerender as ssr } from "preact-iso";
import { Magic8Ball } from "./8ball";
import "./style.css";
import { Button } from "./button";

export function App() {
  return (
    <div className="w-full h-[calc(100dvh-1rem)] p-4">
      <h1 className="text-xl">Magic 8 Ball</h1>
      <div className="flex flex-col gap-8 items-center w-full">
        <Magic8Ball />
        <Button text="Magic" />
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
