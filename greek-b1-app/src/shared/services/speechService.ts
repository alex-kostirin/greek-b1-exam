let activeAudio: HTMLAudioElement | null = null;
const blobUrlCache = new Map<string, string>();

function sanitizeGreekForTts(rawText: string): string {
  return rawText
    .replace(/\([^)]*\)/g, '')
    .replace(/•/g, '')
    .replace(/[≠→/]/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 190);
}

function buildGoogleTranslateTtsUrls(text: string): string[] {
  const encoded = encodeURIComponent(text);
  const directGtx = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=el&dt=t&q=${encoded}`;
  const directTwOb = `https://translate.google.com/translate_tts?ie=UTF-8&tl=el&client=tw-ob&q=${encoded}`;
  const proxiedGtx = `https://corsproxy.io/?${encodeURIComponent(directGtx)}`;
  return [directGtx, directTwOb, proxiedGtx];
}

function stopCurrentPlayback(): void {
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.src = '';
    } catch {
      activeAudio = null;
    }
    activeAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      return;
    }
  }
}

function fallbackNativeSpeech(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'el-GR';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  } catch {
    return;
  }
}

async function playFromUrlSequence(urls: string[], text: string, index: number = 0): Promise<void> {
  if (index >= urls.length) {
    fallbackNativeSpeech(text);
    return;
  }

  const cachedBlobUrl = blobUrlCache.get(text);
  const targetUrl = cachedBlobUrl ?? urls[index];

  try {
    const audio = new Audio();
    audio.referrerPolicy = 'no-referrer';
    audio.preload = 'auto';
    audio.src = targetUrl;
    activeAudio = audio;

    await audio.play();
  } catch {
    if (index === urls.length - 1) {
      try {
        const response = await fetch(urls[2]);
        if (response.ok) {
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          blobUrlCache.set(text, objectUrl);
          const audio = new Audio(objectUrl);
          activeAudio = audio;
          await audio.play();
          return;
        }
      } catch {
        fallbackNativeSpeech(text);
        return;
      }
    }
    await playFromUrlSequence(urls, text, index + 1);
  }
}

export const speechService = {
  speakGreek(rawText: string): void {
    const cleanText = sanitizeGreekForTts(rawText);
    if (!cleanText) return;
    stopCurrentPlayback();
    const urls = buildGoogleTranslateTtsUrls(cleanText);
    void playFromUrlSequence(urls, cleanText, 0);
  },
};
