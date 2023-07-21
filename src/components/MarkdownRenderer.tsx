import ReactMarkdown from "react-markdown";
import supersub from "remark-supersub";

export const MarkdownRenderer = ({
  markdownText,
}: {
  markdownText: string;
}) => {
  const renderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong style={{ color: "#E590A3" }}>{children}</strong>
    ),
    sup: ({ children }: { children: React.ReactNode }) => (
      <sup style={{ color: "#F2BD4C" }}>{children}</sup>
    ),
  };

  return (
    <ReactMarkdown components={renderers} remarkPlugins={[supersub]}>
      {markdownText}
    </ReactMarkdown>
  );
};
