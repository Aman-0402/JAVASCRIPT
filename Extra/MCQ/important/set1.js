const questions = [
  { q: "What is the value of x? var x = 15; x %= 5;", opts: ["0", "3", "5", "Undefined"], correct: 0 },
  { q: 'What will be the output? var x = "10"; var y = x + 10; console.log(y);', opts: ["20", '"20"', '"1010"', "Error"], correct: 2 },
  { q: "Which keyword is used to declare a variable?", opts: ["int", "var", "define", "letvar"], correct: 1 },
  { q: "Which keyword declares a constant?", opts: ["var", "let", "const", "constant"], correct: 2 },
  { q: "Which operator checks value AND type?", opts: ["==", "=", "===", "!="], correct: 2 },
  { q: "Which method adds element at end of array?", opts: ["shift()", "unshift()", "push()", "pop()"], correct: 2 },
  { q: "Which method removes last element?", opts: ["shift()", "pop()", "push()", "unshift()"], correct: 1 },
  { q: "Which loop is used when iterations are known?", opts: ["while", "do...while", "for", "if"], correct: 2 },
  { q: "Which loop runs at least once?", opts: ["for", "while", "do...while", "if"], correct: 2 },
  { q: "Which method prints in console?", opts: ["alert()", "prompt()", "console.log()", "print()"], correct: 2 },
  { q: "Which function checks Not-a-Number?", opts: ["checkNumber()", "isNaN()", "typeofNumber()", "NumberCheck()"], correct: 1 },
  { q: "Which operator is used for modulus?", opts: ["/", "%", "*", "+"], correct: 1 },
  { q: "Which HTML tag is used for JS?", opts: ["<js>", "<script>", "<javascript>", "<link>"], correct: 1 },
  { q: "Which method selects element by ID?", opts: ["getElementsByTagName", "getElementsByClassName", "getElementById", "querySelectorAll"], correct: 2 },
  { q: "Which method displays popup?", opts: ["console.log()", "alert()", "prompt()", "confirm()"], correct: 1 },
  { q: "Which event runs when page loads?", opts: ["onclick", "onmouseover", "onload", "onchange"], correct: 2 },
  { q: "Which event occurs on mouse hover?", opts: ["onclick", "onmouseover", "onload", "onchange"], correct: 1 },
  { q: "Which method converts string → integer?", opts: ["toString()", "parseInt()", "Number()", "int()"], correct: 1 },
  { q: "Which method generates random number?", opts: ["Math.round()", "Math.floor()", "Math.random()", "Math.ceil()"], correct: 2 },
  { q: "Which keyword is used to return value?", opts: ["break", "return", "exit", "give"], correct: 1 },
  { q: "What is output? console.log(5 + \"5\");", opts: ["10", '"10"', '"55"', "Error"], correct: 2 },
  { q: 'What will this print? console.log(typeof null);', opts: ['"null"', '"object"', '"undefined"', "Error"], correct: 1 },
  { q: "Which method joins array into string?", opts: ["join()", "concat()", "push()", "pop()"], correct: 0 },
  { q: "Which property returns array length?", opts: ["size()", "length", "count()", "index()"], correct: 1 },
  { q: "Which operator is logical AND?", opts: ["&&", "||", "!", "&"], correct: 0 },
  { q: "Which operator is logical OR?", opts: ["&&", "||", "!", "|"], correct: 1 },
  { q: "Which operator is NOT?", opts: ["&&", "||", "!", "!="], correct: 2 },
  { q: "Which statement handles errors?", opts: ["if", "try-catch", "loop", "switch"], correct: 1 },
  { q: "Which block always runs?", opts: ["try", "catch", "finally", "throw"], correct: 2 },
  { q: "What is output? var x = 5; x = x + 5; console.log(x);", opts: ["5", "10", "55", "Error"], correct: 1 },
  { q: "Which method rounds to nearest integer?", opts: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.random()"], correct: 2 },
  { q: "Which method rounds down?", opts: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"], correct: 2 },
  { q: "Which statement stops loop?", opts: ["continue", "break", "stop", "exit"], correct: 1 },
  { q: "Which skips iteration?", opts: ["break", "continue", "skip", "next"], correct: 1 },
  { q: "Which method copies array?", opts: ["splice()", "slice()", "split()", "join()"], correct: 1 },
  { q: "Which method removes from index?", opts: ["pop()", "shift()", "splice()", "slice()"], correct: 2 },
  { q: "Which keyword defines function?", opts: ["func", "function", "def", "method"], correct: 1 },
  { q: "What is output? console.log(\"5\" - 2);", opts: ["3", '"3"', "52", "Error"], correct: 0 },
  { q: "What is output? console.log(true + 1);", opts: ["1", "2", "true1", "Error"], correct: 1 },
  { q: "What is output? console.log([] + []);", opts: ["[]", '""', "undefined", "Error"], correct: 1 }
];

let currentQuestion = 0;
let userAnswers = [];

function initQuiz() {
  document.getElementById('totalQ').textContent = questions.length;
  loadQuestion();
  setupEventListeners();
}

function loadQuestion() {
  if (currentQuestion >= questions.length) { showResults(); return; }
  const question = questions[currentQuestion];
  document.getElementById('questionText').textContent = question.q;
  document.getElementById('currentQ').textContent = currentQuestion + 1;
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progressPercent').textContent = Math.round(progressPercent) + '%';
  document.getElementById('progressFill').style.width = progressPercent + '%';
  const optionsGrid = document.getElementById('optionsGrid');
  optionsGrid.innerHTML = '';
  question.opts.forEach((opt, idx) => {
    const optionEl = document.createElement('div');
    optionEl.className = 'option';
    optionEl.innerHTML = `<span class='option-label'>${String.fromCharCode(65 + idx)}</span><span>${opt}</span>`;
    optionEl.addEventListener('click', () => selectOption(idx));
    optionsGrid.appendChild(optionEl);
  });
  if (userAnswers[currentQuestion] !== undefined) { document.querySelectorAll('.option')[userAnswers[currentQuestion]].classList.add('selected'); }
  document.getElementById('resultMessage').classList.remove('show', 'correct', 'incorrect');
  document.getElementById('nextBtn').textContent = currentQuestion === questions.length - 1 ? 'Submit Quiz →' : 'Check Answer →';
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
}

function selectOption(idx) {
  document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.option')[idx].classList.add('selected');
  userAnswers[currentQuestion] = idx;
}

function setupEventListeners() {
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (userAnswers[currentQuestion] === undefined) {
      const msg = document.getElementById('resultMessage');
      msg.textContent = 'Please select an answer!';
      msg.className = 'result-message show incorrect';
      return;
    }
    const question = questions[currentQuestion];
    const msg = document.getElementById('resultMessage');
    const isCorrect = userAnswers[currentQuestion] === question.correct;
    msg.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect!';
    msg.className = 'result-message show ' + (isCorrect ? 'correct' : 'incorrect');
    setTimeout(() => { currentQuestion++; loadQuestion(); }, 800);
  });
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentQuestion > 0) { currentQuestion--; loadQuestion(); }
  });
}

function showResults() {
  const correct = userAnswers.filter((ans, idx) => ans === questions[idx].correct).length;
  const incorrect = userAnswers.filter((ans, idx) => ans !== questions[idx].correct).length;
  const skipped = questions.length - userAnswers.length;
  const percentage = Math.round((correct / questions.length) * 100);
  document.getElementById('finalScore').textContent = correct;
  document.getElementById('scorePercent').textContent = percentage + '%';
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('incorrectCount').textContent = incorrect;
  document.getElementById('skippedCount').textContent = skipped;
  document.getElementById('quizComplete').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', initQuiz);
