import { useState, FormEvent } from "react";
import { Button } from "../components/Button";
import { TimedAlert } from "../components/TimedAlert";
import { Paragraph } from "../components/Paragraph";

interface TextInputProps {
  question: string;
  expectedAnswer: string;
  onCorrectAnswer: () => void;
}

export const CrypticQuestion = ({
  question,
  expectedAnswer,
  onCorrectAnswer,
}: TextInputProps) => {
  const [answer, setAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const questionAnswer = formData.get("cryptic-answer");
    if (typeof questionAnswer === "string" && questionAnswer.trim()) {
      const isCorrect =
        questionAnswer.toLowerCase() === expectedAnswer.toLowerCase();
      setIsCorrect(isCorrect);
      if (isCorrect) {
        onCorrectAnswer();
      }
      setAnswer("");
    }
  };
  return (
    <form
      className="flex justify-between flex-col p-4 max-w-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="cryptic-answer">
        <Paragraph text={question} />
      </label>
      <input
        name="cryptic-answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        className="text-3xl font-bold text-center text-cream bg-lighter-dark"
      />
      {isCorrect !== null && (
        <TimedAlert
          type={isCorrect ? "success" : "error"}
          message={isCorrect ? "Correct!" : "Incorrect, try again."}
          duration={3000}
          clearAlert={() => setIsCorrect(null)}
        />
      )}
      <div className="text-center my-4">
        <Button text="Submit" disabled={!answer.trim()} />
      </div>
    </form>
  );
};
