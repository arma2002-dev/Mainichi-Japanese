import React from 'react';
import { WorksheetData } from '../types/worksheet';
import { WorksheetHeader } from './WorksheetHeader';
import { Volume2, CheckCircle2, MessageSquare, Edit3, Repeat, Sparkles } from 'lucide-react';
import { speechService } from '../utils/speech';

interface WorksheetPageProps {
  worksheet: WorksheetData;
  studentName?: string;
  onNameChange?: (val: string) => void;
  showRomaji?: boolean;
  showFurigana?: boolean;
  studyDate?: string;
  onSpeech?: (text: string) => void;
}

export const WorksheetPage: React.FC<WorksheetPageProps> = ({
  worksheet,
  studentName = '',
  onNameChange,
  showRomaji = true,
  showFurigana = true,
  studyDate,
  onSpeech,
}) => {
  const handleSpeak = (text: string) => {
    if (onSpeech) {
      onSpeech(text);
    } else {
      speechService.speak(text);
    }
  };

  return (
    <div className="a4-page bg-white text-slate-900 border border-slate-200 shadow-sm p-6 sm:p-8 max-w-[850px] mx-auto my-4 print:shadow-none print:border-none print:p-0 print:my-0 relative font-sans">
      {/* 2-Hole Binder Punch Marks for Authentic Printable Paper Feeling */}
      <div className="absolute left-2.5 top-[30%] -translate-y-1/2 w-3 h-3 rounded-full border border-slate-300 hidden md:block print:block pointer-events-none opacity-60" />
      <div className="absolute left-2.5 top-[70%] -translate-y-1/2 w-3 h-3 rounded-full border border-slate-300 hidden md:block print:block pointer-events-none opacity-60" />

      {/* Header Block */}
      <WorksheetHeader
        worksheet={worksheet}
        studentName={studentName}
        onNameChange={onNameChange}
        studyDate={studyDate}
      />

      {/* 5-Step Kumon Worksheet Layout */}
      <div className="space-y-4">
        
        {/* STEP 1: 소리 내어 읽기 (음독 & 뜻 매칭) */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                STEP 1
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                소리 내어 읽기 &amp; 어휘 드릴 (5분)
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              [3회 음독 체크: □ □ □]
            </span>
          </div>

          <p className="text-[11px] text-slate-600 mb-2">
            {worksheet.step1Vocab.instruction}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {worksheet.step1Vocab.items.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-start justify-between p-2 rounded-xs border border-slate-200 bg-slate-50/50 hover:bg-slate-100/60 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-['Noto_Sans_JP']">
                      {item.japanese}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSpeak(item.japanese)}
                      className="no-print p-0.5 text-slate-400 hover:text-slate-800 transition-colors"
                      title="원어민 발음 듣기"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {showRomaji && (
                    <div className="text-[11px] text-slate-500 font-mono pl-5">
                      {item.romaji}
                    </div>
                  )}

                  <div className="text-xs font-semibold text-slate-700 pl-5 mt-0.5">
                    {item.korean}
                  </div>

                  {item.usageNote && (
                    <div className="text-[10px] text-slate-500 pl-5 mt-0.5 leading-tight">
                      ※ {item.usageNote}
                    </div>
                  )}
                </div>

                {/* 3 Reading Checkboxes for Daily Habit */}
                <div className="flex items-center gap-1 shrink-0 pt-1 text-slate-400 font-mono text-xs">
                  <span>□</span>
                  <span>□</span>
                  <span>□</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP 2: 십자 격자 쓰기 훈련 (정자체 필기) */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                STEP 2
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                십자 격자 쓰기 훈련 (5분) · 十字方眼
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              정자체 바른 획순 쓰기
            </span>
          </div>

          <p className="text-[11px] text-slate-600 mb-2.5">
            {worksheet.step2GridWriting.instruction}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {worksheet.step2GridWriting.items.map((grid, idx) => (
              <div
                key={idx}
                className="border border-slate-200 p-2 rounded-xs bg-slate-50/40 text-center flex flex-col items-center"
              >
                <div className="text-[10px] text-slate-500 font-mono mb-1">
                  [{grid.romaji}] {grid.meaning}
                </div>

                {/* Grid Practice Rows: Model, Trace, Blank 1, Blank 2 */}
                <div className="flex items-center justify-center gap-1.5 my-1">
                  {/* Model */}
                  <div className="w-10 h-10 kanji-grid flex items-center justify-center text-lg font-bold text-slate-900 font-['Noto_Sans_JP'] select-none">
                    {grid.char}
                  </div>

                  {/* Tracing (light grey) */}
                  <div className="w-10 h-10 kanji-grid flex items-center justify-center text-lg font-bold text-slate-300 font-['Noto_Sans_JP'] select-none">
                    {grid.char}
                  </div>

                  {/* Blank Handwriting Space */}
                  <div className="w-10 h-10 kanji-grid flex items-center justify-center"></div>
                </div>

                <div className="text-[9px] text-slate-500 mt-1 leading-tight">
                  {grid.strokeHint}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP 3: 문형 치환 드릴 (패턴 반복 연습) */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                STEP 3
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                문형 치환 드릴 (3분) · 패턴 반복 연습
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              [20점 배점]
            </span>
          </div>

          {/* Formula Rule Banner */}
          <div className="bg-slate-100 border border-slate-300 p-2 rounded-xs mb-2.5 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-mono block">기본 공식 패턴</span>
              <span className="text-sm font-bold text-slate-900 font-['Noto_Sans_JP']">
                {worksheet.step3Substitution.basePatternJapanese}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 font-mono block">한국어 뜻</span>
              <span className="text-xs font-semibold text-slate-700">
                {worksheet.step3Substitution.basePatternKorean}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 mb-2">
            {worksheet.step3Substitution.drillPrompt}
          </p>

          {/* Worked Examples */}
          <div className="space-y-1.5 mb-3 text-xs">
            {worksheet.step3Substitution.examples.map((ex, i) => (
              <div key={i} className="flex items-center justify-between pl-2 border-l-2 border-slate-300 py-0.5">
                <span className="text-slate-600">
                  <strong className="text-slate-800">[보기 {i + 1}]</strong> {ex.slot} →
                </span>
                <span className="font-bold text-slate-900 font-['Noto_Sans_JP']">
                  {ex.resultJapanese}
                </span>
                <span className="text-slate-500 text-[11px]">
                  ({ex.resultKorean})
                </span>
              </div>
            ))}
          </div>

          {/* Test Slots for Learner */}
          <div className="space-y-2 pt-2 border-t border-dashed border-slate-200">
            {worksheet.step3Substitution.testSlots.map((slot, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="font-medium text-slate-800 flex items-center gap-1.5">
                  <span className="font-mono font-bold text-slate-500">문제 {i + 1}.</span>
                  <span>단어: <strong className="text-slate-900 font-['Noto_Sans_JP']">{slot.givenWord}</strong> ({slot.givenKorean})</span>
                </div>
                <div className="flex-1 sm:ml-4 border-b border-slate-400 py-1 text-slate-800 min-h-[26px] font-['Noto_Sans_JP']">
                  {/* Student writes here */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP 4: 빈칸 완성 및 조사 훈련 */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                STEP 4
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                실전 괄호 채우기 &amp; 조사 완성 (4분)
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              [총 25점 / 각 5점]
            </span>
          </div>

          <p className="text-[11px] text-slate-600 mb-2">
            {worksheet.step4BlankDrill.instruction}
          </p>

          <div className="space-y-2.5">
            {worksheet.step4BlankDrill.problems.map((prob) => (
              <div
                key={prob.id}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-1.5 rounded-xs hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      ({prob.questionNumber})
                    </span>
                    <span className="text-xs text-slate-700 font-medium">
                      {prob.prompt}
                    </span>
                  </div>

                  <div className="pl-5 text-sm font-bold text-slate-900 font-['Noto_Sans_JP'] mt-0.5">
                    {prob.sentenceWithBlank}
                  </div>
                  <div className="pl-5 text-[11px] text-slate-500">
                    뜻: {prob.koreanMeaning}
                  </div>
                </div>

                {prob.options && (
                  <div className="sm:text-right shrink-0 font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-xs">
                    <span className="text-[10px] text-slate-400 block sm:inline mr-1">보기:</span>
                    {prob.options.join('  /  ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* STEP 5: 20분 실전 회화 롤플레잉 */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-xs">
                STEP 5
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                20분 실전 회화 롤플레잉 (3분) · 롤플레이
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              [15점 배점]
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-2 rounded-xs mb-2 text-xs">
            <strong className="text-slate-900 block font-semibold">
              상황: {worksheet.step5Dialogue.scenario}
            </strong>
            <p className="text-slate-600 text-[11px] mt-0.5">
              {worksheet.step5Dialogue.contextDescription}
            </p>
          </div>

          {/* Dialogue Lines */}
          <div className="space-y-2 mb-2">
            {worksheet.step5Dialogue.lines.map((line, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xs border ${
                  line.isBlankForStudent
                    ? 'border-slate-900 bg-amber-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-baseline justify-between mb-0.5">
                  <span className="font-bold text-xs text-slate-900 font-mono">
                    [{line.speaker} : {line.role}]
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSpeak(line.japanese)}
                    className="no-print p-0.5 text-slate-400 hover:text-slate-800 transition-colors"
                    title="원어민 발음 듣기"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {line.isBlankForStudent ? (
                  <div className="space-y-1">
                    <div className="text-xs text-slate-600 font-medium">
                      한국어 의도: &quot;{line.korean}&quot;
                    </div>
                    <div className="border-b-2 border-slate-800 min-h-[30px] pt-1 text-sm font-bold text-slate-900 font-['Noto_Sans_JP']">
                      {/* Learner writes Japanese reply here */}
                    </div>
                    {line.hint && (
                      <div className="text-[10px] text-slate-500 italic">
                        힌트: {line.hint}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-bold text-slate-900 font-['Noto_Sans_JP']">
                      {line.japanese}
                    </div>
                    {showRomaji && (
                      <div className="text-[11px] text-slate-500 font-mono">
                        {line.romaji}
                      </div>
                    )}
                    <div className="text-xs text-slate-700">
                      {line.korean}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xs border border-dashed border-slate-300">
            <strong className="text-slate-800">핵심 포인트:</strong> {worksheet.step5Dialogue.keyExpressionPoint}
          </div>
        </section>

      </div>

      {/* Footer Block for A4 Layout */}
      <div className="mt-4 pt-2 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <div>
          마이니치 일본어 · 구몬식 20분 회화 시스템 · {worksheet.code}
        </div>
        <div>
          A4 PRINTED EDITION · 1 / 1
        </div>
      </div>
    </div>
  );
};
