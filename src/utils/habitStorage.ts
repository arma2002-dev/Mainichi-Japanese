import { DailyStudyRecord, HabitStreakInfo, LevelCurriculum, WorksheetData } from '../types/worksheet';

const STORAGE_KEY_RECORDS = 'kumon_daily_records_v1';
const STORAGE_KEY_SETTINGS = 'kumon_habit_settings_v1';

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatKoreanDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = dayNames[date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
  } catch {
    return dateStr;
  }
}

export function loadDailyRecords(): { [code: string]: DailyStudyRecord } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RECORDS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveDailyRecord(record: DailyStudyRecord): { [code: string]: DailyStudyRecord } {
  const current = loadDailyRecords();
  current[record.code] = record;
  try {
    localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(current));
  } catch {}
  return current;
}

export function calculateHabitStreak(records: { [code: string]: DailyStudyRecord }): HabitStreakInfo {
  const recordList = Object.values(records).filter((r) => r.completed && r.date);
  if (recordList.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalCompletedDays: 0,
      lastStudiedDate: null,
    };
  }

  // Unique sorted dates descending
  const dates = Array.from(new Set(recordList.map((r) => r.date))).sort().reverse();
  const today = getTodayDateString();

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, '0')}-${String(yesterdayDate.getDate()).padStart(2, '0')}`;

  let currentStreak = 0;
  let checkDate = new Date();

  // If studied today, start from today; else if studied yesterday, start from yesterday
  const hasStudiedToday = dates.includes(today);
  const hasStudiedYesterday = dates.includes(yesterday);

  if (hasStudiedToday) {
    checkDate = new Date();
  } else if (hasStudiedYesterday) {
    checkDate = new Date(yesterdayDate);
  } else {
    // Streak broken
    return {
      currentStreak: 0,
      longestStreak: Math.max(dates.length > 0 ? 1 : 0, 1),
      totalCompletedDays: recordList.length,
      lastStudiedDate: dates[0],
    };
  }

  // Count backwards day by day
  let pointer = new Date(checkDate);
  while (true) {
    const y = pointer.getFullYear();
    const m = String(pointer.getMonth() + 1).padStart(2, '0');
    const d = String(pointer.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;

    if (dates.includes(dateStr)) {
      currentStreak++;
      pointer.setDate(pointer.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    currentStreak,
    longestStreak: Math.max(currentStreak, dates.length),
    totalCompletedDays: recordList.length,
    lastStudiedDate: dates[0] || null,
  };
}

export function getNextRecommendedDay(
  records: { [code: string]: DailyStudyRecord },
  curriculum: LevelCurriculum[]
): { levelId: string; dayNumber: number; sheet: WorksheetData } {
  // Flatten all sheets in order
  for (const level of curriculum) {
    for (const sheet of level.sheets) {
      if (!records[sheet.code]?.completed) {
        return {
          levelId: level.levelId,
          dayNumber: sheet.dayNumber,
          sheet,
        };
      }
    }
  }

  // If all completed, return first sheet of Level A
  return {
    levelId: curriculum[0].levelId,
    dayNumber: 1,
    sheet: curriculum[0].sheets[0],
  };
}

export function getWarmupReviewSentences(
  currentDayNumber: number,
  curriculum: LevelCurriculum[]
): { japanese: string; korean: string; sourceCode: string }[] {
  const allSheets = curriculum.flatMap((lvl) => lvl.sheets);
  const currentIndex = allSheets.findIndex((s) => s.dayNumber === currentDayNumber);

  if (currentIndex <= 0) {
    // Return welcoming warm-up if it's Day 1
    return [
      {
        japanese: 'こんにちは！ まいにち 20ぷん べんきょうしましょう。',
        korean: '안녕하세요! 매일 20분씩 공부해 봅시다.',
        sourceCode: 'START',
      },
      {
        japanese: 'はじめまして。よろしくおねがいします。',
        korean: '처음 뵙겠습니다. 잘 부탁드립니다.',
        sourceCode: 'A-01',
      },
    ];
  }

  // Pick sentences from previous sheets
  const previousSheets = allSheets.slice(Math.max(0, currentIndex - 2), currentIndex);
  const reviews: { japanese: string; korean: string; sourceCode: string }[] = [];

  previousSheets.forEach((s) => {
    if (s.step1Vocab.items[0]) {
      reviews.push({
        japanese: s.step1Vocab.items[0].japanese,
        korean: s.step1Vocab.items[0].korean,
        sourceCode: s.code,
      });
    }
    if (s.step5Dialogue.lines[0]) {
      reviews.push({
        japanese: s.step5Dialogue.lines[0].japanese,
        korean: s.step5Dialogue.lines[0].korean,
        sourceCode: s.code,
      });
    }
  });

  return reviews.slice(0, 3);
}
