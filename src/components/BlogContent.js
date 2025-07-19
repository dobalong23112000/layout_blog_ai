import { components } from "../components/MDXComponents";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function BlogContent({ content }) {
  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
