import { createContext, useContext, useEffect, useState } from "react";
import { Prologue } from "./sections/Prologue";
import { NavigationWrapper } from "./components/NavigationWrapper";
import { riddles } from "./copy/riddles";
import { Question } from "./sections/Question";
import "./index.css";
import { Instructions } from "./sections/Instruction";

export const QuestionLocationContext = createContext({
  question: Number(localStorage.getItem("question")) || 0,
  setQuestion: (question: number) => {},
});

function QuestionLocationProvider({
  children,
}: {
  children: (views: React.ReactNode[]) => React.ReactNode;
}) {
  const [question, setQuestion] = useState(0);

  useEffect(() => {
    localStorage.setItem("question", question.toString());
  }, [question]);

  const Views = [
    <Prologue key="prologue" />,
    <Instructions key="instructions" />,
    ...riddles.map((riddle) => <Question key={riddle.id} riddle={riddle} />),
  ];

  return (
    <QuestionLocationContext.Provider value={{ question, setQuestion }}>
      {children(Views)}
    </QuestionLocationContext.Provider>
  );
}

export function App() {
  return (
    <QuestionLocationProvider>
      {(Views) => (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-dark text-cream">
          <div className="max-w-md m-1">
            <QuestionLocationContext.Consumer>
              {({ question }) => (
                <>
                  {Views[question]}
                  <NavigationWrapper View={Views} />
                </>
              )}
            </QuestionLocationContext.Consumer>
          </div>
        </main>
      )}
    </QuestionLocationProvider>
  );
}
