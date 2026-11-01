export const speechService = {
  speakGreek(rawText: string): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const sanitizedText = rawText
        .replace(/\([^)]*\)/g, '')
        .replace(/[≠→/]/g, ', ')
        .trim();
      const utterance = new SpeechSynthesisUtterance(sanitizedText);
      utterance.lang = 'el-GR';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    } catch {
      return;
    }
  },
};
