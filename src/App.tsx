import { useState } from "react";
import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./components/Question";
import "./index.css";

export function App() {
  const [question, setQuestion] = useState(0);

  const Views = [
    <Prologue key="prologue" />,
    ...riddles.map((riddle) => (
      <Question key={riddle.id} riddle={riddle.riddle} answer={riddle.answer} />
    )),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream">
      <div className="max-w-md m-1">
        {Views[question]}
        <NavigationWrapper
          question={question}
          setQuestion={setQuestion}
          View={Views}
        />
      </div>
    </main>
  );
}
