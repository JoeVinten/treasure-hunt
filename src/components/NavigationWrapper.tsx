import { ReactNode } from "react";
import { Button } from "./Button";

interface ButtonWrapperProps {
  View: ReactNode[];
  viewNumber: number;
  setViewNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const NavigationWrapper = ({
  viewNumber,
  setViewNumber,
  View,
}: ButtonWrapperProps) => {
  const handleNextButton = () => {
    viewNumber < View.length - 1 && setViewNumber(Number(viewNumber) + 1);
  };

  const handlePrevButton = () => {
    viewNumber > 0 && setViewNumber(viewNumber - 1);
  };
  return (
    <div className="flex justify-evenly">
      {viewNumber > 0 ? (
        <Button handleClick={handlePrevButton} text="&lt; Previous" />
      ) : null}
      {viewNumber < View.length - 1 ? (
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
