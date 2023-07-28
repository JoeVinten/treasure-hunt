interface ButtonProps {
  text: string;
  handleClick?: () => void;
  center?: boolean;
  disabled?: boolean;
}

export const Button = ({ text, handleClick, disabled }: ButtonProps) => {
  return (
    <button
      className="bg-orangey-yellow text-lighter-dark py-3 px-5 rounded-md font-bold  mx-2 my-0 disabled:opacity-50"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
