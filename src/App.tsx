import React, { useState, useEffect } from 'react';
import { CURRICULUM } from './data/curriculum';
import { WorksheetPage } from './components/WorksheetPage';
import { AnswerKeyPage } from './components/AnswerKeyPage';
import { InteractiveMode } from './components/InteractiveMode';
import { DailyRoutineDashboard } from './components/DailyRoutineDashboard';
import { PrintModal, PrintScope } from './components/PrintModal';
import { DailyGuideModal } from './components/DailyGuideModal';
import { Printer, BookOpen, Clock, HelpCircle, Columns, FileText, CheckCircle2, Award, ChevronRight, Calendar, Flame, Sparkles } from 'lucide-react';
import { WorksheetData, DailyStudyRecord } from './types/worksheet';
import {
  loadDailyRecords,
  saveDailyRecord,
  calculateHabitStreak,
  getNextRecommendedDay,
  getTodayDateString,
  formatKoreanDate,
} from './utils/habitStorage';

type ViewMode = 'today' | 'worksheet' | 'answer-key' | 'split' | 'interactive';

export default function App() {
  // Habit Records & Progress State
  const [records, setRecords] = useState<{ [code: string]: DailyStudyRecord }>(() => loadDailyRecords());
  const [streakInfo, setStreakInfo] = useState(() => calculateHabitStreak(loadDailyRecords()));

  // Active Selected Sheet
  const recommended = getNextRecommendedDay(records, CURRICULUM);
  const [selectedLevelId, setSelectedLevelId] = useState<string>(recommended.levelId);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(recommended.dayNumber);

  // View Mode defaults to 'today' for habitual daily study flow!
  const [viewMode, setViewMode] = useState<ViewMode>('today');
  const [studentName, setStudentName] = useState<string>('학습자');
  const [showRomaji, setShowRomaji] = useState<boolean>(true);

  // Modals
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);

  // Print scope
  const [activePrintScope, setActivePrintScope] = useState<PrintScope>('current-worksheet');

  // Today's formatted date string for worksheets
  const todayDateStr = getTodayDateString();
  const formattedTodayDate = formatKoreanDate(todayDateStr);

  const currentLevel = CURRICULUM.find((lvl) => lvl.levelId === selectedLevelId) || CURRICULUM[0];
  const currentSheet =
    currentLevel.sheets.find((sheet) => sheet.dayNumber === selectedDayNumber) || currentLevel.sheets[0];

  // Refresh streak whenever records change
  useEffect(() => {
    setStreakInfo(calculateHabitStreak(records));
  }, [records]);

  const handleToggleComplete = (sheet: WorksheetData, score: number = 100) => {
    const existing = records[sheet.code];
    const isCompleted = !existing?.completed;

    const updatedRecord: DailyStudyRecord = {
      code: sheet.code,
      levelId: sheet.level.toLowerCase().replace(' ', '-'),
      dayNumber: sheet.dayNumber,
      date: isCompleted ? todayDateStr : '',
      score: isCompleted ? score : 0,
      timeMinutes: 20,
      completed: isCompleted,
    };

    const newRecords = saveDailyRecord(updatedRecord);
    setRecords({ ...newRecords });
  };

  const handleInteractiveComplete = (score: number, timeSpent: number) => {
    const updatedRecord: DailyStudyRecord = {
      code: currentSheet.code,
      levelId: currentLevel.levelId,
      dayNumber: currentSheet.dayNumber,
      date: todayDateStr,
      score,
      timeMinutes: timeSpent,
      completed: true,
    };
    const newRecords = saveDailyRecord(updatedRecord);
    setRecords({ ...newRecords });
  };

  const handleConfirmPrint = (scope: PrintScope) => {
    setActivePrintScope(scope);
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handlePrintTodayDirect = (sheet: WorksheetData) => {
    setSelectedLevelId(sheet.level.toLowerCase().replace(' ', '-'));
    setSelectedDayNumber(sheet.dayNumber);
    setActivePrintScope('current-worksheet');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleSelectSheetFromBoard = (levelId: string, dayNumber: number) => {
    // Clean level ID format
    const matchedLevel = CURRICULUM.find(
      (l) => l.levelId === levelId || l.levelName.toLowerCase().includes(levelId.replace('level-', ''))
    );
    if (matchedLevel) {
      setSelectedLevelId(matchedLevel.levelId);
    }
    setSelectedDayNumber(dayNumber);
    setViewMode('worksheet');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      
      {/* 1. TOP BAR CONTRACT: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (1 Primary Action) */}
      <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single-element Brand Wordmark */}
          <button
            type="button"
            onClick={() => setViewMode('today')}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-85 transition-opacity"
          >
            <span className="w-6 h-6 rounded-xs bg-slate-900 text-white flex items-center justify-center text-xs font-black">
              公
            </span>
            <span>마이니치 일본어</span>
          </button>

          {/* Zone 2: Clean single-line text nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setViewMode('today')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                viewMode === 'today' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              오늘의 학습
            </button>
            <button
              type="button"
              onClick={() => setViewMode('worksheet')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'worksheet' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
              }`}
            >
              학습지 보기
            </button>
            <button
              type="button"
              onClick={() => setViewMode('answer-key')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'answer-key' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
              }`}
            >
              별도 정답지
            </button>
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'interactive' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-0.5' : ''
              }`}
            >
              20분 집중 학습
            </button>
            <button
              type="button"
              onClick={() => setIsGuideModalOpen(true)}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-slate-500"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              구몬식 20분법
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {streakInfo.currentStreak > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                {streakInfo.currentStreak}일 연속
              </span>
            )}
            <button
              type="button"
              onClick={() => setIsPrintModalOpen(true)}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              A4 인쇄 / PDF 저장
            </button>
          </div>
        </div>
      </header>

      {/* 2. SUB-BAR: Curriculum Level & Day Workspace Toolbar (Shown when browsing worksheets/interactive) */}
      <div className="no-print bg-white border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          
          {/* Level Switcher (Tabs) */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1 overflow-x-auto py-0.5 max-w-full">
              {CURRICULUM.map((level) => {
                const isActive = level.levelId === selectedLevelId;
                return (
                  <button
                    key={level.levelId}
                    type="button"
                    onClick={() => {
                      setSelectedLevelId(level.levelId);
                      setSelectedDayNumber(1);
                    }}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {level.levelName}
                  </button>
                );
              })}
            </div>

            {/* Learner Info & Romaji Toggle */}
            <div className="flex items-center gap-3 text-xs text-slate-600 shrink-0">
              <label className="flex items-center gap-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showRomaji}
                  onChange={(e) => setShowRomaji(e.target.checked)}
                  className="rounded text-slate-900 focus:ring-0"
                />
                <span>발음(로마자)</span>
              </label>

              <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
                <span className="text-slate-400">학습자:</span>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="이름"
                  className="w-20 px-1.5 py-0.5 text-xs font-semibold text-slate-800 border-b border-slate-300 focus:outline-none focus:border-slate-800 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Day Selector & View Mode Segmented Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Day Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[11px] font-bold text-slate-400 font-mono uppercase mr-1">
                일차 선택:
              </span>
              {currentLevel.sheets.map((sheet) => {
                const isSelected = sheet.dayNumber === selectedDayNumber;
                const isDone = records[sheet.code]?.completed;
                return (
                  <button
                    key={sheet.id}
                    type="button"
                    onClick={() => setSelectedDayNumber(sheet.dayNumber)}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all flex items-center gap-1 ${
                      isSelected
                        ? 'bg-slate-800 text-white shadow-2xs'
                        : isDone
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>Day {String(sheet.dayNumber).padStart(2, '0')}</span>
                    {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('today')}
                className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'today'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="매일 학습 대시보드"
              >
                <Calendar className="w-3.5 h-3.5" />
                오늘의 학습
              </button>

              <button
                type="button"
                onClick={() => setViewMode('worksheet')}
                className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'worksheet'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="A4 인쇄용 학습지만 보기"
              >
                <FileText className="w-3.5 h-3.5" />
                학습지
              </button>

              <button
                type="button"
                onClick={() => setViewMode('answer-key')}
                className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'answer-key'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="별도 A4 정답 및 해설지만 보기"
              >
                <BookOpen className="w-3.5 h-3.5" />
                별도 정답지
              </button>

              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors hidden lg:flex items-center gap-1 ${
                  viewMode === 'split'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="학습지와 정답지 좌우 양면 비교"
              >
                <Columns className="w-3.5 h-3.5" />
                양면 비교
              </button>

              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'interactive'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="화면에서 20분 타이머 켜고 풀기"
              >
                <Clock className="w-3.5 h-3.5" />
                화면 학습
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE AREA */}
      <main className="flex-1 py-6 px-3 sm:px-6">
        
        {/* VIEW MODE: Today's Daily Routine Dashboard */}
        {viewMode === 'today' && (
          <div className="no-print">
            <DailyRoutineDashboard
              curriculum={CURRICULUM}
              records={records}
              streakInfo={streakInfo}
              todaySheet={currentSheet}
              onSelectSheet={handleSelectSheetFromBoard}
              onStartInteractive={(sheet) => {
                setSelectedLevelId(sheet.level.toLowerCase().replace(' ', '-'));
                setSelectedDayNumber(sheet.dayNumber);
                setViewMode('interactive');
              }}
              onPrintToday={handlePrintTodayDirect}
              onToggleCompleteToday={(sheet, score) => handleToggleComplete(sheet, score)}
            />
          </div>
        )}

        {/* VIEW MODE: Interactive Practice */}
        {viewMode === 'interactive' && (
          <div className="no-print">
            <InteractiveMode
              worksheet={currentSheet}
              onComplete={handleInteractiveComplete}
            />
          </div>
        )}

        {/* VIEW MODE: Worksheet Single View */}
        {viewMode === 'worksheet' && (
          <div className="no-print">
            <div className="max-w-[850px] mx-auto mb-3 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">
                현재 미리보기: [A4 규격 학습지] · 상단 버튼으로 즉시 인쇄 가능
              </span>
              <button
                type="button"
                onClick={() => setViewMode('answer-key')}
                className="hover:text-slate-900 font-semibold underline underline-offset-2 flex items-center gap-0.5"
              >
                정답지 바로 확인하기 <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <WorksheetPage
              worksheet={currentSheet}
              studentName={studentName}
              onNameChange={setStudentName}
              showRomaji={showRomaji}
              studyDate={formattedTodayDate}
            />
          </div>
        )}

        {/* VIEW MODE: Answer Key Single View */}
        {viewMode === 'answer-key' && (
          <div className="no-print">
            <div className="max-w-[850px] mx-auto mb-3 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">
                현재 미리보기: [별도 A4 정답 및 해설지] · 학습 후 셀프 채점용
              </span>
              <button
                type="button"
                onClick={() => setViewMode('worksheet')}
                className="hover:text-slate-900 font-semibold underline underline-offset-2 flex items-center gap-0.5"
              >
                학습지로 돌아가기 <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <AnswerKeyPage
              worksheet={currentSheet}
              studentName={studentName}
              onNameChange={setStudentName}
              studyDate={formattedTodayDate}
            />
          </div>
        )}

        {/* VIEW MODE: Split View (Side-by-Side Worksheet + Answer Key) */}
        {viewMode === 'split' && (
          <div className="no-print max-w-[1720px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                【학습지】 Day {currentSheet.dayNumber} : {currentSheet.title}
              </div>
              <WorksheetPage
                worksheet={currentSheet}
                studentName={studentName}
                onNameChange={setStudentName}
                showRomaji={showRomaji}
                studyDate={formattedTodayDate}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                【별도 정답지】 {currentSheet.code} 정답 및 해설
              </div>
              <AnswerKeyPage
                worksheet={currentSheet}
                studentName={studentName}
                onNameChange={setStudentName}
                studyDate={formattedTodayDate}
              />
            </div>
          </div>
        )}

        {/* 4. DEDICATED PRINT ENGINE (Visible Only When Printing via window.print) */}
        <div className="print-only hidden">
          {/* Scope 1: Current Worksheet Only */}
          {activePrintScope === 'current-worksheet' && (
            <WorksheetPage
              worksheet={currentSheet}
              studentName={studentName}
              showRomaji={showRomaji}
              studyDate={formattedTodayDate}
            />
          )}

          {/* Scope 2: Current Answer Key Only */}
          {activePrintScope === 'current-answer' && (
            <AnswerKeyPage
              worksheet={currentSheet}
              studentName={studentName}
              studyDate={formattedTodayDate}
            />
          )}

          {/* Scope 3: All 5 Worksheets in Current Level */}
          {activePrintScope === 'level-worksheets' &&
            currentLevel.sheets.map((sheet) => (
              <WorksheetPage
                key={sheet.id}
                worksheet={sheet}
                studentName={studentName}
                showRomaji={showRomaji}
                studyDate={formattedTodayDate}
              />
            ))}

          {/* Scope 4: All 5 Answer Keys in Current Level */}
          {activePrintScope === 'level-answers' &&
            currentLevel.sheets.map((sheet) => (
              <AnswerKeyPage
                key={`ans-${sheet.id}`}
                worksheet={sheet}
                studentName={studentName}
                studyDate={formattedTodayDate}
              />
            ))}

          {/* Scope 5: Full Study Packet (Worksheet + Answer Key for all 5 Days) */}
          {activePrintScope === 'full-packet' &&
            currentLevel.sheets.map((sheet) => (
              <React.Fragment key={`packet-${sheet.id}`}>
                <WorksheetPage
                  worksheet={sheet}
                  studentName={studentName}
                  showRomaji={showRomaji}
                  studyDate={formattedTodayDate}
                />
                <AnswerKeyPage
                  worksheet={sheet}
                  studentName={studentName}
                  studyDate={formattedTodayDate}
                />
              </React.Fragment>
            ))}
        </div>
      </main>

      {/* 5. FOOTER */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">마이니치 일본어 (毎日の日本語)</span>
            <span>·</span>
            <span>매일 20분 자율 출석 습관 시스템</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={() => setIsGuideModalOpen(true)}
              className="hover:text-slate-900 underline underline-offset-2"
            >
              20분 학습 가이드
            </button>
            <button
              type="button"
              onClick={() => setIsPrintModalOpen(true)}
              className="hover:text-slate-900 underline underline-offset-2"
            >
              인쇄 및 PDF 다운로드
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        currentLevelTitle={currentLevel.levelName}
        currentDayCode={currentSheet.code}
        onConfirmPrint={handleConfirmPrint}
      />

      <DailyGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
}
