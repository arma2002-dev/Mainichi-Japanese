import React, { useState } from 'react';
import { WorksheetData, LevelCurriculum, DailyStudyRecord, HabitStreakInfo } from '../types/worksheet';
import { getTodayDateString, formatKoreanDate, getWarmupReviewSentences } from '../utils/habitStorage';
import { Clock, Flame, CheckCircle2, Award, Printer, ArrowRight, Play, Volume2, Calendar, Sparkles, Check, RefreshCw } from 'lucide-react';
import { speechService } from '../utils/speech';

interface DailyRoutineDashboardProps {
  curriculum: LevelCurriculum[];
  records: { [code: string]: DailyStudyRecord };
  streakInfo: HabitStreakInfo;
  todaySheet: WorksheetData;
  onSelectSheet: (levelId: string, dayNumber: number) => void;
  onStartInteractive: (sheet: WorksheetData) => void;
  onPrintToday: (sheet: WorksheetData) => void;
  onToggleCompleteToday: (sheet: WorksheetData, score: number) => void;
}

export const DailyRoutineDashboard: React.FC<DailyRoutineDashboardProps> = ({
  curriculum,
  records,
  streakInfo,
  todaySheet,
  onSelectSheet,
  onStartInteractive,
  onPrintToday,
  onToggleCompleteToday,
}) => {
  const todayStr = getTodayDateString();
  const todayRecord = records[todaySheet.code];
  const isTodayCompleted = todayRecord?.completed;

  // Warm-up reviews
  const warmupSentences = getWarmupReviewSentences(todaySheet.dayNumber, curriculum);

  // All 25 sheets flattened for the attendance stamp board
  const allSheets = curriculum.flatMap((lvl) => lvl.sheets);
  const totalCompleted = Object.values(records).filter((r) => r.completed).length;
  const progressPct = Math.round((totalCompleted / allSheets.length) * 100);

  const [activeWarmupAudio, setActiveWarmupAudio] = useState<string | null>(null);

  const handleSpeakWarmup = (text: string) => {
    setActiveWarmupAudio(text);
    speechService.speak(text).then(() => setActiveWarmupAudio(null));
  };

  return (
    <div className="max-w-[1100px] mx-auto space-y-6 pb-12 font-sans">
      
      {/* 1. TODAY'S HABIT HERO STRIP */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left: Today's Status & Habit Fire */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-700" />
              <span>{formatKoreanDate(todayStr)}</span>
              <span>·</span>
              <span className="font-bold text-slate-900">오늘의 20분 자율 학습</span>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {isTodayCompleted ? '오늘의 20분 학습을 완료했습니다!' : '오늘의 20분 일본어를 시작하세요'}
              </h1>
              {streakInfo.currentStreak > 0 && (
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-bold tracking-tight">
                  <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span>{streakInfo.currentStreak}일 연속 학습 중</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
              히라가나를 읽을 수 있다면 하루 딱 20분, 소리 내어 쓰면서 말하는 구몬식 스몰 스텝으로 일상 회화가 입에서 자연스럽게 터집니다.
            </p>
          </div>

          {/* Right: Progress Ring / Bar Stats */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-md min-w-[260px] flex flex-col justify-between">
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-700">전체 25일 로드맵 달성률</span>
              <span className="text-xs font-mono font-bold text-slate-900">
                {totalCompleted} / {allSheets.length}일 ({progressPct}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-3">
              <div
                className="bg-slate-900 h-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-1 border-t border-slate-200">
              <div>
                <span className="text-[10px] text-slate-500 block">완료 일수</span>
                <strong className="text-slate-900">{totalCompleted}일</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">현재 연속</span>
                <strong className="text-amber-700 font-bold">{streakInfo.currentStreak}일</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">남은 일수</span>
                <strong className="text-slate-900">{allSheets.length - totalCompleted}일</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TODAY'S ASSIGNMENT CARD & ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Main Today's Card */}
        <div className="lg:col-span-8 bg-white border-2 border-slate-900 rounded-lg p-5 sm:p-6 shadow-sm space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                  TODAY&apos;S GOAL
                </span>
                <span className="text-xs text-slate-600 font-bold">
                  {todaySheet.level} · Day {String(todaySheet.dayNumber).padStart(2, '0')} [{todaySheet.code}]
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {todaySheet.title}
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                <strong className="text-slate-800">목표:</strong> {todaySheet.todayGoal}
              </p>
            </div>

            {/* Attendance Stamp on Today's Card */}
            <div className="shrink-0 text-center">
              {isTodayCompleted ? (
                <div className="w-16 h-16 rounded-full border-2 border-red-600 bg-red-50 text-red-600 flex flex-col items-center justify-center rotate-[-8deg] shadow-2xs select-none">
                  <span className="text-[9px] font-bold font-mono">출석완료</span>
                  <span className="text-sm font-black font-mono">100点</span>
                  <span className="text-[8px] font-bold">참잘했어요</span>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full border border-dashed border-slate-300 text-slate-400 flex flex-col items-center justify-center text-[10px] font-mono">
                  <span>출석 도장</span>
                  <span className="text-[8px]">미완료</span>
                </div>
              )}
            </div>
          </div>

          {/* 4-Step 20-Min Flow Checklist */}
          <div className="border border-slate-200 rounded-md bg-slate-50/50 p-3.5 space-y-2">
            <span className="text-xs font-bold text-slate-900 block">
              오늘 20분 자율 학습 진행 순서 (구몬 4단계)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white border border-slate-200 rounded-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="text-slate-700">소리 내어 3회 음독 (5분)</span>
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="text-slate-700">십자 격자 획순 필기 (5분)</span>
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span className="text-slate-700">문형 치환 드릴 &amp; 괄호 채우기 (5분)</span>
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <span className="text-slate-700">실전 롤플레잉 &amp; 정답지 100점 채점 (5분)</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Primary CTA: Start Interactive */}
            <button
              type="button"
              onClick={() => onStartInteractive(todaySheet)}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-md shadow-xs transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              오늘의 20분 화면 학습 시작
            </button>

            {/* Secondary CTA: 1-Click Print Today's Sheet */}
            <button
              type="button"
              onClick={() => onPrintToday(todaySheet)}
              className="px-4 py-2.5 border border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-md transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              오늘치 A4 학습지 인쇄
            </button>

            {/* Paper Self-check Stamp Toggle */}
            <button
              type="button"
              onClick={() => onToggleCompleteToday(todaySheet, 100)}
              className={`px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors flex items-center gap-1.5 ${
                isTodayCompleted
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {isTodayCompleted ? '종이 학습지 100점 완료됨' : '종이 학습지로 완료 체크'}
            </button>
          </div>
        </div>

        {/* Right Column: 1-Minute Warm-up Review */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-slate-700" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                1분 워밍업 복습 (이전 핵심 표현)
              </h3>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">구몬 망각 방지</span>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed">
            오늘 학습을 시작하기 전, 스피커를 눌러 지난 핵심 표현을 가볍게 귀로 듣고 입으로 따라 해보세요.
          </p>

          <div className="space-y-2.5">
            {warmupSentences.map((s, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-md border border-slate-200 bg-slate-50/60 hover:bg-slate-100/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 font-['Noto_Sans_JP']">
                    {s.japanese}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSpeakWarmup(s.japanese)}
                    className="p-1 text-slate-400 hover:text-slate-800 transition-colors"
                    title="발음 듣기"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  {s.korean}
                </div>
              </div>
            ))}
          </div>

          {/* Quick study habit tip */}
          <div className="p-3 bg-slate-50 rounded-md border border-dashed border-slate-300 text-[11px] text-slate-600">
            <strong className="text-slate-800 block mb-0.5">매일 습관화 팁:</strong>
            &quot;매일 아침 출근 전 20분&quot; 또는 &quot;잠들기 전 20분&quot; 등 매일 동일한 시간에 학습지를 펴면 3주 안에 자연스러운 루틴이 됩니다.
          </div>
        </div>
      </div>

      {/* 3. KUMON ATTENDANCE STAMP BOARD (출석 카드 · 出席カード) */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-200 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
                出席カード
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                구몬 25일 출석부 &amp; 100점 도장판
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              각 칸을 클릭하여 해당 일차의 학습지와 정답지를 바로 열어보거나 복습할 수 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600 font-mono">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
              출석 완료 ({totalCompleted})
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
              예정 ({allSheets.length - totalCompleted})
            </span>
          </div>
        </div>

        {/* 25 Days Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-3">
          {allSheets.map((sheet) => {
            const isCompleted = records[sheet.code]?.completed;
            const record = records[sheet.code];
            const isToday = sheet.code === todaySheet.code;

            return (
              <button
                key={sheet.id}
                type="button"
                onClick={() => onSelectSheet(sheet.level.toLowerCase().replace(' ', '-'), sheet.dayNumber)}
                className={`p-3 rounded-md border text-left transition-all relative overflow-hidden group ${
                  isToday
                    ? 'border-2 border-slate-900 bg-amber-50/20 shadow-2xs'
                    : isCompleted
                    ? 'border-slate-300 bg-slate-50/60 hover:bg-slate-100/80'
                    : 'border-slate-200 bg-white hover:border-slate-400'
                }`}
              >
                {/* Level & Day Badge */}
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="font-bold text-slate-700">
                    Day {String(sheet.dayNumber).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {sheet.code}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-900 truncate mb-1" title={sheet.title}>
                  {sheet.title}
                </div>

                {/* Stamped Status */}
                <div className="h-8 flex items-center justify-between text-[11px] pt-1 border-t border-slate-200">
                  {isCompleted ? (
                    <div className="flex items-center gap-1 text-red-600 font-bold">
                      <span className="w-5 h-5 rounded-full border border-red-500 flex items-center justify-center text-[9px] font-mono font-black">
                        100
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {record?.date ? record.date.slice(5) : '완료'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-[10px] font-mono">
                      {isToday ? '오늘 학습' : '미완료'}
                    </span>
                  )}

                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
