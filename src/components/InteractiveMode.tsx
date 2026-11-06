import React, { useState, useEffect } from 'react';
import { WorksheetData } from '../types/worksheet';
import { Play, Pause, RotateCcw, Volume2, CheckCircle, Award, Sparkles, BookOpen } from 'lucide-react';
import { speechService } from '../utils/speech';

interface InteractiveModeProps {
  worksheet: WorksheetData;
  onComplete?: (score: number, timeSpent: number) => void;
}

export const InteractiveMode: React.FC<InteractiveModeProps> = ({
  worksheet,
  onComplete,
}) => {
  // 20-minute Timer (1200 seconds)
  const [secondsRemaining, setSecondsRemaining] = useState(20 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.9);

  // Student inputs
  const [step1Checks, setStep1Checks] = useState<{ [id: string]: number }>({});
  const [step3Inputs, setStep3Inputs] = useState<{ [idx: number]: string }>({});
  const [step4Selections, setStep4Selections] = useState<{ [id: string]: string }>({});
  const [step5Input, setStep5Input] = useState<string>('');

  // Grading State
  const [isGraded, setIsGraded] = useState<boolean>(false);
  const [totalScore, setTotalScore] = useState<number>(0);

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsRemaining]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setSecondsRemaining(20 * 60);
  };

  const handleSpeak = (text: string) => {
    speechService.speak(text, speechRate);
  };

  const handleReadingCheck = (vocabId: string) => {
    setStep1Checks((prev) => {
      const current = prev[vocabId] || 0;
      return { ...prev, [vocabId]: current >= 3 ? 0 : current + 1 };
    });
  };

  const handleGrade = () => {
    let score = 0;

    // Step 1: Up to 20 pts (if each read at least once)
    const readCount = Object.values(step1Checks).filter((c) => c > 0).length;
    score += Math.round((readCount / worksheet.step1Vocab.items.length) * 20);

    // Step 2: 20 pts given for active practice
    score += 20;

    // Step 3: Up to 20 pts (check if user typed answers)
    const subAnswers = Object.values(step3Inputs).filter((s) => s.trim().length > 0).length;
    score += Math.round((subAnswers / worksheet.step3Substitution.testSlots.length) * 20);

    // Step 4: Up to 25 pts (5 pts per question)
    worksheet.step4BlankDrill.problems.forEach((p) => {
      if (step4Selections[p.id] === p.correctAnswer) {
        score += p.points;
      }
    });

    // Step 5: Up to 15 pts (if student filled response)
    if (step5Input.trim().length > 0) {
      score += 15;
    }

    setTotalScore(score);
    setIsGraded(true);

    if (onComplete) {
      const timeSpent = Math.max(1, Math.round((20 * 60 - secondsRemaining) / 60));
      onComplete(score, timeSpent);
    }
  };

  const handleResetGrading = () => {
    setIsGraded(false);
    setTotalScore(0);
  };

  return (
    <div className="max-w-[900px] mx-auto space-y-6 pb-12">
      {/* 20-Minute Focus Cockpit Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              구몬식 20분 자율 집중 모드
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {worksheet.level} · Day {worksheet.dayNumber}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {worksheet.title}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            목표: 소리 내어 말하면서 타이머 내에 100점 달성하기
          </p>
        </div>

        {/* 20-Min Timer Deck */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-2.5 rounded-md">
          <div className="text-center">
            <span className="text-[10px] text-slate-500 font-mono block">남은 학습 시간</span>
            <span
              className={`text-2xl font-black font-mono tracking-tight ${
                secondsRemaining <= 180 ? 'text-red-600 animate-pulse' : 'text-slate-900'
              }`}
            >
              {formatTimer(secondsRemaining)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-xs font-medium flex items-center gap-1"
              title={isTimerRunning ? '일시정지' : '시작'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={resetTimer}
              className="p-2 border border-slate-300 text-slate-600 rounded-md hover:bg-slate-100 transition-colors"
              title="타이머 리셋"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Audio Speed Toggle */}
          <div className="border-l border-slate-200 pl-3">
            <span className="text-[10px] text-slate-500 block">발음 속도</span>
            <button
              type="button"
              onClick={() => setSpeechRate(speechRate === 0.9 ? 0.75 : 0.9)}
              className="text-xs font-mono font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-1.5 py-0.5 rounded-xs"
            >
              {speechRate === 0.9 ? '표준 (0.9x)' : '천천히 (0.75x)'}
            </button>
          </div>
        </div>
      </div>

      {/* Graded Result Banner (If Graded) */}
      {isGraded && (
        <div className="bg-slate-900 text-white p-5 rounded-lg border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-500/10 text-red-400 font-black text-2xl font-mono">
              {totalScore}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  {totalScore >= 90 ? '대단해요! 100점 달성 (たいへんよくできました)' : '오늘의 20분 학습 완료!'}
                </h3>
                <span className="text-xs bg-red-600/30 text-red-300 px-2 py-0.5 rounded-xs font-bold">
                  구몬 합격
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {totalScore >= 90
                  ? '오늘의 핵심 일상 회화 문형을 완벽히 소화했습니다. 내일도 20분 함께해요!'
                  : '틀린 문제나 어색한 문장은 정답지와 원어민 음성을 듣고 한 번 더 복습해 보세요.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleResetGrading}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-md transition-colors"
          >
            다시 풀기
          </button>
        </div>
      )}

      {/* STEP 1: Interactive Reading */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              STEP 1
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              소리 내어 읽기 (음독 3회 달성하기)
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">20점 배점</span>
        </div>

        <p className="text-xs text-slate-600 mb-3">
          스피커 아이콘을 눌러 일본어 원어민 발음을 듣고, 입으로 큰 소리로 3회 따라 말한 후 체크박스를 클릭하세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {worksheet.step1Vocab.items.map((item, idx) => {
            const currentChecks = step1Checks[item.id] || 0;
            return (
              <div
                key={item.id}
                className="border border-slate-200 p-3 rounded-md bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <span className="text-base font-bold text-slate-900 font-['Noto_Sans_JP']">
                      {item.japanese}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSpeak(item.japanese)}
                      className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded transition-colors"
                      title="원어민 발음 듣기"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {item.romaji}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    {item.korean}
                  </div>
                  {item.usageNote && (
                    <div className="text-[11px] text-slate-500 mt-1">
                      ※ {item.usageNote}
                    </div>
                  )}
                </div>

                {/* 3 Reading Click Counter */}
                <button
                  type="button"
                  onClick={() => handleReadingCheck(item.id)}
                  className="flex items-center gap-1 p-1.5 border border-slate-300 rounded-md bg-white hover:border-slate-400 transition-colors shrink-0"
                >
                  {[1, 2, 3].map((step) => (
                    <span
                      key={step}
                      className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center font-mono ${
                        currentChecks >= step
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {step}
                    </span>
                  ))}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* STEP 2: Writing & Grid Tracing */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              STEP 2
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              십자 눈금 쓰기 확인 (十字方眼)
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">20점 배점</span>
        </div>

        <p className="text-xs text-slate-600 mb-3">
          각 글자의 획순과 십자 중심점 위치를 눈으로 확인하며 손가락이나 펜으로 허공에 획순을 그려보세요.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {worksheet.step2GridWriting.items.map((grid, idx) => (
            <div
              key={idx}
              className="border border-slate-200 p-3 rounded-md bg-slate-50/40 text-center flex flex-col items-center"
            >
              <div className="text-xs font-semibold text-slate-600 font-mono mb-1">
                [{grid.romaji}] {grid.meaning}
              </div>

              <div className="w-14 h-14 kanji-grid flex items-center justify-center text-2xl font-bold text-slate-900 font-['Noto_Sans_JP'] select-none my-1">
                {grid.char}
              </div>

              <div className="text-[10px] text-slate-500 mt-1 leading-tight">
                {grid.strokeHint}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STEP 3: Pattern Substitution Drill */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              STEP 3
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              문형 치환 드릴 (패턴 완성하기)
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">20점 배점</span>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-3 rounded-md mb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-mono block">기본 공식 패턴</span>
            <span className="text-base font-bold text-slate-900 font-['Noto_Sans_JP']">
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

        <div className="space-y-3">
          {worksheet.step3Substitution.testSlots.map((slot, idx) => (
            <div key={idx} className="p-3 border border-slate-200 rounded-md bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-800">
                  문제 {idx + 1}. 단어 [{slot.givenWord}] ({slot.givenKorean}) 넣기:
                </span>
                <button
                  type="button"
                  onClick={() => handleSpeak(slot.expectedAnswer)}
                  className="p-1 text-slate-400 hover:text-slate-800 text-xs flex items-center gap-1 font-mono"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  정답 듣기
                </button>
              </div>

              <input
                type="text"
                placeholder="일본어로 문장을 완성해 타이핑하세요"
                value={step3Inputs[idx] || ''}
                onChange={(e) =>
                  setStep3Inputs({ ...step3Inputs, [idx]: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm font-['Noto_Sans_JP'] focus:outline-none focus:border-slate-900"
              />

              {isGraded && (
                <div className="text-xs font-semibold text-slate-600 mt-1 pl-1">
                  모범 정답: <span className="text-emerald-700 font-bold">{slot.expectedAnswer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* STEP 4: Blank Problems Drill */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              STEP 4
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              실전 괄호 채우기 &amp; 조사 선택
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">25점 배점</span>
        </div>

        <div className="space-y-4">
          {worksheet.step4BlankDrill.problems.map((prob) => {
            const isCorrect = step4Selections[prob.id] === prob.correctAnswer;
            return (
              <div
                key={prob.id}
                className="p-3.5 border border-slate-200 rounded-md bg-slate-50/40"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs font-bold text-slate-800">
                    ({prob.questionNumber}) {prob.prompt}
                  </span>
                  <span className="text-xs font-mono text-slate-500">5점</span>
                </div>

                <div className="text-base font-bold text-slate-900 font-['Noto_Sans_JP'] my-1">
                  {prob.sentenceWithBlank}
                </div>

                <div className="text-xs text-slate-500 mb-2.5">
                  뜻: {prob.koreanMeaning}
                </div>

                {/* Interactive Radio Options */}
                {prob.options && (
                  <div className="flex flex-wrap items-center gap-2">
                    {prob.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() =>
                          setStep4Selections({ ...step4Selections, [prob.id]: opt })
                        }
                        className={`px-3 py-1.5 text-xs font-bold rounded-md border transition-all ${
                          step4Selections[prob.id] === opt
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {isGraded && (
                  <div className="mt-2 pt-2 border-t border-slate-200 text-xs">
                    {isCorrect ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> 정답입니다! (+5점)
                      </span>
                    ) : (
                      <span className="text-red-600 font-bold">
                        오답입니다. (정답: {prob.correctAnswer})
                      </span>
                    )}
                    <p className="text-slate-600 mt-0.5 text-[11px]">
                      {prob.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* STEP 5: Real Dialogue Roleplay */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-xs">
              STEP 5
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              20분 실전 회화 롤플레잉
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">15점 배점</span>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-md mb-3 text-xs">
          <strong className="text-slate-900 block font-semibold">
            상황: {worksheet.step5Dialogue.scenario}
          </strong>
          <p className="text-slate-600 text-[11px] mt-0.5">
            {worksheet.step5Dialogue.contextDescription}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          {worksheet.step5Dialogue.lines.map((line, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-md border ${
                line.isBlankForStudent
                  ? 'border-slate-800 bg-amber-50/30'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-slate-900 font-mono">
                  [{line.speaker} : {line.role}]
                </span>
                <button
                  type="button"
                  onClick={() => handleSpeak(line.japanese)}
                  className="p-1 text-slate-500 hover:text-slate-900 rounded"
                  title="발음 듣기"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {line.isBlankForStudent ? (
                <div>
                  <div className="text-xs text-slate-600 mb-1.5 font-medium">
                    한국어 의도: &quot;{line.korean}&quot;
                  </div>
                  <input
                    type="text"
                    placeholder="일본어로 직접 답장을 타이핑해 보세요"
                    value={step5Input}
                    onChange={(e) => setStep5Input(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm font-['Noto_Sans_JP'] focus:outline-none focus:border-slate-900"
                  />
                  {line.hint && (
                    <div className="text-[11px] text-slate-500 mt-1 italic">
                      힌트: {line.hint}
                    </div>
                  )}

                  {isGraded && (
                    <div className="mt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-xs border border-emerald-200">
                      모범 답변: {line.expectedAnswer}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-sm font-bold text-slate-900 font-['Noto_Sans_JP']">
                    {line.japanese}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {line.romaji}
                  </div>
                  <div className="text-xs text-slate-700 mt-0.5">
                    {line.korean}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit & Grading Action Button */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleGrade}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-md shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            오늘의 20분 학습 채점하기 (100점 만점)
          </button>
        </div>
      </section>
    </div>
  );
};
