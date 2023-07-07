// Button Wrapper:
import { ComponentType, ReactElement } from "react";
import { Button } from "./Button";

interface ButtonWrapperProps {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
  View: ReactElement<any, string | React.JSXElementConstructor<any>>[]; // Use ReactElement type
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
        <Button handleClick={handlePrevButton} text="&lt; Previous" />
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
