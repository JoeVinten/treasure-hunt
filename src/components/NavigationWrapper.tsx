import { Button } from "./Button";
import { riddles } from "../copy/riddles";

interface ButtonWrapperProps {
  numberOfViews: number;
  viewNumber: number;
  setViewNumber: React.Dispatch<React.SetStateAction<number>>;
  completedRiddles: Set<unknown>;
}

export const NavigationWrapper = ({
  numberOfViews,
  viewNumber,
  setViewNumber,
  completedRiddles,
}: ButtonWrapperProps) => {
  const handleNextButton = () => {
    viewNumber < numberOfViews - 1 && setViewNumber(Number(viewNumber) + 1);
  };

  const handlePrevButton = () => {
    viewNumber > 0 && setViewNumber(viewNumber - 1);
  };
  return (
    <div className="flex justify-evenly">
      {viewNumber > 0 ? (
        <Button handleClick={handlePrevButton} text="&lt; Previous" />
      ) : null}
      {viewNumber < numberOfViews - 1 &&
      (viewNumber < numberOfViews - 2 ||
        completedRiddles.size === riddles.length) ? (
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
