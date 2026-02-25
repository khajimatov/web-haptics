import { WebHaptics } from "../lib/web-haptics";
import type { HapticPattern } from "../lib/web-haptics/types";

export function createWebHaptics() {
  const instance = new WebHaptics();

  const trigger = (pattern?: HapticPattern) => instance.trigger(pattern);
  const destroy = () => instance.destroy();

  return { trigger, destroy };
}
