import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./sections/Question";
import "./index.css";
import { Instructions } from "./sections/Instruction";
import { Cipher } from "./sections/Cipher";
import { useRiddles } from "./hooks/useRiddles";
import { useMemo, useState } from "react";

export function App() {
  const { viewNumber, setViewNumber, completedRiddles, completeRiddle } =
    useRiddles();

  const [shouldDisableNav, setShouldDisableNav] = useState(false);

  const Views = useMemo(
    () => [
      <Prologue key="prologue" />,
      <Instructions key="instructions" />,
      ...riddles.map((riddle) => (
        <Question
          key={riddle.id}
          riddle={riddle}
          onCorrectAnswer={completeRiddle}
          setShouldDisableNav={setShouldDisableNav}
        />
      )),
      completedRiddles.size === riddles.length && <Cipher />,
    ],
    [completedRiddles, completeRiddle]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream">
      <div className="max-w-md m-1">
        {Views[viewNumber]}
        <NavigationWrapper
          numberOfViews={Views.length}
          viewNumber={viewNumber}
          setViewNumber={setViewNumber}
          completedRiddles={completedRiddles}
          shouldDisableNav={shouldDisableNav}
        />
      </div>
    </main>
  );
}
