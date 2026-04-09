// ── Module 1: JS Operators, Methods & Keywords ──
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
    text: "What does the assignment operator = do in JavaScript?",
    code: null,
    options: [
      "Compares two values",
      "Assigns a value to a variable",
      "Adds two numbers",
      "Declares a variable"
    ],
    answer: 1,
    explanation: "The = operator assigns the value on the right to the variable on the left."
  },
  {
    id: 2,
    text: "What will be the output of the following code?",
    code: `let x = 5;\nx += 3;\nconsole.log(x);`,
    options: ["5", "3", "8", "15"],
    answer: 2,
    explanation: "+= adds and assigns → x = 5 + 3 = 8."
  },
  {
    id: 3,
    text: "Which operator is used to find the remainder?",
    code: null,
    options: ["/", "%", "*", "+"],
    answer: 1,
    explanation: "% returns the remainder of division."
  },
  {
    id: 4,
    text: "What is the result of 10 - \"2\" in JavaScript?",
    code: null,
    options: ["8", "\"102\"", "NaN", "Error"],
    answer: 0,
    explanation: "JavaScript converts \"2\" to a number → 10 - 2 = 8."
  },
  {
    id: 5,
    text: "Which of the following is NOT an arithmetic operator?",
    code: null,
    options: ["+", "*", "=", "%"],
    answer: 2,
    explanation: "= is an assignment operator, not an arithmetic operator."
  },
  {
    id: 6,
    text: "What will be the output?",
    code: `let a = 10;\na -= 4;\nconsole.log(a);`,
    options: ["6", "14", "10", "4"],
    answer: 0,
    explanation: "a = 10 - 4 = 6."
  },
  {
    id: 7,
    text: "Which practice improves code readability?",
    code: null,
    options: [
      "Using random variable names",
      "Writing long single-line code",
      "Using meaningful variable names",
      "Avoiding comments"
    ],
    answer: 2,
    explanation: "Clear variable names make code easier to understand."
  },
  {
    id: 8,
    text: "Which is a good variable name?",
    code: null,
    options: ["x1", "data", "temp123", "a"],
    answer: 1,
    explanation: "data is meaningful and descriptive."
  },
  {
    id: 9,
    text: "Why should global variables be avoided?",
    code: null,
    options: [
      "They increase speed",
      "They reduce readability",
      "They can cause conflicts",
      "They are not allowed"
    ],
    answer: 2,
    explanation: "Global variables can overwrite values and cause bugs."
  },
  {
    id: 10,
    text: "What is code optimization?",
    code: null,
    options: [
      "Writing long code",
      "Making code slower",
      "Improving performance and efficiency",
      "Avoiding functions"
    ],
    answer: 2,
    explanation: "Optimization improves performance and reduces complexity."
  },
  {
    id: 11,
    text: "Where is internal JavaScript written?",
    code: null,
    options: [
      "In a .js file",
      "Inside <script> tag in HTML",
      "In CSS",
      "In database"
    ],
    answer: 1,
    explanation: "Internal JS is written within <script> tags."
  },
  {
    id: 12,
    text: "Which file extension is used for external JavaScript?",
    code: null,
    options: [".html", ".css", ".js", ".xml"],
    answer: 2,
    explanation: "External JS files use the .js extension."
  },
  {
    id: 13,
    text: "How do you link an external JS file?",
    code: null,
    options: [
      "<js src=\"file.js\">",
      "<script href=\"file.js\">",
      "<script src=\"file.js\"></script>",
      "<link src=\"file.js\">"
    ],
    answer: 2,
    explanation: "<script src=\"file.js\"></script> is the correct way to include external JS."
  },
  {
    id: 14,
    text: "Why use external JavaScript?",
    code: null,
    options: [
      "To reduce file size",
      "To reuse code across multiple pages",
      "To avoid HTML",
      "To write CSS"
    ],
    answer: 1,
    explanation: "External files allow reuse and better organization."
  },
  {
    id: 15,
    text: "Which block is used for handling errors?",
    code: null,
    options: ["if", "loop", "try", "switch"],
    answer: 2,
    explanation: "The try block is used to test code for errors."
  },
  {
    id: 16,
    text: "What does catch do?",
    code: null,
    options: [
      "Stops execution",
      "Handles the error",
      "Declares variables",
      "Loops code"
    ],
    answer: 1,
    explanation: "catch runs when an error occurs and handles it."
  },
  {
    id: 17,
    text: "What is the role of finally?",
    code: null,
    options: [
      "Runs only if error occurs",
      "Runs only if no error",
      "Always runs",
      "Skips execution"
    ],
    answer: 2,
    explanation: "finally executes regardless of whether an error occurred."
  },
  {
    id: 18,
    text: "What will happen if an error occurs in try block without catch?",
    code: null,
    options: [
      "Program crashes",
      "Error is ignored",
      "Code continues normally",
      "Value becomes null"
    ],
    answer: 0,
    explanation: "Without catch, errors can stop execution and crash the program."
  },
  {
    id: 19,
    text: "How to create a custom error?",
    code: null,
    options: [
      "throw \"Error\";",
      "error();",
      "new Error();",
      "catch()"
    ],
    answer: 0,
    explanation: "throw is used to create and raise custom errors."
  },
  {
    id: 20,
    text: "Which object represents the browser window?",
    code: null,
    options: ["document", "window", "screen", "navigator"],
    answer: 1,
    explanation: "window represents the browser window object."
  },
  {
    id: 21,
    text: "Which function shows a popup message?",
    code: null,
    options: ["prompt()", "confirm()", "alert()", "display()"],
    answer: 2,
    explanation: "alert() shows a message box to the user."
  },
  {
    id: 22,
    text: "Which function takes user input?",
    code: null,
    options: ["alert()", "confirm()", "prompt()", "input()"],
    answer: 2,
    explanation: "prompt() asks the user for input."
  },
  {
    id: 23,
    text: "What does confirm() return?",
    code: null,
    options: ["String", "Boolean", "Number", "Object"],
    answer: 1,
    explanation: "confirm() returns true (OK) or false (Cancel)."
  },
  {
    id: 24,
    text: "What will this return?",
    code: `confirm("Are you sure?");`,
    options: ["Text", "Boolean", "Number", "Undefined"],
    answer: 1,
    explanation: "confirm() returns true/false based on user action."
  },
  {
    id: 25,
    text: "Which is the correct debugging method?",
    code: null,
    options: [
      "Guessing output",
      "Using console.log()",
      "Ignoring errors",
      "Writing long code"
    ],
    answer: 1,
    explanation: "console.log() helps track values during debugging."
  },
  {
    id: 26,
    text: "What is the output?",
    code: `console.log(5 + "5");`,
    options: ["10", "\"55\"", "Error", "NaN"],
    answer: 1,
    explanation: "Number + string → string concatenation → \"55\"."
  },
  {
    id: 27,
    text: "What is the result of:",
    code: `10 % 3`,
    options: ["3", "1", "0", "2"],
    answer: 1,
    explanation: "Remainder of 10 ÷ 3 is 1."
  },
  {
    id: 28,
    text: "Which is a bad practice?",
    code: null,
    options: [
      "Using const for fixed values",
      "Writing readable code",
      "Using global variables unnecessarily",
      "Using functions"
    ],
    answer: 2,
    explanation: "Global variables can cause conflicts and are considered bad practice."
  },
  {
    id: 29,
    text: "What does this code do?",
    code: `try {\n  let x = y;\n} catch(e) {\n  console.log("Error");\n}`,
    options: [
      "Prints value",
      "Throws error",
      "Catches error and prints message",
      "Stops program"
    ],
    answer: 2,
    explanation: "The error is caught by catch and 'Error' is printed to the console."
  },
  {
    id: 30,
    text: "Which statement is true?",
    code: null,
    options: [
      "External JS cannot be reused",
      "Internal JS is always better",
      "External JS improves maintainability",
      "JS cannot handle errors"
    ],
    answer: 2,
    explanation: "External JS improves code organization and allows reuse across pages."
  }
];

// Apply randomization to all questions
const questions = questionsRaw.map(shuffleOptions);

// ── State ──
let current = 0;
let selected = null;
let submitted = false;
let score = 0;
const answers = new Array(questions.length).fill(null); // stores selected index per question
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

  // Number & text
  qNumber.textContent = String(index + 1).padStart(2, '0');
  qText.textContent   = q.text;

  // Code block
  if (q.code) {
    codeBlock.textContent = q.code;
    codeBlock.classList.add('visible');
  } else {
    codeBlock.textContent = '';
    codeBlock.classList.remove('visible');
  }

  // Options
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

  // Submit btn
  submitBtn.disabled = selected === null || submitted;

  // Feedback
  if (submitted) {
    showFeedback(selected === q.answer, q.explanation);
  } else {
    feedbackPanel.className = 'feedback-panel';
    feedbackPanel.style.display = 'none';
  }

  // Progress
  const pct = ((index + 1) / questions.length) * 100;
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `Q ${index + 1} of ${questions.length}`;
  qCounter.textContent = `${index + 1} / ${questions.length}`;

  // Nav
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? 'Finish ✓' : 'Next →';

  // Score
  scoreDisplay.textContent = score;
}

// ── Select option ──
function selectOption(i) {
  if (submitted) return;
  selected = i;
  answers[current] = i;

  // Update visuals
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

  // Lock options + show correct/wrong
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
    emoji = '🏆'; msg = "Perfect score! You've mastered Module 1!";
  } else if (pct >= 80) {
    emoji = '🎉'; msg = "Excellent work! You have a strong grasp of the concepts.";
  } else if (pct >= 60) {
    emoji = '👍'; msg = "Good effort! Review the questions you got wrong and try again.";
  } else if (pct >= 40) {
    emoji = '📖'; msg = "Keep studying! Go over the topics and give it another shot.";
  } else {
    emoji = '💪'; msg = "Don't give up! Review Module 1 and try again — you've got this.";
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