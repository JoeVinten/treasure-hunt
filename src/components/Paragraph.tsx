import { MarkdownRenderer } from "./MarkdownRenderer";

export const Paragraph = ({ text }: { text: string }) => {
  return (
    <div className="bg-lighter-dark rounded-md my-3 mx-2 p-4 font-mono leading-relaxed break-words">
      <MarkdownRenderer markdownText={text} />
    </div>
  );
};
