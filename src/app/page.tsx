"use client";

import { useState } from "react";
import { Prologue } from "./sections/Prologue";
import { QuestionOne } from "./sections/QuestionOne";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { QuestionTwo } from "./sections/QuestionTwo";

const Views = [Prologue, QuestionOne, QuestionTwo];

export default function Home() {
  const [question, setQuestion] = useState(0);
  const ViewToRender = Views[question];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream h-full">
      <ViewToRender />
      <NavigationWrapper
        question={question}
        setQuestion={setQuestion}
        View={Views}
      />
    </main>
  );
}
