/**
 * Web Speech API helper for Japanese pronunciation
 */
class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private jaVoice: SpeechSynthesisVoice | null = null;
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer native Japanese voices (Google 日本語, Kyoko, Otoya, etc.)
    this.jaVoice = voices.find(v => v.lang === 'ja-JP' || v.lang.startsWith('ja')) || null;
    this.isInitialized = true;
  }

  public speak(text: string, rate: number = 0.9): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      // Cancel ongoing speech
      this.synth.cancel();

      if (!this.jaVoice && !this.isInitialized) {
        this.initVoices();
      }

      const cleanText = text.replace(/\[|\]|\(|\)|\/|・/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'ja-JP';
      if (this.jaVoice) {
        utterance.voice = this.jaVoice;
      }
      utterance.rate = rate; // slightly slower for language learners
      utterance.pitch = 1.0;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new SpeechService();
