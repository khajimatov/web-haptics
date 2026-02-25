"use client";

import { useRef, useEffect } from "react";
import { WebHaptics } from "../lib/web-haptics";
import type { HapticPattern } from "../lib/web-haptics/types";

export function useWebHaptics() {
  const instanceRef = useRef<WebHaptics | null>(null);

  useEffect(() => {
    instanceRef.current = new WebHaptics();
    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, []);

  const trigger = (pattern?: HapticPattern) =>
    instanceRef.current?.trigger(pattern);

  return { trigger };
}
