import { defaultPatterns } from "./patterns";
import type { HapticPattern } from "./types";

export class WebHaptics {
  private hapticLabel: HTMLLabelElement | null = null;

  constructor() {
    const hapticLabel = document.createElement("label");
    hapticLabel.setAttribute("for", "haptic");
    hapticLabel.style.display = "none";
    hapticLabel.textContent = "Haptic feedback";
    this.hapticLabel = hapticLabel;

    const hapticCheckbox = document.createElement("input");
    hapticCheckbox.type = "checkbox";
    hapticCheckbox.setAttribute("switch", "");
    hapticCheckbox.id = "haptic";
    hapticCheckbox.style.display = "none";

    hapticLabel.appendChild(hapticCheckbox);
    document.body.appendChild(hapticLabel);
  }

  async trigger(vibratePattern: HapticPattern = defaultPatterns.lightTap) {
    if (navigator.vibrate) {
      navigator.vibrate(vibratePattern);
    } else {
      if (!this.hapticLabel) return;

      for (let i = 0; i < vibratePattern.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, vibratePattern[i]));
        this.hapticLabel?.click();
      }
    }
  }

  destroy() {
    if (this.hapticLabel) {
      this.hapticLabel.remove();
      this.hapticLabel = null;
    }
  }
}
