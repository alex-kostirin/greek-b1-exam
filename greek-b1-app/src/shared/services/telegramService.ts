interface TelegramHapticFeedback {
  impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
  notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
}

interface TelegramCloudStorage {
  getItems: (
    keys: string[],
    callback: (error: Error | null, values?: Record<string, string>) => void
  ) => void;
  setItem: (
    key: string,
    value: string,
    callback?: (error: Error | null, stored?: boolean) => void
  ) => void;
}

interface TelegramWebAppInstance {
  ready: () => void;
  expand: () => void;
  disableVerticalSwipes?: () => void;
  HapticFeedback?: TelegramHapticFeedback;
  CloudStorage?: TelegramCloudStorage;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebAppInstance;
    };
  }
}

export type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'warning';

function getTelegramWebApp(): TelegramWebAppInstance | null {
  return window.Telegram?.WebApp ?? null;
}

export const telegramService = {
  initialize(): void {
    const webApp = getTelegramWebApp();
    if (!webApp) return;
    try {
      webApp.ready();
      webApp.expand();
      webApp.disableVerticalSwipes?.();
    } catch {
      return;
    }
  },

  triggerHaptic(type: HapticFeedbackType = 'light'): void {
    const haptic = getTelegramWebApp()?.HapticFeedback;
    if (!haptic) return;
    try {
      if (type === 'success' || type === 'error' || type === 'warning') {
        haptic.notificationOccurred(type);
      } else {
        haptic.impactOccurred(type);
      }
    } catch {
      return;
    }
  },

  getCloudStorage(): TelegramCloudStorage | null {
    return getTelegramWebApp()?.CloudStorage ?? null;
  },
};
