import { Paragraph } from "../components/Paragraph";
import { instructions } from "../copy/starterText";

export const Instructions = () => (
  <div className="flex justify-between flex-col">
    <h1 className="text-3xl font-bold text-center text-orangey-yellow">
      Instructions
    </h1>
    <div>
      {instructions.map((paragraph, index) => (
        <Paragraph key={index} text={paragraph} />
      ))}
    </div>
  </div>
);
