import { useState } from "react";
import { Paragraph } from "../components/Paragraph";
import { TextInput } from "../components/TextInput";
import { cipher } from "../copy/riddles";
import { Button } from "../components/Button";
import { Alert } from "../components/Alert";

export const Cipher = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cipherAnswer = formData.get("cipher-answer");
    if (typeof cipherAnswer === "string" && cipherAnswer.trim()) {
      setIsCorrect(cipherAnswer.toLowerCase() === cipher.answer.toLowerCase());
      console.log(isCorrect);
      setAnswer("");
    }
  };

  if (isCorrect) return <Alert text={cipher.answerAlert} type="success" />;

  return (
    <>
      <Paragraph text={cipher.introduction} />
      <Paragraph text={cipher.task} />
      <Paragraph text={cipher.questionAnswerReminders} />
      <form
        className="flex justify-between flex-col p-4 max-w-md"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Input your answer below: "
          value={answer}
          onChange={(value) => setAnswer(value)}
          name="cipher-answer"
        />
        <div className="text-center my-4">
          <Button text="Submit" />
        </div>
      </form>
    </>
  );
};
