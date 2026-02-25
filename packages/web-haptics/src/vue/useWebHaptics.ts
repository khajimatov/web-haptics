import { onMounted, onUnmounted } from "vue";
import { WebHaptics } from "../lib/web-haptics";
import type { HapticPattern } from "../lib/web-haptics/types";

export function useWebHaptics() {
  let instance: WebHaptics | null = null;

  onMounted(() => {
    instance = new WebHaptics();
  });

  onUnmounted(() => {
    instance?.destroy();
    instance = null;
  });

  const trigger = (pattern?: HapticPattern) => instance?.trigger(pattern);

  return { trigger };
}
