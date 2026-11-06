import React from 'react';
import { Clock, CheckCircle2, Target, X, BookOpen, Sparkles } from 'lucide-react';

interface DailyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyGuideModal: React.FC<DailyGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white" />
            <h3 className="font-bold text-sm">
              구몬식(公文式) 하루 20분 일본어 학습 가이드
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Target Profile Callout */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              맞춤 학습자 프로필
            </span>
            <div className="mt-1 space-y-1 text-xs text-slate-700">
              <div>• <strong>현재 수준:</strong> 히라가나 읽기 가능 (카타카나와 문형 집중 강화)</div>
              <div>• <strong>학습 목적:</strong> 여행 및 일상생활에서 막힘없는 간단한 회화 구사</div>
              <div>• <strong>하루 권장 시간:</strong> 딱 20분 (부담 없는 매일의 스몰 스텝)</div>
            </div>
          </div>

          {/* 20-Min Flow Timetable */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
              20분 분초 단위 타임테이블 (구몬 황금 분할)
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 border border-slate-200 rounded-md bg-white flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-xs shrink-0">
                  00~05분
                </span>
                <div>
                  <strong className="text-slate-900 block font-semibold">1단계: 소리 내어 3회 음독 (音読)</strong>
                  <span className="text-slate-600 text-[11px]">
                    눈으로만 보지 않고 입술을 움직여 큰 소리로 읽습니다. 히라가나와 카타카나의 장음, 촉음에 귀를 기울입니다.
                  </span>
                </div>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-md bg-white flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-xs shrink-0">
                  05~10분
                </span>
                <div>
                  <strong className="text-slate-900 block font-semibold">2단계: 십자 격자 바른 획순 필기 (十字方眼)</strong>
                  <span className="text-slate-600 text-[11px]">
                    십자 눈금의 정중앙에 중심을 맞추어 정자체로 반듯하게 씁니다. 손의 근육 기억이 뇌의 언어 회로를 강화합니다.
                  </span>
                </div>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-md bg-white flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-xs shrink-0">
                  10~15분
                </span>
                <div>
                  <strong className="text-slate-900 block font-semibold">3&amp;4단계: 패턴 치환 &amp; 조사 빈칸 채우기</strong>
                  <span className="text-slate-600 text-[11px]">
                    구몬 특유의 단어 바꿔 끼우기(치환 드릴)를 통해 문법 용어 암기 없이 자연스러운 문장 뼈대를 체득합니다.
                  </span>
                </div>
              </div>

              <div className="p-2.5 border border-slate-200 rounded-md bg-white flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-xs shrink-0">
                  15~20분
                </span>
                <div>
                  <strong className="text-slate-900 block font-semibold">5단계: 실전 롤플레잉 발화 &amp; 정답지 셀프 채점</strong>
                  <span className="text-slate-600 text-[11px]">
                    현지 상황에 빙의하여 자신의 대사를 소리 내어 말하고, 별도 정답지를 꺼내 스스로 빨간 펜으로 100점 채점을 합니다.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kumon Core Philosophy */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900">
            <strong className="block font-bold mb-0.5">※ 구몬식 학습의 불변 법칙: 100점의 성취감</strong>
            <p className="text-[11px] leading-relaxed text-amber-800">
              만약 틀린 문제가 있다면 감점이 아니라 [지금 바로 정답지를 보고 고쳐서 100점을 만드는 것]이 구몬식입니다. 100점을 맞았을 때 느끼는 작은 성취감이 매일 책상에 앉게 만드는 가장 큰 원동력입니다.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-md transition-colors"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
};
