(() => {
  const data = window.QUESTIONS;

  // 画面の文言（質問以外）
  const UI = {
    ja: {
      langButton: "EN",
      levelsLabel: "レベル",
      prev: "前のカード",
      next: "次のカード",
      tapToFlip: "タップしてめくる",
      tapToNext: "タップで次のカードへ",
      tapToLevel: (name) => `タップで ${name} へ`,
      tapToEnd: "タップで次へ",
      endTitle: "おしまい",
      endText: "おつかれさまでした",
      tapToRestart: "タップで最初から",
    },
    en: {
      langButton: "日本語",
      levelsLabel: "Levels",
      prev: "Previous card",
      next: "Next card",
      tapToFlip: "Tap to flip",
      tapToNext: "Tap for the next card",
      tapToLevel: (name) => `Tap to go to ${name}`,
      tapToEnd: "Tap to continue",
      endTitle: "The End",
      endText: "Thanks for playing",
      tapToRestart: "Tap to start over",
    },
  };

  const card = document.getElementById("card");
  const subtitle = document.getElementById("subtitle");
  const frontLevel = document.getElementById("frontLevel");
  const frontNumber = document.getElementById("frontNumber");
  const frontHint = document.getElementById("frontHint");
  const backMeta = document.getElementById("backMeta");
  const question = document.getElementById("question");
  const backHint = document.getElementById("backHint");
  const dots = document.getElementById("dots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const langBtn = document.getElementById("langBtn");
  const levelsNav = document.getElementById("levels");
  const tabs = document.querySelectorAll(".level-tab");

  const levels = Object.keys(data); // crust → mantle → core の順
  const lastLevel = levels[levels.length - 1];

  let lang = loadLang();
  let level = levels[0];
  let index = 0; // 最後のレベルでは index === 質問数 が「おしまい」カード

  function loadLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ja" || saved === "en") return saved;
    } catch (e) { /* 保存できない環境では既定値 */ }
    return navigator.language.startsWith("ja") ? "ja" : "en";
  }

  function saveLang() {
    try { localStorage.setItem("lang", lang); } catch (e) { /* 無視 */ }
  }

  // 文字列ならそのまま、{ ja, en } なら今の言語を返す
  function text(value) {
    return typeof value === "string" ? value : value[lang] ?? value.ja;
  }

  // そのレベルで移動できる最後の index（最後のレベルは「おしまい」カードまで）
  function lastIndex(lv) {
    const total = data[lv].questions.length;
    return lv === lastLevel ? total : total - 1;
  }

  function isEnd() {
    return level === lastLevel && index === data[level].questions.length;
  }

  // delta 分だけ進めた先の { level, index }。セットの端では隣のセットへ移る。
  // 全体の最初・最後より外に出る場合は null。
  function neighbor(delta) {
    let li = levels.indexOf(level);
    let next = index + delta;
    if (next > lastIndex(level)) {
      if (++li >= levels.length) return null;
      next = 0;
    } else if (next < 0) {
      if (--li < 0) return null;
      next = lastIndex(levels[li]);
    }
    return { level: levels[li], index: next };
  }

  function render() {
    const t = UI[lang];
    const { name, subtitle: sub, questions } = data[level];
    const total = questions.length;
    const end = isEnd();

    document.documentElement.lang = lang;
    document.body.dataset.level = level;
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", tab.dataset.level === level);
    });

    langBtn.textContent = t.langButton;
    levelsNav.setAttribute("aria-label", t.levelsLabel);
    prevBtn.setAttribute("aria-label", t.prev);
    nextBtn.setAttribute("aria-label", t.next);
    subtitle.textContent = text(sub);

    card.classList.toggle("end", end);
    if (end) {
      frontLevel.textContent = t.endTitle;
      frontNumber.textContent = t.endText;
      frontHint.textContent = t.tapToRestart;
    } else {
      frontLevel.textContent = name;
      frontNumber.textContent = `${index + 1} / ${total}`;
      frontHint.textContent = t.tapToFlip;
      backMeta.textContent = `${name.toUpperCase()} · ${index + 1}`;
      question.textContent = text(questions[index]);
    }

    const next = neighbor(1);
    if (next && next.level !== level) backHint.textContent = t.tapToLevel(data[next.level].name);
    else if (next && level === lastLevel && next.index === total) backHint.textContent = t.tapToEnd;
    else backHint.textContent = t.tapToNext;

    dots.innerHTML = questions
      .map((_, i) => `<span class="dot${i === index ? " active" : ""}"></span>`)
      .join("");

    prevBtn.disabled = !neighbor(-1);
    nextBtn.disabled = !next;
  }

  // 新しいカードは裏向き（未めくり）で表示する
  function show(newLevel, newIndex) {
    level = newLevel;
    index = newIndex;
    card.classList.remove("flipped", "enter");
    void card.offsetWidth; // アニメーションを再生し直すためのリフロー
    card.classList.add("enter");
    render();
  }

  function go(delta) {
    const target = neighbor(delta);
    if (target) show(target.level, target.index);
  }

  // 表紙ならめくる、めくった後なら次のカードへ。「おしまい」なら最初から。
  function tapCard() {
    if (isEnd()) show(levels[0], 0);
    else if (card.classList.contains("flipped")) go(1);
    else card.classList.add("flipped");
  }

  card.addEventListener("click", tapCard);
  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => show(tab.dataset.level, 0));
  });

  // 言語切替（めくった状態はそのまま）
  langBtn.addEventListener("click", () => {
    lang = lang === "ja" ? "en" : "ja";
    saveLang();
    render();
  });

  // キーボード操作（PC用）
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
    // ボタン上の Enter/Space はボタン自体のクリックに任せる（二重に動かないように）
    else if ((e.key === " " || e.key === "Enter") && !e.target.closest("button")) {
      e.preventDefault();
      tapCard();
    }
  });

  // スワイプで前後に移動（スマホ用）
  let startX = null;
  card.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  card.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) {
      e.preventDefault(); // スワイプ時はめくりのクリックを発生させない
      go(dx < 0 ? 1 : -1);
    }
  });

  render();
})();
