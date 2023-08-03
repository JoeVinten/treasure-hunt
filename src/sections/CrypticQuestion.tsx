import { useState, FormEvent } from "react";
import { Button } from "../components/Button";
import { TimedAlert } from "../components/TimedAlert";
import { timeoutDuration } from "../constants/shared";
import { TextInput } from "../components/TextInput";

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
        setTimeout(() => {
          onCorrectAnswer();
          setIsCorrect(null);
        }, timeoutDuration);
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
        <TextInput
          label={question}
          value={answer}
          onChange={setAnswer}
          name="cryptic-answer"
        />
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
