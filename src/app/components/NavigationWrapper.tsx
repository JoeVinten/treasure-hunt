// Button Wrapper:
import { ComponentType } from "react";

interface ButtonWrapperProps {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
  View: ComponentType<any>[];
}

export const NavigationWrapper = ({
  question,
  setQuestion,
  View,
}: ButtonWrapperProps) => {
  const handleNextButton = () => {
    question < View.length - 1 && setQuestion(question + 1);
  };

  const handlePrevButton = () => {
    question > 0 && setQuestion(question - 1);
  };
  return (
    <div className="flex justify-evenly">
      {question > 0 ? (
        <button
          className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2"
          onClick={handlePrevButton}
        >
          &lt; Previous
        </button>
      ) : null}
      {question < View.length - 1 ? (
        <button
          className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2"
          onClick={handleNextButton}
        >
          Next &gt;
        </button>
      ) : null}
    </div>
  );
};
