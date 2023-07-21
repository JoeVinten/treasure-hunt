import { ReactElement, useContext } from "react";
import { Button } from "./Button";
import { QuestionLocationContext } from "../App";

interface ButtonWrapperProps {
  View: ReactElement<unknown, string | React.JSXElementConstructor<unknown>>[]; // Use ReactElement type
}

export const NavigationWrapper = ({ View }: ButtonWrapperProps) => {
  const { question, setQuestion } = useContext(QuestionLocationContext);

  const handleNextButton = () => {
    question < View.length - 1 && setQuestion(Number(question) + 1);
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
