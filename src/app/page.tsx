"use client";

import { useState } from "react";
import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./components/Question";

export default function Home() {
  const [question, setQuestion] = useState(0);

  const Views = [
    <Prologue key="prologue" />,
    ...riddles.map((riddle) => (
      <Question key={riddle.id} riddle={riddle.riddle} answer={riddle.answer} />
    )),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream h-full">
      <div className="max-w-md">
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
