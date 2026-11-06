import React from 'react';
import { Printer, Check, X, FileText, BookOpen, Layers } from 'lucide-react';

export type PrintScope = 'current-worksheet' | 'current-answer' | 'level-worksheets' | 'level-answers' | 'full-packet';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevelTitle: string;
  currentDayCode: string;
  onConfirmPrint: (scope: PrintScope) => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  currentLevelTitle,
  currentDayCode,
  onConfirmPrint,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-slate-800" />
            <h3 className="font-bold text-slate-900 text-sm">
              A4 인쇄 및 PDF 저장 설정
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Options */}
        <div className="p-5 space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            원하는 인쇄 범위를 선택하세요. 브라우저 인쇄 창에서 <strong className="text-slate-900">[PDF로 저장]</strong>을 선택하면 파일로 간직할 수 있습니다.
          </p>

          <div className="space-y-2 pt-1">
            {/* Option 1: Current Worksheet */}
            <button
              type="button"
              onClick={() => onConfirmPrint('current-worksheet')}
              className="w-full p-3 rounded-md border border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all text-left flex items-start gap-3 group"
            >
              <FileText className="w-4 h-4 text-slate-600 group-hover:text-slate-900 mt-0.5 shrink-0" />
              <div>
                <strong className="text-xs font-bold text-slate-900 block">
                  현재 학습지 1장 인쇄 ({currentDayCode})
                </strong>
                <span className="text-[11px] text-slate-500">
                  오늘 20분 공부할 단일 A4 학습지만 깔끔하게 출력합니다.
                </span>
              </div>
            </button>

            {/* Option 2: Current Answer Key */}
            <button
              type="button"
              onClick={() => onConfirmPrint('current-answer')}
              className="w-full p-3 rounded-md border border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all text-left flex items-start gap-3 group"
            >
              <BookOpen className="w-4 h-4 text-slate-600 group-hover:text-slate-900 mt-0.5 shrink-0" />
              <div>
                <strong className="text-xs font-bold text-slate-900 block">
                  별도 정답지 1장 인쇄 ({currentDayCode} 정답)
                </strong>
                <span className="text-[11px] text-slate-500">
                  채점 및 해설용 별도 A4 정답지만 개별 출력합니다.
                </span>
              </div>
            </button>

            {/* Option 3: Level Worksheets (5 sheets) */}
            <button
              type="button"
              onClick={() => onConfirmPrint('level-worksheets')}
              className="w-full p-3 rounded-md border border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all text-left flex items-start gap-3 group"
            >
              <Layers className="w-4 h-4 text-slate-600 group-hover:text-slate-900 mt-0.5 shrink-0" />
              <div>
                <strong className="text-xs font-bold text-slate-900 block">
                  현재 단계 학습지 5장 일괄 인쇄 ({currentLevelTitle})
                </strong>
                <span className="text-[11px] text-slate-500">
                  Day 1부터 Day 5까지 5일치 워크북 세트를 한 번에 인쇄합니다.
                </span>
              </div>
            </button>

            {/* Option 4: Full Packet (Worksheets + Answer Keys) */}
            <button
              type="button"
              onClick={() => onConfirmPrint('full-packet')}
              className="w-full p-3 rounded-md border border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all text-left flex items-start gap-3 group"
            >
              <Layers className="w-4 h-4 text-slate-600 group-hover:text-slate-900 mt-0.5 shrink-0" />
              <div>
                <strong className="text-xs font-bold text-slate-900 block">
                  학습지 + 정답지 전체 패키지 (총 10장)
                </strong>
                <span className="text-[11px] text-slate-500">
                  5일치 학습지와 5일치 별도 정답지가 완벽히 묶인 완성형 교재.
                </span>
              </div>
            </button>
          </div>

          {/* Print Checklist Note */}
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-md text-[11px] text-slate-600 space-y-1">
            <span className="font-bold text-slate-900 block">인쇄 설정 체크리스트 (A4 최적화)</span>
            <div>✓ 용지 크기: <strong>A4 (210 x 297mm)</strong></div>
            <div>✓ 방향: <strong>세로 (Portrait)</strong></div>
            <div>✓ 여백: <strong>최소(기본)</strong></div>
            <div>✓ 옵션: <strong>배경 그래픽(Background Graphics) 체크 필수</strong></div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
