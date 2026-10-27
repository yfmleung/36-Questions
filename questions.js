// 質問データ。ここを書き換えれば質問を差し替えられます。
// 各質問は { ja: "日本語", en: "English" } の形で書きます（何問でも可）。
// 片方の言語しかない場合は文字列だけでもOK（どちらの言語でもその文字列が表示されます）。
window.QUESTIONS = {
  crust: {
    name: "Crust",
    subtitle: { ja: "表面 — 気軽な質問", en: "Surface — easy questions" },
    questions: [
      { ja: "（仮）最近ちょっと嬉しかったことは？", en: "(Placeholder) What made you happy recently?" },
      { ja: "（仮）休日の理想の過ごし方は？", en: "(Placeholder) What is your ideal day off?" },
      { ja: "（仮）子どもの頃に好きだった食べ物は？", en: "(Placeholder) What food did you love as a child?" },
    ],
  },
  mantle: {
    name: "Mantle",
    subtitle: { ja: "中間 — 少し踏み込んだ質問", en: "Middle — going a little deeper" },
    questions: [
      { ja: "（仮）人生で一番影響を受けた人は誰？", en: "(Placeholder) Who has influenced you the most?" },
      { ja: "（仮）最近、考え方が変わった出来事は？", en: "(Placeholder) What recently changed the way you think?" },
      { ja: "（仮）自分の中で大切にしているルールは？", en: "(Placeholder) What personal rule do you live by?" },
    ],
  },
  core: {
    name: "Core",
    subtitle: { ja: "核心 — 深い質問", en: "Core — deep questions" },
    questions: [
      { ja: "（仮）一番大切にしている思い出は？", en: "(Placeholder) What is your most treasured memory?" },
      { ja: "（仮）まだ誰にも話していない夢は？", en: "(Placeholder) What dream have you never told anyone?" },
      { ja: "（仮）相手に感謝していることを1つ伝えるなら？", en: "(Placeholder) Tell your partner one thing you are grateful for." },
    ],
  },
};
