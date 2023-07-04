import { Paragraph } from "../components/Paragraph";
import { prologueText } from "../copy/prologue";

export const Prologue = () => (
  <div className="flex justify-between flex-col p-4 max-w-md">
    <h1 className="text-3xl font-bold text-center text-orangey-yellow">
      Time Heist: <span className="italic">London&apos;s Legacy</span>
    </h1>
    <div>
      {prologueText.map((paragraph, index) => (
        <Paragraph key={index} markdownText={paragraph} />
      ))}
    </div>
  </div>
);
