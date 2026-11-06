import { LevelCurriculum, WorksheetData } from '../types/worksheet';

export const CURRICULUM: LevelCurriculum[] = [
  {
    levelId: 'level-a',
    levelName: 'Level A · 기초 회화의 문',
    description: '기본 인사, 자기소개 및 카타카나 필수 어휘 정복',
    badgeColor: 'sky',
    focus: '첫인사와 자기소개, 기본 정중형 (~です / ~ですか)',
    sheets: [
      {
        id: 'A-01',
        level: 'Level A',
        levelTitle: '기초 회화의 문 (기본 인사 & 감사)',
        dayNumber: 1,
        code: 'JA-A01',
        title: '하루를 여는 만남의 인사와 감사·사과 표현',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '시간대별 기본 인사 3가지와 정중한 감사/사과를 입으로 소리 내어 말할 수 있다.',
        step1Vocab: {
          instruction: '각 인사를 소리 내어 3번씩 읽고, 한국어 뜻과 상황을 매칭해 보세요.',
          items: [
            {
              id: 'v1',
              japanese: 'おはようございます',
              romaji: 'ohayou gozaimasu',
              korean: '좋은 아침입니다 (아침 인사)',
              usageNote: '오전 10~11시경까지 사용하며, 친구 사이에는 짧게 [おはよう]라고 합니다.'
            },
            {
              id: 'v2',
              japanese: 'こんにちは',
              romaji: 'konnichiwa',
              korean: '안녕하세요 (낮 인사)',
              usageNote: '낮 동안 가장 널리 쓰이며, 마지막 글자는 [は(ha)]로 적지만 [wa]로 발음합니다.'
            },
            {
              id: 'v3',
              japanese: 'こんばんは',
              romaji: 'konbanwa',
              korean: '안녕하세요 (저녁/밤 인사)',
              usageNote: '해가 진 뒤 만났을 때 사용합니다. 끝 글자 발음은 [wa]입니다.'
            },
            {
              id: 'v4',
              japanese: 'ありがとうございます',
              romaji: 'arigatou gozaimasu',
              korean: '감사합니다 (정중한 감사)',
              usageNote: '상대방에게 정중하게 고마움을 표할 때 가장 기본이 되는 표현입니다.'
            },
            {
              id: 'v5',
              japanese: 'すみません',
              romaji: 'sumimasen',
              korean: '죄송합니다 / 실례합니다 / 저기요',
              usageNote: '사과할 때뿐만 아니라 식당이나 가게에서 직원을 부를 때도 사용합니다.'
            }
          ]
        },
        step2GridWriting: {
          instruction: '십자 눈금(十字方眼)의 중심을 맞추어 정자체로 바르게 써 보세요. (1칸: 따라쓰기, 2칸: 스스로 쓰기)',
          items: [
            { char: 'お', romaji: 'o', meaning: '안(お)', strokeHint: '가로획 후 세로 곡선, 오른쪽 위 점' },
            { char: 'は', romaji: 'ha', meaning: '하(は)', strokeHint: '왼쪽 세로획 후 오른쪽 가로-고리' },
            { char: 'よ', romaji: 'yo', meaning: '요(よ)', strokeHint: '가로획 후 아래로 내려 둥글게 매듭' },
            { char: 'う', romaji: 'u', meaning: '우(う)', strokeHint: '짧은 사선 점 후 둥근 곡선' }
          ]
        },
        step3Substitution: {
          id: 'sub-a01',
          basePatternJapanese: 'どうも [　　] 。',
          basePatternKorean: '대단히 [　　] .',
          examples: [
            {
              slot: 'ありがとうございます',
              resultJapanese: 'どうも ありがとうございます。',
              resultKorean: '정말 감사합니다. (강조된 정중한 감사)'
            },
            {
              slot: 'すみません',
              resultJapanese: 'どうも すみません。',
              resultKorean: '정말 죄송합니다 / 대단히 실례했습니다.'
            }
          ],
          drillPrompt: '제시된 표현을 빈칸에 넣어 완성된 문장으로 소리 내어 읽고 적으시오.',
          testSlots: [
            {
              givenKorean: '감사합니다',
              givenWord: 'ありがとうございます',
              expectedAnswer: 'どうも ありがとうございます。'
            },
            {
              givenKorean: '죄송합니다 / 실례합니다',
              givenWord: 'すみません',
              expectedAnswer: 'どうも すみません。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '상황에 알맞은 표현을 보기에서 골라 빈칸에 적으시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b1',
              questionNumber: 1,
              prompt: '출근길 아침 회사 상사를 만났을 때 건네는 인사:',
              sentenceWithBlank: '( 　　　　　　　　 )。',
              options: ['おはようございます', 'こんばんは', 'さようなら'],
              correctAnswer: 'おはようございます',
              koreanMeaning: '좋은 아침입니다.',
              explanation: '아침 인사는 [おはようございます]입니다.',
              points: 5
            },
            {
              id: 'b2',
              questionNumber: 2,
              prompt: '낮 2시에 이웃을 만났을 때 건네는 인사:',
              sentenceWithBlank: '( 　　　　　 )。',
              options: ['おはようございます', 'こんにちは', 'こんばんは'],
              correctAnswer: 'こんにちは',
              koreanMeaning: '안녕하세요.',
              explanation: '낮 시간대에는 [こんにちは]를 씁니다.',
              points: 5
            },
            {
              id: 'b3',
              questionNumber: 3,
              prompt: '식당에서 직원을 부를 때 사용하는 말:',
              sentenceWithBlank: '( 　　　　　 )、おねがいします。',
              options: ['すみません', 'こんにちは', 'ありがと'],
              correctAnswer: 'すみません',
              koreanMeaning: '저기요, 부탁합니다.',
              explanation: '누군가를 부르거나 길을 물을 때 [すみません]으로 말을 틉니다.',
              points: 5
            },
            {
              id: 'b4',
              questionNumber: 4,
              prompt: '누군가 친절을 베풀었을 때 감사 표현:',
              sentenceWithBlank: 'どうも ( 　　　　　　　　 )。',
              options: ['ありがとうございます', 'すみません', 'こんばんは'],
              correctAnswer: 'ありがとうございます',
              koreanMeaning: '정말 감사합니다.',
              explanation: '정중한 감사는 [ありがとうございます]입니다.',
              points: 5
            },
            {
              id: 'b5',
              questionNumber: 5,
              prompt: '저녁 7시 친구와 약속 장소에서 만났을 때 인사:',
              sentenceWithBlank: '( 　　　　　 )。',
              options: ['おはよう', 'こんにちは', 'こんばんは'],
              correctAnswer: 'こんばんは',
              koreanMeaning: '안녕하세요 (저녁).',
              explanation: '저녁이나 밤에는 [こんばんは]를 씁니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '길에서 길을 비켜준 사람에게 가볍게 감사 인사하기',
          contextDescription: '지하철 개찰구 앞에서 앞사람이 떨어뜨린 물건을 주워 건네받은 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '행인',
              japanese: 'あの、これ、おとしましたよ。',
              romaji: 'ano, kore, otoshimashita yo.',
              korean: '저기, 이거, 떨어뜨리셨어요.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'あ、すみません！ ありがとうございます。',
              romaji: 'a, sumimasen! arigatou gozaimasu.',
              korean: '아, 죄송하고 고맙습니다! 대단히 감사합니다.',
              isBlankForStudent: true,
              expectedAnswer: 'あ、すみません！ ありがとうございます。',
              hint: '사과와 감사를 함께 건네는 일본인의 대표 일상 표현입니다.'
            },
            {
              speaker: 'A',
              role: '행인',
              japanese: 'いいえ、どういたしまして。',
              romaji: 'iie, dou itashimashite.',
              korean: '아니에요, 천만에요.'
            }
          ],
          keyExpressionPoint: '일본에서는 고마운 일을 겪었을 때 [すみません]과 [ありがとうございます]를 연이어 쓰는 경우가 많습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. どうも ありがとうございます。 (정말 감사합니다)',
            '2. どうも すみません。 (정말 죄송합니다/실례했습니다)'
          ],
          step4Answers: {
            b1: 'おはようございます',
            b2: 'こんにちは',
            b3: 'すみません',
            b4: 'ありがとうございます',
            b5: 'こんばんは'
          },
          step5Answers: [
            'B의 대사: あ、すみません！ ありがとうございます。 (또는 짧게 ありがとうございます。)'
          ],
          grammarSummary: '1. こんにちは와 こんばんは의 마지막 글자는 원래 조사 [は]에서 유래했으므로 표기는 は, 발음은 [wa]로 읽습니다.\n2. すみません은 사과(죄송합니다), 감사(미안하고 고맙습니다), 호출(저기요/실례합니다)의 3대 만능 일상 표현입니다.',
          culturalTip: '일본에서는 고개를 살짝 가볍게 숙이며 (에샤쿠, 会釈) 인사를 건네면 훨씬 자연스럽고 정중하게 느껴집니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'A-02',
        level: 'Level A',
        levelTitle: '기초 회화의 문 (자기소개)',
        dayNumber: 2,
        code: 'JA-A02',
        title: '이름, 국적, 직업을 말하는 자기소개 완성',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '「わたしは 〜 です」 기본 문형을 익히고, 처음 만난 사람에게 30초 자기소개를 할 수 있다.',
        step1Vocab: {
          instruction: '자기소개 핵심 단어를 큰 소리로 읽고 익히세요.',
          items: [
            {
              id: 'v1',
              japanese: 'わたし',
              romaji: 'watashi',
              korean: '나, 저 (1인칭 대명사)',
              usageNote: '남녀 모두 정중한 자리에서 쓰는 표현입니다.'
            },
            {
              id: 'v2',
              japanese: 'かんこくじん',
              romaji: 'kankokujin',
              korean: '한국인',
              usageNote: '나라 이름(かんこく) + じん(~인/사람)'
            },
            {
              id: 'v3',
              japanese: 'かいしゃいん',
              romaji: 'kaishain',
              korean: '회사원',
              usageNote: '학생은 [がくせい], 프리랜서는 [フリーランス]라고 합니다.'
            },
            {
              id: 'v4',
              japanese: 'はじめまして',
              romaji: 'hajimemashite',
              korean: '처음 뵙겠습니다',
              usageNote: '첫 대면에서 가장 먼저 꺼내는 정중한 인사말입니다.'
            },
            {
              id: 'v5',
              japanese: 'よろしくおねがいします',
              romaji: 'yoroshiku onegaishimasu',
              korean: '잘 부탁드립니다',
              usageNote: '자기소개 마무리나 일을 부탁할 때 쓰는 필수 표현입니다.'
            }
          ]
        },
        step2GridWriting: {
          instruction: '카타카나와 히라가나를 칸에 맞추어 또박또박 써 보세요.',
          items: [
            { char: 'わ', romaji: 'wa', meaning: '나(わ)', strokeHint: '세로선 후 오른쪽 곡선과 배부름' },
            { char: 'た', romaji: 'ta', meaning: '타(た)', strokeHint: '짧은 가로, 대각선, 작은 こ 모양' },
            { char: 'し', romaji: 'shi', meaning: '시(し)', strokeHint: '위에서 내려오다 낚싯바늘처럼 위로' },
            { char: 'で', romaji: 'de', meaning: '데(で)', strokeHint: '가로선 후 둥글게, 오른쪽 위 탁점 2개' },
            { char: 'す', romaji: 'su', meaning: '스(す)', strokeHint: '가로획 후 세로로 내려오며 매듭 꼬기' }
          ]
        },
        step3Substitution: {
          id: 'sub-a02',
          basePatternJapanese: 'わたしは [　　] です。',
          basePatternKorean: '저는 [　　] 입니다.',
          examples: [
            {
              slot: 'キム (김)',
              resultJapanese: 'わたしは キム です。',
              resultKorean: '저는 김(Kim)입니다.'
            },
            {
              slot: 'かんこくじん (한국인)',
              resultJapanese: 'わたしは かんこくじん です。',
              resultKorean: '저는 한국인입니다.'
            },
            {
              slot: 'かいしゃいん (회사원)',
              resultJapanese: 'わたしは かいしゃいん です。',
              resultKorean: '저는 회사원입니다.'
            }
          ],
          drillPrompt: '제시된 단어를 활용해 "저는 ~입니다" 문장을 만들어 완성하시오.',
          testSlots: [
            {
              givenKorean: '이(Lee)',
              givenWord: 'イ',
              expectedAnswer: 'わたしは イ です。'
            },
            {
              givenKorean: '학생',
              givenWord: 'がくせい',
              expectedAnswer: 'わたしは がくせい です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '조사와 문맥에 알맞은 단어를 보기에서 골라 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b2_1',
              questionNumber: 1,
              prompt: '"저는 한국인입니다"의 조사 [~은/는]:',
              sentenceWithBlank: 'わたし ( 　 ) かんこくじん です。',
              options: ['は', 'を', 'に', 'が'],
              correctAnswer: 'は',
              koreanMeaning: '저는 한국인입니다.',
              explanation: '주제를 나타내는 조사 [~은/는]은 글자로는 は로 쓰고, 발음은 [wa]로 합니다.',
              points: 5
            },
            {
              id: 'b2_2',
              questionNumber: 2,
              prompt: '자기소개 시작할 때 "처음 뵙겠습니다":',
              sentenceWithBlank: '( 　　　　　　 )。わたしは パク です。',
              options: ['はじめまして', 'こんにちは', 'さようなら'],
              correctAnswer: 'はじめまして',
              koreanMeaning: '처음 뵙겠습니다. 저는 박입니다.',
              explanation: '첫 대면 인사는 [はじめまして]입니다.',
              points: 5
            },
            {
              id: 'b2_3',
              questionNumber: 3,
              prompt: '자기소개 끝마칠 때 "잘 부탁드립니다":',
              sentenceWithBlank: 'どうぞ ( 　　　　　　　　　　　 )。',
              options: ['よろしくおねがいします', 'ありがとうございます', 'すみません'],
              correctAnswer: 'よろしくおねがいします',
              koreanMeaning: '부디 잘 부탁드립니다.',
              explanation: '자기소개 마무리는 [どうぞ よろしくおねがいします]입니다.',
              points: 5
            },
            {
              id: 'b2_4',
              questionNumber: 4,
              prompt: '"한국에서 왔습니다"의 조사 [~에서]:',
              sentenceWithBlank: 'かんこく ( 　　 ) きました。',
              options: ['から', 'まで', 'は', 'で'],
              correctAnswer: 'から',
              koreanMeaning: '한국에서 왔습니다.',
              explanation: '출신이나 시작 지점을 나타내는 조사는 [から(~에서부터)]입니다.',
              points: 5
            },
            {
              id: 'b2_5',
              questionNumber: 5,
              prompt: '"저도 회사원입니다"의 조사 [~도]:',
              sentenceWithBlank: 'わたし ( 　 ) かいしゃいん です。',
              options: ['も', 'は', 'を', 'へ'],
              correctAnswer: 'も',
              koreanMeaning: '저도 회사원입니다.',
              explanation: '[~도]에 해당하는 조사는 [も(mo)]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '교류회나 파티에서 처음 만난 일본인과 자기소개 나누기',
          contextDescription: '도쿄 모임에서 옆자리에 앉은 타나카(田中) 씨와 첫인사를 나눕니다.',
          lines: [
            {
              speaker: 'A',
              role: '타나카 씨',
              japanese: 'はじめまして。たなか です。',
              romaji: 'hajimemashite. tanaka desu.',
              korean: '처음 뵙겠습니다. 타나카입니다.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'はじめまして。わたしは キム です。かんこくから きました。',
              romaji: 'hajimemashite. watashi wa kimu desu. kankoku kara kimashita.',
              korean: '처음 뵙겠습니다. 저는 김입니다. 한국에서 왔습니다.',
              isBlankForStudent: true,
              expectedAnswer: 'はじめまして。わたしは [내이름] です。かんこくから きました。',
              hint: '자신의 성씨를 넣어서 소리 내어 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '타나카 씨',
              japanese: 'あ、韓国の方ですね！ よろしくおねがいします。',
              romaji: 'a, kankoku no kata desu ne! yoroshiku onegaishimasu.',
              korean: '아, 한국 분이시군요! 잘 부탁드립니다.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'こちらこそ、よろしくおねがいします。',
              romaji: 'kochirakoso, yoroshiku onegaishimasu.',
              korean: '저야말로 잘 부탁드립니다.'
            }
          ],
          keyExpressionPoint: '상대방이 [よろしくおねがいします]라고 했을 때는 [こちらこそ(저야말로)]를 붙여 화답합니다.'
        },
        answerKey: {
          step3Answers: [
            '1. わたしは イ です。 (저는 이입니다)',
            '2. わたしは がくせい です。 (저는 학생입니다)'
          ],
          step4Answers: {
            b2_1: 'は (발음은 wa)',
            b2_2: 'はじめまして',
            b2_3: 'よろしくおねがいします',
            b2_4: 'から',
            b2_5: 'も'
          },
          step5Answers: [
            'B의 대사: はじめまして。わたしは [이름] です。かんこくから きました。'
          ],
          grammarSummary: '1. [A は B です] = [A는 B입니다]. 조사 は는 단어 안에서는 ha이지만 조사로 쓰일 때는 [wa]로 발음합니다.\n2. [~から きました] = [~에서 왔습니다]. 국적이나 고향을 자연스럽게 알릴 수 있습니다.\n3. [こちらこそ] = [저야말로]. 상대의 정중한 인사에 공손하게 응답하는 표현입니다.',
          culturalTip: '일본에서는 성(苗字, 묘지)으로 자신을 소개하는 것이 일반적입니다. (예: 김입니다, 이입니다)',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'A-03',
        level: 'Level A',
        levelTitle: '기초 회화의 문 (카타카나 외래어)',
        dayNumber: 3,
        code: 'JA-A03',
        title: '카페와 일상에서 매일 쓰는 카타카나 필수 단어',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '히라가나에 이어 카페, 편의점, 거리에서 필수적인 카타카나 외래어 6개를 완벽히 읽고 쓸 수 있다.',
        step1Vocab: {
          instruction: '카타카나의 장음 부호 [ー]에 주의하며 발음해 보세요.',
          items: [
            {
              id: 'v1',
              japanese: 'コーヒー',
              romaji: 'koohii',
              korean: '커피 (Coffee)',
              usageNote: '가운데와 끝의 장음 [ー]는 박자를 1박씩 늘려서 길게 발음합니다.'
            },
            {
              id: 'v2',
              japanese: 'カフェ',
              romaji: 'kafe',
              korean: '카페 (Cafe)',
              usageNote: '작은 ェ(fe)는 [f] 발음을 표기하기 위한 복합 카타카나입니다.'
            },
            {
              id: 'v3',
              japanese: 'トイレ',
              romaji: 'toire',
              korean: '화장실 (Toilet)',
              usageNote: '일본에서 일상적으로 가장 흔하게 쓰는 화장실 명칭입니다.'
            },
            {
              id: 'v4',
              japanese: 'メニュー',
              romaji: 'menyuu',
              korean: '메뉴, 메뉴판 (Menu)',
              usageNote: '끝에 장음 [ー]가 있으므로 [메뉴-]하고 길게 소리 냅니다.'
            },
            {
              id: 'v5',
              japanese: 'バス',
              romaji: 'basu',
              korean: '버스 (Bus)',
              usageNote: '대중교통 버스입니다. 지하철은 [ちかてつ]라고 부릅니다.'
            },
            {
              id: 'v6',
              japanese: 'ビール',
              romaji: 'biiru',
              korean: '맥주 (Beer)',
              usageNote: '가운데 장음 [ー]가 중요합니다. 생맥주는 [なまビール]입니다.'
            }
          ]
        },
        step2GridWriting: {
          instruction: '카타카나의 각진 획을 살려 십자 중심에 바르게 쓰세요. (장음 부호는 가로선입니다)',
          items: [
            { char: 'コ', romaji: 'ko', meaning: '코(コ)', strokeHint: '가로 그은 후 꺾어 내리고, 아래 가로선' },
            { char: 'ー', romaji: '-', meaning: '장음(ー)', strokeHint: '중앙에 수평으로 반듯하게 긋기' },
            { char: 'ヒ', romaji: 'hi', meaning: '히(ヒ)', strokeHint: '가로획, 아래 꺾어 오른쪽으로 길게 긋기' },
            { char: 'ト', romaji: 'to', meaning: '토(ト)', strokeHint: '수직선 내린 후 오른쪽 아래로 비스듬히' },
            { char: 'イ', romaji: 'i', meaning: '이(イ)', strokeHint: '비스듬히 삐친 후 오른쪽 아래로 세로선' },
            { char: 'レ', romaji: 're', meaning: '레(レ)', strokeHint: '내려오다 오른쪽 위로 살짝 삐치기' }
          ]
        },
        step3Substitution: {
          id: 'sub-a03',
          basePatternJapanese: '[　　] を ください。',
          basePatternKorean: '[　　] 을(를) 주세요.',
          examples: [
            {
              slot: 'コーヒー (커피)',
              resultJapanese: 'コーヒー を ください。',
              resultKorean: '커피를 주세요.'
            },
            {
              slot: 'メニュー (메뉴판)',
              resultJapanese: 'メニュー を ください。',
              resultKorean: '메뉴판을 주세요.'
            },
            {
              slot: 'ビール (맥주)',
              resultJapanese: 'ビール を ください。',
              resultKorean: '맥주를 주세요.'
            }
          ],
          drillPrompt: '외래어 단어를 넣어 가게에서 주문하는 문장을 완성하고 소리 내어 읽으시오.',
          testSlots: [
            {
              givenKorean: '물',
              givenWord: 'おみず',
              expectedAnswer: 'おみず を ください。'
            },
            {
              givenKorean: '커피',
              givenWord: 'コーヒー',
              expectedAnswer: 'コーヒー を ください。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '문맥에 알맞은 카타카나 단어를 골라 적으시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b3_1',
              questionNumber: 1,
              prompt: '카페에 들어가서 따뜻한 커피를 주문할 때:',
              sentenceWithBlank: 'ホット ( 　　　　 ) を ください。',
              options: ['コーヒー', 'トイレ', 'バス'],
              correctAnswer: 'コーヒー',
              koreanMeaning: '따뜻한 커피를 주세요.',
              explanation: '핫커피는 [ホットコーヒー]입니다.',
              points: 5
            },
            {
              id: 'b3_2',
              questionNumber: 2,
              prompt: '가게에서 메뉴판을 보고 싶을 때:',
              sentenceWithBlank: '( 　　　　 )、おねがいします。',
              options: ['メニュー', 'ビール', 'バス'],
              correctAnswer: 'メニュー',
              koreanMeaning: '메뉴판 부탁합니다.',
              explanation: '메뉴판은 [メニュー]입니다.',
              points: 5
            },
            {
              id: 'b3_3',
              questionNumber: 3,
              prompt: '급하게 화장실의 위치를 묻고 싶을 때:',
              sentenceWithBlank: '( 　　　 ) は どこですか。',
              options: ['トイレ', 'カフェ', 'ビール'],
              correctAnswer: 'トイレ',
              koreanMeaning: '화장실은 어디입니까?',
              explanation: '화장실은 [トイレ]입니다.',
              points: 5
            },
            {
              id: 'b3_4',
              questionNumber: 4,
              prompt: '퇴근 후 이자카야에서 시원한 생맥주를 주문할 때:',
              sentenceWithBlank: 'なま ( 　　　 )、ひとつ ください。',
              options: ['ビール', 'コーヒー', 'メニュー'],
              correctAnswer: 'ビール',
              koreanMeaning: '생맥주 하나 주세요.',
              explanation: '맥주는 [ビール]입니다.',
              points: 5
            },
            {
              id: 'b3_5',
              questionNumber: 5,
              prompt: '목적지까지 타고 갈 교통수단 버스 정류장을 찾을 때:',
              sentenceWithBlank: '( 　　 ) のりばは どこですか。',
              options: ['バス', 'カフェ', 'トイレ'],
              correctAnswer: 'バス',
              koreanMeaning: '버스 타는 곳은 어디입니까?',
              explanation: '버스는 [バス]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '도쿄 카페에서 아이스 커피 주문하기',
          contextDescription: '카페 카운터에 서서 점원과 나누는 실전 주문 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '점원',
              japanese: 'いらっしゃいませ！ ごちゅうもんは？',
              romaji: 'irasshaimase! gochuumon wa?',
              korean: '어서 오세요! 주문은 무엇으로 하시겠습니까?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'アイスコーヒー を ひとつ ください。',
              romaji: 'aisu koohii o hitotsu kudasai.',
              korean: '아이스 커피 하나 주세요.',
              isBlankForStudent: true,
              expectedAnswer: 'アイスコーヒー を ひとつ ください。',
              hint: '[아이스 커피 1개 주세요]라고 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '점원',
              japanese: 'かしこまりました。てんないで おめしあがりですか？',
              romaji: 'kashikomarimashita. tennai de omeshagari desu ka?',
              korean: '알겠습니다. 매장에서 드시고 가시나요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'はい、てんないで。',
              romaji: 'hai, tennai de.',
              korean: '네, 매장에서요.'
            }
          ],
          keyExpressionPoint: '물건이나 음식을 주문할 때 [~を ください(~을 주세요)]는 가장 기본이자 확실한 표현입니다.'
        },
        answerKey: {
          step3Answers: [
            '1. おみず を ください。 (물을 주세요)',
            '2. コーヒー を ください。 (커피를 주세요)'
          ],
          step4Answers: {
            b3_1: 'コーヒー',
            b3_2: 'メニュー',
            b3_3: 'トイレ',
            b3_4: 'ビール',
            b3_5: 'バス'
          },
          step5Answers: [
            'B의 대사: アイスコーヒー を ひとつ ください。'
          ],
          grammarSummary: '1. 카타카나의 가로줄 [ー]는 앞 모음을 1박 늘여서 길게 소리 내는 [장음 부호]입니다. (예: コーヒー = 코-히-)\n2. [조사 を]는 [~을/를]의 목적격 조사이며, 글자는 を로 쓰고 발음은 [o]로 합니다.\n3. 수량사 [ひとつ]는 [하나, 1개]를 뜻합니다.',
          culturalTip: '일본 카페에서는 [핫(ホット)]과 [아이스(アイス)]를 꼭 구분해서 주문해야 합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'A-04',
        level: 'Level A',
        levelTitle: '기초 회화의 문 (의문문 & 부정문)',
        dayNumber: 4,
        code: 'JA-A04',
        title: '질문하고 부정하기 (~입니까? / ~이 아닙니다)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '「〜ですか」와 「〜じゃありません」을 구사하여 묻고 답할 수 있다.',
        step1Vocab: {
          instruction: '질문과 부정에 꼭 필요한 핵심 표현을 소리 내어 연습하세요.',
          items: [
            {
              id: 'v1',
              japanese: '〜ですか',
              romaji: '~ desu ka',
              korean: '~입니까? / ~인가요?',
              usageNote: '끝음절을 살짝 올리면 자연스러운 의문문이 됩니다.'
            },
            {
              id: 'v2',
              japanese: '〜じゃありません',
              romaji: '~ ja arimasen',
              korean: '~이/가 아닙니다 (일상 회화체)',
              usageNote: '더 격식 있는 자리에서는 [〜ではありません]이라고도 합니다.'
            },
            {
              id: 'v3',
              japanese: 'はい',
              romaji: 'hai',
              korean: '네, 맞습니다',
              usageNote: '동의나 긍정 대답 시 또렷하게 발음합니다.'
            },
            {
              id: 'v4',
              japanese: 'いいえ',
              romaji: 'iie',
              korean: '아니요, 다릅니다',
              usageNote: '부정이나 사양할 때 사용합니다.'
            },
            {
              id: 'v5',
              japanese: 'にほんじん',
              romaji: 'nihonjin',
              korean: '일본인',
              usageNote: '일본(にほん) + じん(~사람)'
            }
          ]
        },
        step2GridWriting: {
          instruction: '부정문과 의문문의 핵심 글자를 바른 순서로 써 보세요.',
          items: [
            { char: 'か', romaji: 'ka', meaning: '까(か)', strokeHint: '왼쪽 획 후 세로 굽히고, 오른쪽 점' },
            { char: 'じ', romaji: 'ji', meaning: '지(じ)', strokeHint: 'し(시)에 탁점 두 개 찍기' },
            { char: 'ゃ', romaji: 'ya', meaning: '야(ゃ)', strokeHint: '작은 글자(요음)로 칸의 1/4 크기로 쓰기' },
            { char: 'ん', romaji: 'n', meaning: '응(ん)', strokeHint: '사선 내려와 부드럽게 감아올리기' }
          ]
        },
        step3Substitution: {
          id: 'sub-a04',
          basePatternJapanese: 'いいえ、[　　] じゃありません。',
          basePatternKorean: '아니요, [　　] 이/가 아닙니다.',
          examples: [
            {
              slot: 'にほんじん (일본인)',
              resultJapanese: 'いいえ、にほんじん じゃありません。',
              resultKorean: '아니요, 일본인이 아닙니다.'
            },
            {
              slot: 'がくせい (학생)',
              resultJapanese: 'いいえ、がくせい じゃありません。',
              resultKorean: '아니요, 학생이 아닙니다.'
            }
          ],
          drillPrompt: '부정형 문형을 사용해 문장을 완성하고 소리 내어 읽으시오.',
          testSlots: [
            {
              givenKorean: '회사원',
              givenWord: 'かいしゃいん',
              expectedAnswer: 'いいえ、かいしゃいん じゃありません。'
            },
            {
              givenKorean: '선생님',
              givenWord: 'せんせい',
              expectedAnswer: 'いいえ、せんせい じゃありません。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '문장의 빈칸에 들어갈 알맞은 조동사나 조사를 고르시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b4_1',
              questionNumber: 1,
              prompt: '"당신은 학생입니까?"의 의문 조사:',
              sentenceWithBlank: 'あなたは がくせい です ( 　 )。',
              options: ['か', 'ね', 'よ', 'は'],
              correctAnswer: 'か',
              koreanMeaning: '당신은 학생입니까?',
              explanation: '문장 끝에 [か]를 붙이면 물어보는 의문문이 됩니다.',
              points: 5
            },
            {
              id: 'b4_2',
              questionNumber: 2,
              prompt: '"네, 그렇습니다"의 긍정 대답:',
              sentenceWithBlank: '( 　　 )、そうです。',
              options: ['はい', 'いいえ', 'どうぞ'],
              correctAnswer: 'はい',
              koreanMeaning: '네, 그렇습니다.',
              explanation: '긍정 답변은 [はい]입니다.',
              points: 5
            },
            {
              id: 'b4_3',
              questionNumber: 3,
              prompt: '"아니요, 다릅니다":',
              sentenceWithBlank: '( 　　　 )、ちがいます。',
              options: ['いいえ', 'はい', 'どうも'],
              correctAnswer: 'いいえ',
              koreanMeaning: '아니요, 다릅니다 (아닙니다).',
              explanation: '부정 답변은 [いいえ]입니다.',
              points: 5
            },
            {
              id: 'b4_4',
              questionNumber: 4,
              prompt: '"일본인이 아닙니다"의 부정 표현:',
              sentenceWithBlank: 'にほんじん ( 　　　　　　　　 )。',
              options: ['じゃありません', 'ですか', 'でした'],
              correctAnswer: 'じゃありません',
              koreanMeaning: '일본인이 아닙니다.',
              explanation: '명사의 부정형은 [〜じゃありません]입니다.',
              points: 5
            },
            {
              id: 'b4_5',
              questionNumber: 5,
              prompt: '상대방의 동의를 구할 때 쓰는 "~군요, ~네요":',
              sentenceWithBlank: 'きれい です ( 　 )。',
              options: ['ね', 'か', 'を', 'が'],
              correctAnswer: 'ね',
              koreanMeaning: '예쁘네요 (예쁘군요).',
              explanation: '상대의 공감을 유도할 때는 말끝에 [ね]를 붙입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '일본 현지에서 국적과 신분을 묻고 답하는 상황',
          contextDescription: '게스트하우스 라운지에서 여행객끼리 서로의 국적을 확인하는 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '여행자',
              japanese: 'すみません、にほんじん ですか？',
              romaji: 'sumimasen, nihonjin desu ka?',
              korean: '실례지만, 일본인이신가요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'いいえ、にほんじん じゃありません。かんこくじん です。',
              romaji: 'iie, nihonjin ja arimasen. kankokujin desu.',
              korean: '아니요, 일본인이 아닙니다. 한국인입니다.',
              isBlankForStudent: true,
              expectedAnswer: 'いいえ、にほんじん じゃありません。かんこくじん です。',
              hint: '부정한 뒤 올바른 국적을 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '여행자',
              japanese: 'あ、そうなんですね！ にほんごが おじょうずですね。',
              romaji: 'a, sou nan desu ne! nihongo ga ojouzu desu ne.',
              korean: '아, 그렇군요! 일본어를 잘하시네요.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'いいえ、まだまだです。',
              romaji: 'iie, mada mada desu.',
              korean: '아니에요, 아직 멀었습니다. (겸손한 표현)'
            }
          ],
          keyExpressionPoint: '일본인이 일본어를 칭찬할 때는 [いいえ、まだまだです(아직 멀었습니다)]라고 겸손하게 답하는 것이 매너입니다.'
        },
        answerKey: {
          step3Answers: [
            '1. いいえ、かいしゃいん じゃありません。 (아니요, 회사원이 아닙니다)',
            '2. いいえ、せんせい じゃありません。 (아니요, 선생님이 아닙니다)'
          ],
          step4Answers: {
            b4_1: 'か',
            b4_2: 'はい',
            b4_3: 'いいえ',
            b4_4: 'じゃありません',
            b4_5: 'ね'
          },
          step5Answers: [
            'B의 대사: いいえ、にほんじん じゃありません。かんこくじん です。'
          ],
          grammarSummary: '1. 문장 끝에 [か]를 붙이면 물음표(?) 없이도 의문문이 완성됩니다.\n2. [명사 + じゃありません] = [~이/가 아닙니다]. 일상 회화에서 가장 널리 쓰이는 명사 부정형입니다.\n3. [いいえ、まだまだです]는 칭찬에 대한 대표적인 일본식 겸양 표현입니다.',
          culturalTip: '일본어 문장 부호에서는 물음표(?) 대신 마침표(。)를 찍고 소리만 올려서 질문하는 것이 전통적 표기법입니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'A-05',
        level: 'Level A',
        levelTitle: '기초 회화의 문 (종합 복습 테스트)',
        dayNumber: 5,
        code: 'JA-A05',
        title: 'Level A 총결산: 만남과 주문, 자기소개 실전 테스트',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: 'Level A에서 배운 5대 일상 회화 패턴을 망설임 없이 종합적으로 발화하고 100점을 달성한다.',
        step1Vocab: {
          instruction: 'Level A의 핵심 5단어를 보지 않고 뜻과 발음을 떠올려 보세요.',
          items: [
            { id: 'v1', japanese: 'こんにちは', romaji: 'konnichiwa', korean: '안녕하세요 (낮 인사)' },
            { id: 'v2', japanese: 'すみません', romaji: 'sumimasen', korean: '죄송합니다 / 저기요' },
            { id: 'v3', japanese: 'わたしは 〜 です', romaji: 'watashi wa ~ desu', korean: '저는 ~입니다' },
            { id: 'v4', japanese: 'コーヒー を ください', romaji: 'koohii o kudasai', korean: '커피를 주세요' },
            { id: 'v5', japanese: 'よろしくおねがいします', romaji: 'yoroshiku onegaishimasu', korean: '잘 부탁드립니다' }
          ]
        },
        step2GridWriting: {
          instruction: '지금까지 배운 핵심 한 글자씩을 종합하여 반듯하게 정서하세요.',
          items: [
            { char: 'こ', romaji: 'ko', meaning: '코(こ)', strokeHint: '위 가로선, 아래 둥근 곡선' },
            { char: 'ん', romaji: 'n', meaning: '응(ん)', strokeHint: '왼쪽 대각선 후 부드러운 호' },
            { char: 'に', romaji: 'ni', meaning: '니(に)', strokeHint: '세로선 긋고 오른쪽에 こ 쓰기' },
            { char: 'ち', romaji: 'chi', meaning: '치(ち)', strokeHint: '가로선 후 세로로 내려오며 5자 모양' },
            { char: 'は', romaji: 'wa', meaning: '와(は)', strokeHint: '인사말 조사로 발음은 [wa]' }
          ]
        },
        step3Substitution: {
          id: 'sub-a05',
          basePatternJapanese: 'わたしは [ 국적 ] です。[ 직업 ] です。',
          basePatternKorean: '저는 [ 국적 ] 입니다. [ 직업 ] 입니다.',
          examples: [
            {
              slot: 'かんこくじん / かいしゃいん',
              resultJapanese: 'わたしは かんこくじん です。かいしゃいん です。',
              resultKorean: '저는 한국인입니다. 회사원입니다.'
            }
          ],
          drillPrompt: '자신의 상황에 맞추어 국적과 직업/역할을 한 번에 말하는 복합 문형을 완성하시오.',
          testSlots: [
            {
              givenKorean: '한국인 / 학생',
              givenWord: 'かんこくじん / がくせい',
              expectedAnswer: 'わたしは かんこくじん です。がくせい です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: 'Level A 종합 평가 빈칸 채우기 (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b5_1',
              questionNumber: 1,
              prompt: '상대방의 칭찬에 "천만에요 / 아니에요":',
              sentenceWithBlank: '( 　　　 )、どういたしまして。',
              options: ['いいえ', 'はい', 'どうも'],
              correctAnswer: 'いいえ',
              koreanMeaning: '아니에요, 천만에요.',
              explanation: '천만에요 앞에는 보통 [いいえ(아니에요)]가 붙습니다.',
              points: 5
            },
            {
              id: 'b5_2',
              questionNumber: 2,
              prompt: '"메뉴판을 주세요"의 목적격 조사:',
              sentenceWithBlank: 'メニュー ( 　 ) ください。',
              options: ['を', 'は', 'が', 'に'],
              correctAnswer: 'を',
              koreanMeaning: '메뉴판을 주세요.',
              explanation: '[~을/를 주세요]는 [〜を ください]입니다.',
              points: 5
            },
            {
              id: 'b5_3',
              questionNumber: 3,
              prompt: '"학생입니까?"의 의문 종결사:',
              sentenceWithBlank: 'がくせい です ( 　 )。',
              options: ['か', 'ね', 'よ'],
              correctAnswer: 'か',
              koreanMeaning: '학생입니까?',
              explanation: '의문문 종결사는 [か]입니다.',
              points: 5
            },
            {
              id: 'b5_4',
              questionNumber: 4,
              prompt: '"아니요, 회사원이 아닙니다":',
              sentenceWithBlank: 'いいえ、かいしゃいん ( 　　　　　　　　 )。',
              options: ['じゃありません', 'でした', 'ですか'],
              correctAnswer: 'じゃありません',
              koreanMeaning: '아니요, 회사원이 아닙니다.',
              explanation: '명사의 현재 부정형은 [じゃありません]입니다.',
              points: 5
            },
            {
              id: 'b5_5',
              questionNumber: 5,
              prompt: '헤어질 때 정중한 인사:',
              sentenceWithBlank: 'では、また。( 　　　　　 )。',
              options: ['さようなら', 'こんにちは', 'おはよう'],
              correctAnswer: 'さようなら',
              koreanMeaning: '그럼 또 봬요. 안녕히 가세요/계세요.',
              explanation: '작별 인사는 [さようなら] 또는 [では、また]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: 'Level A 졸업 실전 회화 (첫 만남 종합)',
          contextDescription: '비행기 옆자리 승객과 자연스럽게 첫인사를 나누는 종합 시나리오입니다.',
          lines: [
            {
              speaker: 'A',
              role: '승객',
              japanese: 'こんにちは。りょこう ですか？',
              romaji: 'konnichiwa. ryokou desu ka?',
              korean: '안녕하세요. 여행이신가요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'はい、りょこう です。かんこくから きました。',
              romaji: 'hai, ryokou desu. kankoku kara kimashita.',
              korean: '네, 여행입니다. 한국에서 왔습니다.',
              isBlankForStudent: true,
              expectedAnswer: 'はい、りょこう です。かんこくから きました。',
              hint: '[네, 여행입니다. 한국에서 왔습니다]를 완성해 보세요.'
            },
            {
              speaker: 'A',
              role: '승객',
              japanese: 'いいですね！ たのしんで くださいね。',
              romaji: 'ii desu ne! tanoshinde kudasai ne.',
              korean: '좋네요! 즐거운 시간 보내세요.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'ありがとうございます！',
              romaji: 'arigatou gozaimasu!',
              korean: '감사합니다!'
            }
          ],
          keyExpressionPoint: 'Level A의 모든 기본 인사가 자연스럽게 연결되었습니다. 100점을 향해 나아가세요!'
        },
        answerKey: {
          step3Answers: [
            '1. わたしは かんこくじん です。がくせい です。 (저는 한국인입니다. 학생입니다)'
          ],
          step4Answers: {
            b5_1: 'いいえ',
            b5_2: 'を',
            b5_3: 'か',
            b5_4: 'じゃありません',
            b5_5: 'さようなら'
          },
          step5Answers: [
            'B의 대사: はい、りょこう です。かんこくから きました。'
          ],
          grammarSummary: '축하합니다! Level A를 완수하셨습니다.\n기본 인사(おはよう/こんにちは/こんばんは), 호칭과 소개(わたしは〜です), 카타카나 외래어(コーヒー, メニュー), 질문과 부정(〜ですか / 〜じゃありません)의 기초 뼈대가 완성되었습니다.',
          culturalTip: '간단한 일본어라도 직접 소리 내어 말해본 경험이 쌓일수록 실제 일본 현지에서 말이 훨씬 잘 트입니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      }
    ]
  },
  {
    levelId: 'level-b',
    levelName: 'Level B · 사물과 위치의 문',
    description: '지시대명사(이것·그것·저것), 장소 위치 묻기 및 쇼핑·가격 회화',
    badgeColor: 'emerald',
    focus: 'これ/それ/あれ, ここ/そこ/あそこ, いくらですか, ~をください',
    sheets: [
      {
        id: 'B-01',
        level: 'Level B',
        levelTitle: '사물과 위치의 문 (지시대명사)',
        dayNumber: 6,
        code: 'JA-B01',
        title: '이것, 그것, 저것, 어느 것 (これ・それ・あれ・どれ)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '거리 기준에 따른 코소아도(こ・そ・あ・ど) 체계를 익히고 사물을 가리켜 질문할 수 있다.',
        step1Vocab: {
          instruction: '나와 상대방의 거리에 따른 지시대명사를 비교하며 소리 내어 읽으세요.',
          items: [
            {
              id: 'v1',
              japanese: 'これ',
              romaji: 'kore',
              korean: '이것 (말하는 사람에게 가까운 것)',
              usageNote: '내 손이 닿는 위치나 내가 쥐고 있는 물건을 가리킵니다.'
            },
            {
              id: 'v2',
              japanese: 'それ',
              romaji: 'sore',
              korean: '그것 (듣는 사람에게 가까운 것)',
              usageNote: '상대방 쪽 가까이에 있는 물건을 가리킵니다.'
            },
            {
              id: 'v3',
              japanese: 'あれ',
              romaji: 'are',
              korean: '저것 (둘 다에게서 멀리 떨어진 것)',
              usageNote: '두 사람 모두에게서 멀리 있는 사물을 가리킵니다.'
            },
            {
              id: 'v4',
              japanese: 'どれ',
              romaji: 'dore',
              korean: '어느 것 (의문사)',
              usageNote: '셋 이상 중에서 어느 것인지 모를 때 묻는 표현입니다.'
            },
            {
              id: 'v5',
              japanese: 'なん / なに',
              romaji: 'nan / nani',
              korean: '무엇, 뭐',
              usageNote: '입니다(です) 앞에서는 [なん]으로 읽습니다. (なんですか)'
            }
          ]
        },
        step2GridWriting: {
          instruction: '지시대명사 こ・そ・あ・ど의 앞머리를 정자체로 칸에 맞추어 쓰세요.',
          items: [
            { char: 'こ', romaji: 'ko', meaning: '이(こ)', strokeHint: '가로선, 부드러운 아래 곡선' },
            { char: 'そ', romaji: 'so', meaning: '그(そ)', strokeHint: '지그재그 후 둥글게 감아내리기' },
            { char: 'あ', romaji: 'a', meaning: '저(あ)', strokeHint: '가로선, 세로선 통과 후 둥근 원형 매듭' },
            { char: 'ど', romaji: 'do', meaning: '어느(ど)', strokeHint: 'と(토)에 탁점 두 개' },
            { char: 'れ', romaji: 're', meaning: '것(れ)', strokeHint: '세로선 후 오른쪽 꼬아올려 꺾기' }
          ]
        },
        step3Substitution: {
          id: 'sub-b01',
          basePatternJapanese: '[ 지시대명사 ] は なんですか。',
          basePatternKorean: '[ 지시대명사 ] 은/는 무엇입니까?',
          examples: [
            {
              slot: 'これ (이것)',
              resultJapanese: 'これ は なんですか。',
              resultKorean: '이것은 무엇입니까?'
            },
            {
              slot: 'あれ (저것)',
              resultJapanese: 'あれ は なんですか。',
              resultKorean: '저것은 무엇입니까?'
            }
          ],
          drillPrompt: '상황에 맞는 지시대명사를 넣어 사물을 묻는 의문문을 만드시오.',
          testSlots: [
            {
              givenKorean: '그것',
              givenWord: 'それ',
              expectedAnswer: 'それ は なんですか。'
            },
            {
              givenKorean: '저것',
              givenWord: 'あれ',
              expectedAnswer: 'あれ は なんですか。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '거리와 상황에 알맞은 지시대명사를 보기에서 골라 쓰시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b1_1',
              questionNumber: 1,
              prompt: '내가 손에 들고 있는 신기한 물건을 가리키며 "이것은 무엇입니까?":',
              sentenceWithBlank: '( 　　 ) は なんですか。',
              options: ['これ', 'それ', 'あれ'],
              correctAnswer: 'これ',
              koreanMeaning: '이것은 무엇입니까?',
              explanation: '말하는 사람에게 가까운 것은 [これ]입니다.',
              points: 5
            },
            {
              id: 'b1_2',
              questionNumber: 2,
              prompt: '상대방 점원이 손에 쥔 추천 빵을 가리키며 "그것은 빵입니까?":',
              sentenceWithBlank: '( 　　 ) は パン ですか。',
              options: ['それ', 'これ', 'どれ'],
              correctAnswer: 'それ',
              koreanMeaning: '그것은 빵입니까?',
              explanation: '상대방 쪽에 있는 것은 [それ]입니다.',
              points: 5
            },
            {
              id: 'b1_3',
              questionNumber: 3,
              prompt: '저 멀리 진열장에 놓인 시계를 가리키며 "저것은 시계입니다":',
              sentenceWithBlank: '( 　　 ) は とけい です。',
              options: ['あれ', 'これ', 'それ'],
              correctAnswer: 'あれ',
              koreanMeaning: '저것은 시계입니다.',
              explanation: '양쪽 모두에게서 먼 것은 [あれ]입니다.',
              points: 5
            },
            {
              id: 'b1_4',
              questionNumber: 4,
              prompt: '여러 우산 중 "당신의 우산은 어느 것입니까?":',
              sentenceWithBlank: 'あなたのかさは ( 　　 ) ですか。',
              options: ['どれ', 'これ', 'あれ'],
              correctAnswer: 'どれ',
              koreanMeaning: '당신의 우산은 어느 것입니까?',
              explanation: '어느 것을 묻는 의문사는 [どれ]입니다.',
              points: 5
            },
            {
              id: 'b1_5',
              questionNumber: 5,
              prompt: '"이것은 일본 과자입니다":',
              sentenceWithBlank: 'これ は にほんの おかし ( 　　 )。',
              options: ['です', 'ですか', 'じゃありません'],
              correctAnswer: 'です',
              koreanMeaning: '이것은 일본 과자입니다.',
              explanation: '단정하는 긍정 문형은 [〜です]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '기념품 가게에서 흥미로운 물건에 대해 질문하기',
          contextDescription: '아사쿠사 기념품 가게에서 진열대의 상품을 가리키며 점원에게 묻는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、これ は なん ですか？',
              romaji: 'sumimasen, kore wa nan desu ka?',
              korean: '저기요, 이것은 무엇인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、これ は なん ですか？',
              hint: '[저기요, 이것은 무엇입니까?]를 직접 말해 보세요.'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'あ、それ は まっちゃの おかし ですよ。',
              romaji: 'a, sore wa maccha no okashi desu yo.',
              korean: '아, 그것은 말차 과자예요.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'おいしいですか？',
              romaji: 'oishii desu ka?',
              korean: '맛있나요?'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'はい！ とても にんきが あります。',
              romaji: 'hai! totemo ninki ga arimasu.',
              korean: '네! 아주 인기가 많습니다.'
            }
          ],
          keyExpressionPoint: '내가 [これ(이것)]로 물으면, 상대방 점원은 자연스럽게 [それ(그것)]로 응답합니다.'
        },
        answerKey: {
          step3Answers: [
            '1. それ は なんですか。 (그것은 무엇입니까?)',
            '2. あれ は なんですか。 (저것은 무엇입니까?)'
          ],
          step4Answers: {
            b1_1: 'これ',
            b1_2: 'それ',
            b1_3: 'あれ',
            b1_4: 'どれ',
            b1_5: 'です'
          },
          step5Answers: [
            'A의 대사: すみません、これ は なん ですか？'
          ],
          grammarSummary: '일본어의 코소아도(こ・そ・あ・ど) 사물 대명사:\n- これ(이것): 화자 근처\n- それ(그것): 청자 근처\n- あれ(저것): 둘 다 먼 곳\n- どれ(어느 것): 선택 의문사\n질문할 때 "이것은?"(これ)으로 물으면 상대는 "그것은~"(それ)으로 답하는 짝을 기억하세요.',
          culturalTip: '일본 가게에서 손가락으로 콕 찌르기보다는 손바닥을 위로 펴서 물건을 가리키면 한결 예의 바릅니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'B-02',
        level: 'Level B',
        levelTitle: '사물과 위치의 문 (장소와 위치)',
        dayNumber: 7,
        code: 'JA-B02',
        title: '여기, 거기, 저기, 어디 (ここ・そこ・あそこ・どこ)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '장소 지시대명사를 사용해 길이나 건물 내에서 화장실, 역 등의 위치를 묻고 답할 수 있다.',
        step1Vocab: {
          instruction: '장소를 묻고 답할 때 필수적인 어휘를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'ここ', romaji: 'koko', korean: '여기 (말하는 사람 쪽 장소)' },
            { id: 'v2', japanese: 'そこ', romaji: 'soko', korean: '거기 (듣는 사람 쪽 장소)' },
            { id: 'v3', japanese: 'あそこ', romaji: 'asoko', korean: '저기 (둘 다에게서 떨어진 장소)' },
            { id: 'v4', japanese: 'どこ', romaji: 'doko', korean: '어디 (장소 의문사)' },
            { id: 'v5', japanese: 'えき', romaji: 'eki', korean: '역 (전철역, 기차역)' },
            { id: 'v6', japanese: 'コンビニ', romaji: 'konbini', korean: '편의점 (외래어)' }
          ]
        },
        step2GridWriting: {
          instruction: '위치 질문에 가장 많이 쓰이는 글자를 바르게 쓰세요.',
          items: [
            { char: 'こ', romaji: 'ko', meaning: '이(こ)', strokeHint: '상하 두 획의 균형' },
            { char: 'こ', romaji: 'ko', meaning: '곳(こ)', strokeHint: '여기를 뜻하는 ここ 쓰기' },
            { char: 'ど', romaji: 'do', meaning: '어(ど)', strokeHint: '어디를 뜻하는 どこ 쓰기' },
            { char: 'え', romaji: 'e', meaning: '역(え)', strokeHint: '점 찍고 z자 모양 후 굴리기' },
            { char: 'き', romaji: 'ki', meaning: '역(き)', strokeHint: '가로 2획 후 세로 곡선 및 아래 둥근 획' }
          ]
        },
        step3Substitution: {
          id: 'sub-b02',
          basePatternJapanese: '[ 장소 ] は どこですか。',
          basePatternKorean: '[ 장소 ] 은/는 어디입니까?',
          examples: [
            {
              slot: 'トイレ (화장실)',
              resultJapanese: 'トイレ は どこですか。',
              resultKorean: '화장실은 어디입니까?'
            },
            {
              slot: 'えき (역)',
              resultJapanese: 'えき は どこですか。',
              resultKorean: '역은 어디입니까?'
            }
          ],
          drillPrompt: '찾고 있는 장소를 넣어 위치를 묻는 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '편의점',
              givenWord: 'コンビニ',
              expectedAnswer: 'コンビニ は どこですか。'
            },
            {
              givenKorean: '호텔',
              givenWord: 'ホテル',
              expectedAnswer: 'ホテル は どこですか。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '장소 표현의 빈칸에 알맞은 말을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b2_1',
              questionNumber: 1,
              prompt: '"화장실은 어디입니까?"의 장소 의문사:',
              sentenceWithBlank: 'トイレ は ( 　　 ) ですか。',
              options: ['どこ', 'どれ', 'なん'],
              correctAnswer: 'どこ',
              koreanMeaning: '화장실은 어디입니까?',
              explanation: '장소를 물을 때는 [どこ(어디)]를 사용합니다.',
              points: 5
            },
            {
              id: 'b2_2',
              questionNumber: 2,
              prompt: '저 멀리 가리키며 "저쪽입니다":',
              sentenceWithBlank: '( 　　　 ) です。',
              options: ['あそこ', 'ここ', 'そこ'],
              correctAnswer: 'あそこ',
              koreanMeaning: '저기입니다.',
              explanation: '멀리 떨어진 장소는 [あそこ]입니다.',
              points: 5
            },
            {
              id: 'b2_3',
              questionNumber: 3,
              prompt: '"지하철 역은 어디인가요?":',
              sentenceWithBlank: 'ちかてつ の ( 　　 ) は どこですか。',
              options: ['えき', 'トイレ', 'パン'],
              correctAnswer: 'えき',
              koreanMeaning: '지하철 역은 어디인가요?',
              explanation: '역은 [えき]입니다.',
              points: 5
            },
            {
              id: 'b2_4',
              questionNumber: 4,
              prompt: '더 정중하게 방향/위치를 물을 때 쓰는 "어느 쪽":',
              sentenceWithBlank: 'エレベーター は ( 　　　 ) ですか。',
              options: ['どちら', 'どれ', 'だれ'],
              correctAnswer: 'どちら',
              koreanMeaning: '엘리베이터는 어느 쪽입니까?',
              explanation: '[どこ]의 정중한 표현은 방향을 가리키는 [どちら]입니다.',
              points: 5
            },
            {
              id: 'b2_5',
              questionNumber: 5,
              prompt: '"여기는 시부야입니다":',
              sentenceWithBlank: '( 　　 ) は しぶや です。',
              options: ['ここ', 'そこ', 'あそこ'],
              correctAnswer: 'ここ',
              koreanMeaning: '여기는 시부야입니다.',
              explanation: '현재 서 있는 이곳은 [ここ]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '백화점이나 쇼핑몰에서 화장실 위치 물어보기',
          contextDescription: '쇼핑몰 1층 안내 데스크 직원에게 화장실 위치를 묻는 실전 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、トイレ は どこですか？',
              romaji: 'sumimasen, toire wa doko desu ka?',
              korean: '저기요, 화장실은 어디인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、トイレ は どこですか？',
              hint: '[저기요, 화장실은 어디입니까?]를 소리 내어 말해 보세요.'
            },
            {
              speaker: 'B',
              role: '안내원',
              japanese: 'あちらのエレベーターの よこ に ございます。',
              romaji: 'achira no erebeetaa no yoko ni gozaimasu.',
              korean: '저쪽 엘리베이터 옆에 있습니다.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'あ、わかりました。ありがとうございます！',
              romaji: 'a, wakarimashita. arigatou gozaimasu!',
              korean: '아, 알겠습니다. 감사합니다!'
            }
          ],
          keyExpressionPoint: '상대방의 설명을 이해했을 때는 [わかりました(알겠습니다)]라고 답합니다.'
        },
        answerKey: {
          step3Answers: [
            '1. コンビニ は どこですか。 (편의점은 어디입니까?)',
            '2. ホテル は どこですか。 (호텔은 어디입니까?)'
          ],
          step4Answers: {
            b2_1: 'どこ',
            b2_2: 'あそこ',
            b2_3: 'えき',
            b2_4: 'どちら',
            b2_5: 'ここ'
          },
          step5Answers: [
            'A의 대사: すみません、トイレ は どこですか？'
          ],
          grammarSummary: '장소의 코소아도(こ・そ・あ・ど):\n- ここ(여기): 말하는 사람이 있는 곳\n- そこ(거기): 듣는 사람이 있는 곳\n- あそこ(저기): 둘 다 떨어진 곳\n- どこ(어디): 장소 의문사\n정중형: こちら(이쪽) / そちら(그쪽) / あちら(저쪽) / どちら(어느 쪽)',
          culturalTip: '일본의 백화점이나 역 안내소에서는 [〜です] 대신 극존칭인 [〜で ございます]로 안내해 주는 경우가 흔합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'B-03',
        level: 'Level B',
        levelTitle: '사물과 위치의 문 (숫자와 가격)',
        dayNumber: 8,
        code: 'JA-B03',
        title: '숫자와 가격 묻기 (いくらですか · 100엔~1000엔)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '100단위~1000단위 숫자를 읽고, 물건 가격을 묻고 엔화 단위를 계산할 수 있다.',
        step1Vocab: {
          instruction: '엔화 가격을 읽을 때 꼭 필요한 기본 숫자 단위를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'いくら', romaji: 'ikura', korean: '얼마 (가격 의문사)' },
            { id: 'v2', japanese: '〜えん', romaji: '~en', korean: '~엔 (일본 화폐 단위 円)' },
            { id: 'v3', japanese: 'ひゃく (100)', romaji: 'hyaku', korean: '백 (100)' },
            { id: 'v4', japanese: 'ごひゃく (500)', romaji: 'gohyaku', korean: '오백 (500엔 동전)' },
            { id: 'v5', japanese: 'せん (1,000)', romaji: 'sen', korean: '천 (1,000엔 지폐)' },
            { id: 'v6', japanese: 'いちまん (10,000)', romaji: 'ichiman', korean: '만 (10,000엔 지폐)' }
          ]
        },
        step2GridWriting: {
          instruction: '가격 표현의 핵심 글자를 쓰세요.',
          items: [
            { char: 'い', romaji: 'i', meaning: '이(い)', strokeHint: '왼쪽 세로 삐침, 오른쪽 짧은 세로' },
            { char: 'く', romaji: 'ku', meaning: '쿠(く)', strokeHint: '부등호 < 모양으로 한 획 꺾기' },
            { char: 'ら', romaji: 'ra', meaning: '라(ら)', strokeHint: '짧은 점 긋고 아래 5자 형태 곡선' },
            { char: 'え', romaji: 'e', meaning: '엔(え)', strokeHint: '엔화 단위의 えん 쓰기' },
            { char: 'ん', romaji: 'n', meaning: '응(ん)', strokeHint: '받침 발음 n 쓰기' }
          ]
        },
        step3Substitution: {
          id: 'sub-b03',
          basePatternJapanese: 'これ は [　　] えん です。',
          basePatternKorean: '이것은 [　　] 엔 입니다.',
          examples: [
            {
              slot: 'ひゃく (100)',
              resultJapanese: 'これ は ひゃくえん です。',
              resultKorean: '이것은 100엔입니다.'
            },
            {
              slot: 'ごひゃく (500)',
              resultJapanese: 'これ は ごひゃくえん です。',
              resultKorean: '이것은 500엔입니다.'
            },
            {
              slot: 'せん (1,000)',
              resultJapanese: 'これ は せんえん です。',
              resultKorean: '이것은 1,000엔입니다.'
            }
          ],
          drillPrompt: '주어진 숫자를 일본어로 바꿔 가격을 말하는 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '200 (にひゃく)',
              givenWord: 'にひゃく',
              expectedAnswer: 'これ は にひゃくえん です。'
            },
            {
              givenKorean: '3,000 (さんぜん)',
              givenWord: 'さんぜん',
              expectedAnswer: 'これ は さんぜんえん です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '가격 관련 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b3_1',
              questionNumber: 1,
              prompt: '"이것은 얼마입니까?":',
              sentenceWithBlank: 'これ は ( 　　　 ) ですか。',
              options: ['いくら', 'どこ', 'なん'],
              correctAnswer: 'いくら',
              koreanMeaning: '이것은 얼마입니까?',
              explanation: '가격을 물을 때는 [いくら(얼마)]를 씁니다.',
              points: 5
            },
            {
              id: 'b3_2',
              questionNumber: 2,
              prompt: '"800엔입니다":',
              sentenceWithBlank: 'はっぴゃく ( 　　 ) です。',
              options: ['えん', 'かい', 'じ'],
              correctAnswer: 'えん',
              koreanMeaning: '800엔입니다.',
              explanation: '엔화 가격 단위는 [〜えん]입니다.',
              points: 5
            },
            {
              id: 'b3_3',
              questionNumber: 3,
              prompt: '"전부 해서 얼마인가요?"의 \'전부 해서\':',
              sentenceWithBlank: '( 　　　　 ) いくらですか。',
              options: ['ぜんぶで', 'ひとつで', 'ここで'],
              correctAnswer: 'ぜんぶで',
              koreanMeaning: '전부 합해서 얼마인가요?',
              explanation: '합산 금액을 물을 때는 [ぜんぶで]라고 합니다.',
              points: 5
            },
            {
              id: 'b3_4',
              questionNumber: 4,
              prompt: '500엔의 올바른 일본어 발음:',
              sentenceWithBlank: '500円 = ( 　　　　　 ) えん。',
              options: ['ごひゃく', 'ごせん', 'ごまん'],
              correctAnswer: 'ごひゃく',
              koreanMeaning: '500엔',
              explanation: '5(ご) + 100(ひゃく) = ごひゃく입니다.',
              points: 5
            },
            {
              id: 'b3_5',
              questionNumber: 5,
              prompt: '계산할 때 "카드로 결제 가능한가요?":',
              sentenceWithBlank: 'カード は ( 　　　　 ) ですか。',
              options: ['だいじょうぶ', 'いくら', 'どこ'],
              correctAnswer: 'だいじょうぶ',
              koreanMeaning: '카드는 괜찮은가요 (사용 가능한가요)?',
              explanation: '카드 결제 여부를 가볍게 물을 때 [カードは だいじょうぶですか]를 씁니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '도쿄 기념품 가게에서 가격을 확인하고 구매하기',
          contextDescription: '마음에 드는 열쇠고리를 발견하고 가격을 묻고 계산하는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、これ は いくら ですか？',
              romaji: 'sumimasen, kore wa ikura desu ka?',
              korean: '저기요, 이것은 얼마인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、これ は いくら ですか？',
              hint: '[저기요, 이것은 얼마입니까?]를 발음해 보세요.'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'それ は 800えん(はっぴゃくえん) です。',
              romaji: 'sore wa happyaku-en desu.',
              korean: '그것은 800엔입니다.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'じゃ、これ を ください。',
              romaji: 'ja, kore o kudasai.',
              korean: '그럼, 이것으로 주세요.'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'ありがとうございます！ 800えん に なります。',
              romaji: 'arigatou gozaimasu! happyaku-en ni narimasu.',
              korean: '감사합니다! 800엔 되겠습니다.'
            }
          ],
          keyExpressionPoint: '물건을 고른 뒤 [じゃ、これをください(그럼, 이것으로 주세요)]로 연결하면 완벽한 쇼핑 패턴이 됩니다.'
        },
        answerKey: {
          step3Answers: [
            '1. これ は にひゃくえん です。 (이것은 200엔입니다)',
            '2. これ は さんぜんえん です。 (이것은 3,000엔입니다)'
          ],
          step4Answers: {
            b3_1: 'いくら',
            b3_2: 'えん',
            b3_3: 'ぜんぶで',
            b3_4: 'ごひゃく',
            b3_5: 'だいじょうぶ'
          },
          step5Answers: [
            'A의 대사: すみません、これ は いくら ですか？'
          ],
          grammarSummary: '1. [いくらですか] = [얼마입니까?]\n2. 주의해야 할 숫자 발음 변화:\n- 300: さんびゃく (sanbyaku, 반탁음)\n- 600: ろっぴゃく (roppyaku, 촉음)\n- 800: はっぴゃく (happyaku, 촉음)\n- 3,000: さんぜん (sanzen, 탁음)',
          culturalTip: '일본에서는 계산대 트레이(코인트레이, カルトン)에 돈을 올려두는 것이 기본 에티켓입니다. 손에서 손으로 직접 건네지 않습니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'B-04',
        level: 'Level B',
        levelTitle: '사물과 위치의 문 (쇼핑과 주문)',
        dayNumber: 9,
        code: 'JA-B04',
        title: '쇼핑 필수 표현 (이것으로 주세요 · 다른 것 보여주세요)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '원하는 물건을 지목해 주문하고, 수량사(1개, 2개)를 사용해 결제할 수 있다.',
        step1Vocab: {
          instruction: '쇼핑 시 매일 쓰는 일본 고유 수량사를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'ひとつ', romaji: 'hitotsu', korean: '하나, 1개' },
            { id: 'v2', japanese: 'ふたつ', romaji: 'futatsu', korean: '둘, 2개' },
            { id: 'v3', japanese: 'みっつ', romaji: 'mittsu', korean: '셋, 3개' },
            { id: 'v4', japanese: '〜を ください', romaji: '~o kudasai', korean: '~을(를) 주세요' },
            { id: 'v5', japanese: 'みせて ください', romaji: 'misete kudasai', korean: '보여주세요' }
          ]
        },
        step2GridWriting: {
          instruction: '하나, 둘 수량사를 반듯하게 쓰세요.',
          items: [
            { char: 'ひ', romaji: 'hi', meaning: '히(ひ)', strokeHint: 'U자 형태를 넓게 벌리기' },
            { char: 'と', romaji: 'to', meaning: '토(と)', strokeHint: '짧은 획 후 둥근 호 그리기' },
            { char: 'つ', romaji: 'tsu', meaning: '츠(つ)', strokeHint: '물결치듯 오른쪽으로 둥글게 빼기' },
            { char: 'ふ', romaji: 'fu', meaning: '후(ふ)', strokeHint: '중앙 점, 세로 획, 좌우 점 2개' }
          ]
        },
        step3Substitution: {
          id: 'sub-b04',
          basePatternJapanese: 'これ を [ 수량 ] ください。',
          basePatternKorean: '이것을 [ 수량 ] 주세요.',
          examples: [
            {
              slot: 'ひとつ (1개)',
              resultJapanese: 'これ を ひとつ ください。',
              resultKorean: '이것을 1개 주세요.'
            },
            {
              slot: 'ふたつ (2개)',
              resultJapanese: 'これ を ふたつ ください。',
              resultKorean: '이것을 2개 주세요.'
            }
          ],
          drillPrompt: '수량을 바꾸어 주문 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '1개',
              givenWord: 'ひとつ',
              expectedAnswer: 'これ を ひとつ ください。'
            },
            {
              givenKorean: '2개',
              givenWord: 'ふたつ',
              expectedAnswer: 'これ を ふたつ ください。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '쇼핑 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b4_1',
              questionNumber: 1,
              prompt: '"저것도 보여주세요":',
              sentenceWithBlank: 'あれ も ( 　　　　　　 )。',
              options: ['みせて ください', 'いって ください', 'たべて ください'],
              correctAnswer: 'みせて ください',
              koreanMeaning: '저것도 보여주세요.',
              explanation: '[보여주세요]는 [みせて ください]입니다.',
              points: 5
            },
            {
              id: 'b4_2',
              questionNumber: 2,
              prompt: '"쇼핑백은 필요 없습니다":',
              sentenceWithBlank: 'ふくろ は ( 　　　　　 ) です。',
              options: ['けっこう', 'おねがい', 'ひとつ'],
              correctAnswer: 'けっこう',
              koreanMeaning: '봉투는 괜찮습니다 (필요 없습니다).',
              explanation: '거절이나 사양 시 [けっこうです]라고 합니다.',
              points: 5
            },
            {
              id: 'b4_3',
              questionNumber: 3,
              prompt: '"영수증 주세요":',
              sentenceWithBlank: 'レシート を ( 　　　　 )。',
              options: ['ください', 'ですか', 'でした'],
              correctAnswer: 'ください',
              koreanMeaning: '영수증을 주세요.',
              explanation: '[~을 주세요]는 [〜を ください]입니다.',
              points: 5
            },
            {
              id: 'b4_4',
              questionNumber: 4,
              prompt: '물건 2개를 셀 때 올바른 표현:',
              sentenceWithBlank: '2つ = ( 　　　 )。',
              options: ['ふたつ', 'ひとつ', 'みっつ'],
              correctAnswer: 'ふたつ',
              koreanMeaning: '둘, 2개',
              explanation: '2개는 [ふたつ]입니다.',
              points: 5
            },
            {
              id: 'b4_5',
              questionNumber: 5,
              prompt: '편의점에서 도시락을 데워달라고 할 때:',
              sentenceWithBlank: 'あたためて ( 　　　　 )。',
              options: ['ください', 'です', 'ます'],
              correctAnswer: 'ください',
              koreanMeaning: '데워 주세요.',
              explanation: '[데워 주세요]는 [あたためて ください]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '일본 편의점(コンビニ) 결제 실전',
          contextDescription: '편의점에서 삼각김밥과 음료수를 사며 직원의 질문에 대답하는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '점원',
              japanese: 'いらっしゃいませ。ポイントカードは おもちですか？',
              romaji: 'irasshaimase. pointo kaado wa omochi desu ka?',
              korean: '어서 오세요. 포인트 카드 있으신가요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'ないです。',
              romaji: 'nai desu.',
              korean: '없습니다.'
            },
            {
              speaker: 'A',
              role: '점원',
              japanese: 'ふくろは ごりようですか？',
              romaji: 'fukuro wa goriyou desu ka?',
              korean: '비닐봉투 사용하시나요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'だいじょうぶです。けっこうです。',
              romaji: 'daijoubu desu. kekkou desu.',
              korean: '괜찮습니다. 필요 없어요.',
              isBlankForStudent: true,
              expectedAnswer: 'だいじょうぶです。 (또는 けっこうです。)',
              hint: '[괜찮습니다 / 필요 없습니다]라고 사양해 보세요.'
            }
          ],
          keyExpressionPoint: '봉투나 영수증이 불필요할 때는 [だいじょうぶです]나 [けっこうです]라고 짧게 답하면 됩니다.'
        },
        answerKey: {
          step3Answers: [
            '1. これ を ひとつ ください。 (이것을 1개 주세요)',
            '2. これ を ふたつ ください。 (이것을 2개 주세요)'
          ],
          step4Answers: {
            b4_1: 'みせて ください',
            b4_2: 'けっこう',
            b4_3: 'ください',
            b4_4: 'ふたつ',
            b4_5: 'ください'
          },
          step5Answers: [
            'B의 대사: だいじょうぶです。 또는 けっこうです。'
          ],
          grammarSummary: '1. 일본의 고유 수사(물건 세기):\n- 1개: ひとつ (hitotsu)\n- 2개: ふたつ (futatsu)\n- 3개: みっつ (mittsu)\n- 4개: よっつ (yottsu)\n- 5개: いつつ (itsutsu)\n2. [けっこうです]는 정중한 거절 표현으로 "괜찮습니다(사양합니다)"의 뜻입니다.',
          culturalTip: '일본 편의점에서는 직원이 질문을 연달아 하는 편입니다 (포인트 카드? 봉투? 데울까요?). 당황하지 말고 [はい(네)] 또는 [だいじょうぶです(괜찮습니다)]로 대응하세요.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'B-05',
        level: 'Level B',
        levelTitle: '사물과 위치의 문 (종합 쇼핑 롤플레잉)',
        dayNumber: 10,
        code: 'JA-B05',
        title: 'Level B 총결산: 도쿄 쇼핑몰 실전 롤플레잉 마스터',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '지시어, 장소 묻기, 가격 확인, 수량 주문까지 쇼핑 전 과정을 자연스럽게 해낼 수 있다.',
        step1Vocab: {
          instruction: 'Level B 핵심 어휘를 총복습하세요.',
          items: [
            { id: 'v1', japanese: 'これ / それ / あれ', romaji: 'kore / sore / are', korean: '이것 / 그것 / 저것' },
            { id: 'v2', japanese: 'ここ / そこ / あそこ', romaji: 'koko / soko / asoko', korean: '여기 / 거기 / 저기' },
            { id: 'v3', japanese: 'いくらですか', romaji: 'ikura desu ka', korean: '얼마입니까' },
            { id: 'v4', japanese: 'ひとつ / ふたつ', romaji: 'hitotsu / futatsu', korean: '1개 / 2개' },
            { id: 'v5', japanese: 'ぜんぶで', romaji: 'zenbu de', korean: '전부 합해서' }
          ]
        },
        step2GridWriting: {
          instruction: '쇼핑 완성 핵심 표현을 십자 격자에 정성껏 쓰세요.',
          items: [
            { char: 'く', romaji: 'ku', meaning: '주(く)', strokeHint: '부등호 모양' },
            { char: 'だ', romaji: 'da', meaning: '세(だ)', strokeHint: 'た에 탁점' },
            { char: 'さ', romaji: 'sa', meaning: '요(さ)', strokeHint: '가로 2획 후 아래 둥근 호' },
            { char: 'い', romaji: 'i', meaning: '-(い)', strokeHint: 'ください의 마무리' }
          ]
        },
        step3Substitution: {
          id: 'sub-b05',
          basePatternJapanese: '[ 지시어 ] を [ 수량 ] ください。',
          basePatternKorean: '[ 지시어 ] 을(를) [ 수량 ] 주세요.',
          examples: [
            {
              slot: 'これ / ひとつ',
              resultJapanese: 'これ を ひとつ ください。',
              resultKorean: '이것을 1개 주세요.'
            },
            {
              slot: 'あれ / ふたつ',
              resultJapanese: 'あれ を ふたつ ください。',
              resultKorean: '저것을 2개 주세요.'
            }
          ],
          drillPrompt: '지시어와 수량을 결합하여 주문 문형을 소리 내어 완성하시오.',
          testSlots: [
            {
              givenKorean: '그것 / 1개',
              givenWord: 'それ / ひとつ',
              expectedAnswer: 'それ を ひとつ ください。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: 'Level B 종합 평가 (각 5점 / 총 25점)',
          problems: [
            {
              id: 'b5_1',
              questionNumber: 1,
              prompt: '"화장실은 저기입니다":',
              sentenceWithBlank: 'トイレ は ( 　　　 ) です。',
              options: ['あそこ', 'あれ', 'どれ'],
              correctAnswer: 'あそこ',
              koreanMeaning: '화장실은 저기입니다.',
              explanation: '장소를 가리키는 말은 [あそこ]입니다.',
              points: 5
            },
            {
              id: 'b5_2',
              questionNumber: 2,
              prompt: '"이것은 얼마입니까?":',
              sentenceWithBlank: 'これ は ( 　　　 ) ですか。',
              options: ['いくら', 'どこ', 'なんにん'],
              correctAnswer: 'いくら',
              koreanMeaning: '이것은 얼마입니까?',
              explanation: '가격은 [いくら]로 묻습니다.',
              points: 5
            },
            {
              id: 'b5_3',
              questionNumber: 3,
              prompt: '"영수증은 필요 없습니다":',
              sentenceWithBlank: 'レシート は ( 　　　　　 ) です。',
              options: ['けっこう', 'ください', 'ひとつ'],
              correctAnswer: 'けっこう',
              koreanMeaning: '영수증은 괜찮습니다.',
              explanation: '사양할 때는 [けっこうです]입니다.',
              points: 5
            },
            {
              id: 'b5_4',
              questionNumber: 4,
              prompt: '물건 3개를 셀 때:',
              sentenceWithBlank: '3つ = ( 　　　 )。',
              options: ['みっつ', 'ふたつ', 'よっつ'],
              correctAnswer: 'みっつ',
              koreanMeaning: '셋, 3개',
              explanation: '3개는 [みっつ]입니다.',
              points: 5
            },
            {
              id: 'b5_5',
              questionNumber: 5,
              prompt: '"이것으로 할게요 (이것으로 부탁합니다)":',
              sentenceWithBlank: 'これ ( 　 ) おねがいします。',
              options: ['で', 'を', 'に'],
              correctAnswer: 'で',
              koreanMeaning: '이것으로 부탁합니다.',
              explanation: '선택의 기준으로 [〜で おねがいします]를 자주 씁니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: 'Level B 완성: 잡화점에서 쇼핑 풀 코스',
          contextDescription: '문구 코너에서 엽서를 고르고 가격을 물어 구매하는 종합 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、これ は いくら ですか？',
              romaji: 'sumimasen, kore wa ikura desu ka?',
              korean: '저기요, 이것은 얼마인가요?'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'ひとつ 150えん です。',
              romaji: 'hitotsu hyaku-gojuu-en desu.',
              korean: '하나에 150엔입니다.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'じゃ、これ を ふたつ ください。',
              romaji: 'ja, kore o futatsu kudasai.',
              korean: '그럼, 이것을 2개 주세요.',
              isBlankForStudent: true,
              expectedAnswer: 'じゃ、これ を ふたつ ください。',
              hint: '[그럼, 이것을 2개 주세요]를 완성하세요.'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'かしこまりました。ぜんぶで 300えん に なります。',
              romaji: 'kashikomarimashita. zenbu de sanbyaku-en ni narimasu.',
              korean: '알겠습니다. 전부 합해서 300엔 되겠습니다.'
            }
          ],
          keyExpressionPoint: 'Level B 완성을 축하합니다! 이제 일본 여행에서 원하는 물건을 묻고 자유롭게 살 수 있습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. それ を ひとつ ください。 (그것을 1개 주세요)'
          ],
          step4Answers: {
            b5_1: 'あそこ',
            b5_2: 'いくら',
            b5_3: 'けっこう',
            b5_4: 'みっつ',
            b5_5: 'で'
          },
          step5Answers: [
            'A의 대사: じゃ、これ を ふたつ ください。'
          ],
          grammarSummary: 'Level B 마스터 요약:\n1. 지시대명사 사물(これ/それ/あれ/どれ), 장소(ここ/そこ/あそこ/どこ)\n2. 가격 묻기(いくらですか) & 수량 세기(ひとつ, ふたつ, みっつ)\n3. 주문 및 거절(〜をください / けっこうです)',
          culturalTip: '일본 상점에서는 물건을 산 후 점원이 문 앞까지 나와 배웅하며 [ありがとうございました]라고 인사하는 따뜻한 오모테나시(おもてなし) 문화를 종종 경험할 수 있습니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      }
    ]
  },
  {
    levelId: 'level-c',
    levelName: 'Level C · 일상 동작의 문',
    description: '시간 표현, 동사 마스형(~합니다), 하루 일과 및 일상 스케줄',
    badgeColor: 'amber',
    focus: '〜じ〜ふん, いきます/きます/かえります, たべます/のみます, 〜で/〜と',
    sheets: [
      {
        id: 'C-01',
        level: 'Level C',
        levelTitle: '일상 동작의 문 (시간과 요일)',
        dayNumber: 11,
        code: 'JA-C01',
        title: '지금 몇 시입니까? (いま なんじですか · 시와 분)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '시간(〜時)과 분(〜分), 시작과 끝(~から~まで)을 말하여 약속 시각을 정할 수 있다.',
        step1Vocab: {
          instruction: '시간 표현과 일상 시각 어휘를 소리 내어 읽으세요.',
          items: [
            { id: 'v1', japanese: 'いま', romaji: 'ima', korean: '지금' },
            { id: 'v2', japanese: 'なんじ', romaji: 'nanji', korean: '몇 시' },
            { id: 'v3', japanese: '〜じ', romaji: '~ji', korean: '~시 (시간 단위)' },
            { id: 'v4', japanese: '〜はん', romaji: '~han', korean: '~반 (30분)' },
            { id: 'v5', japanese: '〜から 〜まで', romaji: '~kara ~made', korean: '~부터 ~까지' }
          ]
        },
        step2GridWriting: {
          instruction: '시간 표현의 핵심 글자를 정서하세요.',
          items: [
            { char: 'い', romaji: 'i', meaning: '이(い)', strokeHint: 'いま의 첫 글자' },
            { char: 'ま', romaji: 'ma', meaning: '마(ま)', strokeHint: '가로 2획 후 세로 내려와 둥근 매듭' },
            { char: 'じ', romaji: 'ji', meaning: '시(じ)', strokeHint: 'し에 탁점' },
            { char: 'か', romaji: 'ka', meaning: '카(か)', strokeHint: 'から의 첫 글자' },
            { char: 'ら', romaji: 'ra', meaning: '라(ら)', strokeHint: 'から의 두 번째 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-c01',
          basePatternJapanese: 'いま [ 시간 ] です。',
          basePatternKorean: '지금 [ 시간 ] 입니다.',
          examples: [
            {
              slot: '1じ (1시: いちじ)',
              resultJapanese: 'いま いちじ です。',
              resultKorean: '지금 1시입니다.'
            },
            {
              slot: '3じはん (3시 반: さんじはん)',
              resultJapanese: 'いま さんじはん です。',
              resultKorean: '지금 3시 반입니다.'
            }
          ],
          drillPrompt: '주어진 시간을 일본어로 표현하여 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '7시 (しちじ)',
              givenWord: 'しちじ',
              expectedAnswer: 'いま しちじ です。'
            },
            {
              givenKorean: '9시 반 (くじはん)',
              givenWord: 'くじはん',
              expectedAnswer: 'いま くじはん です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '시간 조사와 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'c1_1',
              questionNumber: 1,
              prompt: '"지금 몇 시입니까?":',
              sentenceWithBlank: 'いま ( 　　　 ) ですか。',
              options: ['なんじ', 'いくら', 'どこ'],
              correctAnswer: 'なんじ',
              koreanMeaning: '지금 몇 시입니까?',
              explanation: '시각을 물을 때는 [なんじ(몇 시)]를 씁니다.',
              points: 5
            },
            {
              id: 'c1_2',
              questionNumber: 2,
              prompt: '"오전 9시부터 오후 6시까지":',
              sentenceWithBlank: '9じ ( 　　 ) 6じ ( 　　 ) です。',
              options: ['から / まで', 'まで / から', 'は / を'],
              correctAnswer: 'から / まで',
              koreanMeaning: '9시부터 6시까지입니다.',
              explanation: '[~부터 ~까지]는 [〜から 〜まで]입니다.',
              points: 5
            },
            {
              id: 'c1_3',
              questionNumber: 3,
              prompt: '4시의 특수 발음 (주의!):',
              sentenceWithBlank: '4시 = ( 　　 ) じ。',
              options: ['よ', 'よん', 'し'],
              correctAnswer: 'よ',
              koreanMeaning: '4시 (よじ)',
              explanation: '4시는 よんじ가 아니라 [よじ]로 읽습니다.',
              points: 5
            },
            {
              id: 'c1_4',
              questionNumber: 4,
              prompt: '9시의 특수 발음 (주의!):',
              sentenceWithBlank: '9시 = ( 　 ) じ。',
              options: ['く', 'きゅう', 'こ'],
              correctAnswer: 'く',
              koreanMeaning: '9시 (くじ)',
              explanation: '9시는 きゅうじ가 아니라 [くじ]로 읽습니다.',
              points: 5
            },
            {
              id: 'c1_5',
              questionNumber: 5,
              prompt: '"몇 시에 만날까요?"의 특정 시각 조사 [~에]:',
              sentenceWithBlank: 'なんじ ( 　 ) あいますか。',
              options: ['に', 'で', 'を'],
              correctAnswer: 'に',
              koreanMeaning: '몇 시에 만납니까?',
              explanation: '특정 시각 뒤에 붙는 [~에]는 조사 [に]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '친구와 카페 약속 시간 정하기',
          contextDescription: '주말에 도쿄 시부야에서 친구와 만날 시간을 정하는 카카오톡/라인 통화 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '친구',
              japanese: 'あした、なんじに あいましょうか？',
              romaji: 'ashita, nanji ni aimashou ka?',
              korean: '내일, 몇 시에 만날까?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: '2じはん は どうですか？',
              romaji: 'ni-ji han wa dou desu ka?',
              korean: '2시 반은 어때?',
              isBlankForStudent: true,
              expectedAnswer: '2じはん は どうですか？ (또는 2じに あいましょう)',
              hint: '[2시 반은 어때?]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '친구',
              japanese: 'いいですね！ 2じはんに えきで あいましょう。',
              romaji: 'ii desu ne! ni-ji han ni eki de aimashou.',
              korean: '좋아! 2시 반에 역에서 만나자.'
            }
          ],
          keyExpressionPoint: '의견이나 시간을 제안할 때 [〜は どうですか(~은/는 어때요?)]는 매우 유용한 패턴입니다.'
        },
        answerKey: {
          step3Answers: [
            '1. いま しちじ です。 (지금 7시입니다)',
            '2. いま くじはん です。 (지금 9시 반입니다)'
          ],
          step4Answers: {
            c1_1: 'なんじ',
            c1_2: 'から / まで',
            c1_3: 'よ',
            c1_4: 'く',
            c1_5: 'に'
          },
          step5Answers: [
            'B의 대사: 2じはん は どうですか？'
          ],
          grammarSummary: '주의해야 할 시간 불규칙 발음:\n- 4시: よじ (yoji) - *yonji 아님!\n- 7시: しちじ (shichiji) - *nanaji보다 shichiji 선호\n- 9시: くじ (kuji) - *kyuuji 아님!\n30분은 [〜じ はん]으로 간단히 말할 수 있습니다.',
          culturalTip: '일본은 시간 약속(지각 방지)에 매우 철저합니다. 약속 시간 5~10분 전에 도착하는 것이 좋은 매너입니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'C-02',
        level: 'Level C',
        levelTitle: '일상 동작의 문 (동사 마스형과 이동)',
        dayNumber: 12,
        code: 'JA-C02',
        title: '가다, 오다, 돌아가다 (いきます · きます · かえります)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '이동 동사 3가지와 목적지 조사 [へ/に]를 사용해 어디에 가는지 설명할 수 있다.',
        step1Vocab: {
          instruction: '일상에서 가장 많이 쓰는 3대 이동 동사의 정중형(~ます)을 익히세요.',
          items: [
            { id: 'v1', japanese: 'いきます', romaji: 'ikimasu', korean: '갑니다 (기본형: いく)' },
            { id: 'v2', japanese: 'きます', romaji: 'kimasu', korean: '옵니다 (기본형: くる)' },
            { id: 'v3', japanese: 'かえります', romaji: 'kaerimasu', korean: '돌아갑니다 / 귀가합니다 (기본형: かえる)' },
            { id: 'v4', japanese: '〜へ (발음: e)', romaji: '~e', korean: '~에, ~로 (이동 방향 조사)' },
            { id: 'v5', japanese: 'うち / いえ', romaji: 'uchi / ie', korean: '집 (내 집 / 일반 집)' }
          ]
        },
        step2GridWriting: {
          instruction: '마스형의 어미 [ます]를 반듯하게 쓰세요.',
          items: [
            { char: 'い', romaji: 'i', meaning: '갑(い)', strokeHint: 'いきます의 첫 글자' },
            { char: 'き', romaji: 'ki', meaning: '니(き)', strokeHint: 'いきます의 두 번째 글자' },
            { char: 'ま', romaji: 'ma', meaning: '다(ま)', strokeHint: '정중형 마스의 ま' },
            { char: 'す', romaji: 'su', meaning: '-(す)', strokeHint: '정중형 마스의 す' }
          ]
        },
        step3Substitution: {
          id: 'sub-c02',
          basePatternJapanese: '[ 장소 ] へ いきます。',
          basePatternKorean: '[ 장소 ] 에 갑니다.',
          examples: [
            {
              slot: 'とうきょう (도쿄)',
              resultJapanese: 'とうきょう へ いきます。',
              resultKorean: '도쿄에 갑니다.'
            },
            {
              slot: 'かいしゃ (회사)',
              resultJapanese: 'かいしゃ へ いきます。',
              resultKorean: '회사에 갑니다.'
            }
          ],
          drillPrompt: '목적지를 넣어 이동 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '학교',
              givenWord: 'がっこう',
              expectedAnswer: 'がっこう へ いきます。'
            },
            {
              givenKorean: '집 (돌아갑니다)',
              givenWord: 'うち (かえります)',
              expectedAnswer: 'うち へ かえります。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '이동 동사 문형의 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'c2_1',
              questionNumber: 1,
              prompt: '"어디에 가십니까?":',
              sentenceWithBlank: '( 　　 ) へ いきますか。',
              options: ['どこ', 'どれ', 'なん'],
              correctAnswer: 'どこ',
              koreanMeaning: '어디에 가십니까?',
              explanation: '장소 의문사는 [どこ]입니다.',
              points: 5
            },
            {
              id: 'c2_2',
              questionNumber: 2,
              prompt: '이동 방향을 나타내는 조사 [~로/에] (글자는 へ, 발음은 e):',
              sentenceWithBlank: 'えき ( 　 ) いきます。',
              options: ['へ', 'を', 'は'],
              correctAnswer: 'へ',
              koreanMeaning: '역으로 갑니다.',
              explanation: '방향 조사는 [へ]로 적고 [e]로 발음합니다.',
              points: 5
            },
            {
              id: 'c2_3',
              questionNumber: 3,
              prompt: '"집에 돌아갑니다":',
              sentenceWithBlank: 'うち へ ( 　　　　　 )。',
              options: ['かえります', 'きます', 'たべます'],
              correctAnswer: 'かえります',
              koreanMeaning: '집에 돌아갑니다.',
              explanation: '귀가하다/돌아가다는 [かえります]입니다.',
              points: 5
            },
            {
              id: 'c2_4',
              questionNumber: 4,
              prompt: '"어디에도 가지 않습니다"의 [아무데도]:',
              sentenceWithBlank: 'どこ ( 　 ) いきません。',
              options: ['へも', 'をも', 'はも'],
              correctAnswer: 'へも',
              koreanMeaning: '어디에도 가지 않습니다.',
              explanation: '[어디에도]는 [どこへも]입니다.',
              points: 5
            },
            {
              id: 'c2_5',
              questionNumber: 5,
              prompt: '"갑니다"의 부정형 "가지 않습니다":',
              sentenceWithBlank: 'きょう は ( 　　　　　 )。',
              options: ['いきません', 'いきませんでした', 'いきますか'],
              correctAnswer: 'いきません',
              koreanMeaning: '오늘은 가지 않습니다.',
              explanation: '동사의 정중 부정형은 [〜ません]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '호텔 로비에서 직원과 가벼운 행선지 대화',
          contextDescription: '아침에 호텔을 나서며 프런트 직원과 나누는 일상 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '호텔 직원',
              japanese: 'いってらっしゃいませ！ きょうは どちらへ？',
              romaji: 'itterasshaimase! kyou wa dochira e?',
              korean: '다녀오세요! 오늘은 어디로 가시나요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'きょうは しぶや へ いきます。',
              romaji: 'kyou wa shibuya e ikimasu.',
              korean: '오늘은 시부야에 갑니다.',
              isBlankForStudent: true,
              expectedAnswer: 'きょうは しぶや へ いきます。',
              hint: '[오늘은 시부야에 갑니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '호텔 직원',
              japanese: 'いいですね！ おきをつけて。',
              romaji: 'ii desu ne! oki o tsukete.',
              korean: '좋네요! 조심히 다녀오세요.'
            }
          ],
          keyExpressionPoint: '조사 [へ]는 단어 안에서는 he이지만 조사로 쓰일 때는 [e]로 발음합니다.'
        },
        answerKey: {
          step3Answers: [
            '1. がっこう へ いきます。 (학교에 갑니다)',
            '2. うち へ かえります。 (집에 돌아갑니다)'
          ],
          step4Answers: {
            c2_1: 'どこ',
            c2_2: 'へ',
            c2_3: 'かえります',
            c2_4: 'へも',
            c2_5: 'いきません'
          },
          step5Answers: [
            'B의 대사: きょうは しぶや へ いきます。'
          ],
          grammarSummary: '1. 이동의 3대 동사:\n- いきます (갑니다)\n- きます (옵니다)\n- かえります (자기 집/나라로 돌아갑니다)\n2. 방향 조사 [へ]는 [e]로 발음합니다. (조사 [に]로 바꾸어 써도 무방합니다).\n3. 동사 부정형: [〜ます] → [〜ません] (갑니다 → 가지 않습니다)',
          culturalTip: '외출하는 사람에게는 [いってらっしゃい(다녀오세요)], 나가는 사람은 [いってきます(다녀오겠습니다)]라고 인사합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'C-03',
        level: 'Level C',
        levelTitle: '일상 동작의 문 (식사와 취미)',
        dayNumber: 13,
        code: 'JA-C03',
        title: '먹다, 마시다, 보다 (たべます · のみます · みます)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '목적격 조사 [を]와 타동사를 결합하여 밥을 먹거나 커피를 마시는 일상 행동을 말할 수 있다.',
        step1Vocab: {
          instruction: '일상 동작 타동사와 대상 명사를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'たべます', romaji: 'tabemasu', korean: '먹습니다 (기본형: たべる)' },
            { id: 'v2', japanese: 'のみます', romaji: 'nomimasu', korean: '마십니다 (기본형: のむ)' },
            { id: 'v3', japanese: 'みます', romaji: 'mimasu', korean: '봅니다 (기본형: みる)' },
            { id: 'v4', japanese: 'ごはん', romaji: 'gohan', korean: '밥, 식사' },
            { id: 'v5', japanese: 'おちゃ', romaji: 'ocha', korean: '녹차, 차' }
          ]
        },
        step2GridWriting: {
          instruction: '자주 쓰는 동사의 앞머리 글자를 정성껏 쓰세요.',
          items: [
            { char: 'た', romaji: 'ta', meaning: '먹(た)', strokeHint: 'たべます의 첫 글자' },
            { char: 'べ', romaji: 'be', meaning: '습(べ)', strokeHint: 'へ에 탁점 찍기' },
            { char: 'の', romaji: 'no', meaning: '마(の)', strokeHint: '한 획으로 둥글게 원 그리기' },
            { char: 'み', romaji: 'mi', meaning: '봅(み)', strokeHint: '가로선 후 내려오다 고리 짓고 삐치기' }
          ]
        },
        step3Substitution: {
          id: 'sub-c03',
          basePatternJapanese: '[ 음식/사물 ] を [ 동사 ]。',
          basePatternKorean: '[ 음식/사물 ] 을(를) [ 동사합니다 ].',
          examples: [
            {
              slot: 'ラーメン / たべます',
              resultJapanese: 'ラーメン を たべます。',
              resultKorean: '라면을 먹습니다.'
            },
            {
              slot: 'コーヒー / のみます',
              resultJapanese: 'コーヒー を のみます。',
              resultKorean: '커피를 마십니다.'
            }
          ],
          drillPrompt: '목적어와 동사를 결합하여 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '초밥 / 먹습니다',
              givenWord: 'すし / たべます',
              expectedAnswer: 'すし を たべます。'
            },
            {
              givenKorean: '영화 / 봅니다',
              givenWord: 'えいが / みます',
              expectedAnswer: 'えいが を みます。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '동사 활용 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'c3_1',
              questionNumber: 1,
              prompt: '"무엇을 먹습니까?":',
              sentenceWithBlank: '( 　　 ) を たべますか。',
              options: ['なに', 'どこ', 'だれ'],
              correctAnswer: 'なに',
              koreanMeaning: '무엇을 먹습니까?',
              explanation: '사물을 물을 때 조사 を 앞에서는 [なに]로 읽습니다.',
              points: 5
            },
            {
              id: 'c3_2',
              questionNumber: 2,
              prompt: '"아침밥을 먹습니다":',
              sentenceWithBlank: 'あさごはん ( 　 ) たべます。',
              options: ['を', 'は', 'に'],
              correctAnswer: 'を',
              koreanMeaning: '아침밥을 먹습니다.',
              explanation: '목적격 조사는 [を]입니다.',
              points: 5
            },
            {
              id: 'c3_3',
              questionNumber: 3,
              prompt: '"카페에서 커피를 마십니다"의 장소 동작 조사 [~에서]:',
              sentenceWithBlank: 'カフェ ( 　 ) コーヒーを のみます。',
              options: ['で', 'に', 'へ'],
              correctAnswer: 'で',
              koreanMeaning: '카페에서 커피를 마십니다.',
              explanation: '동작이 이루어지는 장소는 조사 [で(~에서)]를 씁니다.',
              points: 5
            },
            {
              id: 'c3_4',
              questionNumber: 4,
              prompt: '"잘 먹겠습니다"의 일본 식사 전 인사:',
              sentenceWithBlank: '( 　　　　　　　　 )。',
              options: ['いただきます', 'ごちそうさまでした', 'こんにちは'],
              correctAnswer: 'いただきます',
              koreanMeaning: '잘 먹겠습니다.',
              explanation: '식사 시작 전 인사는 [いただきます]입니다.',
              points: 5
            },
            {
              id: 'c3_5',
              questionNumber: 5,
              prompt: '"잘 먹었습니다"의 식사 후 인사:',
              sentenceWithBlank: '( 　　　　　　　　　　　 )。',
              options: ['ごちそうさまでした', 'いただきます', 'すみません'],
              correctAnswer: 'ごちそうさまでした',
              koreanMeaning: '잘 먹었습니다.',
              explanation: '식사를 마친 후 감사는 [ごちそうさまでした]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '점심시간에 동료와 무엇을 먹을지 대화하기',
          contextDescription: '점심 메뉴를 정하며 무엇을 먹을지 묻고 답하는 일상 회화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '친구',
              japanese: 'ひるごはん、なに を たべますか？',
              romaji: 'hirugohan, nani o tabemasu ka?',
              korean: '점심밥, 무엇을 먹을래?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'わたしは ラーメン を たべます。',
              romaji: 'watashi wa raamen o tabemasu.',
              korean: '나는 라면을 먹을래.',
              isBlankForStudent: true,
              expectedAnswer: 'わたしは ラーメン を たべます。',
              hint: '[나는 라면을 먹습니다]를 완성해 보세요.'
            },
            {
              speaker: 'A',
              role: '친구',
              japanese: 'あ、いいね！ おいしい ラーメンや に いきましょう。',
              romaji: 'a, ii ne! oishii raamen-ya ni ikimashou.',
              korean: '아, 좋다! 맛있는 라면집에 가자.'
            }
          ],
          keyExpressionPoint: '식사 전에는 손을 모으고 [いただきます], 다 먹고 나서는 [ごちそうさまでした]를 잊지 마세요.'
        },
        answerKey: {
          step3Answers: [
            '1. すし を たべます。 (초밥을 먹습니다)',
            '2. えいが を みます。 (영화를 봅니다)'
          ],
          step4Answers: {
            c3_1: 'なに',
            c3_2: 'を',
            c3_3: 'で',
            c3_4: 'いただきます',
            c3_5: 'ごちそうさまでした'
          },
          step5Answers: [
            'B의 대사: わたしは ラーメン を たべます。'
          ],
          grammarSummary: '1. 조사 [を]는 동작의 대상(~을/를)을 나타냅니다.\n2. 장소 조사 [で]는 어떤 행위가 일어나는 장소(~에서)를 뜻합니다. (예: レストランで たべます)\n3. 일본의 2대 식사 인사:\n- いただきます (잘 먹겠습니다)\n- ごちそうさまでした (잘 먹었습니다)',
          culturalTip: '식당을 나설 때 점원에게 [ごちそうさまでした]라고 한마디 건네면 직원들이 매우 기뻐합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'C-04',
        level: 'Level C',
        levelTitle: '일상 동작의 문 (수단과 동반자)',
        dayNumber: 14,
        code: 'JA-C04',
        title: '전철로 갑니다 · 친구와 함께 (~で · ~と いっしょに)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '교통수단 조사 [で]와 동반자 조사 [と]를 사용해 누구와 무엇을 타고 이동하는지 표현할 수 있다.',
        step1Vocab: {
          instruction: '교통수단과 동반자 표현을 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'でんしゃ', romaji: 'densha', korean: '전철' },
            { id: 'v2', japanese: 'タクシー', romaji: 'takushii', korean: '택시 (외래어)' },
            { id: 'v3', japanese: 'あるいて', romaji: 'aruite', korean: '걸어서 (도보로)' },
            { id: 'v4', japanese: 'ともだち', romaji: 'tomodachi', korean: '친구' },
            { id: 'v5', japanese: 'ひとりで', romaji: 'hitori de', korean: '혼자서' }
          ]
        },
        step2GridWriting: {
          instruction: '전철과 친구 글자를 정성껏 쓰세요.',
          items: [
            { char: 'で', romaji: 'de', meaning: '전(で)', strokeHint: 'でんしゃ의 で' },
            { char: 'ん', romaji: 'n', meaning: '철(ん)', strokeHint: 'でんしゃ의 ん' },
            { char: 'と', romaji: 'to', meaning: '친(と)', strokeHint: 'ともだち의 と' },
            { char: 'も', romaji: 'mo', meaning: '구(も)', strokeHint: 'ともだち의 も' }
          ]
        },
        step3Substitution: {
          id: 'sub-c04',
          basePatternJapanese: '[ 수단 ] で いきます。',
          basePatternKorean: '[ 수단 ] (으)로 갑니다.',
          examples: [
            {
              slot: 'でんしゃ (전철)',
              resultJapanese: 'でんしゃ で いきます。',
              resultKorean: '전철로 갑니다.'
            },
            {
              slot: 'タクシー (택시)',
              resultJapanese: 'タクシー で いきます。',
              resultKorean: '택시로 갑니다.'
            }
          ],
          drillPrompt: '수단을 바꾸어 이동 표현을 완성하시오.',
          testSlots: [
            {
              givenKorean: '버스',
              givenWord: 'バス',
              expectedAnswer: 'バス で いきます。'
            },
            {
              givenKorean: '비행기 (ひこうき)',
              givenWord: 'ひこうき',
              expectedAnswer: 'ひこうき で いきます。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '수단과 동반자 조사 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'c4_1',
              questionNumber: 1,
              prompt: '"친구와 함께 도쿄에 갑니다"의 조사 [~와/과]:',
              sentenceWithBlank: 'ともだち ( 　 ) とうきょうへ いきます。',
              options: ['と', 'で', 'に'],
              correctAnswer: 'と',
              koreanMeaning: '친구와 함께 도쿄에 갑니다.',
              explanation: '동반자를 나타내는 조사는 [と(~와/과)]입니다.',
              points: 5
            },
            {
              id: 'c4_2',
              questionNumber: 2,
              prompt: '"걸어서 갑니다" (도보일 때는 조사 で를 쓰지 않음!):',
              sentenceWithBlank: '( 　　　　 ) いきます。',
              options: ['あるいて', 'でんしゃで', 'バスで'],
              correctAnswer: 'あるいて',
              koreanMeaning: '걸어서 갑니다.',
              explanation: '걸어서는 단어 자체가 [あるいて]이며 뒤에 で를 붙이지 않습니다.',
              points: 5
            },
            {
              id: 'c4_3',
              questionNumber: 3,
              prompt: '"무엇으로(어떤 교통수단으로) 오셨습니까?":',
              sentenceWithBlank: '( 　　 ) で きましたか。',
              options: ['なん', 'どこ', 'だれ'],
              correctAnswer: 'なん',
              koreanMeaning: '무엇으로 오셨습니까?',
              explanation: '수단을 물을 때는 [なんで(무엇으로)]를 씁니다.',
              points: 5
            },
            {
              id: 'c4_4',
              questionNumber: 4,
              prompt: '"혼자서 여행합니다":',
              sentenceWithBlank: '( 　　　　 ) りょこうします。',
              options: ['ひとりで', 'ふたりで', 'ともだちで'],
              correctAnswer: 'ひとりで',
              koreanMeaning: '혼자서 여행합니다.',
              explanation: '혼자서는 [ひとりで]입니다.',
              points: 5
            },
            {
              id: 'c4_5',
              questionNumber: 5,
              prompt: '"함께"를 뜻하는 부사:',
              sentenceWithBlank: 'ともだちと ( 　　　　　 ) いきます。',
              options: ['いっしょに', 'ぜんぶで', 'いつも'],
              correctAnswer: 'いっしょに',
              koreanMeaning: '친구와 함께 갑니다.',
              explanation: '[함께]는 [いっしょに]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '주말에 친구와 어디를 어떻게 갈지 계획 이야기하기',
          contextDescription: '교토 여행 계획을 세우며 신칸센을 탈지 대화하는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '친구',
              japanese: 'きょうと へ なんで いきますか？',
              romaji: 'kyouto e nan de ikimasu ka?',
              korean: '교토에 무엇으로(어떻게) 가?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'しんかんせん で いきます。ともだちと いっしょです。',
              romaji: 'shinkansen de ikimasu. tomodachi to issho desu.',
              korean: '신칸센으로 가. 친구와 함께야.',
              isBlankForStudent: true,
              expectedAnswer: 'しんかんせん で いきます。',
              hint: '[신칸센으로 갑니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '친구',
              japanese: 'いいですね！ はやくて べんりですよ。',
              romaji: 'ii desu ne! hayakute benri desu yo.',
              korean: '좋다! 빠르고 편리해.'
            }
          ],
          keyExpressionPoint: '수단 조사 [で]와 동반자 조사 [と]를 함께 쓰면 문장이 훨씬 풍성해집니다.'
        },
        answerKey: {
          step3Answers: [
            '1. バス で いきます。 (버스로 갑니다)',
            '2. ひこうき で いきます。 (비행기로 갑니다)'
          ],
          step4Answers: {
            c4_1: 'と',
            c4_2: 'あるいて',
            c4_3: 'なん',
            c4_4: 'ひとりで',
            c4_5: 'いっしょに'
          },
          step5Answers: [
            'B의 대사: しんかんせん で いきます。 (또는 ともだちと いっしょに いきます。)'
          ],
          grammarSummary: '1. 조사 [で] = 수단/방법(~(으)로). (예: でんしゃで, バスで)\n*주의: 걸어서 갈 때는 [あるいて] 단독으로 쓰며, で를 덧붙이지 않습니다.\n2. 조사 [と] = 동반자(~와/과). [と いっしょに]는 "~와 함께"라는 대표 숙어입니다.',
          culturalTip: '일본의 전철 내에서는 통화를 하지 않는 것이 철칙이며, 스마트폰은 매너 모드로 해두는 것이 기본입니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'C-05',
        level: 'Level C',
        levelTitle: '일상 동작의 문 (종합 일과 스케줄)',
        dayNumber: 15,
        code: 'JA-C05',
        title: 'Level C 총결산: 나의 하루 일과 20분 스피킹 테스트',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '아침부터 밤까지 일어나는 하루 일과를 시간과 동작 동사를 결합하여 유창하게 말할 수 있다.',
        step1Vocab: {
          instruction: '하루 일과를 묘사하는 핵심 동사 5가지를 복습하세요.',
          items: [
            { id: 'v1', japanese: 'おきます', romaji: 'okimasu', korean: '일어납니다 (기상)' },
            { id: 'v2', japanese: 'ねます', romaji: 'nemasu', korean: '잡니다 (취침)' },
            { id: 'v3', japanese: 'はたらきます', romaji: 'hatarakimasu', korean: '일합니다 (근무)' },
            { id: 'v4', japanese: 'べんきょうします', romaji: 'benkyoushimasu', korean: '공부합니다' },
            { id: 'v5', japanese: 'やすみます', romaji: 'yasumimasu', korean: '쉽니다 / 쉽니다' }
          ]
        },
        step2GridWriting: {
          instruction: '하루 일과의 핵심 글자를 정서하세요.',
          items: [
            { char: 'お', romaji: 'o', meaning: '일어남(お)', strokeHint: 'おきます의 첫 글자' },
            { char: 'ね', romaji: 'ne', meaning: '잠(ね)', strokeHint: '세로선 후 오른쪽 꼬아 매듭' },
            { char: 'べ', romaji: 'be', meaning: '공(べ)', strokeHint: 'べんきょう의 첫 글자' },
            { char: 'ん', romaji: 'n', meaning: '부(ん)', strokeHint: 'べんきょう의 두 번째 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-c05',
          basePatternJapanese: 'まいあさ [ 시간 ] に おきます。',
          basePatternKorean: '매일 아침 [ 시간 ] 에 일어납니다.',
          examples: [
            {
              slot: '7じ (7시: しちじ)',
              resultJapanese: 'まいあさ しちじ に おきます。',
              resultKorean: '매일 아침 7시에 일어납니다.'
            }
          ],
          drillPrompt: '자신의 기상 시각과 취침 시각을 넣어 일과 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '밤 11시 (11じ)',
              givenWord: '11じ (ねます)',
              expectedAnswer: 'まいばん 11じ に ねます。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: 'Level C 종합 빈칸 평가 (각 5점 / 총 25점)',
          problems: [
            {
              id: 'c5_1',
              questionNumber: 1,
              prompt: '"매일 아침 커피를 마십니다":',
              sentenceWithBlank: 'まいあさ コーヒー ( 　 ) のみます。',
              options: ['を', 'で', 'に'],
              correctAnswer: 'を',
              koreanMeaning: '매일 아침 커피를 마십니다.',
              explanation: '목적격 조사는 [を]입니다.',
              points: 5
            },
            {
              id: 'c5_2',
              questionNumber: 2,
              prompt: '"전철로 회사에 갑니다":',
              sentenceWithBlank: 'でんしゃ ( 　 ) かいしゃへ いきます。',
              options: ['で', 'を', 'に'],
              correctAnswer: 'で',
              koreanMeaning: '전철로 회사에 갑니다.',
              explanation: '교통수단 조사는 [で]입니다.',
              points: 5
            },
            {
              id: 'c5_3',
              questionNumber: 3,
              prompt: '"친구와 함께 점심을 먹습니다":',
              sentenceWithBlank: 'ともだち ( 　 ) ひるごはんを たべます。',
              options: ['と', 'で', 'へ'],
              correctAnswer: 'と',
              koreanMeaning: '친구와 함께 점심밥을 먹습니다.',
              explanation: '동반자 조사는 [と]입니다.',
              points: 5
            },
            {
              id: 'c5_4',
              questionNumber: 4,
              prompt: '"밤 11시에 잡니다":',
              sentenceWithBlank: '11じ ( 　 ) ねます。',
              options: ['に', 'で', 'を'],
              correctAnswer: 'に',
              koreanMeaning: '11시에 잡니다.',
              explanation: '시간 뒤에 붙는 시각 조사는 [に]입니다.',
              points: 5
            },
            {
              id: 'c5_5',
              questionNumber: 5,
              prompt: '"어제는 공부하지 않았습니다"의 과거 부정형:',
              sentenceWithBlank: 'きのう は ( 　　　　　　　　　 )。',
              options: ['べんきょうしませんでした', 'べんきょうします', 'べんきょうしました'],
              correctAnswer: 'べんきょうしませんでした',
              koreanMeaning: '어제는 공부하지 않았습니다.',
              explanation: '동사의 과거 부정형은 [〜ませんでした]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '일본어 스터디에서 자신의 평소 하루 일과 발표하기',
          contextDescription: '선생님과 학생들 앞에서 나의 평일 일과를 조리 있게 소개하는 롤플레잉입니다.',
          lines: [
            {
              speaker: 'A',
              role: '선생님',
              japanese: 'キムさん、まいあさ なんじに おきますか？',
              romaji: 'kimu-san, maiasa nanji ni okimasu ka?',
              korean: '김 씨, 매일 아침 몇 시에 일어나나요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'わたしは 7じに おきます。そして、でんしゃで かいしゃへ いきます。',
              romaji: 'watashi wa shichi-ji ni okimasu. soshite, densha de kaisha e ikimasu.',
              korean: '저는 7시에 일어납니다. 그리고 전철로 회사에 갑니다.',
              isBlankForStudent: true,
              expectedAnswer: 'わたしは 7じに おきます。그리고 하루 일과 1문장',
              hint: '[7시에 일어납니다. 그리고 전철로 회사에 갑니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '선생님',
              japanese: 'すばらしいですね！ とても じょうずです。',
              romaji: 'subarashii desu ne! totemo jouzu desu.',
              korean: '훌륭하네요! 아주 잘하셨습니다.'
            }
          ],
          keyExpressionPoint: '문장과 문장을 이어줄 때는 [そして(그리고)]를 쓰면 자연스럽게 흐릅니다.'
        },
        answerKey: {
          step3Answers: [
            '1. まいばん 11じ に ねます。 (매일 밤 11시에 잡니다)'
          ],
          step4Answers: {
            c5_1: 'を',
            c5_2: 'で',
            c5_3: 'と',
            c5_4: 'に',
            c5_5: 'べんきょうしませんでした'
          },
          step5Answers: [
            'B의 대사: わたしは 7じに おきます。そして、でんしゃで かいしゃへ いきます。'
          ],
          grammarSummary: 'Level C 마스터 완료!\n1. 시각 표현(〜時, 〜分, 〜から〜まで)\n2. 이동 동사(いきます/きます/かえります)와 방향 조사(へ/に)\n3. 동작 동사(たべます/のみます/みます)와 목적어 조사(を)\n4. 수단 조사(で) & 동반자 조사(と)\n이제 일본어로 자신의 일상과 스케줄을 완벽히 설명할 수 있습니다.',
          culturalTip: '일본인과의 대화에서 [きのうはどうでしたか?(어제는 어땠어요?)] 같은 일상 질문에 자신의 일과를 1~2문장 덧붙이면 대화가 풍성하게 이어집니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      }
    ]
  },
  {
    levelId: 'level-d',
    levelName: 'Level D · 식당 & 여행 실전의 문',
    description: '식당 주문, 추천 요청, 맛 표현, 길 찾기 및 호텔/교통 회화',
    badgeColor: 'rose',
    focus: 'おすすめは？, 〜を ふたつ ください, えきは どちら？, まっすぐ/みぎ/ひだり',
    sheets: [
      {
        id: 'D-01',
        level: 'Level D',
        levelTitle: '식당 & 여행 실전 (식당 입장과 자리 안내)',
        dayNumber: 16,
        code: 'JA-D01',
        title: '몇 분이세요? · 2명입니다 (なんめいさまですか · ふたりです)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '식당 입장 시 인원수를 정확히 말하고 직원의 안내를 받아 착석할 수 있다.',
        step1Vocab: {
          instruction: '식당 입장 시 사람 수를 세는 일본어 인원수를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'ひとり', romaji: 'hitori', korean: '1명, 혼자' },
            { id: 'v2', japanese: 'ふたり', romaji: 'futari', korean: '2명' },
            { id: 'v3', japanese: 'さんにん', romaji: 'sannin', korean: '3명' },
            { id: 'v4', japanese: 'よにん', romaji: 'yonin', korean: '4명 (주의: よん인 아님)' },
            { id: 'v5', japanese: 'なんめいさま', romaji: 'nanmei-sama', korean: '몇 분 (손님을 높여 부르는 말)' }
          ]
        },
        step2GridWriting: {
          instruction: '인원수 핵심 글자를 정서하세요.',
          items: [
            { char: 'ひ', romaji: 'hi', meaning: '1명(ひ)', strokeHint: 'ひとり의 첫 글자' },
            { char: 'ふ', romaji: 'fu', meaning: '2명(ふ)', strokeHint: 'ふたり의 첫 글자' },
            { char: 'た', romaji: 'ta', meaning: '-(た)', strokeHint: 'ふたり의 두 번째 글자' },
            { char: 'り', romaji: 'ri', meaning: '-(り)', strokeHint: 'ふたり의 세 번째 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-d01',
          basePatternJapanese: '[ 인원수 ] です。',
          basePatternKorean: '[ 인원수 ] 입니다.',
          examples: [
            {
              slot: 'ひとり (1명)',
              resultJapanese: 'ひとり です。',
              resultKorean: '1명(혼자)입니다.'
            },
            {
              slot: 'ふたり (2명)',
              resultJapanese: 'ふたり です。',
              resultKorean: '2명입니다.'
            }
          ],
          drillPrompt: '인원수를 넣어 식당 입장 대답을 완성하시오.',
          testSlots: [
            {
              givenKorean: '3명',
              givenWord: 'さんにん',
              expectedAnswer: 'さんにん です。'
            },
            {
              givenKorean: '4명',
              givenWord: 'よにん',
              expectedAnswer: 'よにん です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '식당 입장 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'd1_1',
              questionNumber: 1,
              prompt: '식당 직원의 질문 "몇 분이신가요?":',
              sentenceWithBlank: '( 　　　　　　 ) ですか。',
              options: ['なんめいさま', 'いくら', 'どこ'],
              correctAnswer: 'なんめいさま',
              koreanMeaning: '몇 분이신가요?',
              explanation: '손님 인원수를 물을 때는 [なんめいさま]를 씁니다.',
              points: 5
            },
            {
              id: 'd1_2',
              questionNumber: 2,
              prompt: '"이쪽으로 오세요 (이쪽으로 모시겠습니다)":',
              sentenceWithBlank: 'こちらへ ( 　　　 )。',
              options: ['どうぞ', 'ください', 'ありがとう'],
              correctAnswer: 'どうぞ',
              koreanMeaning: '이쪽으로 오세요.',
              explanation: '안내할 때는 [こちらへ どうぞ]라고 합니다.',
              points: 5
            },
            {
              id: 'd1_3',
              questionNumber: 3,
              prompt: '혼자 식당에 갔을 때 인원수 표현:',
              sentenceWithBlank: '( 　　　 ) です。',
              options: ['ひとり', 'ふたり', 'いちにん'],
              correctAnswer: 'ひとり',
              koreanMeaning: '1명(혼자)입니다.',
              explanation: '1명은 いちにん이 아니라 [ひとり]입니다.',
              points: 5
            },
            {
              id: 'd1_4',
              questionNumber: 4,
              prompt: '"금연석으로 부탁합니다":',
              sentenceWithBlank: 'きんえんせき ( 　 ) おねがいします。',
              options: ['で', 'を', 'に'],
              correctAnswer: 'で',
              koreanMeaning: '금연석으로 부탁합니다.',
              explanation: '좌석 유형 선택 시 [〜で おねがいします]를 씁니다.',
              points: 5
            },
            {
              id: 'd1_5',
              questionNumber: 5,
              prompt: '예약 유무를 물을 때 "예약하셨습니까?":',
              sentenceWithBlank: 'ごよやく は ( 　　　　　　　　 )。',
              options: ['ございますか', 'ください', 'ですか'],
              correctAnswer: 'ございますか',
              koreanMeaning: '예약이 있으신가요?',
              explanation: '식당 직원의 정중한 질문은 [ごよやくは ございますか]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '인기 라멘집 입장 및 자리 착석하기',
          contextDescription: '식당 문을 열고 들어가서 직원과 인원수를 확인하는 현장 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '직원',
              japanese: 'いらっしゃいませ！ なんめいさまでしょうか？',
              romaji: 'irasshaimase! nanmei-sama deshou ka?',
              korean: '어서 오세요! 몇 분이신가요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'ふたり です。',
              romaji: 'futari desu.',
              korean: '2명입니다.',
              isBlankForStudent: true,
              expectedAnswer: 'ふたり です。 (또는 ひとり です。)',
              hint: '[2명입니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '직원',
              japanese: 'カウンターせき へ どうぞ！',
              romaji: 'kauntaa-seki e douzo!',
              korean: '카운터(바) 자리로 오세요!'
            }
          ],
          keyExpressionPoint: '1명은 [ひとり], 2명은 [ふたり]입니다. 손가락으로 가볍게 표시하며 말하면 더욱 확실합니다.'
        },
        answerKey: {
          step3Answers: [
            '1. さんにん です。 (3명입니다)',
            '2. よにん です。 (4명입니다)'
          ],
          step4Answers: {
            d1_1: 'なんめいさま',
            d1_2: 'どうぞ',
            d1_3: 'ひとり',
            d1_4: 'で',
            d1_5: 'ございますか'
          },
          step5Answers: [
            'B의 대사: ふたり です。'
          ],
          grammarSummary: '사람 수 세기 규칙:\n- 1명: ひとり (hitori) - 고유어\n- 2명: ふたり (futari) - 고유어\n- 3명: さんにん (sannin) - 음독\n- 4명: よにん (yonin) - *yonnin/yonin 주의\n- 5명: ごにん (gonin)',
          culturalTip: '일본 식당은 1인 손님(おひとりさま, 오히토리사마)을 위한 카운터석(カウンター席)이 매우 잘 마련되어 있어 혼밥하기 편합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'D-02',
        level: 'Level D',
        levelTitle: '식당 & 여행 실전 (주문과 추천 요청)',
        dayNumber: 17,
        code: 'JA-D02',
        title: '추천 메뉴는 무엇인가요? (おすすめは なんですか)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '가게의 대표 추천 메뉴를 물어보고, 물이나 추가 주문을 요청할 수 있다.',
        step1Vocab: {
          instruction: '식당에서 주문할 때 꼭 쓰는 표현을 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'おすすめ', romaji: 'osusume', korean: '추천 (메뉴, 상품)' },
            { id: 'v2', japanese: 'これに します', romaji: 'kore ni shimasu', korean: '이것으로 하겠습니다 (결정)' },
            { id: 'v3', japanese: 'おみず', romaji: 'omizu', korean: '물 (시원한 물)' },
            { id: 'v4', japanese: 'おかいけい', romaji: 'okaikei', korean: '계산 (체크)' },
            { id: 'v5', japanese: 'おいしい', romaji: 'oishii', korean: '맛있다' }
          ]
        },
        step2GridWriting: {
          instruction: '추천(おすすめ)의 글자를 바르게 쓰세요.',
          items: [
            { char: 'お', romaji: 'o', meaning: '추(お)', strokeHint: '정중한 접두사 お' },
            { char: 'す', romaji: 'su', meaning: '천(す)', strokeHint: '매듭 꼬는 글자 す' },
            { char: 'す', romaji: 'su', meaning: '-(す)', strokeHint: '한 번 더 す 연습' },
            { char: 'め', romaji: 'me', meaning: '-(め)', strokeHint: '사선 후 둥글게 원 감기' }
          ]
        },
        step3Substitution: {
          id: 'sub-d02',
          basePatternJapanese: '[ 메뉴 ] を [ 수량 ] おねがいします。',
          basePatternKorean: '[ 메뉴 ] 을(를) [ 수량 ] 부탁합니다.',
          examples: [
            {
              slot: 'おすすめ / ひとつ',
              resultJapanese: 'おすすめ を ひとつ おねがいします。',
              resultKorean: '추천 메뉴를 1개 부탁합니다.'
            }
          ],
          drillPrompt: '메뉴와 수량을 바꾸어 정중하게 주문하시오.',
          testSlots: [
            {
              givenKorean: '라멘 / 2개',
              givenWord: 'ラーメン / ふたつ',
              expectedAnswer: 'ラーメン を ふたつ おねがいします。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '식당 주문 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'd2_1',
              questionNumber: 1,
              prompt: '"추천 메뉴는 무엇인가요?":',
              sentenceWithBlank: '( 　　　　　 ) は なん ですか。',
              options: ['おすすめ', 'メニュー', 'トイレ'],
              correctAnswer: 'おすすめ',
              koreanMeaning: '추천은 무엇인가요?',
              explanation: '추천은 [おすすめ]입니다.',
              points: 5
            },
            {
              id: 'd2_2',
              questionNumber: 2,
              prompt: '"이것으로 할게요(결정)":',
              sentenceWithBlank: 'これ ( 　 ) します。',
              options: ['に', 'を', 'で'],
              correctAnswer: 'に',
              koreanMeaning: '이것으로 하겠습니다.',
              explanation: '결정을 나타낼 때는 조사 [〜に します]를 씁니다.',
              points: 5
            },
            {
              id: 'd2_3',
              questionNumber: 3,
              prompt: '"물 좀 더 주세요":',
              sentenceWithBlank: 'おみず、( 　　 ) ください。',
              options: ['もういっぱい', 'ひとつ', 'ぜんぶ'],
              correctAnswer: 'もういっぱい',
              koreanMeaning: '물 한 잔 더 주세요.',
              explanation: '한 잔 더는 [もういっぱい(もう一杯)]입니다.',
              points: 5
            },
            {
              id: 'd2_4',
              questionNumber: 4,
              prompt: '식사 후 "계산 부탁드립니다":',
              sentenceWithBlank: '( 　　　　　 )、おねがいします。',
              options: ['おかいけい', 'おすすめ', 'ごちそう'],
              correctAnswer: 'おかいけい',
              koreanMeaning: '계산 부탁합니다.',
              explanation: '계산은 [おかいけい] 또는 [おかんじょう]입니다.',
              points: 5
            },
            {
              id: 'd2_5',
              questionNumber: 5,
              prompt: '"정말 맛있었습니다":',
              sentenceWithBlank: 'とても ( 　　　　　　　 ) です。',
              options: ['おいしかった', 'おいしい', 'からかった'],
              correctAnswer: 'おいしかった',
              koreanMeaning: '정말 맛있었습니다.',
              explanation: '맛있었다의 과거형은 [おいしかったです]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '이자카야(선술집)에서 점원 추천 받고 주문하기',
          contextDescription: '메뉴판에 사진이 없어 고민하다가 점원에게 베스트 메뉴를 묻는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、おすすめ は なん ですか？',
              romaji: 'sumimasen, osusume wa nan desu ka?',
              korean: '저기요, 추천 메뉴는 무엇인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、おすすめ は なん ですか？',
              hint: '[저기요, 추천은 무엇인가요?]를 질문해 보세요.'
            },
            {
              speaker: 'B',
              role: '점원',
              japanese: 'やきとり の もりあわせ が おすすめ ですよ！',
              romaji: 'yakitori no moriawase ga osusume desu yo!',
              korean: '닭꼬치 모둠이 추천 메뉴예요!'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'じゃ、それ に します。生ビールも ひとつ ください。',
              romaji: 'ja, sore ni shimasu. nama biiru mo hitotsu kudasai.',
              korean: '그럼, 그것으로 할게요. 생맥주도 하나 주세요.'
            }
          ],
          keyExpressionPoint: '메뉴가 고민될 때는 [おすすめは なんですか] 한마디면 가게의 대표 인기 요리를 즐길 수 있습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. ラーメン を ふたつ おねがいします。 (라면을 2개 부탁합니다)'
          ],
          step4Answers: {
            d2_1: 'おすすめ',
            d2_2: 'に',
            d2_3: 'もういっぱい',
            d2_4: 'おかいけい',
            d2_5: 'おいしかった'
          },
          step5Answers: [
            'A의 대사: すみません、おすすめ は なん ですか？'
          ],
          grammarSummary: '1. [おすすめは なんですか] = [추천은 무엇인가요?]\n2. 선택과 결정의 조사 [〜に します] = [~로 하겠습니다]. (예: コーヒーにします = 커피로 할게요)\n3. [おかいけい、おねがいします] = [계산 부탁드립니다]',
          culturalTip: '일본 음식점에서는 자리에 앉아 손을 가볍게 들며 [すみません]이라고 부르면 직원이 옵니다. 자리에 앉은 채로 계산하는 곳도 많습니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'D-03',
        level: 'Level D',
        levelTitle: '식당 & 여행 실전 (길 묻기와 방향)',
        dayNumber: 18,
        code: 'JA-D03',
        title: '역은 어디입니까? · 곧장 가세요 (えきは どちら · まっすぐ)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '길에서 길을 묻고, 직진/우회전/좌회전 방향 안내를 알아들을 수 있다.',
        step1Vocab: {
          instruction: '길 찾기와 방향 관련 필수 단어를 익히세요.',
          items: [
            { id: 'v1', japanese: 'まっすぐ', romaji: 'massugu', korean: '곧장, 똑바로 (직진)' },
            { id: 'v2', japanese: 'みぎ', romaji: 'migi', korean: '오른쪽 (우회전: みぎへ)' },
            { id: 'v3', japanese: 'ひだり', romaji: 'hidari', korean: '왼쪽 (좌회전: ひだりへ)' },
            { id: 'v4', japanese: 'まがります', romaji: 'magarimasu', korean: '꺾습니다, 돕니다' },
            { id: 'v5', japanese: 'ちかい / とおい', romaji: 'chikai / tooi', korean: '가깝다 / 멀다' }
          ]
        },
        step2GridWriting: {
          instruction: '방향을 나타내는 오른쪽, 왼쪽 글자를 쓰세요.',
          items: [
            { char: 'ま', romaji: 'ma', meaning: '곧장(ま)', strokeHint: 'まっすぐ의 ま' },
            { char: 'み', romaji: 'mi', meaning: '오른쪽(み)', strokeHint: 'みぎ의 み' },
            { char: 'ぎ', romaji: 'gi', meaning: '-(ぎ)', strokeHint: 'き에 탁점' },
            { char: 'ひ', romaji: 'hi', meaning: '왼쪽(ひ)', strokeHint: 'ひだり의 첫 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-d03',
          basePatternJapanese: '[ 방향 ] へ まがって ください。',
          basePatternKorean: '[ 방향 ] (으)로 돌아/꺾어 주세요.',
          examples: [
            {
              slot: 'みぎ (오른쪽)',
              resultJapanese: 'みぎ へ まがって ください。',
              resultKorean: '오른쪽으로 돌아 주세요.'
            },
            {
              slot: 'ひだり (왼쪽)',
              resultJapanese: 'ひだり へ まがって ください。',
              resultKorean: '왼쪽으로 돌아 주세요.'
            }
          ],
          drillPrompt: '방향을 바꾸어 길 안내 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '오른쪽',
              givenWord: 'みぎ',
              expectedAnswer: 'みぎ へ まがって ください。'
            },
            {
              givenKorean: '왼쪽',
              givenWord: 'ひだり',
              expectedAnswer: 'ひだり へ まがって ください。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '길 찾기 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'd3_1',
              questionNumber: 1,
              prompt: '"곧장 가세요 (직진하세요)":',
              sentenceWithBlank: '( 　　　　　 ) いって ください。',
              options: ['まっすぐ', 'みぎへ', 'ひだりへ'],
              correctAnswer: 'まっすぐ',
              koreanMeaning: '곧장 가세요.',
              explanation: '직진은 [まっすぐ]입니다.',
              points: 5
            },
            {
              id: 'd3_2',
              questionNumber: 2,
              prompt: '"신주쿠 역은 어느 쪽인가요?":',
              sentenceWithBlank: 'しんじゅくえき は ( 　　　 ) ですか。',
              options: ['どちら', 'だれ', 'どれ'],
              correctAnswer: 'どちら',
              koreanMeaning: '신주쿠역은 어느 쪽입니까?',
              explanation: '방향을 정중하게 물을 때는 [どちら]를 씁니다.',
              points: 5
            },
            {
              id: 'd3_3',
              questionNumber: 3,
              prompt: '"여기서 가깝습니까?":',
              sentenceWithBlank: 'ここから ( 　　　 ) ですか。',
              options: ['ちかい', 'とおい', 'たかい'],
              correctAnswer: 'ちかい',
              koreanMeaning: '여기서 가깝습니까?',
              explanation: '가깝다는 [ちかい]입니다.',
              points: 5
            },
            {
              id: 'd3_4',
              questionNumber: 4,
              prompt: '도보 소요 시간 "걸어서 5분입니다":',
              sentenceWithBlank: 'あるいて 5ふん ( 　　 ) です。',
              options: ['くらい', 'から', 'まで'],
              correctAnswer: 'くらい',
              koreanMeaning: '걸어서 5분 정도입니다.',
              explanation: '[~정도, ~쯤]은 [くらい]입니다.',
              points: 5
            },
            {
              id: 'd3_5',
              questionNumber: 5,
              prompt: '행인에게 길 물을 때 처음 건네는 말:',
              sentenceWithBlank: 'あのう、( 　　　　　 )、みちを おしえて ください。',
              options: ['すみません', 'ありがとう', 'さようなら'],
              correctAnswer: 'すみません',
              koreanMeaning: '저기, 실례합니다, 길을 알려주세요.',
              explanation: '길을 물을 때는 [すみません]으로 시작합니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '길에서 행인에게 지하철역 위치 묻기',
          contextDescription: '골목에서 길을 잃었을 때 친절한 행인에게 역 방향을 물어보는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、ちかてつの えき は どちら ですか？',
              romaji: 'sumimasen, chikatetsu no eki wa dochira desu ka?',
              korean: '실례합니다, 지하철 역은 어느 쪽인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、えき は どちら ですか？ (또는 どこですか)',
              hint: '[실례합니다, 역은 어느 쪽입니까?]를 질문해 보세요.'
            },
            {
              speaker: 'B',
              role: '행인',
              japanese: 'あ、まっすぐ いって、コンビニの かど を みぎ ですよ。',
              romaji: 'a, massugu itte, konbini no kado o migi desu yo.',
              korean: '아, 곧장 가서 편의점 모퉁이에서 오른쪽이에요.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'まっすぐ いって、みぎですね！ ありがとうございます。',
              romaji: 'massugu itte, migi desu ne! arigatou gozaimasu.',
              korean: '곧장 가서 오른쪽이군요! 정말 감사합니다.'
            }
          ],
          keyExpressionPoint: '상대방의 길 안내를 들었을 때는 [まっすぐいって、みぎですね]처럼 복창 확인하면 실수가 없습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. みぎ へ まがって ください。 (오른쪽으로 돌아 주세요)',
            '2. ひだり へ まがって ください。 (왼쪽으로 돌아 주세요)'
          ],
          step4Answers: {
            d3_1: 'まっすぐ',
            d3_2: 'どちら',
            d3_3: 'ちかい',
            d3_4: 'くらい',
            d3_5: 'すみません'
          },
          step5Answers: [
            'A의 대사: すみません、ちかてつの えき は どちら ですか？'
          ],
          grammarSummary: '길 찾기 핵심 3방향:\n1. まっすぐ (직진)\n2. みぎ (오른쪽)\n3. ひだり (왼쪽)\n[〜へ まがって ください] = [~쪽으로 돌아 주세요]',
          culturalTip: '일본 파출소(코반, 交番, こうばん)에는 큰 동네 지도가 있어서 경찰관에게 길을 물어보면 매우 친절하게 종이 약도를 그려주며 안내해 줍니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'D-04',
        level: 'Level D',
        levelTitle: '식당 & 여행 실전 (호텔 및 편의시설)',
        dayNumber: 19,
        code: 'JA-D04',
        title: '체크인 부탁합니다 · 짐 맡기기 (チェックイン · にもつ)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '호텔 체크인과 체크아웃을 진행하고, 짐 보관이나 Wi-Fi를 요청할 수 있다.',
        step1Vocab: {
          instruction: '호텔 숙박 시 매일 사용하는 여행 실전 어휘를 익히세요.',
          items: [
            { id: 'v1', japanese: 'チェックイン', romaji: 'chekku-in', korean: '체크인 (외래어)' },
            { id: 'v2', japanese: 'チェックアウト', romaji: 'chekku-auto', korean: '체크아웃' },
            { id: 'v3', japanese: 'にもつ', romaji: 'nimotsu', korean: '짐, 캐리어' },
            { id: 'v4', japanese: 'あずかって ください', romaji: 'azukatte kudasai', korean: '맡아 주세요 / 보관해 주세요' },
            { id: 'v5', japanese: 'へや', romaji: 'heya', korean: '방, 객실' }
          ]
        },
        step2GridWriting: {
          instruction: '체크인 카타카나를 정성껏 쓰세요.',
          items: [
            { char: 'チ', romaji: 'chi', meaning: '치(チ)', strokeHint: '사선 후 가로획, 아래 곡선' },
            { char: 'ェ', romaji: 'e', meaning: '작은 ェ', strokeHint: '소문자 요음' },
            { char: 'ッ', romaji: 'tsu', meaning: '작은 ッ', strokeHint: '촉음 ッ' },
            { char: 'ク', romaji: 'ku', meaning: '쿠(ク)', strokeHint: '사선 후 꺾기' }
          ]
        },
        step3Substitution: {
          id: 'sub-d04',
          basePatternJapanese: '[ 요청 사항 ] を おねがいします。',
          basePatternKorean: '[ 요청 사항 ] 을(를) 부탁합니다.',
          examples: [
            {
              slot: 'チェックイン (체크인)',
              resultJapanese: 'チェックイン を おねがいします。',
              resultKorean: '체크인을 부탁합니다.'
            },
            {
              slot: 'チェックアウト (체크아웃)',
              resultJapanese: 'チェックアウト を おねがいします。',
              resultKorean: '체크아웃을 부탁합니다.'
            }
          ],
          drillPrompt: '호텔 요청 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '짐 보관 (にもつ)',
              givenWord: 'にもつ の あずかり',
              expectedAnswer: 'にもつ の あずかり を おねがいします。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '호텔 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'd4_1',
              questionNumber: 1,
              prompt: '체크인 전 "짐을 맡아주실 수 있나요?":',
              sentenceWithBlank: 'にもつ を ( 　　　　　　　　　 )。',
              options: ['あずかって ください', 'たべて ください', 'いって ください'],
              correctAnswer: 'あずかって ください',
              koreanMeaning: '짐을 맡아 주세요.',
              explanation: '짐을 맡기다는 [あずかって ください]입니다.',
              points: 5
            },
            {
              id: 'd4_2',
              questionNumber: 2,
              prompt: '"와이파이 비밀번호는 무엇인가요?":',
              sentenceWithBlank: 'Wi-Fi の パスワード は ( 　　 ) ですか。',
              options: ['なん', 'どこ', 'いくら'],
              correctAnswer: 'なん',
              koreanMeaning: 'Wi-Fi 비밀번호는 무엇인가요?',
              explanation: '사물이나 번호는 [なん(무엇)]으로 묻습니다.',
              points: 5
            },
            {
              id: 'd4_3',
              questionNumber: 3,
              prompt: '"아침 식사는 몇 시부터인가요?":',
              sentenceWithBlank: 'ちょうしょく は なんじ ( 　　 ) ですか。',
              options: ['から', 'まで', 'に'],
              correctAnswer: 'から',
              koreanMeaning: '조식은 몇 시부터인가요?',
              explanation: '[~부터]는 [から]입니다.',
              points: 5
            },
            {
              id: 'd4_4',
              questionNumber: 4,
              prompt: '호텔 직원이 건네는 열쇠/카드키 "여기 방 키입니다":',
              sentenceWithBlank: 'おへや の かぎ で ( 　　　　　 )。',
              options: ['ございます', 'ください', 'でした'],
              correctAnswer: 'ございます',
              koreanMeaning: '객실 열쇠입니다.',
              explanation: '정중한 표현은 [〜で ございます]입니다.',
              points: 5
            },
            {
              id: 'd4_5',
              questionNumber: 5,
              prompt: '"타월을 하나 더 부탁합니다":',
              sentenceWithBlank: 'タオル を もう ( 　　　 ) ください。',
              options: ['まい', 'こ', 'ほん'],
              correctAnswer: 'まい',
              koreanMeaning: '타월을 한 장 더 주세요.',
              explanation: '수건, 셔츠, 종이 등 얇은 것을 세는 단위는 [〜まい(枚)]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '도쿄 호텔 프런트에서 체크인하기',
          contextDescription: '여권을 제시하며 예약자 이름을 말하고 체크인하는 실전 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '호텔 직원',
              japanese: 'いらっしゃいませ。チェックインでございますか？',
              romaji: 'irasshaimase. chekku-in de gozaimasu ka?',
              korean: '어서 오세요. 체크인이신가요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'はい、チェックイン おねがいします。よやくした キム です。',
              romaji: 'hai, chekku-in onegaishimasu. yoyakushita kimu desu.',
              korean: '네, 체크인 부탁합니다. 예약한 김입니다.',
              isBlankForStudent: true,
              expectedAnswer: 'はい、チェックイン おねがいします。',
              hint: '[네, 체크인 부탁합니다. 예약한 [이름]입니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '호텔 직원',
              japanese: 'キム様ですね。パスポートを おねがいいたします。',
              romaji: 'kimu-sama desu ne. pasupooto o onegai itashimasu.',
              korean: '김 고객님이시군요. 여권 부탁드립니다.'
            }
          ],
          keyExpressionPoint: '호텔 체크인 시 [よやくした [성씨] です(예약한 누구입니다)]라고 성을 밝히면 수속이 빠릅니다.'
        },
        answerKey: {
          step3Answers: [
            '1. にもつ の あずかり を おねがいします。 (짐 보관을 부탁합니다)'
          ],
          step4Answers: {
            d4_1: 'あずかって ください',
            d4_2: 'なん',
            d4_3: 'から',
            d4_4: 'ございます',
            d4_5: 'まい'
          },
          step5Answers: [
            'B의 대사: はい、チェックイン おねがいします。よやくした キム です。'
          ],
          grammarSummary: '1. [チェックイン おねがいします] = 체크인 부탁합니다.\n2. [にもつを あずかって ください] = 짐을 맡아 주세요.\n체크인 시간 전이나 체크아웃 후 짐을 무료로 맡길 때 유용합니다.',
          culturalTip: '일본 호텔에서는 외국인 투숙객의 여권 사본 제출이 법률로 정해져 있으므로 여권을 미리 꺼내두면 편리합니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'D-05',
        level: 'Level D',
        levelTitle: '식당 & 여행 실전 (도쿄 여행 종합 롤플레잉)',
        dayNumber: 20,
        code: 'JA-D05',
        title: 'Level D 총결산: 식당 주문부터 길 찾기까지 여행 마스터',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '식당 입장, 추천 주문, 계산, 길 찾기까지 여행지에서의 하루를 완벽하게 일본어로 소통한다.',
        step1Vocab: {
          instruction: 'Level D 여행 핵심 표현 5개를 총복습하세요.',
          items: [
            { id: 'v1', japanese: 'ふたり です', romaji: 'futari desu', korean: '2명입니다' },
            { id: 'v2', japanese: 'おすすめ は なんですか', romaji: 'osusume wa nan desu ka', korean: '추천 메뉴는 무엇인가요' },
            { id: 'v3', japanese: 'おかいけい おねがいします', romaji: 'okaikei onegaishimasu', korean: '계산 부탁합니다' },
            { id: 'v4', japanese: 'えき は どちら ですか', romaji: 'eki wa dochira desu ka', korean: '역은 어느 쪽인가요' },
            { id: 'v5', japanese: 'まっすぐ いって ください', romaji: 'massugu itte kudasai', korean: '곧장 가세요' }
          ]
        },
        step2GridWriting: {
          instruction: '여행 회화 완성 문장을 쓰세요.',
          items: [
            { char: 'お', romaji: 'o', meaning: '계(お)', strokeHint: 'おかいけい의 첫 글자' },
            { char: 'か', romaji: 'ka', meaning: '산(か)', strokeHint: 'おかいけい의 두 번째 글자' },
            { char: 'い', romaji: 'i', meaning: '-(い)', strokeHint: 'おかいけい의 세 번째 글자' },
            { char: 'け', romaji: 'ke', meaning: '-(け)', strokeHint: 'おかいけい의 네 번째 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-d05',
          basePatternJapanese: 'すみません、[ 목적지 ] は どちらですか。',
          basePatternKorean: '저기요, [ 목적지 ] 은/는 어느 쪽입니까?',
          examples: [
            {
              slot: 'えき (역)',
              resultJapanese: 'すみません、えき は どちらですか。',
              resultKorean: '저기요, 역은 어느 쪽입니까?'
            }
          ],
          drillPrompt: '목적지를 바꾸어 길 묻기 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '호텔',
              givenWord: 'ホテル',
              expectedAnswer: 'すみません、ホテル は どちらですか。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: 'Level D 종합 평가 (각 5점 / 총 25점)',
          problems: [
            {
              id: 'd5_1',
              questionNumber: 1,
              prompt: '식당에서 "2명입니다":',
              sentenceWithBlank: '( 　　　 ) です。',
              options: ['ふたり', 'ひとり', 'ににん'],
              correctAnswer: 'ふたり',
              koreanMeaning: '2명입니다.',
              explanation: '2명은 [ふたり]입니다.',
              points: 5
            },
            {
              id: 'd5_2',
              questionNumber: 2,
              prompt: '"추천 메뉴로 할게요":',
              sentenceWithBlank: 'おすすめ ( 　 ) します。',
              options: ['に', 'を', 'で'],
              correctAnswer: 'に',
              koreanMeaning: '추천으로 하겠습니다.',
              explanation: '결정 조사는 [に]입니다.',
              points: 5
            },
            {
              id: 'd5_3',
              questionNumber: 3,
              prompt: '"계산 부탁드립니다":',
              sentenceWithBlank: '( 　　　　　 )、おねがいします。',
              options: ['おかいけい', 'おすすめ', 'いらっしゃい'],
              correctAnswer: 'おかいけい',
              koreanMeaning: '계산 부탁합니다.',
              explanation: '계산은 [おかいけい]입니다.',
              points: 5
            },
            {
              id: 'd5_4',
              questionNumber: 4,
              prompt: '"오른쪽으로 돌아 주세요":',
              sentenceWithBlank: 'みぎ へ ( 　　　　　 ) ください。',
              options: ['まがって', 'いって', 'たべて'],
              correctAnswer: 'まがって',
              koreanMeaning: '오른쪽으로 돌아 주세요.',
              explanation: '돌다/꺾다는 [まがって]입니다.',
              points: 5
            },
            {
              id: 'd5_5',
              questionNumber: 5,
              prompt: '짐 맡길 때 "짐 부탁드립니다":',
              sentenceWithBlank: '( 　　　 ) を おねがいします。',
              options: ['にもつ', 'きっぷ', 'メニュー'],
              correctAnswer: 'にもつ',
              koreanMeaning: '짐을 부탁합니다.',
              explanation: '짐은 [にもつ]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '식사 후 계산하고 다음 행선지 길 묻기',
          contextDescription: '식당에서 맛있게 식사를 마치고 계산하며 직원에게 역 길을 묻는 풀 롤플레잉입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'ごちそうさまでした！ おかいけい おねがいします。',
              romaji: 'gochisousama deshita! okaikei onegaishimasu.',
              korean: '잘 먹었습니다! 계산 부탁합니다.'
            },
            {
              speaker: 'B',
              role: '직원',
              japanese: 'ありがとうございます。2,000えん に なります。',
              romaji: 'arigatou gozaimasu. ni-sen-en ni narimasu.',
              korean: '감사합니다. 2,000엔 되겠습니다.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'あの、えき は どちら ですか？',
              romaji: 'ano, eki wa dochira desu ka?',
              korean: '저기, 역은 어느 쪽인가요?',
              isBlankForStudent: true,
              expectedAnswer: 'あの、えき は どちら ですか？',
              hint: '[저기, 역은 어느 쪽인가요?]를 질문해 보세요.'
            },
            {
              speaker: 'B',
              role: '직원',
              japanese: 'みせを でて、ひだりへ まっすぐですよ。',
              romaji: 'mise o dete, hidari e massugu desu yo.',
              korean: '가게를 나가서 왼쪽으로 곧장 가시면 돼요.'
            }
          ],
          keyExpressionPoint: 'Level D 완료! 이제 일본 현지 식당과 거리에서 거침없이 회화할 수 있는 실력을 갖추셨습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. すみません、ホテル は どちらですか。 (저기요, 호텔은 어느 쪽입니까?)'
          ],
          step4Answers: {
            d5_1: 'ふたり',
            d5_2: 'に',
            d5_3: 'おかいけい',
            d5_4: 'まがって',
            d5_5: 'にもつ'
          },
          step5Answers: [
            'A의 대사: あの、えき は どちら ですか？'
          ],
          grammarSummary: 'Level D 여행 식당 핵심 총정리:\n1. 인원: ひとり / ふたり / さんにん / よにん\n2. 식당: おすすめはなんですか / これにします / おかいけいおねがいします\n3. 길: まっすぐ / みぎ / ひだり / どちらですか\n4. 호텔: チェックイン / にもつをあずかってください',
          culturalTip: '일본에서는 팁 문화가 전혀 없으므로 청구서에 적힌 금액만큼만 정확히 계산하시면 됩니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      }
    ]
  },
  {
    levelId: 'level-e',
    levelName: 'Level E · 감정 & 교류 회화의 문',
    description: '기호와 희망(~たいです), 감정 표현, 권유와 제안(~ませんか), 정중한 부탁(~てください)',
    badgeColor: 'violet',
    focus: '〜たいです, すきです, 〜ませんか / 〜ましょう, 〜て ください',
    sheets: [
      {
        id: 'E-01',
        level: 'Level E',
        levelTitle: '감정 & 교류 회화 (희망과 취향)',
        dayNumber: 21,
        code: 'JA-E01',
        title: '~하고 싶습니다 · 좋아합니다 (~たいです · すきです)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '자신의 소망(~たいです)과 좋아하는 취향(〜が すきです)을 일본어로 자연스럽게 표현한다.',
        step1Vocab: {
          instruction: '희망과 선호 표현을 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'たべたいです', romaji: 'tabetai desu', korean: '먹고 싶습니다 (희망)' },
            { id: 'v2', japanese: 'いきたいです', romaji: 'ikitai desu', korean: '가고 싶습니다' },
            { id: 'v3', japanese: 'すきです', romaji: 'suki desu', korean: '좋아합니다 (선호)' },
            { id: 'v4', japanese: 'だいすきです', romaji: 'daisuki desu', korean: '정말 좋아합니다' },
            { id: 'v5', japanese: 'きらいです', romaji: 'kirai desu', korean: '싫어합니다 (비선호)' }
          ]
        },
        step2GridWriting: {
          instruction: '좋아함(すき)과 희망(たい) 글자를 정성껏 쓰세요.',
          items: [
            { char: 'す', romaji: 'su', meaning: '좋(す)', strokeHint: '매듭 꼬는 글자 す' },
            { char: 'き', romaji: 'ki', meaning: '아(き)', strokeHint: 'すき의 두 번째 글자' },
            { char: 'た', romaji: 'ta', meaning: '싶(た)', strokeHint: 'たい의 첫 글자' },
            { char: 'い', romaji: 'i', meaning: '다(い)', strokeHint: 'たい의 두 번째 글자' }
          ]
        },
        step3Substitution: {
          id: 'sub-e01',
          basePatternJapanese: 'わたしは [ 대상 ] が すきです。',
          basePatternKorean: '저는 [ 대상 ] 을(를) 좋아합니다.',
          examples: [
            {
              slot: 'にほんの りょうり (일본 요리)',
              resultJapanese: 'わたしは にほんの りょうり が すきです。',
              resultKorean: '저는 일본 요리를 좋아합니다.'
            },
            {
              slot: 'アニメ (애니메이션)',
              resultJapanese: 'わたしは アニメ が すきです。',
              resultKorean: '저는 애니메이션을 좋아합니다.'
            }
          ],
          drillPrompt: '좋아하는 것을 넣어 문장을 완성하시오. (주의: 조사는 が를 씁니다)',
          testSlots: [
            {
              givenKorean: '여행',
              givenWord: 'りょこう',
              expectedAnswer: 'わたしは りょこう が すきです。'
            },
            {
              givenKorean: '음악 (おんがく)',
              givenWord: 'おんがく',
              expectedAnswer: 'わたしは おんがく が すきです。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '희망과 선호 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'e1_1',
              questionNumber: 1,
              prompt: '"~를 좋아합니다" 앞의 조사 (한국어 \'을/를\'이지만 일본어는 조사 が 사용!):',
              sentenceWithBlank: 'すし ( 　 ) すきです。',
              options: ['が', 'を', 'は'],
              correctAnswer: 'が',
              koreanMeaning: '초밥을 좋아합니다.',
              explanation: '[すきです] 앞에는 목적격 を가 아닌 대상 조사 [が]를 씁니다.',
              points: 5
            },
            {
              id: 'e1_2',
              questionNumber: 2,
              prompt: '"도쿄에 가고 싶습니다"의 희망 표현:',
              sentenceWithBlank: 'とうきょうへ ( 　　　　　 ) です。',
              options: ['いきたい', 'いきます', 'いかない'],
              correctAnswer: 'いきたい',
              koreanMeaning: '도쿄에 가고 싶습니다.',
              explanation: '가고 싶다는 [いきたいです]입니다.',
              points: 5
            },
            {
              id: 'e1_3',
              questionNumber: 3,
              prompt: '"맛있는 라면을 먹고 싶습니다":',
              sentenceWithBlank: 'おいしい ラーメンを ( 　　　　　 ) です。',
              options: ['たべたい', 'たべます', 'たべた'],
              correctAnswer: 'たべたい',
              koreanMeaning: '맛있는 라면을 먹고 싶습니다.',
              explanation: '먹고 싶다는 [たべたいです]입니다.',
              points: 5
            },
            {
              id: 'e1_4',
              questionNumber: 4,
              prompt: '"무엇을 가장 좋아합니까?"의 \'가장, 제일\':',
              sentenceWithBlank: '( 　　　　 ) なにが すきですか。',
              options: ['いちばん', 'とても', 'すこし'],
              correctAnswer: 'いちばん',
              koreanMeaning: '가장 무엇을 좋아합니까?',
              explanation: '제일, 가장은 [いちばん(一番)]입니다.',
              points: 5
            },
            {
              id: 'e1_5',
              questionNumber: 5,
              prompt: '"사고 싶습니다"의 희망 표현:',
              sentenceWithBlank: 'これ を ( 　　　　 ) です。',
              options: ['かいたい', 'かいます', 'かわない'],
              correctAnswer: 'かいたい',
              koreanMeaning: '이것을 사고 싶습니다.',
              explanation: '사다는 かう이며, 사고 싶다는 [かいたいです]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '일본인 친구와 취미와 취향에 대해 이야기하기',
          contextDescription: '카페에서 편안하게 좋아하는 음식과 취미를 공유하는 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '친구',
              japanese: 'にほんの たべもの で、なにが いちばん すきですか？',
              romaji: 'nihon no tabemono de, nani ga ichiban suki desu ka?',
              korean: '일본 음식 중에서 무엇을 가장 좋아해?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'わたしは すし が だいすきです。',
              romaji: 'watashi wa sushi ga daisuki desu.',
              korean: '나는 초밥을 정말 좋아해.',
              isBlankForStudent: true,
              expectedAnswer: 'わたしは すし が だいすきです。 (또는 ラーメンが すきです)',
              hint: '[나는 ~을 좋아합니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '친구',
              japanese: 'いいですね！ こんど おいしい すしや に いきましょう！',
              romaji: 'ii desu ne! kondo oishii sushi-ya ni ikimashou!',
              korean: '좋네! 다음에 맛있는 초밥집에 가자!'
            }
          ],
          keyExpressionPoint: '조사 주의: [〜を すきです]가 아니라 반드시 [〜が すきです]로 말해야 자연스럽습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. わたしは りょこう が すきです。 (저는 여행을 좋아합니다)',
            '2. わたしは おんがく が すきです。 (저는 음악을 좋아합니다)'
          ],
          step4Answers: {
            e1_1: 'が',
            e1_2: 'いきたい',
            e1_3: 'たべたい',
            e1_4: 'いちばん',
            e1_5: 'かいたい'
          },
          step5Answers: [
            'B의 대사: わたしは すし が だいすきです。'
          ],
          grammarSummary: '1. 희망 표현: 동사 마스형 어간 + [〜たいです] (~하고 싶습니다)\n- たべます → たべたいです (먹고 싶습니다)\n- いきます → いきたいです (가고 싶습니다)\n2. 선호 표현: [명사 + が すきです] = ~을(를) 좋아합니다. (한국어와 달리 조사 が를 씀에 유의!)',
          culturalTip: '일본인과 친해지는 가장 빠른 방법은 좋아하는 음식이나 취미를 묻고 호응해 주는 것입니다. (예: すてきですね! = 멋지네요!)',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'E-02',
        level: 'Level E',
        levelTitle: '감정 & 교류 회화 (권유와 제안)',
        dayNumber: 22,
        code: 'JA-E02',
        title: '같이 ~하지 않을래요? · ~합시다 (~ませんか · ~ましょう)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '상대방에게 부담을 주지 않고 권유(~ませんか)하고 흔쾌히 제안에 동의(~ましょう)할 수 있다.',
        step1Vocab: {
          instruction: '권유와 제안 핵심 문형을 소리 내어 연습하세요.',
          items: [
            { id: 'v1', japanese: '〜ませんか', romaji: '~masen ka', korean: '~하지 않겠습니까? / ~안 할래요? (정중한 권유)' },
            { id: 'v2', japanese: '〜ましょう', romaji: '~mashou', korean: '~합시다 / ~하자 (적극적 제안)' },
            { id: 'v3', japanese: 'いっしょに', romaji: 'isshoni', korean: '함께, 같이' },
            { id: 'v4', japanese: 'ぜひ', romaji: 'zehi', korean: '꼭, 부디' },
            { id: 'v5', japanese: 'いいですね', romaji: 'ii desu ne', korean: '좋네요! (제안 찬성)' }
          ]
        },
        step2GridWriting: {
          instruction: '권유 문형의 핵심 글자를 쓰세요.',
          items: [
            { char: 'ま', romaji: 'ma', meaning: '마(ま)', strokeHint: 'ましょう의 ま' },
            { char: 'し', romaji: 'shi', meaning: '시(し)', strokeHint: 'ましょう의 し' },
            { char: 'ょ', romaji: 'yo', meaning: '작은 ょ', strokeHint: '요음 ょ 쓰기' },
            { char: 'う', romaji: 'u', meaning: '우(う)', strokeHint: 'ましょう의 마무리' }
          ]
        },
        step3Substitution: {
          id: 'sub-e02',
          basePatternJapanese: 'いっしょに [ 행동 ] ませんか。',
          basePatternKorean: '함께 [ 행동 ] 하지 않을래요?',
          examples: [
            {
              slot: 'コーヒー を のみ (커피를 마시다)',
              resultJapanese: 'いっしょに コーヒー を のみませんか。',
              resultKorean: '함께 커피 마시지 않을래요?'
            },
            {
              slot: 'ごはん を たべ (밥을 먹다)',
              resultJapanese: 'いっしょに ごはん を たべませんか。',
              resultKorean: '함께 밥 먹지 않을래요?'
            }
          ],
          drillPrompt: '행동을 바꾸어 함께 하자는 권유 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '가다 (いき)',
              givenWord: 'いき',
              expectedAnswer: 'いっしょに いきませんか。'
            },
            {
              givenKorean: '보다 (영화: えいがを み)',
              givenWord: 'えいがを み',
              expectedAnswer: 'いっしょに えいがを みませんか。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '권유 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'e2_1',
              questionNumber: 1,
              prompt: '"같이 차 마시지 않을래요?":',
              sentenceWithBlank: 'いっしょに おちゃを ( 　　　　　　 )。',
              options: ['のみませんか', 'のみますか', 'のみました'],
              correctAnswer: 'のみませんか',
              koreanMeaning: '함께 차 마시지 않을래요?',
              explanation: '정중한 권유는 부정 의문문인 [〜ませんか]를 씁니다.',
              points: 5
            },
            {
              id: 'e2_2',
              questionNumber: 2,
              prompt: '권유에 흔쾌히 응할 때 "좋네요, 꼭 가요!":',
              sentenceWithBlank: 'いいですね！ ( 　　 ) いきましょう。',
              options: ['ぜひ', 'あまり', '全然'],
              correctAnswer: 'ぜひ',
              koreanMeaning: '좋네요! 꼭 갑시다.',
              explanation: '[꼭, 부디]는 [ぜひ]입니다.',
              points: 5
            },
            {
              id: 'e2_3',
              questionNumber: 3,
              prompt: '"자, 시작합시다":',
              sentenceWithBlank: 'さあ、( 　　　　　　 )。',
              options: ['はじめましょう', 'はじめます', 'はじめません'],
              correctAnswer: 'はじめましょう',
              koreanMeaning: '자, 시작합시다.',
              explanation: '[~합시다]는 [〜ましょう]입니다.',
              points: 5
            },
            {
              id: 'e2_4',
              questionNumber: 4,
              prompt: '"조금 쉽시다":',
              sentenceWithBlank: 'すこし ( 　　　　　　 )。',
              options: ['やすみましょう', 'やすみません', 'やすみます'],
              correctAnswer: 'やすみましょう',
              koreanMeaning: '조금 쉽시다.',
              explanation: '쉬다는 やすむ이며, 쉽시다는 [やすみましょう]입니다.',
              points: 5
            },
            {
              id: 'e2_5',
              questionNumber: 5,
              prompt: '권유를 부드럽게 거절할 때 "그 날은 조금..." (일본식 완곡 거절):',
              sentenceWithBlank: 'そのひ は ( 　　　 )…。',
              options: ['ちょっと', 'だめ', 'いや'],
              correctAnswer: 'ちょっと',
              koreanMeaning: '그 날은 좀 곤란해서요...',
              explanation: '거절할 때는 다메(안 돼) 대신 [ちょっと(좀...)]하고 흐리는 것이 에티켓입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '방과 후 또는 퇴근 후 동료에게 커피 권유하기',
          contextDescription: '일을 마치고 동료에게 잠시 차 한잔하자고 제안하는 일상 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'たなかさん、いっしょに おちゃを のみませんか？',
              romaji: 'tanaka-san, isshoni ocha o nomimasen ka?',
              korean: '타나카 씨, 함께 차 마시지 않을래요?',
              isBlankForStudent: true,
              expectedAnswer: 'たなかさん、いっしょに おちゃを のみませんか？',
              hint: '[타나카 씨, 함께 차 마시지 않을래요?]를 권유해 보세요.'
            },
            {
              speaker: 'B',
              role: '타나카',
              japanese: 'いいですね！ ぜひ いきましょう。',
              romaji: 'ii desu ne! zehi ikimashou.',
              korean: '좋네요! 꼭 갑시다.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'じゃ、ちかくの カフェに いきましょう！',
              romaji: 'ja, chikaku no kafe ni ikimashou!',
              korean: '그럼, 근처 카페로 가요!'
            }
          ],
          keyExpressionPoint: '권유할 때는 [〜ませんか], 이에 응답하여 제안할 때는 [〜ましょう]의 짝궁 패턴을 기억하세요.'
        },
        answerKey: {
          step3Answers: [
            '1. いっしょに いきませんか。 (함께 가지 않을래요?)',
            '2. いっしょに えいがを みませんか。 (함께 영화 보지 않을래요?)'
          ],
          step4Answers: {
            e2_1: 'のみませんか',
            e2_2: 'ぜひ',
            e2_3: 'はじめましょう',
            e2_4: 'やすみましょう',
            e2_5: 'ちょっと'
          },
          step5Answers: [
            'A의 대사: たなかさん、いっしょに おちゃを のみませんか？'
          ],
          grammarSummary: '1. 권유: 동사 마스형 어간 + [〜ませんか] (~하지 않겠습니까?)\n- 상대방의 의사를 존중하는 매우 정중한 권유입니다.\n2. 청유/제안: 동사 마스형 어간 + [〜ましょう] (~합시다)\n- 상대가 동의했을 때 "그럼 ~합시다!"라고 결속할 때 씁니다.',
          culturalTip: '일본에서는 거절할 때 "싫어요(嫌です)"라고 직설적으로 말하지 않고, [ちょっと都合が...(좀 일정이...)]라며 말끝을 흐리는 배려의 화법을 씁니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'E-03',
        level: 'Level E',
        levelTitle: '감정 & 교류 회화 (정중한 부탁과 허락)',
        dayNumber: 23,
        code: 'JA-E03',
        title: '~해 주세요 · ~해도 됩니까? (~て ください · ~ても いいですか)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '테형(~て)을 활용하여 상대에게 정중하게 부탁하고 허락을 구할 수 있다.',
        step1Vocab: {
          instruction: '테형 기반 일상 필수 부탁 표현을 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'ちょっと まって ください', romaji: 'chotto matte kudasai', korean: '잠깐 기다려 주세요' },
            { id: 'v2', japanese: 'もういちど いって ください', romaji: 'mou ichido itte kudasai', korean: '다시 한 번 말씀해 주세요' },
            { id: 'v3', japanese: 'しゃしんを とっても いいですか', romaji: 'shashin o totte mo ii desu ka', korean: '사진을 찍어도 됩니까? (허락)' },
            { id: 'v4', japanese: 'ゆっくり はなして ください', romaji: 'yukkuri hanashite kudasai', korean: '천천히 말씀해 주세요' },
            { id: 'v5', japanese: 'どうぞ', romaji: 'douzo', korean: '어서요, 그러세요 (허락 대답)' }
          ]
        },
        step2GridWriting: {
          instruction: '부탁 표현의 핵심 글자를 쓰세요.',
          items: [
            { char: 'ま', romaji: 'ma', meaning: '기(ま)', strokeHint: 'まって의 첫 글자' },
            { char: 'っ', romaji: 'tsu', meaning: '다(っ)', strokeHint: '작은 촉음 っ' },
            { char: 'て', romaji: 'te', meaning: '려(て)', strokeHint: '가로선 후 둥글게 매듭' },
            { char: 'く', romaji: 'ku', meaning: '주(く)', strokeHint: 'ください' }
          ]
        },
        step3Substitution: {
          id: 'sub-e03',
          basePatternJapanese: '[ 동작 테형 ] も いいですか。',
          basePatternKorean: '[ 동작 ] 해도 됩니까?',
          examples: [
            {
              slot: 'しゃしん を とって (사진을 찍다)',
              resultJapanese: 'しゃしん を とっても いいですか。',
              resultKorean: '사진을 찍어도 됩니까?'
            },
            {
              slot: 'ここ に すわって (여기에 앉다)',
              resultJapanese: 'ここ に すわっても いいですか。',
              resultKorean: '여기에 앉아도 됩니까?'
            }
          ],
          drillPrompt: '허락을 구하는 문형을 완성하시오.',
          testSlots: [
            {
              givenKorean: '들어가다 (はいって)',
              givenWord: 'はいって',
              expectedAnswer: 'はいっても いいですか。'
            },
            {
              givenKorean: '보다 (これ を みて)',
              givenWord: 'これ を みて',
              expectedAnswer: 'これ を みても いいですか。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '부탁과 허락 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'e3_1',
              questionNumber: 1,
              prompt: '일본어가 빠를 때 "천천히 말씀해 주세요":',
              sentenceWithBlank: '( 　　　　　 ) はなして ください。',
              options: ['ゆっくり', 'はやく', 'ぜんぶ'],
              correctAnswer: 'ゆっくり',
              koreanMeaning: '천천히 말씀해 주세요.',
              explanation: '[천천히]는 [ゆっくり]입니다.',
              points: 5
            },
            {
              id: 'e3_2',
              questionNumber: 2,
              prompt: '잘 못 들었을 때 "다시 한 번 말씀해 주세요":',
              sentenceWithBlank: '( 　　　　　　 ) いって ください。',
              options: ['もういちど', 'はじめに', 'いつも'],
              correctAnswer: 'もういちど',
              koreanMeaning: '다시 한 번 말씀해 주세요.',
              explanation: '[다시 한 번]은 [もういちど]입니다.',
              points: 5
            },
            {
              id: 'e3_3',
              questionNumber: 3,
              prompt: '"잠깐 기다려 주세요":',
              sentenceWithBlank: 'ちょっと ( 　　　 ) ください。',
              options: ['まって', 'まちて', 'まて'],
              correctAnswer: 'まって',
              koreanMeaning: '잠깐 기다려 주세요.',
              explanation: '기다리다(まつ)의 테형은 촉음형인 [まって]입니다.',
              points: 5
            },
            {
              id: 'e3_4',
              questionNumber: 4,
              prompt: '가게 안에서 "사진을 찍어도 되나요?":',
              sentenceWithBlank: 'しゃしん を とって ( 　 ) いいですか。',
              options: ['も', 'は', 'が'],
              correctAnswer: 'も',
              koreanMeaning: '사진을 찍어도 됩니까?',
              explanation: '허락 문형은 [〜ても いいですか]입니다.',
              points: 5
            },
            {
              id: 'e3_5',
              questionNumber: 5,
              prompt: '상대의 부탁이나 허락 요청에 "네, 괜찮아요/어서요":',
              sentenceWithBlank: 'ええ、( 　　　 )。',
              options: ['どうぞ', 'ありがとう', 'すみません'],
              correctAnswer: 'どうぞ',
              koreanMeaning: '네, 그러세요 (어서요).',
              explanation: '흔쾌히 권하거나 허락할 때 [どうぞ]라고 합니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '관광지나 식당에서 사진 촬영 허락 구하기',
          contextDescription: '예쁜 인테리어의 식당에서 사진을 찍기 전 직원에게 정중히 양해를 구하는 상황입니다.',
          lines: [
            {
              speaker: 'A',
              role: '나',
              japanese: 'すみません、しゃしん を とっても いいですか？',
              romaji: 'sumimasen, shashin o totte mo ii desu ka?',
              korean: '실례합니다, 사진을 찍어도 될까요?',
              isBlankForStudent: true,
              expectedAnswer: 'すみません、しゃしん を とっても いいですか？',
              hint: '[실례합니다, 사진을 찍어도 될까요?]를 질문해 보세요.'
            },
            {
              speaker: 'B',
              role: '직원',
              japanese: 'はい、どうぞ！ ごじゆうに とって くださいね。',
              romaji: 'hai, douzo! gojiyuu ni totte kudasai ne.',
              korean: '네, 그럼요! 자유롭게 찍으세요.'
            },
            {
              speaker: 'A',
              role: '나',
              japanese: 'ありがとうございます！',
              romaji: 'arigatou gozaimasu!',
              korean: '감사합니다!'
            }
          ],
          keyExpressionPoint: '일본에서는 사진을 찍기 전에 [〜ても いいですか]로 양해를 구하는 것이 아주 좋은 매너로 인정받습니다.'
        },
        answerKey: {
          step3Answers: [
            '1. はいっても いいですか。 (들어가도 됩니까?)',
            '2. これ を みても いいですか。 (이것을 봐도 됩니까?)'
          ],
          step4Answers: {
            e3_1: 'ゆっくり',
            e3_2: 'もういちど',
            e3_3: 'まって',
            e3_4: 'も',
            e3_5: 'どうぞ'
          },
          step5Answers: [
            'A의 대사: すみません、しゃしん を とっても いいですか？'
          ],
          grammarSummary: '1. 정중한 부탁: 동사 테형 + [〜てください] (~해 주세요)\n- ちょっとまってください (잠깐 기다려 주세요)\n- ゆっくりはなしてください (천천히 말해 주세요)\n- もういちどいってください (다시 한 번 말해 주세요)\n2. 허락 구하기: 동사 테형 + [〜ても いいですか] (~해도 됩니까?)',
          culturalTip: '일본인은 외국인이 일본어로 더듬거리더라도 [ゆっくりはなしてください]라고 하면 기꺼이 배려하며 알아듣기 쉽게 천천히 말해 줍니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'E-04',
        level: 'Level E',
        levelTitle: '감정 & 교류 회화 (감정과 형용사)',
        dayNumber: 24,
        code: 'JA-E04',
        title: '즐겁다, 맛있다, 예쁘다 (たのしい · おいしい · きれい)',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '이형용사와 나형용사를 사용해 자신의 감정과 여행 소감을 생생하게 표현할 수 있다.',
        step1Vocab: {
          instruction: '감정과 상태를 나타내는 필수 형용사를 소리 내어 익히세요.',
          items: [
            { id: 'v1', japanese: 'たのしい', romaji: 'tanoshii', korean: '즐겁다, 신나다' },
            { id: 'v2', japanese: 'きれい', romaji: 'kirei', korean: '예쁘다, 깨끗하다 (나형용사)' },
            { id: 'v3', japanese: 'おもしろい', romaji: 'omoshiroi', korean: '재미있다' },
            { id: 'v4', japanese: 'あつい / さむい', romaji: 'atsui / samui', korean: '덥다 / 춥다' },
            { id: 'v5', japanese: 'たいへん', romaji: 'taihen', korean: '힘들다, 큰일이다' }
          ]
        },
        step2GridWriting: {
          instruction: '즐겁다(たのしい) 글자를 정서하세요.',
          items: [
            { char: 'た', romaji: 'ta', meaning: '즐(た)', strokeHint: 'たのしい의 첫 글자' },
            { char: 'の', romaji: 'no', meaning: '겁(の)', strokeHint: '한 획으로 둥글게 원 그리기' },
            { char: 'し', romaji: 'shi', meaning: '다(し)', strokeHint: '세로 내려오다 낚싯바늘처럼' },
            { char: 'い', romaji: 'i', meaning: '-(い)', strokeHint: '형용사 끝 글자 い' }
          ]
        },
        step3Substitution: {
          id: 'sub-e04',
          basePatternJapanese: 'とうきょう は とても [ 형용사 ] です。',
          basePatternKorean: '도쿄는 매우 [ 형용사 ] 입니다.',
          examples: [
            {
              slot: 'たのしい (즐겁다)',
              resultJapanese: 'とうきょう は とても たのしい です。',
              resultKorean: '도쿄는 매우 즐겁습니다.'
            },
            {
              slot: 'きれい (예쁘다/깨끗하다)',
              resultJapanese: 'とうきょう は とても きれい です。',
              resultKorean: '도쿄는 매우 예쁩니다(깨끗합니다).'
            }
          ],
          drillPrompt: '형용사를 바꾸어 소감 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '재미있다',
              givenWord: 'おもしろい',
              expectedAnswer: 'とうきょう は とても おもしろい です。'
            },
            {
              givenKorean: '맛있다',
              givenWord: 'おいしい',
              expectedAnswer: 'とうきょう は とても おいしい です。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '형용사 표현 빈칸을 채우시오. (각 5점 / 총 25점)',
          problems: [
            {
              id: 'e4_1',
              questionNumber: 1,
              prompt: '"도쿄 타워의 야경이 정말 예쁘네요!":',
              sentenceWithBlank: 'やけい が とても ( 　　　 ) ですね。',
              options: ['きれい', 'おいしい', 'さむい'],
              correctAnswer: 'きれい',
              koreanMeaning: '야경이 정말 예쁘네요.',
              explanation: '예쁘다, 아름답다는 [きれい]입니다.',
              points: 5
            },
            {
              id: 'e4_2',
              questionNumber: 2,
              prompt: '여행 후 소감 "정말 즐거웠습니다"의 과거형:',
              sentenceWithBlank: 'とても ( 　　　　　　　 ) です。',
              options: ['たのしかった', 'たのしい', 'たのしくない'],
              correctAnswer: 'たのしかった',
              koreanMeaning: '정말 즐거웠습니다.',
              explanation: '이형용사의 과거형은 い를 떼고 [〜かった]를 붙입니다.',
              points: 5
            },
            {
              id: 'e4_3',
              questionNumber: 3,
              prompt: '"오늘 날씨는 덥네요":',
              sentenceWithBlank: 'きょうは ( 　　　 ) ですね。',
              options: ['あつい', 'さむい', 'おもしろい'],
              correctAnswer: 'あつい',
              koreanMeaning: '오늘은 덥네요.',
              explanation: '날씨가 덥다는 [あつい(暑い)]입니다.',
              points: 5
            },
            {
              id: 'e4_4',
              questionNumber: 4,
              prompt: '감탄사 "대단하네요! / 굉장하네요!":',
              sentenceWithBlank: '( 　　　 ) ですね！',
              options: ['すごい', 'だめ', 'たいへん'],
              correctAnswer: 'すごい',
              koreanMeaning: '대단하네요!',
              explanation: '감탄의 대단하다는 [すごい]입니다.',
              points: 5
            },
            {
              id: 'e4_5',
              questionNumber: 5,
              prompt: '"조금 피곤합니다":',
              sentenceWithBlank: 'すこし ( 　　　　　 )。',
              options: ['つかれました', 'のみました', 'いきました'],
              correctAnswer: 'つかれました',
              koreanMeaning: '조금 피곤합니다 (지쳤습니다).',
              explanation: '피곤하다는 [つかれました]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '여행 마지막 날 일본인 친구와 여행 소감 나누기',
          contextDescription: '출국 전 공항에서 친구의 배웅을 받으며 여행 소감을 전하는 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '친구',
              japanese: 'にほんの りょこう は どうでしたか？',
              romaji: 'nihon no ryokou wa dou deshita ka?',
              korean: '일본 여행은 어땠어?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'ほんとうに たのしかったです！ たべものも おいしかったです。',
              romaji: 'hontou ni tanoshikatta desu! tabemono mo oishikatta desu.',
              korean: '정말로 즐거웠어! 음식도 맛있었어.',
              isBlankForStudent: true,
              expectedAnswer: 'ほんとうに たのしかったです！ (또는 おいしかったです)',
              hint: '[정말로 즐거웠습니다! 음식도 맛있었습니다]를 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '친구',
              japanese: 'よかった！ また にほんに きて くださいね。',
              romaji: 'yokatta! mata nihon ni kite kudasai ne.',
              korean: '다행이다! 또 일본에 와줘.'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'はい、ぜひ また きます！',
              romaji: 'hai, zehi mata kimasu!',
              korean: '응, 꼭 다시 올게!'
            }
          ],
          keyExpressionPoint: '과거 소감을 말할 때는 [たのしかったです(즐거웠습니다)], [おいしかったです(맛있었습니다)]처럼 〜かったです를 씁니다.'
        },
        answerKey: {
          step3Answers: [
            '1. とうきょう は とても おもしろい です。 (도쿄는 매우 재미있습니다)',
            '2. とうきょう は とても おいしい です。 (도쿄는 매우 맛있습니다)'
          ],
          step4Answers: {
            e4_1: 'きれい',
            e4_2: 'たのしかった',
            e4_3: 'あつい',
            e4_4: 'すごい',
            e4_5: 'つかれました'
          },
          step5Answers: [
            'B의 대사: ほんとうに たのしかったです！ たべものも おいしかったです。'
          ],
          grammarSummary: '1. 형용사의 과거형 규칙:\n- 이형용사: [い] 탈락 + [〜かったです] (たのしい → たのしかったです, おいしい → おいしかったです)\n- 나형용사: [〜でした] (きれい → きれいでした)\n2. [とても(매우)], [ほんとうに(정말로)] 부사를 곁들이면 훨씬 풍부한 감정 전달이 가능합니다.',
          culturalTip: '일본인은 상대방의 소감에 [よかった！(다행이다/잘됐다)]라는 말로 따뜻하게 공감해 주는 특유의 대화 습관이 있습니다.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      },
      {
        id: 'E-05',
        level: 'Level E',
        levelTitle: '감정 & 교류 회화 (최종 졸업 회화 마스터)',
        dayNumber: 25,
        code: 'JA-E05',
        title: '전체 커리큘럼 완결: 일상생활 프리 토킹 100점 테스트',
        targetTimeMinutes: 20,
        targetScore: 100,
        todayGoal: '인사, 소개, 쇼핑, 식당, 길 찾기, 감정 교류까지 25일간의 구몬 학습을 총망라하여 자유롭게 대화한다.',
        step1Vocab: {
          instruction: '마이니치 일본어의 5대 핵심 대화 법칙을 복습하세요.',
          items: [
            { id: 'v1', japanese: 'こんにちは / ありがとうございます', romaji: 'konnichiwa / arigatou gozaimasu', korean: '기본 인사와 정중한 감사' },
            { id: 'v2', japanese: 'これ を ひとつ ください', romaji: 'kore o hitotsu kudasai', korean: '확실한 쇼핑과 수량 주문' },
            { id: 'v3', japanese: 'おすすめ は なんですか', romaji: 'osusume wa nan desu ka', korean: '식당에서 자연스러운 추천 요청' },
            { id: 'v4', japanese: 'えき は どちら ですか', romaji: 'eki wa dochira desu ka', korean: '거리에서 정중한 길 묻기' },
            { id: 'v5', japanese: 'いっしょに いきませんか', romaji: 'isshoni ikimasen ka', korean: '친구와의 즐거운 약속과 권유' }
          ]
        },
        step2GridWriting: {
          instruction: '완성의 기쁨을 담아 "감사합니다"의 한 글자씩을 정성껏 쓰세요.',
          items: [
            { char: 'あ', romaji: 'a', meaning: '아(あ)', strokeHint: 'ありがとうございます' },
            { char: 'り', romaji: 'ri', meaning: '리(り)', strokeHint: '2획의 세로선' },
            { char: 'が', romaji: 'ga', meaning: '가(が)', strokeHint: 'か에 탁점' },
            { char: 'と', romaji: 'to', meaning: '토(と)', strokeHint: '부드러운 곡선' },
            { char: 'う', romaji: 'u', meaning: '우(う)', strokeHint: '완성의 점' }
          ]
        },
        step3Substitution: {
          id: 'sub-e05',
          basePatternJapanese: 'わたしは にほんごで [　　] ことができます。',
          basePatternKorean: '저는 일본어로 [　　] 수 있습니다.',
          examples: [
            {
              slot: 'はなす (말하다)',
              resultJapanese: 'わたしは にほんごで はなす ことができます。',
              resultKorean: '저는 일본어로 말할 수 있습니다.'
            }
          ],
          drillPrompt: '자신의 일본어 자신감 문장을 완성하시오.',
          testSlots: [
            {
              givenKorean: '여행하다 (りょこうする)',
              givenWord: 'りょこうする',
              expectedAnswer: 'わたしは にほんごで りょこうする ことができます。'
            }
          ]
        },
        step4BlankDrill: {
          instruction: '전체 커리큘럼 최종 마스터 평가 (각 5점 / 총 25점)',
          problems: [
            {
              id: 'e5_1',
              questionNumber: 1,
              prompt: '처음 만났을 때 인사:',
              sentenceWithBlank: '( 　　　　　　 )。よろしく おねがいします。',
              options: ['はじめまして', 'こんにちは', 'こんばんは'],
              correctAnswer: 'はじめまして',
              koreanMeaning: '처음 뵙겠습니다. 잘 부탁드립니다.',
              explanation: '첫 대면 인사는 [はじめまして]입니다.',
              points: 5
            },
            {
              id: 'e5_2',
              questionNumber: 2,
              prompt: '"이것은 얼마입니까?":',
              sentenceWithBlank: 'これ は ( 　　　 ) ですか。',
              options: ['いくら', 'どこ', 'なんじ'],
              correctAnswer: 'いくら',
              koreanMeaning: '이것은 얼마입니까?',
              explanation: '가격은 [いくら]로 묻습니다.',
              points: 5
            },
            {
              id: 'e5_3',
              questionNumber: 3,
              prompt: '"전철로 갑니다":',
              sentenceWithBlank: 'でんしゃ ( 　 ) いきます。',
              options: ['で', 'を', 'に'],
              correctAnswer: 'で',
              koreanMeaning: '전철로 갑니다.',
              explanation: '교통수단 조사는 [で]입니다.',
              points: 5
            },
            {
              id: 'e5_4',
              questionNumber: 4,
              prompt: '"잠깐 기다려 주세요":',
              sentenceWithBlank: 'ちょっと ( 　　　 ) ください。',
              options: ['まって', 'まちて', 'まて'],
              correctAnswer: 'まって',
              koreanMeaning: '잠깐 기다려 주세요.',
              explanation: '기다려 주세요는 [まって ください]입니다.',
              points: 5
            },
            {
              id: 'e5_5',
              questionNumber: 5,
              prompt: '"정말 감사합니다":',
              sentenceWithBlank: 'どうも ( 　　　　　　　　 )。',
              options: ['ありがとうございます', 'すみません', 'さようなら'],
              correctAnswer: 'ありがとうございます',
              koreanMeaning: '정말 감사합니다.',
              explanation: '정중한 감사는 [どうも ありがとうございます]입니다.',
              points: 5
            }
          ]
        },
        step5Dialogue: {
          scenario: '최종 졸업: 일본 현지에서의 하루 완성 대화',
          contextDescription: '25일간 학습한 모든 표현을 종합하여 일본 현지인과 자유롭게 나누는 졸업 대화입니다.',
          lines: [
            {
              speaker: 'A',
              role: '현지인',
              japanese: 'こんにちは！ にほんの せいかつ は どうですか？',
              romaji: 'konnichiwa! nihon no seikatsu wa dou desu ka?',
              korean: '안녕하세요! 일본 생활(여행)은 어떠세요?'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'とても たのしいです！ たべものも おいしいし、まちも きれいです。',
              romaji: 'totemo tanoshii desu! tabemono mo oishii shi, machi mo kirei desu.',
              korean: '정말 즐겁습니다! 음식도 맛있고 거리도 깨끗해요.',
              isBlankForStudent: true,
              expectedAnswer: 'とても たのしいです！ (자유로운 소감 표현)',
              hint: '[정말 즐겁습니다! 음식도 맛있어요]를 자신 있게 말해 보세요.'
            },
            {
              speaker: 'A',
              role: '현지인',
              japanese: 'にほんごが ほんとうに おじょうずですね！',
              romaji: 'nihongo ga hontou ni ojouzu desu ne!',
              korean: '일본어를 정말 잘하시네요!'
            },
            {
              speaker: 'B',
              role: '나',
              japanese: 'ありがとうございます！ まいにち 20ぷん べんきょうしました。',
              romaji: 'arigatou gozaimasu! mainichi ni-juppun benkyoushimashita.',
              korean: '감사합니다! 매일 20분씩 공부했습니다.'
            }
          ],
          keyExpressionPoint: '축하합니다! 하루 20분 구몬식 학습지 전 과정을 성공적으로 수료하셨습니다. 이제 당당하게 일본어로 대화하세요!'
        },
        answerKey: {
          step3Answers: [
            '1. わたしは にほんごで りょこうする ことができます。 (저는 일본어로 여행할 수 있습니다)'
          ],
          step4Answers: {
            e5_1: 'はじめまして',
            e5_2: 'いくら',
            e5_3: 'で',
            e5_4: 'まって',
            e5_5: 'ありがとうございます'
          },
          step5Answers: [
            'B의 대사: とても たのしいです！ たべものも おいしいし、まちも きれいです。'
          ],
          grammarSummary: '★ 전 과정 수료를 진심으로 축하합니다! ★\n\n- Level A: 인사, 자기소개, 카타카나 필수 어휘, 기본 정중형\n- Level B: 지시대명사(이것/그것/저것), 위치(여기/거기/저기/어디), 숫자/가격, 쇼핑과 수량\n- Level C: 시간과 요일, 이동 동사(가다/오다/돌아가다), 일상 동작(먹다/마시다), 교통수단 및 하루 일과\n- Level D: 식당 입장(인원수), 메뉴 추천 및 주문, 계산, 길 찾기(직진/우회전/좌회전), 호텔 체크인\n- Level E: 희망(~たいです) 및 기호(すきです), 권유(~ませんか/〜ましょう), 정중한 부탁(~てください), 형용사와 감정 소감\n\n히라가나 독해에서 시작하여 일상 회화 전 영역을 하루 20분의 스몰 스텝으로 완벽히 마스터했습니다.',
          culturalTip: '언어 학습의 진짜 힘은 꾸준한 20분의 복습에 있습니다. 인쇄한 학습지와 정답지를 휴대하면서 틈틈이 소리 내어 복습해 보세요.',
          scoreGuide: {
            step1: 20,
            step2: 20,
            step3: 20,
            step4: 25,
            step5: 15,
            total: 100
          }
        }
      }
    ]
  }
];
