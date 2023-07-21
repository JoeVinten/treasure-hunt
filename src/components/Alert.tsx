import { MarkdownRenderer } from "./MarkdownRenderer";

export const Alert = ({
  text,
  type,
}: {
  text: string;
  type: "success" | "error";
}) => {
  return (
    <div
      className={`border-4 border-dashed rounded-md my-3 mx-2 p-4 font-mono leading-relaxed text-cream bg-lighter-dark ${
        type === "success" ? "border-mint-green" : "border-error-red"
      }`}
    >
      <MarkdownRenderer markdownText={text} />
    </div>
  );
};
