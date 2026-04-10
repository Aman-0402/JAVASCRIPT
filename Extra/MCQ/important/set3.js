const questions = [
  { q: "What is the output? console.log(a); var a = 5;", opts: ["5", "undefined", "Error", "null"], correct: 1 },
  { q: "What is the output? console.log(a); let a = 5;", opts: ["undefined", "5", "Error", "null"], correct: 2 },
  { q: "What is the output? console.log(typeof NaN);", opts: ["NaN", "number", "undefined", "object"], correct: 1 },
  { q: "What is the output? console.log(typeof undefined);", opts: ["undefined", "object", "null", "error"], correct: 0 },
  { q: "What is the output? console.log([] == false);", opts: ["true", "false", "Error", "undefined"], correct: 0 },
  { q: "What is the output? console.log([] === false);", opts: ["true", "false", "Error", "undefined"], correct: 1 },
  { q: "What is the output? console.log(null == undefined);", opts: ["true", "false", "Error", "undefined"], correct: 0 },
  { q: "What is the output? console.log(null === undefined);", opts: ["true", "false", "Error", "undefined"], correct: 1 },
  { q: "What is the output? console.log(\"5\" + 2);", opts: ["7", "\"52\"", "10", "Error"], correct: 1 },
  { q: "What is the output? console.log(\"5\" - 2);", opts: ["3", "\"3\"", "52", "Error"], correct: 0 },
  { q: "What is the output? console.log(1 + true);", opts: ["1", "2", "true", "Error"], correct: 1 },
  { q: "What is the output? console.log(false + 1);", opts: ["1", "0", "false", "Error"], correct: 0 },
  { q: "What is the output? console.log(\"hello\" - 1);", opts: ["0", "NaN", "undefined", "Error"], correct: 1 },
  { q: "What is the output? console.log({} + []);", opts: ["[object Object]", "0", "\"[object Object]\"", "0 or \"[object Object]\" depending context"], correct: 3 },
  { q: "What is the output? console.log([] + {});", opts: ["\"[object Object]\"", "{}", "[]", "Error"], correct: 0 },
  { q: "What is the output? console.log(typeof function(){});", opts: ["object", "function", "undefined", "method"], correct: 1 },
  { q: "What is the output? (function(){ console.log(typeof x); var x = 10; })();", opts: ["number", "undefined", "error", "null"], correct: 1 },
  { q: "What is the output? let x = 10; { let x = 20; } console.log(x);", opts: ["20", "10", "undefined", "Error"], correct: 1 },
  { q: "What is the output? var x = 10; function test() { console.log(x); var x = 5; } test();", opts: ["10", "5", "undefined", "Error"], correct: 2 },
  { q: "What is the output? var x = 10; function test() { console.log(x); } test();", opts: ["10", "undefined", "Error", "null"], correct: 0 },
  { q: "What is closure?", opts: ["Function inside loop", "Function remembers outer variables", "Function without name", "Arrow function"], correct: 1 },
  { q: "What is the output? function outer() { let x = 5; return function() { return x; }; } let f = outer(); console.log(f());", opts: ["5", "undefined", "error", "null"], correct: 0 },
  { q: "What is the output? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }", opts: ["0 1 2", "3 3 3", "undefined", "error"], correct: 1 },
  { q: "What is the output? for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }", opts: ["0 1 2", "3 3 3", "undefined", "error"], correct: 0 },
  { q: "Which is NOT primitive?", opts: ["string", "number", "object", "boolean"], correct: 2 },
  { q: "What is output? console.log(!!\"hello\");", opts: ["false", "true", "undefined", "error"], correct: 1 },
  { q: "What is output? console.log(!!0);", opts: ["true", "false", "0", "error"], correct: 1 },
  { q: "What is output? console.log([] == []);", opts: ["true", "false", "error", "undefined"], correct: 1 },
  { q: "What is output? console.log({} == {});", opts: ["true", "false", "error", "undefined"], correct: 1 },
  { q: "What is output? console.log(\"2\" > \"12\");", opts: ["true", "false", "error", "undefined"], correct: 0 },
  { q: "What is output? console.log(2 > \"12\");", opts: ["true", "false", "error", "undefined"], correct: 1 },
  { q: "What is output? console.log(2 == \"2\");", opts: ["true", "false", "error", "undefined"], correct: 0 },
  { q: "What is output? console.log(2 === \"2\");", opts: ["true", "false", "error", "undefined"], correct: 1 },
  { q: "What is output? console.log(typeof []);", opts: ["array", "object", "list", "undefined"], correct: 1 },
  { q: "What is output? console.log(typeof {});", opts: ["object", "array", "null", "undefined"], correct: 0 },
  { q: "What is output? console.log(typeof null);", opts: ["null", "object", "undefined", "error"], correct: 1 },
  { q: "What is output? console.log(1 + \"2\" + 3);", opts: ["6", "\"123\"", "\"33\"", "error"], correct: 1 },
  { q: "What is output? console.log(1 + 2 + \"3\");", opts: ["6", "\"123\"", "\"33\"", "error"], correct: 2 },
  { q: "What is output? console.log(parseInt(\"10px\"));", opts: ["10", "NaN", "\"10px\"", "error"], correct: 0 },
  { q: "What is output? console.log(isNaN(\"hello\"));", opts: ["true", "false", "error", "undefined"], correct: 0 }
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
