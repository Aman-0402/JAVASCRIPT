// ── Module 3: Decisions and Loops ──

// Shuffle options and update answer index
function shuffleOptions(question) {
  const { options, answer } = question;
  const correctOption = options[answer];
  const optionsCopy = [...options];

  // Fisher-Yates shuffle
  for (let i = optionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
  }

  return {
    ...question,
    options: optionsCopy,
    answer: optionsCopy.indexOf(correctOption)
  };
}

const questionsRaw = [
  {
    id: 1,
    text: "What does == do in JavaScript?",
    code: null,
    options: [
      "Strict comparison",
      "Assignment",
      "Loose comparison",
      "Logical AND"
    ],
    answer: 2,
    explanation: "== compares values with type conversion (loose equality)."
  },
  {
    id: 2,
    text: "What does === do?",
    code: null,
    options: [
      "Assigns value",
      "Compares value only",
      "Compares value and type",
      "Negates value"
    ],
    answer: 2,
    explanation: "=== checks both value and type (strict equality)."
  },
  {
    id: 3,
    text: "What is the result of:",
    code: `5 == "5"`,
    options: ["false", "true", "error", "undefined"],
    answer: 1,
    explanation: "== converts the string to a number before comparing → true."
  },
  {
    id: 4,
    text: "What is the result of:",
    code: `5 === "5"`,
    options: ["true", "false", "error", "null"],
    answer: 1,
    explanation: "Types are different (number vs string) → false."
  },
  {
    id: 5,
    text: "Which operator means \"not equal with type check\"?",
    code: null,
    options: ["!=", "!==", "==", "="],
    answer: 1,
    explanation: "!== checks both value and type — strict not-equal."
  },
  {
    id: 6,
    text: "What does && represent?",
    code: null,
    options: ["OR", "NOT", "AND", "Assignment"],
    answer: 2,
    explanation: "&& returns true only if both conditions are true."
  },
  {
    id: 7,
    text: "What does || represent?",
    code: null,
    options: ["AND", "OR", "NOT", "Compare"],
    answer: 1,
    explanation: "|| returns true if at least one condition is true."
  },
  {
    id: 8,
    text: "What does !true return?",
    code: null,
    options: ["true", "false", "null", "undefined"],
    answer: 1,
    explanation: "! negates the boolean value — !true is false."
  },
  {
    id: 9,
    text: "What is the result of:",
    code: `10 > 5`,
    options: ["false", "true", "error", "null"],
    answer: 1,
    explanation: "10 is greater than 5 → true."
  },
  {
    id: 10,
    text: "Which statement is used for multiple conditions?",
    code: null,
    options: ["if", "else", "else if", "loop"],
    answer: 2,
    explanation: "else if allows chaining multiple condition checks."
  },
  {
    id: 11,
    text: "What is the output?",
    code: `let x = 10;\nif(x > 5){\n  console.log("Yes");\n}`,
    options: ["No", "Yes", "Error", "Undefined"],
    answer: 1,
    explanation: "x is 10 which is greater than 5, so the condition is true and \"Yes\" is printed."
  },
  {
    id: 12,
    text: "Which statement is best for multiple fixed cases?",
    code: null,
    options: ["if", "for", "switch", "while"],
    answer: 2,
    explanation: "switch handles multiple fixed cases efficiently and cleanly."
  },
  {
    id: 13,
    text: "What keyword is used in switch to stop execution?",
    code: null,
    options: ["stop", "break", "exit", "continue"],
    answer: 1,
    explanation: "break exits the switch block and prevents fall-through."
  },
  {
    id: 14,
    text: "Which loop runs at least once?",
    code: null,
    options: ["for", "while", "do...while", "foreach"],
    answer: 2,
    explanation: "do...while executes the body before checking the condition."
  },
  {
    id: 15,
    text: "Which loop is best when iterations are known?",
    code: null,
    options: ["while", "do...while", "for", "switch"],
    answer: 2,
    explanation: "The for loop is ideal when the number of iterations is known in advance."
  },
  {
    id: 16,
    text: "What does break do in loops?",
    code: null,
    options: [
      "Skips iteration",
      "Ends loop",
      "Restarts loop",
      "Pauses loop"
    ],
    answer: 1,
    explanation: "break immediately exits the loop."
  },
  {
    id: 17,
    text: "What does continue do?",
    code: null,
    options: [
      "Ends loop",
      "Skips current iteration",
      "Stops program",
      "Restarts loop"
    ],
    answer: 1,
    explanation: "continue skips the rest of the current iteration and moves to the next."
  },
  {
    id: 18,
    text: "What is the output?",
    code: `for(let i=0; i<3; i++){\n  console.log(i);\n}`,
    options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
    answer: 1,
    explanation: "Loop starts at 0, runs while i < 3 → prints 0, 1, 2."
  },
  {
    id: 19,
    text: "What is the output?",
    code: `let i = 0;\nwhile(i < 2){\n  console.log(i);\n  i++;\n}`,
    options: ["0 1", "1 2", "0 1 2", "Error"],
    answer: 0,
    explanation: "Loop runs while i < 2 → prints 0 then 1, then stops."
  },
  {
    id: 20,
    text: "What is the result?",
    code: `if(false || true){\n  console.log("Hello");\n}`,
    options: ["No output", "Hello", "Error", "Undefined"],
    answer: 1,
    explanation: "|| returns true if one condition is true → \"Hello\" is printed."
  }
];

// Apply randomization to all questions
const questions = questionsRaw.map(shuffleOptions);

// ── State ──
let current   = 0;
let selected  = null;
let submitted = false;
let score     = 0;
const answers    = new Array(questions.length).fill(null);
const submitteds = new Array(questions.length).fill(false);

// ── DOM refs ──
const qNumber      = document.getElementById('q-number');
const qText        = document.getElementById('q-text');
const codeBlock    = document.getElementById('code-block');
const optionsGrid  = document.getElementById('options-grid');
const submitBtn    = document.getElementById('submit-btn');
const feedbackPanel       = document.getElementById('feedback-panel');
const feedbackIcon        = document.getElementById('feedback-icon');
const feedbackVerdict     = document.getElementById('feedback-verdict');
const feedbackExplanation = document.getElementById('feedback-explanation');
const progressBar   = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const qCounter      = document.getElementById('q-counter');
const scoreDisplay  = document.getElementById('score-display');
const totalDisplay  = document.getElementById('total-display');
const prevBtn       = document.getElementById('prev-btn');
const nextBtn       = document.getElementById('next-btn');
const resultOverlay = document.getElementById('result-overlay');
const resultScore   = document.getElementById('result-score');
const resultMsg     = document.getElementById('result-msg');
const resultEmoji   = document.getElementById('result-emoji');
const retryBtn      = document.getElementById('retry-btn');

totalDisplay.textContent = questions.length;

// ── Render ──
function render(index) {
  const q = questions[index];
  selected  = answers[index];
  submitted = submitteds[index];

  qNumber.textContent = String(index + 1).padStart(2, '0');
  qText.textContent   = q.text;

  if (q.code) {
    codeBlock.textContent = q.code;
    codeBlock.classList.add('visible');
  } else {
    codeBlock.textContent = '';
    codeBlock.classList.remove('visible');
  }

  optionsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;

    if (submitted) {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === selected && selected !== q.answer) btn.classList.add('wrong');
      if (i === selected) btn.classList.add('selected');
    } else {
      if (i === selected) {
        btn.classList.add('selected');
        const letter = btn.querySelector('.option-letter');
        letter.style.background = 'var(--accent)';
        letter.style.color = 'var(--bg)';
      }
      btn.addEventListener('click', () => selectOption(i));
    }
    optionsGrid.appendChild(btn);
  });

  submitBtn.disabled = selected === null || submitted;

  if (submitted) {
    showFeedback(selected === q.answer, q.explanation);
  } else {
    feedbackPanel.className = 'feedback-panel';
    feedbackPanel.style.display = 'none';
  }

  const pct = ((index + 1) / questions.length) * 100;
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `Q ${index + 1} of ${questions.length}`;
  qCounter.textContent = `${index + 1} / ${questions.length}`;

  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? 'Finish ✓' : 'Next →';
  scoreDisplay.textContent = score;
}

// ── Select ──
function selectOption(i) {
  if (submitted) return;
  selected = i;
  answers[current] = i;

  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === i);
    const letter = btn.querySelector('.option-letter');
    letter.style.background = idx === i ? 'var(--accent)' : '';
    letter.style.color      = idx === i ? 'var(--bg)'    : '';
  });

  submitBtn.disabled = false;
}

// ── Submit ──
function submitAnswer() {
  if (selected === null || submitted) return;
  submitted = true;
  submitteds[current] = true;

  const q = questions[current];
  const isCorrect = selected === q.answer;
  if (isCorrect) score++;
  scoreDisplay.textContent = score;

  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
    if (idx === selected && selected !== q.answer) btn.classList.add('wrong');
  });

  submitBtn.disabled = true;
  showFeedback(isCorrect, q.explanation);
}

// ── Feedback ──
function showFeedback(isCorrect, explanation) {
  feedbackPanel.className = 'feedback-panel visible ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  feedbackPanel.style.display = '';
  feedbackIcon.textContent = isCorrect ? '✅' : '❌';
  feedbackVerdict.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
  feedbackExplanation.textContent = explanation;
}

// ── Nav ──
function goNext() {
  if (current < questions.length - 1) {
    current++;
    render(current);
  } else {
    showResult();
  }
}

function goPrev() {
  if (current > 0) {
    current--;
    render(current);
  }
}

// ── Result ──
function showResult() {
  const pct = Math.round((score / questions.length) * 100);
  let emoji, msg;
  if (pct === 100)    { emoji = '🏆'; msg = "Perfect score! You've mastered Module 3!"; }
  else if (pct >= 80) { emoji = '🎉'; msg = "Excellent work! Strong grasp of the concepts."; }
  else if (pct >= 60) { emoji = '👍'; msg = "Good effort! Review the ones you missed."; }
  else if (pct >= 40) { emoji = '📖'; msg = "Keep studying! Give it another shot."; }
  else                { emoji = '💪'; msg = "Don't give up! Review Module 3 and try again."; }

  resultEmoji.textContent = emoji;
  resultScore.textContent = `${score} / ${questions.length}`;
  resultMsg.textContent   = msg;
  resultOverlay.classList.add('visible');
}

// ── Retry ──
function retryQuiz() {
  current = 0; score = 0;
  answers.fill(null);
  submitteds.fill(false);
  resultOverlay.classList.remove('visible');
  render(0);
}

// ── Events ──
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
retryBtn.addEventListener('click', retryQuiz);

// ── Init ──
render(0);