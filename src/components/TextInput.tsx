import { Paragraph } from "./Paragraph";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
}

export const TextInput = ({ label, value, onChange, name }: TextInputProps) => (
  <div className="max-w-full">
    <label htmlFor={name}>
      <Paragraph text={label} />
    </label>
    <input
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      className="text-3xl font-bold text-center text-cream bg-lighter-dark max-w-full	"
    />
  </div>
);
