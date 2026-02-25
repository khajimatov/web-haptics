import styles from "./styles.module.scss";

import { useWebHaptics } from "web-haptics/react";
import { Button } from "../button";
import { defaultPatterns } from "web-haptics";

export const Demo = () => {
  const { trigger } = useWebHaptics();

  return (
    <div className={styles.demo}>
      <div>
        <Button onClick={() => trigger()}>Light Tap</Button>
        <Button onClick={() => trigger(defaultPatterns.success)}>
          Success
        </Button>
        <Button onClick={() => trigger(defaultPatterns.warning)}>
          Warning
        </Button>
        <Button onClick={() => trigger(defaultPatterns.error)}>Error</Button>
      </div>
    </div>
  );
};
