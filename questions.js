// 質問データ。ここを書き換えれば質問を差し替えられます。
// 各質問は { ja: "日本語", en: "English", zh: "繁體中文" } の形で書きます（何問でも可）。
// ない言語は日本語で表示されます。文字列だけ書いた場合はどの言語でもその文字列が表示されます。
window.QUESTIONS = {
  crust: {
    name: "Crust",
    subtitle: { ja: "地殻 — 気軽な質問", en: "Surface — easy questions", zh: "地殼 — 輕鬆的問題" },
    questions: [
      {
        en: "What’s a small thing that instantly makes your day better?",
        ja: "一瞬で一日が良くなる、ちょっとしたことは？",
        zh: "有什麼小事能讓你的一天瞬間變好？",
      },
      {
        en: "If you could master one skill overnight, what would it be?",
        ja: "一晩でひとつスキルを極められるとしたら、何にする？",
        zh: "如果能一夜之間精通一項技能，你會選什麼？",
      },
      {
        en: "What’s your go-to comfort food after a long day?",
        ja: "長い一日のあとに食べたくなる、定番のほっとするごはんは？",
        zh: "漫長的一天結束後，你最常吃的療癒食物是什麼？",
      },
      {
        en: "Which place in Japan would you happily revisit again and again?",
        ja: "日本で何度でも訪れたい場所は？",
        zh: "日本有哪個地方是你願意一去再去的？",
      },
      {
        en: "What’s something you’re weirdly picky about?",
        ja: "自分でも不思議なくらい、こだわりがあることは？",
        zh: "有什麼事是你莫名特別講究的？",
      },
      {
        en: "What did you want to be when you were ten?",
        ja: "10歳のころ、何になりたかった？",
        zh: "你十歲的時候想成為什麼？",
      },
      {
        en: "What’s a smell, sound, or taste that instantly takes you back somewhere?",
        ja: "一瞬であの頃・あの場所に連れ戻される、におい・音・味は？",
        zh: "有什麼氣味、聲音或味道，會瞬間把你帶回某個地方？",
      },
      {
        en: "What’s the best thing you’ve ever bought for under 3,000 yen?",
        ja: "3,000円以下で買ったもので、一番よかったものは？",
        zh: "你買過最棒、而且不到3,000日圓的東西是什麼？",
      },
      {
        en: "What’s a hobby you gave up but secretly miss?",
        ja: "やめてしまったけど、実はひそかに恋しい趣味は？",
        zh: "有什麼嗜好是你放棄了，卻偷偷懷念的？",
      },
      {
        en: "What’s the most spontaneous thing you’ve ever done?",
        ja: "今までで一番、思いつきで行動したことは？",
        zh: "你做過最說走就走、最即興的事是什麼？",
      },
      {
        en: "If you had a totally free Saturday and could be anywhere in the world, where would you go and what would you do?",
        ja: "まるごと自由な土曜日があって、世界のどこにでも行けるとしたら、どこで何をする？",
        zh: "如果有一個完全自由的星期六，而且可以去世界上任何地方，你會去哪裡、做什麼？",
      },
      {
        en: "What’s a guilty pleasure you’re secretly proud of?",
        ja: "ちょっと後ろめたいけど、実はひそかに誇りに思っている楽しみは？",
        zh: "有什麼「罪惡的小樂趣」是你其實暗自引以為傲的？",
      },
    ],
  },
  mantle: {
    name: "Mantle",
    subtitle: { ja: "マントル — 少し踏み込んだ質問", en: "Middle — going a little deeper", zh: "地函 — 稍微深入的問題" },
    questions: [
      {
        en: "Which person, book, or film shaped the way you see the world?",
        ja: "あなたの世界の見方を形づくった人・本・映画は？",
        zh: "哪個人、哪本書或哪部電影，塑造了你看世界的方式？",
      },
      {
        en: "What’s a decision you made that surprised the people around you?",
        ja: "周りの人を驚かせた、あなたの決断は？",
        zh: "你做過哪個讓身邊的人感到意外的決定？",
      },
      {
        en: "What’s something you’ve changed your mind about in the last few years?",
        ja: "ここ数年で考えが変わったことは？",
        zh: "這幾年來，你對什麼事情改變了想法？",
      },
      {
        en: "How do you usually recharge when you’re drained?",
        ja: "疲れ切ったとき、いつもどうやって充電する？",
        zh: "當你精疲力盡時，通常怎麼替自己充電？",
      },
      {
        en: "What kind of moments make you feel most proud of yourself?",
        ja: "どんな瞬間に、自分のことを一番誇らしく感じる？",
        zh: "什麼樣的時刻，最讓你為自己感到驕傲？",
      },
      {
        en: "What’s a habit or tradition from how you were raised that you’ve chosen not to keep, and why?",
        ja: "育った環境の習慣や伝統で、あえて続けないことにしたものは？それはなぜ？",
        zh: "成長過程中的哪個習慣或傳統，是你選擇不再延續的？為什麼？",
      },
      {
        en: "How do you usually show someone you care about them?",
        ja: "大切に思っている人に、ふだんどうやってその気持ちを示している？",
        zh: "你通常怎麼向別人表達你在乎他們？",
      },
      {
        en: "What’s a lesson you learned the hard way?",
        ja: "痛い思いをして学んだ教訓は？",
        zh: "有什麼教訓是你吃過苦頭才學到的？",
      },
      {
        en: "When you’re stressed, what do you need most from the people around you?",
        ja: "ストレスがたまっているとき、周りの人に一番求めることは？",
        zh: "當你壓力很大時，最需要身邊的人為你做什麼？",
      },
      {
        en: "What’s something people often misunderstand about you?",
        ja: "人によく誤解される、自分のことは？",
        zh: "別人常常誤解你的哪一點？",
      },
      {
        en: "What’s the most unforgettable moment of your life so far?",
        ja: "これまでの人生で、一番忘れられない瞬間は？",
        zh: "到目前為止，你人生中最難忘的時刻是什麼？",
      },
      {
        en: "What does a good weekend with someone you’re close to look like?",
        ja: "親しい人と過ごす、いい週末ってどんな感じ？",
        zh: "和親近的人一起度過的美好週末，是什麼樣子？",
      },
    ],
  },
  core: {
    name: "Core",
    subtitle: { ja: "核 — 深い質問", en: "Core — deep questions", zh: "地核 — 深刻的問題" },
    questions: [
      {
        en: "What does “home” mean to you?",
        ja: "あなたにとって「家（ホーム）」とは？",
        zh: "「家」對你來說意味著什麼？",
      },
      {
        en: "What’s something you’re still trying to make peace with?",
        ja: "まだ心の中で折り合いをつけようとしていることは？",
        zh: "有什麼事是你仍在努力與之和解的？",
      },
      {
        en: "Where do you hope to be living, and how, ten years from now?",
        ja: "10年後、どこで、どんなふうに暮らしていたい？",
        zh: "十年後，你希望住在哪裡、過著什麼樣的生活？",
      },
      {
        en: "What role do you want the person closest to you to play in your life?",
        ja: "一番身近な人に、あなたの人生でどんな存在でいてほしい？",
        zh: "你希望最親近的人，在你的人生中扮演什麼角色？",
      },
      {
        en: "What’s a fear you rarely say out loud?",
        ja: "めったに口にしない、怖いと思っていることは？",
        zh: "有什麼恐懼是你很少說出口的？",
      },
      {
        en: "When did you feel truly supported by someone, and what did they do?",
        ja: "誰かに心から支えられていると感じたのはいつ？その人は何をしてくれた？",
        zh: "什麼時候你真正感受到被某人支持？對方做了什麼？",
      },
      {
        en: "What do you need in a relationship to feel safe?",
        ja: "人との関係の中で安心できるために、何が必要？",
        zh: "在一段關係中，你需要什麼才會感到安心？",
      },
      {
        en: "What’s a boundary that’s important to you?",
        ja: "あなたにとって大切な「ここだけは譲れない線」は？",
        zh: "對你來說，有什麼重要的界線？",
      },
      {
        en: "How do you handle disagreements with someone you care about?",
        ja: "大切な人と意見がぶつかったとき、どう向き合っている？",
        zh: "和在乎的人意見不合時，你通常怎麼處理？",
      },
      {
        en: "What would you want people to say about you at your funeral?",
        ja: "自分のお葬式で、みんなにどんな人だったと言ってほしい？",
        zh: "你希望在自己的葬禮上，大家怎麼形容你？",
      },
      {
        en: "What’s a dream you haven’t given up on yet?",
        ja: "まだあきらめていない夢は？",
        zh: "有什麼夢想是你還沒放棄的？",
      },
      {
        en: "What’s one thing you’d like the person in front of you to know about you?",
        ja: "目の前にいるこの人に、自分について一つ知ってほしいことは？",
        zh: "有一件關於你自己的事，你希望眼前這個人知道，那會是什麼？",
      },
    ],
  },
};
