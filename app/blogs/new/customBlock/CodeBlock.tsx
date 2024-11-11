// CodeBlock.tsx
import { createReactBlockSpec } from "@blocknote/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeBlockSpec = createReactBlockSpec(
  {
    type: "code",
    propSchema: {
      language: {
        default: "javascript",
        values: ["javascript", "python", "java", "c++", "ruby", "swift"],
      },
      code: {
        default: "",
        type: "string",
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const { language, code } = props.block.props;
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {code}
        </SyntaxHighlighter>
      );
    },
  }
);

export default codeBlockSpec;