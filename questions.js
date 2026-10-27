// 質問データ。ここを書き換えれば質問を差し替えられます。
// 各質問は { ja: "日本語", en: "English", zh: "繁體中文" } の形で書きます（何問でも可）。
// ない言語は日本語で表示されます。文字列だけ書いた場合はどの言語でもその文字列が表示されます。
window.QUESTIONS = {
  crust: {
    name: "Crust",
    subtitle: { ja: "表面 — 気軽な質問", en: "Surface — easy questions", zh: "表層 — 輕鬆的問題" },
    questions: [
      {
        ja: "（仮）最近ちょっと嬉しかったことは？",
        en: "(Placeholder) What made you happy recently?",
        zh: "（暫定）最近有什麼讓你開心的事？",
      },
      {
        ja: "（仮）休日の理想の過ごし方は？",
        en: "(Placeholder) What is your ideal day off?",
        zh: "（暫定）你理想中的假日怎麼過？",
      },
      {
        ja: "（仮）子どもの頃に好きだった食べ物は？",
        en: "(Placeholder) What food did you love as a child?",
        zh: "（暫定）小時候最喜歡吃什麼？",
      },
    ],
  },
  mantle: {
    name: "Mantle",
    subtitle: { ja: "中間 — 少し踏み込んだ質問", en: "Middle — going a little deeper", zh: "中層 — 稍微深入的問題" },
    questions: [
      {
        ja: "（仮）人生で一番影響を受けた人は誰？",
        en: "(Placeholder) Who has influenced you the most?",
        zh: "（暫定）人生中對你影響最大的人是誰？",
      },
      {
        ja: "（仮）最近、考え方が変わった出来事は？",
        en: "(Placeholder) What recently changed the way you think?",
        zh: "（暫定）最近有什麼事改變了你的想法？",
      },
      {
        ja: "（仮）自分の中で大切にしているルールは？",
        en: "(Placeholder) What personal rule do you live by?",
        zh: "（暫定）你心中最重視的原則是什麼？",
      },
    ],
  },
  core: {
    name: "Core",
    subtitle: { ja: "核心 — 深い質問", en: "Core — deep questions", zh: "核心 — 深刻的問題" },
    questions: [
      {
        ja: "（仮）一番大切にしている思い出は？",
        en: "(Placeholder) What is your most treasured memory?",
        zh: "（暫定）你最珍惜的回憶是什麼？",
      },
      {
        ja: "（仮）まだ誰にも話していない夢は？",
        en: "(Placeholder) What dream have you never told anyone?",
        zh: "（暫定）有什麼夢想是你還沒告訴過任何人的？",
      },
      {
        ja: "（仮）相手に感謝していることを1つ伝えるなら？",
        en: "(Placeholder) Tell your partner one thing you are grateful for.",
        zh: "（暫定）如果要告訴對方一件你感謝的事，會是什麼？",
      },
    ],
  },
};
