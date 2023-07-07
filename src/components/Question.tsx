import { Paragraph } from "./Paragraph";
import { TextInput } from "./TextInput";

interface QuestionProps {
  riddle: string;
  answer: string;
}

export const Question = ({ riddle, answer }: QuestionProps) => {
  return (
    <div>
      <Paragraph markdownText={riddle} />

      <TextInput name="answer" expectedAnswer={answer} />
    </div>
  );
};
