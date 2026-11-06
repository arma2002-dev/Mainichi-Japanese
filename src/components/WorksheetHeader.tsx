import React from 'react';
import { WorksheetData } from '../types/worksheet';
import { Clock, Award, BookOpen } from 'lucide-react';

interface WorksheetHeaderProps {
  worksheet: WorksheetData;
  isAnswerKey?: boolean;
  score?: number;
  timeSpentMinutes?: number;
  onTimeChange?: (val: number) => void;
  studentName?: string;
  onNameChange?: (val: string) => void;
  studyDate?: string;
  onDateChange?: (val: string) => void;
}

export const WorksheetHeader: React.FC<WorksheetHeaderProps> = ({
  worksheet,
  isAnswerKey = false,
  score,
  timeSpentMinutes = 20,
  onTimeChange,
  studentName = '',
  onNameChange,
  studyDate,
  onDateChange,
}) => {
  return (
    <div className="border-b-2 border-slate-900 pb-3 mb-4 select-none">
      {/* Top Banner Row */}
      <div className="flex items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white font-bold text-xs px-2.5 py-1 tracking-wider uppercase rounded-xs">
            {isAnswerKey ? '정답 및 해설지' : '구몬식 일상 회화 학습지'}
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            {worksheet.level} · Day {String(worksheet.dayNumber).padStart(2, '0')}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            [{worksheet.code}]
          </span>
        </div>

        {/* Kumon Style Standard Target Info */}
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            표준 학습 시간: <strong className="text-slate-900 font-bold">20분</strong>
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1 font-medium">
            <Award className="w-3.5 h-3.5 text-slate-500" />
            목표 점수: <strong className="text-slate-900 font-bold">100점</strong>
          </span>
        </div>
      </div>

      {/* Main Title & Learner Record Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        {/* Title & Goal Box */}
        <div className="md:col-span-7 border border-slate-300 bg-slate-50/60 p-2.5 rounded-xs flex flex-col justify-between">
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
              {worksheet.title}
            </h1>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              <span className="font-semibold text-slate-700">오늘의 목표:</span> {worksheet.todayGoal}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2 font-mono">
            <span>대상: 히라가나 독해자</span>
            <span>·</span>
            <span>영역: 일상 실전 대화</span>
          </div>
        </div>

        {/* Student Name & Timing Record Box */}
        <div className="md:col-span-3 border border-slate-300 p-2 rounded-xs text-xs flex flex-col justify-between bg-white">
          <div className="grid grid-cols-2 gap-2 pb-1 border-b border-slate-200">
            <div>
              <span className="text-[10px] text-slate-500 block">학습자 성명</span>
              {onNameChange ? (
                <input
                  type="text"
                  placeholder="이름 입력"
                  value={studentName}
                  onChange={(e) => onNameChange(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 border-b border-dashed border-slate-400 focus:outline-none focus:border-slate-800 bg-transparent py-0.5 no-print"
                />
              ) : null}
              <span className="print-only text-xs font-semibold text-slate-900 min-h-[18px] block">
                {studentName || '　　　　'}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">학습 일자</span>
              <span className="text-xs font-mono text-slate-700 block py-0.5">
                {studyDate || '202___ 년 ___ 월 ___ 일'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 pt-1 text-center font-mono text-[11px]">
            <div>
              <span className="text-[9px] text-slate-500 block">시작 시각</span>
              <span className="text-slate-700">__:__</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 block">종료 시각</span>
              <span className="text-slate-700">__:__</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 block font-bold text-slate-800">소요 시간</span>
              <span className="font-bold text-slate-900">{timeSpentMinutes}분</span>
            </div>
          </div>
        </div>

        {/* Kumon Score & Stamp Box */}
        <div className="md:col-span-2 border-2 border-slate-900 p-1.5 rounded-xs flex flex-col items-center justify-between bg-white text-center relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
            {isAnswerKey ? '만점 기준' : '채점 / 득점'}
          </span>

          <div className="my-0.5">
            <span className="text-2xl font-black font-mono tracking-tight text-red-600">
              {score !== undefined ? score : '　　'}
            </span>
            <span className="text-xs font-bold text-slate-500 font-mono"> / 100</span>
          </div>

          {/* Authentic Kumon Red Stamp Visual */}
          <div className="w-full border-t border-dashed border-slate-300 pt-1 flex items-center justify-center">
            <div className="border border-red-500 text-red-600 rounded-full px-1.5 py-0.2 text-[9px] font-bold tracking-tighter">
              {score !== undefined && score >= 90 ? 'たいへんよくできました' : '확인'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
