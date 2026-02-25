import { useState } from "react";

import styles from "./styles.module.scss";
import { AutoResize } from "../auto-resizer";

export const CodeBlock = ({
  code,
  children,
}: {
  code: string;
  children?: React.ReactNode;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.copy}
        onClick={() => {
          if (code) {
            setIsCopied(true);
            navigator.clipboard.writeText(code.toString());
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }
        }}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
      <pre>
        <AutoResize>{children ?? code}</AutoResize>
      </pre>
    </div>
  );
};
