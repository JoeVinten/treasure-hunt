import { useState, FormEvent } from "react";
import { Button } from "./Button";

interface TextInputProps {
  expectedAnswer: string;
}

export const TextInput = ({ expectedAnswer }: TextInputProps) => {
  const [answer, setAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const questionAnswer = formData.get("answer");
    if (typeof questionAnswer === "string" && questionAnswer.trim()) {
      if (questionAnswer.toLowerCase() === expectedAnswer.toLowerCase()) {
        setIsCorrect(true);
      }
      setAnswer("");
    }
  };

  return (
    <form
      className="flex justify-between flex-col p-4 max-w-md"
      onSubmit={handleSubmit}
    >
      <input
        name="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        className="text-3xl font-bold text-center text-cream bg-lighter-dark"
      />
      {isCorrect ? (
        <p className="text-3xl font-bold text-center text-cream bg-lighter-dark">
          Correct!
        </p>
      ) : null}

      <Button text="Submit" />
    </form>
  );
};
