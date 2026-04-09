// ── Module 5: Forms and Input Handling ──
// All 30 questions with options, answer, and explanation

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
    text: "How do you access input value in JavaScript?",
    code: null,
    options: ["input.text", "input.value", "input.get()", "input.data"],
    answer: 1,
    explanation: ".value is used to get input value."
  },
  {
    id: 2,
    text: "Which method selects a form element?",
    code: null,
    options: ["getForm()", "getElementById()", "selectForm()", "findForm()"],
    answer: 1,
    explanation: "It selects any DOM element including forms."
  },
  {
    id: 3,
    text: "How to set the value of an input field?",
    code: null,
    options: ["input.set()", "input.value = \"text\"", "input.add()", "input.change()"],
    answer: 1,
    explanation: "Assign value using .value."
  },
  {
    id: 4,
    text: "Which event triggers when form is submitted?",
    code: null,
    options: ["click", "submit", "change", "keydown"],
    answer: 1,
    explanation: "submit event handles form submission."
  },
  {
    id: 5,
    text: "What does event.preventDefault() do?",
    code: null,
    options: ["Stops JavaScript", "Prevents default form submission", "Reloads page", "Clears form"],
    answer: 1,
    explanation: "It stops page reload or default behavior."
  },
  {
    id: 6,
    text: "How to check if input is empty?",
    code: null,
    options: ["input == null", "input.value == \"\"", "input.length", "input.empty()"],
    answer: 1,
    explanation: "Empty string means no input."
  },
  {
    id: 7,
    text: "Which is used for case-sensitive comparison?",
    code: null,
    options: ["==", "===", "equals()", "match()"],
    answer: 1,
    explanation: "=== compares value and type strictly."
  },
  {
    id: 8,
    text: "What is the result of:",
    code: `"Hello" === "hello"`,
    options: ["true", "false", "null", "undefined"],
    answer: 1,
    explanation: "Case matters → false."
  },
  {
    id: 9,
    text: "Which function checks if value is NaN?",
    code: null,
    options: ["isNaN()", "checkNaN()", "Number()", "parse()"],
    answer: 0,
    explanation: "isNaN() checks invalid number."
  },
  {
    id: 10,
    text: "What is the result of:",
    code: `isNaN("abc")`,
    options: ["false", "true", "error", "null"],
    answer: 1,
    explanation: "\"abc\" is not a number."
  },
  {
    id: 11,
    text: "What is the output?",
    code: `isNaN(10)`,
    options: ["true", "false", "error", "null"],
    answer: 1,
    explanation: "10 is a valid number."
  },
  {
    id: 12,
    text: "Which event triggers when input changes?",
    code: null,
    options: ["click", "submit", "change", "keypress"],
    answer: 2,
    explanation: "change fires when value changes."
  },
  {
    id: 13,
    text: "Which property gets text from input?",
    code: null,
    options: ["text", "value", "data", "innerHTML"],
    answer: 1,
    explanation: ".value stores input text."
  },
  {
    id: 14,
    text: "How to convert input to number?",
    code: null,
    options: ["parse()", "Number(input.value)", "toNum()", "int()"],
    answer: 1,
    explanation: "Converts string to number."
  },
  {
    id: 15,
    text: "What is validation?",
    code: null,
    options: ["Styling form", "Checking correctness of input", "Submitting form", "Resetting form"],
    answer: 1,
    explanation: "Ensures input is valid."
  },
  {
    id: 16,
    text: "Which is a valid validation condition?",
    code: null,
    options: ["input.value > 0", "input.value == \"\"", "isNaN(input.value)", "All of these"],
    answer: 3,
    explanation: "All are used in validation."
  },
  {
    id: 17,
    text: "What is the purpose of form submission?",
    code: null,
    options: ["Styling", "Sending data", "Debugging", "Looping"],
    answer: 1,
    explanation: "Forms send data to server."
  },
  {
    id: 18,
    text: "What happens if preventDefault is not used?",
    code: null,
    options: ["Nothing", "Page reloads", "Error", "Input clears"],
    answer: 1,
    explanation: "Default form action reloads page."
  },
  {
    id: 19,
    text: "Which method sends form data (basic)?",
    code: null,
    options: ["fetch()", "send()", "transfer()", "submit()"],
    answer: 3,
    explanation: ".submit() sends form data."
  },
  {
    id: 20,
    text: "What is the result?",
    code: `let x = "";\nif(x){\n  console.log("Yes");\n}`,
    options: ["Yes", "No output", "Error", "Undefined"],
    answer: 1,
    explanation: "Empty string is falsy."
  },
  {
    id: 21,
    text: "Which is used for string comparison?",
    code: null,
    options: ["==", "===", "Both", "None"],
    answer: 2,
    explanation: "Both compare strings."
  },
  {
    id: 22,
    text: "Which is best for strict validation?",
    code: null,
    options: ["==", "===", "=", "!="],
    answer: 1,
    explanation: "Strict comparison is safer."
  },
  {
    id: 23,
    text: "What does this return?",
    code: `Number("")`,
    options: ["0", "NaN", "\"\"", "undefined"],
    answer: 0,
    explanation: "Empty string converts to 0."
  },
  {
    id: 24,
    text: "Which checks numeric input?",
    code: null,
    options: ["isNaN()", "typeof", "parseInt()", "Both A & B"],
    answer: 3,
    explanation: "Both help in validation."
  },
  {
    id: 25,
    text: "What is the output?",
    code: `"5" > 3`,
    options: ["true", "false", "NaN", "Error"],
    answer: 0,
    explanation: "String converted to number."
  },
  {
    id: 26,
    text: "Which event is best for form validation?",
    code: null,
    options: ["click", "submit", "hover", "load"],
    answer: 1,
    explanation: "Validate before submission."
  },
  {
    id: 27,
    text: "What is the purpose of input type=\"number\"?",
    code: null,
    options: ["Styling", "Restrict numeric input", "Convert automatically", "Disable input"],
    answer: 1,
    explanation: "Limits input to numbers."
  },
  {
    id: 28,
    text: "Which method resets a form?",
    code: null,
    options: ["clear()", "reset()", "empty()", "delete()"],
    answer: 1,
    explanation: ".reset() clears form fields."
  },
  {
    id: 29,
    text: "What is the output?",
    code: `isNaN("")`,
    options: ["true", "false", "NaN", "Error"],
    answer: 1,
    explanation: "Empty string treated as 0."
  },
  {
    id: 30,
    text: "Which improves form usability?",
    code: null,
    options: ["No validation", "Clear error messages", "Long forms", "No labels"],
    answer: 1,
    explanation: "Helps users correct mistakes."
  }
];

// Apply randomization to all questions
const questions = questionsRaw.map(shuffleOptions);

// ── State ──
let current = 0;
let selected = null;
let submitted = false;
let score = 0;
const answers = new Array(questions.length).fill(null);
const submitteds = new Array(questions.length).fill(false);

// ── DOM refs ──
const qNumber     = document.getElementById('q-number');
const qText       = document.getElementById('q-text');
const codeBlock   = document.getElementById('code-block');
const optionsGrid = document.getElementById('options-grid');
const submitBtn   = document.getElementById('submit-btn');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackIcon  = document.getElementById('feedback-icon');
const feedbackVerdict = document.getElementById('feedback-verdict');
const feedbackExplanation = document.getElementById('feedback-explanation');
const progressBar  = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const qCounter     = document.getElementById('q-counter');
const scoreDisplay = document.getElementById('score-display');
const totalDisplay = document.getElementById('total-display');
const prevBtn      = document.getElementById('prev-btn');
const nextBtn      = document.getElementById('next-btn');
const resultOverlay = document.getElementById('result-overlay');
const resultScore   = document.getElementById('result-score');
const resultMsg     = document.getElementById('result-msg');
const resultEmoji   = document.getElementById('result-emoji');
const retryBtn      = document.getElementById('retry-btn');

totalDisplay.textContent = questions.length;

// ── Render question ──
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
      if (i === q.answer)  btn.classList.add('correct');
      if (i === selected && selected !== q.answer) btn.classList.add('wrong');
      if (i === selected)  btn.classList.add('selected');
    } else {
      if (i === selected) btn.classList.add('selected');
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

// ── Select option ──
function selectOption(i) {
  if (submitted) return;
  selected = i;
  answers[current] = i;

  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === i);
    const letter = btn.querySelector('.option-letter');
    letter.style.background = idx === i ? 'var(--accent)' : '';
    letter.style.color = idx === i ? 'var(--bg)' : '';
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

// ── Show feedback ──
function showFeedback(isCorrect, explanation) {
  feedbackPanel.className = 'feedback-panel visible ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  feedbackPanel.style.display = '';
  feedbackIcon.textContent = isCorrect ? '✅' : '❌';
  feedbackVerdict.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
  feedbackExplanation.textContent = explanation;
}

// ── Navigation ──
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

// ── Show result ──
function showResult() {
  const pct = Math.round((score / questions.length) * 100);
  let emoji, msg;

  if (pct === 100) {
    emoji = '🏆'; msg = "Perfect score! You've mastered Module 5!";
  } else if (pct >= 80) {
    emoji = '🎉'; msg = "Excellent work! You have a strong grasp of the concepts.";
  } else if (pct >= 60) {
    emoji = '👍'; msg = "Good effort! Review the questions you got wrong and try again.";
  } else if (pct >= 40) {
    emoji = '📖'; msg = "Keep studying! Go over the topics and give it another shot.";
  } else {
    emoji = '💪'; msg = "Don't give up! Review Module 5 and try again — you've got this.";
  }

  resultEmoji.textContent = emoji;
  resultScore.textContent = `${score} / ${questions.length}`;
  resultMsg.textContent = msg;
  resultOverlay.classList.add('visible');
}

// ── Retry ──
function retryQuiz() {
  current = 0;
  score = 0;
  answers.fill(null);
  submitteds.fill(false);
  resultOverlay.classList.remove('visible');
  render(0);
}

// ── Event Listeners ──
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
retryBtn.addEventListener('click', retryQuiz);

// ── Init ──
render(0);
