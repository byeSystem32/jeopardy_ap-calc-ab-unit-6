// AP Calculus AB - Unit 6 Jeopardy: Integration & Accumulation of Change
// Pure HTML/CSS/JS, no build step. Math is rendered with KaTeX (loaded in index.html).

const CATEGORIES = [
  "Antiderivatives & Indefinite Integrals",
  "Riemann Sums",
  "Definite Integrals & FTC",
  "Net Change Theorem",
  "u-Substitution"
];

// Each question:
//   value    - dollar value
//   question - clue text. May contain LaTeX between $...$ or $$...$$ delimiters.
//   answer   - display answer (may contain LaTeX) shown via "Show Answer" / feedback.
//   accepts  - array of plain-text equivalents the student may type. The user's
//              answer is normalized and matched against each of these (and the
//              normalized form of `answer`). Be generous: include common forms.
const QUESTIONS = {
  "Antiderivatives & Indefinite Integrals": [
    {
      value: 100,
      question: "Evaluate the indefinite integral: $\\displaystyle\\int x^2 \\, dx$",
      answer: "$\\dfrac{x^3}{3} + C$",
      accepts: [
        "x^3/3 + C",
        "(1/3)x^3 + C",
        "(x^3)/3 + C",
        "(1/3)*x^3 + C",
        "x^3/3",
        "(1/3)x^3"
      ]
    },
    {
      value: 200,
      question: "Evaluate the indefinite integral: $\\displaystyle\\int \\cos(x) \\, dx$",
      answer: "$\\sin(x) + C$",
      accepts: ["sin(x) + C", "sinx + C", "sin x + C", "sin(x)"]
    },
    {
      value: 300,
      question: "Evaluate the indefinite integral: $\\displaystyle\\int \\frac{1}{x} \\, dx$",
      answer: "$\\ln|x| + C$",
      accepts: [
        "ln|x| + C",
        "ln(|x|) + C",
        "ln|x|",
        "ln(x) + C",
        "lnx + C"
      ]
    },
    {
      value: 400,
      question: "Evaluate the indefinite integral: $\\displaystyle\\int \\sec^2(x) \\, dx$",
      answer: "$\\tan(x) + C$",
      accepts: ["tan(x) + C", "tanx + C", "tan x + C", "tan(x)"]
    },
    {
      value: 500,
      question: "Evaluate the indefinite integral: $\\displaystyle\\int \\left(6x^2 + 4x - 5\\right) dx$",
      answer: "$2x^3 + 2x^2 - 5x + C$",
      accepts: [
        "2x^3 + 2x^2 - 5x + C",
        "2x^3+2x^2-5x+C",
        "2x^3 + 2x^2 - 5x"
      ]
    }
  ],

  "Riemann Sums": [
    {
      value: 100,
      question: "This type of Riemann sum uses the value of $f$ at the LEFT endpoint of each subinterval to determine the height of each rectangle.",
      answer: "Left Riemann sum",
      accepts: ["left riemann sum", "left sum", "left endpoint sum", "left-hand sum"]
    },
    {
      value: 200,
      question: "For a Riemann sum on $[a, b]$ using $n$ equal subintervals, $\\Delta x$ is given by this expression.",
      answer: "$\\Delta x = \\dfrac{b - a}{n}$",
      accepts: [
        "(b - a)/n",
        "(b-a)/n",
        "b-a/n",
        "delta x = (b-a)/n",
        "dx = (b-a)/n"
      ]
    },
    {
      value: 300,
      question: "Approximate $\\displaystyle\\int_0^4 x^2 \\, dx$ using a RIGHT Riemann sum with $n = 4$ equal subintervals.",
      answer: "$30$",
      accepts: ["30"]
    },
    {
      value: 400,
      question: "This rule, which is equivalent to averaging the left and right Riemann sums, approximates a definite integral using trapezoids.",
      answer: "Trapezoidal Rule",
      accepts: [
        "trapezoidal rule",
        "trapezoidal sum",
        "trapezoid rule",
        "trapezoid sum",
        "trapezoidal"
      ]
    },
    {
      value: 500,
      question: "As $n \\to \\infty$, the Riemann sum $\\displaystyle\\sum_{i=1}^{n} f(x_i^{*})\\,\\Delta x$ converges to this expression.",
      answer: "$\\displaystyle\\int_a^b f(x)\\, dx$ (the definite integral of $f$ from $a$ to $b$)",
      accepts: [
        "integral from a to b of f(x) dx",
        "definite integral",
        "definite integral of f from a to b",
        "integral of f(x) from a to b",
        "the definite integral"
      ]
    }
  ],

  "Definite Integrals & FTC": [
    {
      value: 100,
      question: "Fundamental Theorem of Calculus (Part 2): if $F$ is any antiderivative of $f$, then $\\displaystyle\\int_a^b f(x)\\, dx$ equals this.",
      answer: "$F(b) - F(a)$",
      accepts: ["F(b) - F(a)", "F(b)-F(a)"]
    },
    {
      value: 200,
      question: "Evaluate: $\\displaystyle\\int_0^2 3x^2 \\, dx$",
      answer: "$8$",
      accepts: ["8"]
    },
    {
      value: 300,
      question: "Fundamental Theorem of Calculus (Part 1): $\\dfrac{d}{dx}\\!\\left[\\displaystyle\\int_a^x f(t)\\, dt\\right]$ equals this.",
      answer: "$f(x)$",
      accepts: ["f(x)", "f of x"]
    },
    {
      value: 400,
      question: "Evaluate: $\\displaystyle\\int_0^{\\pi} \\sin(x) \\, dx$",
      answer: "$2$",
      accepts: ["2"]
    },
    {
      value: 500,
      question: "Use the FTC and the Chain Rule to evaluate: $\\dfrac{d}{dx}\\!\\left[\\displaystyle\\int_0^{x^2} \\sin(t)\\, dt\\right]$",
      answer: "$2x\\,\\sin(x^2)$",
      accepts: [
        "2x sin(x^2)",
        "2xsin(x^2)",
        "2x*sin(x^2)",
        "sin(x^2) * 2x",
        "2x sin x^2"
      ]
    }
  ],

  "Net Change Theorem": [
    {
      value: 100,
      question: "The Net Change Theorem states that $\\displaystyle\\int_a^b F'(x) \\, dx$ equals this expression.",
      answer: "$F(b) - F(a)$ (the net change in $F$ from $a$ to $b$)",
      accepts: [
        "F(b) - F(a)",
        "F(b)-F(a)",
        "net change in F",
        "the net change in F"
      ]
    },
    {
      value: 200,
      question: "If $v(t)$ is the velocity of a particle, then $\\displaystyle\\int_a^b v(t)\\, dt$ represents this physical quantity.",
      answer: "Displacement (net change in position)",
      accepts: [
        "displacement",
        "net change in position",
        "change in position",
        "net displacement"
      ]
    },
    {
      value: 300,
      question: "If $v(t)$ is the velocity of a particle, then $\\displaystyle\\int_a^b |v(t)| \\, dt$ represents this physical quantity (different from displacement).",
      answer: "Total distance traveled",
      accepts: [
        "total distance traveled",
        "total distance",
        "distance traveled",
        "the total distance"
      ]
    },
    {
      value: 400,
      question: "A particle moves along a line with velocity $v(t) = t - 3$. Find the particle's displacement on the interval $[0, 5]$.",
      answer: "$-\\dfrac{5}{2}$",
      accepts: ["-5/2", "-2.5", "-2.50", "-(5/2)"]
    },
    {
      value: 500,
      question: "Water flows into a tank at a rate of $r(t) = 2t + 1$ gallons per minute. How many gallons of water enter the tank between $t = 0$ and $t = 4$ minutes?",
      answer: "$20$ gallons",
      accepts: ["20", "20 gallons", "20 gal", "twenty gallons", "twenty"]
    }
  ],

  "u-Substitution": [
    {
      value: 100,
      question: "When using $u$-substitution to evaluate $\\displaystyle\\int 2x\\,\\cos(x^2)\\, dx$, this is the best choice for $u$.",
      answer: "$u = x^2$",
      accepts: ["u = x^2", "u=x^2", "x^2"]
    },
    {
      value: 200,
      question: "When using $u$-substitution to evaluate $\\displaystyle\\int (3x + 1)^5 \\, dx$, this is the best choice for $u$.",
      answer: "$u = 3x + 1$",
      accepts: ["u = 3x + 1", "u=3x+1", "3x+1", "3x + 1"]
    },
    {
      value: 300,
      question: "Evaluate using $u$-substitution: $\\displaystyle\\int 2x\\,(x^2 + 1)^3 \\, dx$",
      answer: "$\\dfrac{(x^2 + 1)^4}{4} + C$",
      accepts: [
        "(x^2 + 1)^4 / 4 + C",
        "(x^2+1)^4/4 + C",
        "((x^2+1)^4)/4 + C",
        "(1/4)(x^2+1)^4 + C",
        "1/4 (x^2+1)^4 + C",
        "(x^2+1)^4/4"
      ]
    },
    {
      value: 400,
      question: "Evaluate using $u$-substitution: $\\displaystyle\\int_0^1 2x\\, e^{x^2} \\, dx$",
      answer: "$e - 1$",
      accepts: ["e - 1", "e-1"]
    },
    {
      value: 500,
      question: "Evaluate using $u$-substitution: $\\displaystyle\\int \\frac{\\ln(x)}{x} \\, dx$",
      answer: "$\\dfrac{(\\ln x)^2}{2} + C$",
      accepts: [
        "(ln x)^2/2 + C",
        "(ln(x))^2/2 + C",
        "((ln x)^2)/2 + C",
        "(lnx)^2/2 + C",
        "(1/2)(ln x)^2 + C",
        "1/2 (ln x)^2 + C",
        "(ln x)^2/2"
      ]
    }
  ]
};

let score = 0;
let usedTiles = new Set();

let currentTileKey = null;
let currentQuestion = null;

document.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  bindUI();
  updateScoreDisplay();
});

function renderBoard() {
  const boardEl = document.getElementById("board");
  boardEl.innerHTML = "";

  CATEGORIES.forEach((cat) => {
    const header = document.createElement("div");
    header.className = "category-header";
    header.textContent = cat;
    boardEl.appendChild(header);
  });

  const maxRows = Math.max(...CATEGORIES.map((c) => QUESTIONS[c].length));

  for (let row = 0; row < maxRows; row++) {
    CATEGORIES.forEach((category) => {
      const qList = QUESTIONS[category];
      const q = qList[row];
      const tile = document.createElement("button");
      tile.type = "button";

      if (q) {
        tile.className = "tile";
        tile.textContent = `$${q.value}`;
        const key = tileKey(category, row);
        tile.dataset.key = key;

        if (usedTiles.has(key)) {
          markTileUsed(tile);
        }

        tile.addEventListener("click", () => {
          if (usedTiles.has(key)) return;
          openQuestion(category, row, key);
        });
      } else {
        tile.className = "tile used";
        tile.disabled = true;
        tile.style.visibility = "hidden";
        tile.tabIndex = -1;
      }

      boardEl.appendChild(tile);
    });
  }
}

function tileKey(category, row) {
  return `${category}::${row}`;
}

function bindUI() {
  const resetBtn = document.getElementById("resetGameBtn");
  resetBtn.addEventListener("click", resetGame);

  const modalEl = document.getElementById("questionModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const submitBtn = document.getElementById("submitAnswerBtn");
  const showBtn = document.getElementById("showAnswerBtn");
  const backdrop = modalEl.querySelector(".modal-backdrop");
  const answerInput = document.getElementById("answerInput");

  closeBtn.addEventListener("click", () => closeModal());
  backdrop.addEventListener("click", () => closeModal());

  submitBtn.addEventListener("click", handleSubmitAnswer);
  showBtn.addEventListener("click", handleShowAnswer);

  answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswer();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modalEl.classList.contains("active")) {
        closeModal();
      }
    }
  });
}

function openQuestion(category, row, key) {
  const q = QUESTIONS[category][row];
  currentTileKey = key;
  currentQuestion = { category, row, data: q };

  const modal = document.getElementById("questionModal");
  const catLabel = document.getElementById("modalCategoryLabel");
  const valueLabel = document.getElementById("modalValueLabel");
  const questionText = document.getElementById("modalQuestionText");
  const answerInput = document.getElementById("answerInput");
  const feedbackText = document.getElementById("feedbackText");

  catLabel.textContent = category;
  valueLabel.textContent = `$${q.value}`;

  // Use innerHTML so KaTeX can render any LaTeX inside the clue.
  questionText.innerHTML = q.question;
  renderMath(questionText);

  answerInput.value = "";
  feedbackText.textContent = "";
  feedbackText.className = "feedback-text";

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  answerInput.focus();
}

function closeModal() {
  const modal = document.getElementById("questionModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  currentTileKey = null;
  currentQuestion = null;
}

function handleSubmitAnswer() {
  if (!currentQuestion) return;

  const answerInput = document.getElementById("answerInput");
  const feedbackText = document.getElementById("feedbackText");
  const userAnswer = answerInput.value.trim();

  if (!userAnswer) {
    feedbackText.textContent = "Please type an answer before submitting.";
    feedbackText.className = "feedback-text";
    return;
  }

  const q = currentQuestion.data;
  const isCorrect = checkAnswer(userAnswer, q);

  if (isCorrect) {
    score += q.value;
    feedbackText.innerHTML = `Correct! You earned $${q.value}.`;
    feedbackText.className = "feedback-text correct";
  } else {
    score -= q.value;
    feedbackText.innerHTML =
      `Incorrect. Correct answer: ${q.answer}. You lost $${q.value}.`;
    feedbackText.className = "feedback-text incorrect";
  }
  renderMath(feedbackText);

  updateScoreDisplay();
  markTileUsedByKey(currentTileKey);

  setTimeout(() => {
    closeModal();
  }, 1800);
}

function handleShowAnswer() {
  if (!currentQuestion) return;
  const feedbackText = document.getElementById("feedbackText");
  feedbackText.innerHTML = `Correct answer: ${currentQuestion.data.answer}`;
  feedbackText.className = "feedback-text";
  renderMath(feedbackText);
}

function markTileUsedByKey(key) {
  if (!key) return;
  usedTiles.add(key);

  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    if (tile.dataset.key === key) {
      markTileUsed(tile);
    }
  });
}

function markTileUsed(tile) {
  tile.classList.add("used");
  tile.disabled = true;
  tile.textContent = "";
}

function resetGame() {
  if (!confirm("Reset the game and clear your score?")) return;
  score = 0;
  usedTiles.clear();
  updateScoreDisplay();
  renderBoard();
}

function updateScoreDisplay() {
  const scoreValueEl = document.getElementById("scoreValue");
  const sign = score < 0 ? "-$" : "$";
  const value = Math.abs(score);
  scoreValueEl.textContent = `${sign}${value}`;
}

// KaTeX auto-render helper. Safe to call before the KaTeX scripts finish
// loading; in that case it simply leaves the raw text in place until a later
// render call (e.g. when the next question is opened) picks it up.
function renderMath(el) {
  if (!el) return;
  if (typeof window.renderMathInElement !== "function") return;
  try {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  } catch (_) {
    // Ignore rendering errors; raw text remains visible.
  }
}

// ---------- Math-aware Answer Checking ----------

// Normalize a user / accepted answer to a comparable form.
// - lowercase
// - strip LaTeX delimiters and common commands (so the canonical `answer`
//   string in LaTeX is comparable to plain text the student types)
// - drop all whitespace
// - drop a trailing "+ c" since the constant of integration is implied
function normalizeMath(text) {
  let t = String(text || "").toLowerCase();

  // Strip LaTeX dollar delimiters.
  t = t.replace(/\$/g, "");

  // Remove LaTeX spacing commands.
  t = t.replace(/\\[,;!]/g, "");
  t = t.replace(/\\quad|\\qquad|\\displaystyle|\\dfrac/g, (m) => {
    return m === "\\dfrac" ? "\\frac" : "";
  });

  // \left( \right) -> ( )
  t = t.replace(/\\left/g, "").replace(/\\right/g, "");

  // \frac{a}{b} -> (a)/(b). Repeat to handle nested fractions.
  for (let i = 0; i < 3; i++) {
    t = t.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, "($1)/($2)");
  }

  // \sqrt{x} -> sqrt(x)
  t = t.replace(/\\sqrt\s*\{([^{}]*)\}/g, "sqrt($1)");

  // Common function names.
  t = t.replace(/\\sin/g, "sin")
       .replace(/\\cos/g, "cos")
       .replace(/\\tan/g, "tan")
       .replace(/\\sec/g, "sec")
       .replace(/\\csc/g, "csc")
       .replace(/\\cot/g, "cot")
       .replace(/\\ln/g, "ln")
       .replace(/\\log/g, "log")
       .replace(/\\exp/g, "exp")
       .replace(/\\pi/g, "pi")
       .replace(/\\cdot/g, "*")
       .replace(/\\times/g, "*")
       .replace(/\\div/g, "/")
       .replace(/\\to/g, "->")
       .replace(/\\infty/g, "inf")
       .replace(/\\Delta/g, "delta")
       .replace(/\\delta/g, "delta");

  // Integrals can show up as raw LaTeX in the canonical answer; strip them.
  t = t.replace(/\\int(_[^\s]*)?(\^[^\s]*)?/g, "integral");

  // Drop any remaining backslashes (commands we didn't translate).
  t = t.replace(/\\[a-zA-Z]+/g, " ");
  t = t.replace(/\\/g, "");

  // Remove braces (LaTeX grouping) - keep their contents.
  t = t.replace(/[{}]/g, "");

  // Treat e^{...} variants and ^ exponents uniformly.
  // Standardize ** to ^.
  t = t.replace(/\*\*/g, "^");

  // Remove all whitespace.
  t = t.replace(/\s+/g, "");

  // Drop a final "+c" (constant of integration) so it's optional.
  t = t.replace(/\+c$/i, "");

  // Strip an outer pair of parentheses if the whole expression is wrapped.
  t = stripOuterParens(t);

  return t;
}

function stripOuterParens(s) {
  if (s.length < 2 || s[0] !== "(" || s[s.length - 1] !== ")") return s;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    else if (s[i] === ")") {
      depth--;
      if (depth === 0 && i !== s.length - 1) return s;
    }
  }
  return s.slice(1, -1);
}

function checkAnswer(userAnswer, q) {
  const userNorm = normalizeMath(userAnswer);
  if (!userNorm) return false;

  const candidates = [q.answer, ...(q.accepts || [])];
  for (const c of candidates) {
    const cNorm = normalizeMath(c);
    if (!cNorm) continue;
    if (userNorm === cNorm) return true;
  }

  // Loose textual fallback for word-based answers (e.g., "Displacement").
  // Use the original answer string, stripped of LaTeX delimiters/commands.
  const wordNorm = normalizeWords(q.answer);
  const userWord = normalizeWords(userAnswer);
  if (wordNorm && userWord) {
    if (userWord === wordNorm) return true;
    if (wordNorm.includes(userWord) || userWord.includes(wordNorm)) return true;
    const keywords = wordNorm.split(" ").filter((w) => w.length > 3);
    if (keywords.length && keywords.every((kw) => userWord.includes(kw))) {
      return true;
    }
  }

  return false;
}

// Lowercase, strip LaTeX, collapse non-alphanumerics to spaces.
function normalizeWords(text) {
  let t = String(text || "").toLowerCase();
  t = t.replace(/\$[^$]*\$/g, " ");
  t = t.replace(/\\[a-zA-Z]+/g, " ");
  t = t.replace(/[^a-z0-9]+/g, " ");
  t = t.replace(/\s+/g, " ").trim();
  return t;
}
