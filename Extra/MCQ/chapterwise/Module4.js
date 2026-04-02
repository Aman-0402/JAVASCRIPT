// ── Module 4: Document Object Model (DOM) ──
// All 30 questions with options, answer, and explanation

const questions = [
  {
    id: 1,
    text: "What does DOM stand for?",
    code: null,
    options: ["Data Object Model", "Document Object Model", "Dynamic Object Method", "Document Order Model"],
    answer: 1,
    explanation: "DOM stands for Document Object Model."
  },
  {
    id: 2,
    text: "What is the DOM?",
    code: null,
    options: ["Programming language", "Database", "Tree structure of HTML", "CSS framework"],
    answer: 2,
    explanation: "DOM represents HTML as a tree of objects."
  },
  {
    id: 3,
    text: "What is a node in DOM?",
    code: null,
    options: ["Only HTML element", "Part of DOM structure", "CSS property", "JavaScript function"],
    answer: 1,
    explanation: "Nodes are all parts of DOM (elements, text, etc.)."
  },
  {
    id: 4,
    text: "Which is an element node?",
    code: null,
    options: ["Text", "Attribute", "<div>", "Comment"],
    answer: 2,
    explanation: "HTML tags are element nodes."
  },
  {
    id: 5,
    text: "Which represents the root of DOM?",
    code: null,
    options: ["body", "html", "head", "document"],
    answer: 3,
    explanation: "document is the root object."
  },
  {
    id: 6,
    text: "Which event occurs when user clicks?",
    code: null,
    options: ["hover", "click", "keydown", "submit"],
    answer: 1,
    explanation: "click event triggers on mouse click."
  },
  {
    id: 7,
    text: "Which event occurs when mouse moves over an element?",
    code: null,
    options: ["click", "mouseover", "keyup", "submit"],
    answer: 1,
    explanation: "mouseover triggers when pointer is over element."
  },
  {
    id: 8,
    text: "Which event detects key press?",
    code: null,
    options: ["click", "keydown", "mouseover", "submit"],
    answer: 1,
    explanation: "keydown triggers when key is pressed."
  },
  {
    id: 9,
    text: "Which event triggers when form is submitted?",
    code: null,
    options: ["change", "submit", "click", "keyup"],
    answer: 1,
    explanation: "submit event fires on form submission."
  },
  {
    id: 10,
    text: "Which event triggers when input value changes?",
    code: null,
    options: ["change", "click", "keydown", "hover"],
    answer: 0,
    explanation: "change triggers when value changes."
  },
  {
    id: 11,
    text: "Which property is used to change HTML content?",
    code: null,
    options: ["textContent", "innerHTML", "value", "src"],
    answer: 1,
    explanation: "innerHTML modifies HTML content."
  },
  {
    id: 12,
    text: "Which is safer for text only?",
    code: null,
    options: ["innerHTML", "textContent", "value", "id"],
    answer: 1,
    explanation: "textContent avoids HTML parsing."
  },
  {
    id: 13,
    text: "What does innerHTML do?",
    code: null,
    options: ["Adds CSS", "Reads/sets HTML content", "Removes element", "Creates event"],
    answer: 1,
    explanation: "It modifies HTML inside element."
  },
  {
    id: 14,
    text: "Which method selects element by ID?",
    code: null,
    options: ["getElement()", "getElementById()", "querySelector()", "selectId()"],
    answer: 1,
    explanation: "Used to select by ID."
  },
  {
    id: 15,
    text: "Which method selects first matching element?",
    code: null,
    options: ["getElementById()", "querySelector()", "queryAll()", "getElements()"],
    answer: 1,
    explanation: "Returns first match."
  },
  {
    id: 16,
    text: "Which method selects all matching elements?",
    code: null,
    options: ["querySelectorAll()", "getElementById()", "selectAll()", "findAll()"],
    answer: 0,
    explanation: "Returns all matches."
  },
  {
    id: 17,
    text: "How to change element text?",
    code: null,
    options: ["element.textContent", "element.value", "element.innerTextOnly", "element.change()"],
    answer: 0,
    explanation: "textContent updates text."
  },
  {
    id: 18,
    text: "How to add an element?",
    code: null,
    options: ["appendChild()", "addElement()", "createNode()", "insertHTML()"],
    answer: 0,
    explanation: "Adds child element."
  },
  {
    id: 19,
    text: "How to remove an element?",
    code: null,
    options: ["delete()", "removeChild()", "clear()", "erase()"],
    answer: 1,
    explanation: "Removes child element."
  },
  {
    id: 20,
    text: "Which changes an attribute?",
    code: null,
    options: ["setAttribute()", "changeAttr()", "setValue()", "modify()"],
    answer: 0,
    explanation: "Used to modify attributes."
  },
  {
    id: 21,
    text: "What does addEventListener() do?",
    code: null,
    options: ["Removes event", "Adds event handler", "Creates element", "Changes CSS"],
    answer: 1,
    explanation: "Attaches event to element."
  },
  {
    id: 22,
    text: "Which syntax is correct?",
    code: null,
    options: [
      "element.addEventListener(\"click\", func)",
      "element.event(\"click\")",
      "element.add(\"click\")",
      "element.listen(\"click\")"
    ],
    answer: 0,
    explanation: "Correct syntax for event listener."
  },
  {
    id: 23,
    text: "What is an event listener?",
    code: null,
    options: ["CSS property", "Function that responds to event", "HTML tag", "Loop"],
    answer: 1,
    explanation: "It runs when event occurs."
  },
  {
    id: 24,
    text: "What is dynamic content?",
    code: null,
    options: ["Static HTML", "Changing content using JS", "CSS styling", "Database"],
    answer: 1,
    explanation: "JS updates content dynamically."
  },
  {
    id: 25,
    text: "What is the result?",
    code: `document.getElementById("demo")`,
    options: ["CSS", "Element", "Text", "Error"],
    answer: 1,
    explanation: "Returns DOM element."
  },
  {
    id: 26,
    text: "What does this do?",
    code: `document.querySelector(".box")`,
    options: ["Selects all elements", "Selects first element with class box", "Selects ID", "Removes element"],
    answer: 1,
    explanation: "Returns first match."
  },
  {
    id: 27,
    text: "Which method creates a new element?",
    code: null,
    options: ["createElement()", "newElement()", "addElement()", "makeElement()"],
    answer: 0,
    explanation: "Creates new DOM element."
  },
  {
    id: 28,
    text: "What is the purpose of events?",
    code: null,
    options: ["Styling", "Interaction", "Storage", "Calculation"],
    answer: 1,
    explanation: "Events handle user interaction."
  },
  {
    id: 29,
    text: "Which is a keyboard event?",
    code: null,
    options: ["click", "keyup", "mouseover", "submit"],
    answer: 1,
    explanation: "keyup occurs when key is released."
  },
  {
    id: 30,
    text: "What is a custom event?",
    code: null,
    options: ["Default browser event", "User-defined event", "CSS event", "Error"],
    answer: 1,
    explanation: "Custom events are created manually."
  }
];

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
    emoji = '🏆'; msg = "Perfect score! You've mastered Module 4!";
  } else if (pct >= 80) {
    emoji = '🎉'; msg = "Excellent work! You have a strong grasp of the concepts.";
  } else if (pct >= 60) {
    emoji = '👍'; msg = "Good effort! Review the questions you got wrong and try again.";
  } else if (pct >= 40) {
    emoji = '📖'; msg = "Keep studying! Go over the topics and give it another shot.";
  } else {
    emoji = '💪'; msg = "Don't give up! Review Module 4 and try again — you've got this.";
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
