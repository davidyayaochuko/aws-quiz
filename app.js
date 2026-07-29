(function () {
  "use strict";

  const app = document.querySelector("#app");
  const headerProgress = document.querySelector("#header-progress");
  const progressLabel = document.querySelector("#progress-label");
  const progressTrack = document.querySelector(".progress-track");
  const progressFill = document.querySelector("#progress-fill");

  const state = {
    week: null,
    questions: [],
    studentName: "",
    answers: new Map(),
    results: null
  };

  const getTemplate = (id) =>
    document.querySelector(`#${id}`).content.cloneNode(true);

  const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  };

  const randomizeQuestion = (question) => {
    const randomizedOptions = shuffle(
      question.options.map((text, originalIndex) => ({ text, originalIndex }))
    );
    return {
      ...question,
      options: randomizedOptions.map((option) => option.text),
      answer: randomizedOptions.findIndex(
        (option) => option.originalIndex === question.answer
      )
    };
  };

  const getBestScore = (weekId) => {
    const value = Number(localStorage.getItem(`thriveafrica-best-${weekId}`));
    return Number.isFinite(value) ? value : 0;
  };

  const saveBestScore = (weekId, score) => {
    const best = Math.max(getBestScore(weekId), score);
    localStorage.setItem(`thriveafrica-best-${weekId}`, String(best));
    return best;
  };

  const setView = (content) => {
    app.replaceChildren(content);
    app.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hideProgress = () => {
    headerProgress.hidden = true;
  };

  const updateProgress = () => {
    const total = state.questions.length;
    const answered = state.answers.size;
    const percent = total ? Math.round((answered / total) * 100) : 0;

    headerProgress.hidden = false;
    progressLabel.textContent = `${answered} of ${total} answered`;
    progressFill.style.width = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", String(percent));

    const status = document.querySelector("#answer-status");
    const submitButton = document.querySelector("#submit-quiz");
    if (status) {
      const remaining = total - answered;
      status.textContent =
        remaining === 0
          ? "All questions answered. You can submit now."
          : `${remaining} question${remaining === 1 ? "" : "s"} remaining.`;
    }
    if (submitButton) {
      submitButton.disabled = answered !== total;
    }
  };

  const makeWeekCard = (week) => {
    const button = document.createElement("button");
    const best = getBestScore(week.id);
    button.className = "week-card";
    button.type = "button";
    button.dataset.weekId = week.id;
    button.setAttribute("aria-label", `Open Week ${week.week}: ${week.title}`);

    const weekNumber = document.createElement("span");
    weekNumber.className = "week-number";
    weekNumber.textContent = `Week ${week.week}`;

    const title = document.createElement("h3");
    title.textContent = week.title;

    const description = document.createElement("p");
    description.textContent = week.description;

    const footer = document.createElement("div");
    footer.className = "week-card-footer";

    const bestLabel = document.createElement("span");
    bestLabel.className = "best-score-label";
    bestLabel.textContent = best ? `Best: ${best}%` : "Not attempted";

    const startLabel = document.createElement("span");
    startLabel.className = "start-label";
    startLabel.textContent = "Start →";

    footer.append(bestLabel, startLabel);
    button.append(weekNumber, title, description, footer);
    return button;
  };

  const renderDashboard = () => {
    state.week = null;
    state.questions = [];
    state.answers.clear();
    state.results = null;
    hideProgress();

    const view = getTemplate("dashboard-template");
    const grid = view.querySelector("#week-grid");
    window.QUIZ_DATA.forEach((week) => grid.append(makeWeekCard(week)));
    setView(view);

    document.querySelector("#week-grid").addEventListener("click", (event) => {
      const card = event.target.closest("[data-week-id]");
      if (!card) return;
      const week = window.QUIZ_DATA.find((item) => item.id === card.dataset.weekId);
      renderIntro(week);
    });
  };

  const renderIntro = (week) => {
    state.week = week;
    state.answers.clear();
    state.results = null;
    hideProgress();

    const view = getTemplate("intro-template");
    view.querySelector("#intro-week").textContent = `Week ${week.week}`;
    view.querySelector("#intro-title").textContent = week.title;
    view.querySelector("#intro-description").textContent = week.description;

    const input = view.querySelector("#student-name");
    input.value = state.studentName;

    setView(view);
    input.focus();

    document
      .querySelector("[data-action='home']")
      .addEventListener("click", renderDashboard);

    document.querySelector("#student-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = new FormData(event.currentTarget).get("studentName").trim();
      if (!name) {
        input.focus();
        return;
      }
      state.studentName = name;
      startQuiz();
    });
  };

  const createQuestionCard = (question, index) => {
    const article = document.createElement("article");
    article.className = "question-card";
    article.id = `question-${question.id}`;
    article.dataset.questionId = question.id;

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.innerHTML = `<span>Question ${index + 1}</span><span>1 point</span>`;

    const heading = document.createElement("h2");
    heading.id = `heading-${question.id}`;
    heading.textContent = question.question;

    const options = document.createElement("div");
    options.className = "options-list";
    options.setAttribute("role", "radiogroup");
    options.setAttribute("aria-labelledby", heading.id);

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.id;
      input.value = String(optionIndex);

      const optionText = document.createElement("span");
      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = `${String.fromCharCode(65 + optionIndex)}.`;
      optionText.append(letter, ` ${option}`);

      label.append(input, optionText);
      options.append(label);
    });

    article.append(meta, heading, options);
    return article;
  };

  const startQuiz = () => {
    state.questions = shuffle(state.week.questions).map(randomizeQuestion);
    state.answers.clear();
    state.results = null;

    const view = getTemplate("quiz-template");
    view.querySelector("#quiz-week").textContent = `Week ${state.week.week}`;
    const list = view.querySelector("#question-list");
    state.questions.forEach((question, index) =>
      list.append(createQuestionCard(question, index))
    );
    setView(view);
    updateProgress();

    document.querySelector("[data-action='exit']").addEventListener("click", () => {
      const shouldExit =
        state.answers.size === 0 ||
        window.confirm("Exit this quiz? Your current answers will not be saved.");
      if (shouldExit) renderDashboard();
    });

    document.querySelector("#quiz-form").addEventListener("change", (event) => {
      if (!event.target.matches("input[type='radio']")) return;
      state.answers.set(event.target.name, Number(event.target.value));
      event.target.closest(".question-card").classList.remove("unanswered");
      updateProgress();
    });

    document.querySelector("#quiz-form").addEventListener("submit", submitQuiz);
  };

  const submitQuiz = (event) => {
    event.preventDefault();
    const unanswered = state.questions.filter(
      (question) => !state.answers.has(question.id)
    );

    if (unanswered.length) {
      unanswered.forEach((question) => {
        document
          .querySelector(`#question-${question.id}`)
          .classList.add("unanswered");
      });
      document
        .querySelector(`#question-${unanswered[0].id}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const reviewed = state.questions.map((question) => {
      const selected = state.answers.get(question.id);
      return {
        question,
        selected,
        correct: selected === question.answer
      };
    });
    const correctCount = reviewed.filter((item) => item.correct).length;
    const percent = Math.round((correctCount / reviewed.length) * 100);
    const best = saveBestScore(state.week.id, percent);

    state.results = {
      reviewed,
      correctCount,
      incorrectCount: reviewed.length - correctCount,
      percent,
      best
    };
    renderResults();
  };

  const resultMessage = (percent) => {
    if (percent >= 85) {
      return {
        heading: "Excellent work!",
        message:
          "You have a strong grasp of this week's concepts. Review any missed explanations before moving on."
      };
    }
    if (percent >= 70) {
      return {
        heading: "Target achieved.",
        message:
          "You reached the 70% target. Use the review below to strengthen the topics you missed."
      };
    }
    return {
      heading: "Keep building.",
      message:
        "Review the explanations below, revisit the study notes, and try the quiz again."
    };
  };

  const createReviewCard = (item, index) => {
    const { question, selected, correct } = item;
    const article = document.createElement("article");
    article.className = `review-card ${correct ? "correct" : "incorrect"}`;
    article.dataset.reviewStatus = correct ? "correct" : "incorrect";

    const status = document.createElement("div");
    status.className = "review-status";
    status.textContent = correct ? "✓ Correct" : "× Incorrect";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${question.question}`;

    const comparison = document.createElement("div");
    comparison.className = "answer-comparison";

    const selectedBox = document.createElement("div");
    selectedBox.className = `answer-box ${correct ? "correct-answer" : "wrong-answer"}`;
    const selectedLabel = document.createElement("small");
    selectedLabel.textContent = "Your answer";
    const selectedText = document.createElement("p");
    selectedText.textContent = `${String.fromCharCode(65 + selected)}. ${
      question.options[selected]
    }`;
    selectedBox.append(selectedLabel, selectedText);

    const correctBox = document.createElement("div");
    correctBox.className = "answer-box correct-answer";
    const correctLabel = document.createElement("small");
    correctLabel.textContent = "Correct answer";
    const correctText = document.createElement("p");
    correctText.textContent = `${String.fromCharCode(65 + question.answer)}. ${
      question.options[question.answer]
    }`;
    correctBox.append(correctLabel, correctText);

    comparison.append(selectedBox, correctBox);

    const explanation = document.createElement("p");
    explanation.className = "explanation";
    explanation.textContent = question.explanation;

    article.append(status, heading, comparison, explanation);
    return article;
  };

  const renderResults = () => {
    hideProgress();
    const view = getTemplate("results-template");
    const { percent, correctCount, incorrectCount, best, reviewed } = state.results;
    const copy = resultMessage(percent);

    view.querySelector("#score-percent").textContent = `${percent}%`;
    view.querySelector("#score-fraction").textContent = `${correctCount} / ${reviewed.length}`;
    view.querySelector("#results-week").textContent = `Week ${state.week.week} results`;
    view.querySelector("#results-heading").textContent = `${copy.heading} ${state.studentName}`;
    view.querySelector("#results-message").textContent = copy.message;
    view.querySelector("#correct-count").textContent = String(correctCount);
    view.querySelector("#incorrect-count").textContent = String(incorrectCount);
    view.querySelector("#best-score").textContent = `${best}%`;

    const ring = view.querySelector("#score-ring");
    const angle = Math.round((percent / 100) * 360);
    ring.style.background = `conic-gradient(var(--gold) 0deg, var(--gold) ${angle}deg, rgba(255,255,255,.12) ${angle}deg)`;

    const reviewList = view.querySelector("#review-list");
    reviewed.forEach((item, index) => reviewList.append(createReviewCard(item, index)));

    setView(view);

    document
      .querySelector("[data-action='home']")
      .addEventListener("click", renderDashboard);
    document
      .querySelector("[data-action='retry']")
      .addEventListener("click", startQuiz);

    document.querySelector(".review-filter").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      const filter = button.dataset.filter;
      const cards = [...document.querySelectorAll(".review-card")];
      cards.forEach((card) => {
        card.hidden =
          filter === "incorrect" && card.dataset.reviewStatus !== "incorrect";
      });

      let empty = document.querySelector(".empty-review");
      const visibleCards = cards.filter((card) => !card.hidden);
      if (filter === "incorrect" && visibleCards.length === 0) {
        if (!empty) {
          empty = document.createElement("p");
          empty.className = "empty-review";
          empty.textContent = "No incorrect answers—excellent work!";
          document.querySelector("#review-list").append(empty);
        }
        empty.hidden = false;
      } else if (empty) {
        empty.hidden = true;
      }
    });
  };

  renderDashboard();
})();
