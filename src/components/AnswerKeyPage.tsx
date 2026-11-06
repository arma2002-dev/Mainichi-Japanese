import React from 'react';
import { WorksheetData } from '../types/worksheet';
import { WorksheetHeader } from './WorksheetHeader';
import { CheckCircle2, AlertCircle, Award, BookOpen, Lightbulb } from 'lucide-react';

interface AnswerKeyPageProps {
  worksheet: WorksheetData;
  studentName?: string;
  onNameChange?: (val: string) => void;
  studyDate?: string;
}

export const AnswerKeyPage: React.FC<AnswerKeyPageProps> = ({
  worksheet,
  studentName = '',
  onNameChange,
  studyDate,
}) => {
  const { answerKey } = worksheet;

  return (
    <div className="a4-page bg-white text-slate-900 border border-slate-200 shadow-sm p-6 sm:p-8 max-w-[850px] mx-auto my-4 print:shadow-none print:border-none print:p-0 print:my-0 relative font-sans">
      {/* 2-Hole Binder Punch Marks */}
      <div className="absolute left-2.5 top-[30%] -translate-y-1/2 w-3 h-3 rounded-full border border-slate-300 hidden md:block print:block pointer-events-none opacity-60" />
      <div className="absolute left-2.5 top-[70%] -translate-y-1/2 w-3 h-3 rounded-full border border-slate-300 hidden md:block print:block pointer-events-none opacity-60" />

      {/* Header Block configured as Answer Key */}
      <WorksheetHeader
        worksheet={worksheet}
        isAnswerKey={true}
        score={100}
        studentName={studentName}
        onNameChange={onNameChange}
        studyDate={studyDate}
      />

      {/* Answer Key Layout */}
      <div className="space-y-4">
        
        {/* Scoring Breakdown Rubric Banner */}
        <section className="avoid-break border-2 border-slate-900 bg-slate-50 p-3 rounded-xs">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-300">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-slate-900" />
              100점 만점 채점 기준표 (구몬 자율 채점)
            </h2>
            <span className="text-[11px] font-bold text-red-600 font-mono">
              합격 기준: 85점 이상 (부족 시 재음독)
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
            <div className="p-1.5 bg-white border border-slate-200 rounded-xs">
              <span className="text-[10px] text-slate-500 block">STEP 1 (음독)</span>
              <strong className="text-slate-900">{answerKey.scoreGuide.step1}점</strong>
            </div>
            <div className="p-1.5 bg-white border border-slate-200 rounded-xs">
              <span className="text-[10px] text-slate-500 block">STEP 2 (필기)</span>
              <strong className="text-slate-900">{answerKey.scoreGuide.step2}점</strong>
            </div>
            <div className="p-1.5 bg-white border border-slate-200 rounded-xs">
              <span className="text-[10px] text-slate-500 block">STEP 3 (치환)</span>
              <strong className="text-slate-900">{answerKey.scoreGuide.step3}점</strong>
            </div>
            <div className="p-1.5 bg-white border border-slate-200 rounded-xs">
              <span className="text-[10px] text-slate-500 block">STEP 4 (괄호)</span>
              <strong className="text-slate-900">{answerKey.scoreGuide.step4}점</strong>
            </div>
            <div className="p-1.5 bg-white border border-slate-200 rounded-xs">
              <span className="text-[10px] text-slate-500 block">STEP 5 (회화)</span>
              <strong className="text-slate-900">{answerKey.scoreGuide.step5}점</strong>
            </div>
          </div>
        </section>

        {/* STEP 3 & STEP 4 정답 및 채점 가이드 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* STEP 3 정답 */}
          <section className="avoid-break md:col-span-5 border border-slate-300 rounded-xs p-3 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1 mb-2 border-b border-slate-200">
                <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
                  STEP 3 정답
                </span>
                <span className="text-[11px] font-bold text-slate-700">문형 치환 완성</span>
              </div>

              <div className="space-y-2">
                {answerKey.step3Answers.map((ans, idx) => (
                  <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded-xs">
                    <div className="text-xs font-bold text-slate-900 font-['Noto_Sans_JP']">
                      {ans}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-500 mt-2 bg-slate-100 p-1.5 rounded-xs">
              ※ 조사 및 띄어쓰기 여부와 상관없이 일본어 어순과 문형이 올바르면 정답 처리합니다.
            </div>
          </section>

          {/* STEP 4 문제별 정답 및 해설 */}
          <section className="avoid-break md:col-span-7 border border-slate-300 rounded-xs p-3 bg-white">
            <div className="flex items-center justify-between pb-1 mb-2 border-b border-slate-200">
              <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
                STEP 4 정답 및 해설
              </span>
              <span className="text-[11px] font-bold text-slate-700">괄호 완성 (각 5점)</span>
            </div>

            <div className="space-y-2">
              {worksheet.step4BlankDrill.problems.map((prob) => (
                <div key={prob.id} className="p-2 border border-slate-200 rounded-xs bg-slate-50/50">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="font-mono text-xs font-bold text-slate-700">
                      문제 ({prob.questionNumber})
                    </span>
                    <span className="text-xs font-bold text-red-600 font-['Noto_Sans_JP']">
                      정답: {prob.correctAnswer}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    {prob.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* STEP 5 모범 회화 답안 */}
        <section className="avoid-break border border-slate-300 rounded-xs p-3 bg-white">
          <div className="flex items-center justify-between pb-1 mb-2 border-b border-slate-200">
            <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
              STEP 5 모범 회화
            </span>
            <span className="text-[11px] font-bold text-slate-700">실전 롤플레잉 모범 답안</span>
          </div>

          <div className="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-xs text-xs mb-2">
            <span className="font-bold text-emerald-900 block mb-1">
              [모범 답변 가이드]
            </span>
            {answerKey.step5Answers.map((ans, i) => (
              <div key={i} className="text-emerald-950 font-bold font-['Noto_Sans_JP']">
                {ans}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-600">
            ※ 실전 회화에서는 조사나 단어가 조금 틀려도 의미가 통하면 만점(15점)을 부여하고, 큰 목소리로 3회 반복 발화하는 것이 핵심입니다.
          </p>
        </section>

        {/* 핵심 문법 정리 & 문화 에티켓 팁 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 avoid-break">
          
          {/* 문법 총정리 */}
          <div className="border border-slate-300 rounded-xs p-3 bg-white">
            <div className="flex items-center gap-1.5 pb-1 mb-2 border-b border-slate-200">
              <BookOpen className="w-4 h-4 text-slate-800" />
              <h3 className="text-xs font-bold text-slate-900">오늘의 핵심 문법 포인트</h3>
            </div>
            <pre className="text-[11px] text-slate-700 font-sans whitespace-pre-wrap leading-relaxed">
              {answerKey.grammarSummary}
            </pre>
          </div>

          {/* 문화 & 회화 팁 */}
          <div className="border border-slate-300 rounded-xs p-3 bg-white">
            <div className="flex items-center gap-1.5 pb-1 mb-2 border-b border-slate-200">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-bold text-slate-900">일본 문화 &amp; 현지 실전 팁</h3>
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              {answerKey.culturalTip}
            </p>
            <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded-xs text-[10px] text-slate-500">
              <strong>구몬식 복습법:</strong> 오늘 틀린 문제가 있다면 빨간 펜으로 별표를 치고, 정답지를 옆에 두고 소리 내어 3회 다시 읽으세요.
            </div>
          </div>
        </div>

      </div>

      {/* Footer Block for A4 Layout */}
      <div className="mt-4 pt-2 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <div>
          마이니치 일본어 · 구몬식 정답 및 해설집 · {worksheet.code}-ANS
        </div>
        <div>
          A4 ANSWER KEY · 1 / 1
        </div>
      </div>
    </div>
  );
};
