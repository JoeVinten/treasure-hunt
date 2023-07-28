import { useEffect, useState } from "react";
import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./sections/Question";
import "./index.css";
import { Instructions } from "./sections/Instruction";

export function App() {
  const [viewNumber, setViewNumber] = useState(
    Number(localStorage.getItem("view")) || 0
  );

  useEffect(() => {
    localStorage.setItem("view", viewNumber.toString());
  }, [viewNumber]);

  const Views = [
    <Prologue key="prologue" />,
    <Instructions key="instructions" />,
    ...riddles.map((riddle) => <Question key={riddle.id} riddle={riddle} />),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream">
      <div className="max-w-md m-1">
        {Views[viewNumber]}
        <NavigationWrapper
          View={Views}
          viewNumber={viewNumber}
          setViewNumber={setViewNumber}
        />
      </div>
    </main>
  );
}
