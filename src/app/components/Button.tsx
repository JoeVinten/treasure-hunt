interface ButtonProps {
  text: string;
  handleClick: () => void;
}

export const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
