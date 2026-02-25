import { HapticPattern } from "./types";

export const defaultPatterns = {
  lightTap: [100, 0] as HapticPattern,
  success: [100, 0, 100, 0, 100] as HapticPattern,
  warning: [100, 0, 100, 100, 0] as HapticPattern,
  error: [100, 100, 0, 100, 100, 0, 100] as HapticPattern,
  impactMedium: [100, 100, 0] as HapticPattern,
} as const;
