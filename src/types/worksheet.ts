export interface VocabItem {
  id: string;
  japanese: string; // e.g., おはようございます
  kanji?: string;   // e.g., お早うございます (with furigana support)
  furigana?: string;
  romaji: string;   // ohayou gozaimasu
  korean: string;   // 아침 인사 (안녕하세요)
  usageNote?: string;
}

export interface GridItem {
  char: string;       // e.g. "コ", "ー", "ヒ", "ー" or key words
  furigana?: string;
  romaji: string;
  meaning: string;
  strokeHint: string; // e.g. "가로획 후 아래로 꺾기"
}

export interface SubstitutionDrill {
  id: string;
  basePatternJapanese: string; // e.g. "わたしは [　　] です。"
  basePatternKorean: string;   // e.g. "저는 [　　] 입니다."
  examples: {
    slot: string;              // e.g. "かんこくじん (한국인)"
    resultJapanese: string;    // e.g. "わたしは かんこくじん です。"
    resultKorean: string;      // e.g. "저는 한국인입니다."
  }[];
  drillPrompt: string;         // e.g. "다음 단어를 넣어 문장을 완성하고 소리 내어 3번 읽으시오."
  testSlots: {
    givenKorean: string;       // e.g. "회사원"
    givenWord: string;         // e.g. "かいしゃいん"
    expectedAnswer: string;    // e.g. "わたしは かいしゃいん です。"
  }[];
}

export interface BlankProblem {
  id: string;
  questionNumber: number;
  prompt: string;              // e.g. "괄호 안에 알맞은 조사나 단어를 보기에서 골라 쓰시오."
  sentenceWithBlank: string;   // e.g. "これ (　　) なん ですか。"
  options?: string[];          // e.g. ["は", "を", "が", "に"]
  correctAnswer: string;       // "は"
  koreanMeaning: string;       // "이것은 무엇입니까?"
  explanation: string;         // "주어를 나타내는 조사 'は(와/과 달리 발음은 wa)'가 들어갑니다."
  points: number;              // e.g. 5
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  role: string;               // e.g. "점원", "손님", "나", "친구"
  japanese: string;
  korean: string;
  furigana?: string;
  romaji: string;
  isBlankForStudent?: boolean;
  expectedAnswer?: string;
  hint?: string;
}

export interface DialogueExercise {
  scenario: string;            // e.g. "카페에서 아이스 커피 1잔 주문하기"
  contextDescription: string;  // e.g. "도쿄 시부야의 카페에 들러 직원의 인사를 받고 주문하는 상황입니다."
  lines: DialogueLine[];
  keyExpressionPoint: string;  // e.g. "~を ください (~을/를 주세요)"
}

export interface WorksheetData {
  id: string;                  // e.g. "A-01"
  level: string;               // e.g. "Level A"
  levelTitle: string;          // e.g. "기초 회화의 문 (인사 & 자기소개)"
  dayNumber: number;           // e.g. 1
  code: string;                // e.g. "JA-A01"
  title: string;               // e.g. "처음 만났을 때 인사와 감사 표현"
  targetTimeMinutes: number;   // 20
  targetScore: number;         // 100
  todayGoal: string;           // e.g. "상황에 맞는 3가지 기본 인사와 정중한 감사/사과 표현을 자연스럽게 말할 수 있다."
  
  // 5-Step Kumon Flow
  step1Vocab: {
    instruction: string;
    items: VocabItem[];
  };
  step2GridWriting: {
    instruction: string;
    items: GridItem[];
  };
  step3Substitution: SubstitutionDrill;
  step4BlankDrill: {
    instruction: string;
    problems: BlankProblem[];
  };
  step5Dialogue: DialogueExercise;

  // Answer Key & Teacher Guide
  answerKey: {
    step3Answers: string[];
    step4Answers: { [problemId: string]: string };
    step5Answers: string[];
    grammarSummary: string;
    culturalTip: string;
    scoreGuide: {
      step1: number;
      step2: number;
      step3: number;
      step4: number;
      step5: number;
      total: number;
    };
  };
}

export interface LevelCurriculum {
  levelId: string;
  levelName: string;
  description: string;
  badgeColor: string;
  focus: string;
  sheets: WorksheetData[];
}

export interface DailyStudyRecord {
  code: string;            // e.g. "JA-A01"
  levelId: string;         // e.g. "level-a"
  dayNumber: number;       // 1
  date: string;            // "2026-11-06"
  score: number;           // 100
  timeMinutes: number;     // 18
  completed: boolean;
  stepChecks?: {
    step1Audio: boolean;
    step2Grid: boolean;
    step3Substitution: boolean;
    step4Blank: boolean;
    step5Dialogue: boolean;
  };
}

export interface HabitStreakInfo {
  currentStreak: number;
  longestStreak: number;
  totalCompletedDays: number;
  lastStudiedDate: string | null;
}
