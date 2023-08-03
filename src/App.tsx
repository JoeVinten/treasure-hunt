import { useEffect, useState } from "react";
import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./sections/Question";
import "./index.css";
import { Instructions } from "./sections/Instruction";
import { Cipher } from "./sections/Cipher";

export function App() {
  const [viewNumber, setViewNumber] = useState(
    Number(localStorage.getItem("treasurehunt-view")) || 0
  );

  const [completedRiddles, setCompletedRiddles] = useState(
    new Set(
      JSON.parse(
        localStorage.getItem("treasurehunt-completed") || "[]"
      ) as number[]
    )
  );

  useEffect(() => {
    localStorage.setItem("treasurehunt-view", viewNumber.toString());
    localStorage.setItem(
      "treasurehunt-completed",
      JSON.stringify(Array.from(completedRiddles))
    );
  }, [viewNumber, completedRiddles]);

  const completeRiddle = (riddleId: number) => {
    setViewNumber((viewNumber) => viewNumber + 1);
    setCompletedRiddles(
      (completedRiddles) => new Set([...completedRiddles, riddleId])
    );
  };

  const shouldShowCipher = completedRiddles.size === riddles.length;

  const Views = [
    <Prologue key="prologue" />,
    <Instructions key="instructions" />,
    ...riddles.map((riddle) => (
      <Question
        key={riddle.id}
        riddle={riddle}
        onCorrectAnswer={completeRiddle}
      />
    )),
    shouldShowCipher && <Cipher />,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream">
      <div className="max-w-md m-1">
        {Views[viewNumber]}
        <NavigationWrapper
          numberOfViews={Views.length}
          viewNumber={viewNumber}
          setViewNumber={setViewNumber}
          completedRiddles={completedRiddles}
        />
      </div>
    </main>
  );
}
