import { useState, FormEvent } from "react";
import { Button } from "../components/Button";
import { TimedAlert } from "../components/TimedAlert";
import { Paragraph } from "../components/Paragraph";
import { timeoutDuration } from "../constants/shared";

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
  const [message, setMessage] = useState<string>("");
  const [displayAlert, setDisplayAlert] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const questionAnswer = formData.get("cryptic-answer");
    if (typeof questionAnswer === "string" && questionAnswer.trim()) {
      const isCorrect =
        questionAnswer.toLowerCase() === expectedAnswer.toLowerCase();
      setIsCorrect(isCorrect);
      if (isCorrect) {
        setMessage("Correct! Good job!");
        setTimeout(onCorrectAnswer, timeoutDuration);
      } else {
        setMessage("Incorrect, try again.");
      }
      setAnswer("");
      setDisplayAlert(true);
    }
  };

  return (
    <form
      className="flex justify-between flex-col p-4 max-w-md"
      onSubmit={handleSubmit}
    >
      {!isCorrect ? (
        <>
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
        </>
      ) : (
        false
      )}

      {displayAlert && (
        <TimedAlert
          type={isCorrect ? "success" : "error"}
          message={message}
          duration={timeoutDuration}
          clearAlert={() => {
            setMessage("");
            setDisplayAlert(false);
          }}
        />
      )}
      <div className="text-center my-4">
        <Button text="Submit" disabled={!answer.trim()} />
      </div>
    </form>
  );
};
