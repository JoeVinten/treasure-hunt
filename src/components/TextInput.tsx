interface TextInputProps {
  name: string;
  expectedAnswer: string;
}

export const TextInput = ({ expectedAnswer }: TextInputProps) => {
  const isAnswerCorrect = (answer: string): boolean => {
    return answer === expectedAnswer;
  };

  return (
    <div className="flex justify-between flex-col p-4 max-w-md">
      <input
        name="answer"
        type="text"
        className="text-3xl font-bold text-center text-cream bg-lighter-dark"
      />
    </div>
  );
};
