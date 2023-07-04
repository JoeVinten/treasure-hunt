import ReactMarkdown from "react-markdown";
import supersub from "remark-supersub";

export const Paragraph = ({ markdownText }: { markdownText: string }) => {
  const renderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong style={{ color: "#E590A3" }}>{children}</strong>
    ),
    sup: ({ children }: { children: React.ReactNode }) => (
      <sup style={{ color: "#F2BD4C" }}>{children}</sup>
    ),
  };

  return (
    <div className="bg-lighter-dark rounded-md my-3 p-4 font-mono leading-relaxed">
      <ReactMarkdown components={renderers} remarkPlugins={[supersub]}>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};
