(() => {
  const data = window.QUESTIONS;

  const card = document.getElementById("card");
  const subtitle = document.getElementById("subtitle");
  const frontLevel = document.getElementById("frontLevel");
  const frontNumber = document.getElementById("frontNumber");
  const backMeta = document.getElementById("backMeta");
  const question = document.getElementById("question");
  const dots = document.getElementById("dots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const tabs = document.querySelectorAll(".level-tab");

  let level = "crust";
  let index = 0;

  function render() {
    const { name, subtitle: sub, questions } = data[level];
    const total = questions.length;

    document.body.dataset.level = level;
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", tab.dataset.level === level);
    });

    subtitle.textContent = sub;
    frontLevel.textContent = name;
    frontNumber.textContent = `${index + 1} / ${total}`;
    backMeta.textContent = `${name.toUpperCase()} · ${index + 1}`;
    question.textContent = questions[index];

    dots.innerHTML = questions
      .map((_, i) => `<span class="dot${i === index ? " active" : ""}"></span>`)
      .join("");

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
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
    const next = index + delta;
    if (next < 0 || next >= data[level].questions.length) return;
    show(level, next);
  }

  card.addEventListener("click", () => card.classList.toggle("flipped"));
  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => show(tab.dataset.level, 0));
  });

  // キーボード操作（PC用）
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      card.classList.toggle("flipped");
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
