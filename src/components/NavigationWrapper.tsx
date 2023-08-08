import { Button } from "./Button";
import { riddles } from "../copy/riddles";

interface ButtonWrapperProps {
  numberOfViews: number;
  viewNumber: number;
  setViewNumber: React.Dispatch<React.SetStateAction<number>>;
  completedRiddles: Set<unknown>;
  shouldDisableNav: boolean;
}

export const NavigationWrapper = ({
  numberOfViews,
  viewNumber,
  setViewNumber,
  completedRiddles,
  shouldDisableNav,
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
        <button
          className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2 disabled:opacity-50"
          onClick={handlePrevButton}
          disabled={shouldDisableNav}
        >
          &lt; Previous
        </button>
      ) : null}
      {viewNumber < numberOfViews - 1 &&
      (viewNumber < numberOfViews - 2 ||
        completedRiddles.size === riddles.length) ? (
        // TODO: Somehow this is not using the button component will need to change that
        <button
          className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2 disabled:opacity-50"
          onClick={handleNextButton}
          disabled={shouldDisableNav}
        >
          Next &gt;
        </button>
      ) : null}
    </div>
  );
};
