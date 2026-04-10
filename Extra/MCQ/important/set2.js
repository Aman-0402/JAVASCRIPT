const questions = [
  { q: "What is the output? var chain = \"\"; for (let i = 1; i <= 8; i++) { if (i % 2) continue; chain += i; } console.log(chain);", opts: ["1357", "2468", "12345678", "8642"], correct: 1 },
  { q: "Final array? var arr = [20, 40, 60, 80]; arr.shift(); arr.pop(); arr.push(10); arr.unshift(100);", opts: ["[40, 60, 10]", "[100, 40, 60, 10]", "[20, 40, 60]", "[100, 20, 40, 60]"], correct: 1 },
  { q: "Output? function test(x) { try { const y = 10; y = x * 2; } catch (e) { console.log(x * 3); } finally { console.log(x * 4); } } test(10);", opts: ["20", "30, 40", "40", "Error"], correct: 1 },
  { q: "What does .value do?", opts: ["Gets HTML", "Gets user input", "Adds content", "Deletes value"], correct: 1 },
  { q: "How to prevent form reload?", opts: ["stop()", "return false", "event.preventDefault()", "break"], correct: 2 },
  { q: "Which event validates form?", opts: ["onclick", "onsubmit", "onload", "onchange"], correct: 1 },
  { q: "Correct way to access input value?", opts: ["element.innerHTML", "element.value", "element.text", "element.id"], correct: 1 },
  { q: "Which method inserts HTML dynamically?", opts: ["console.log()", "innerHTML", "alert()", "prompt()"], correct: 1 },
  { q: "Output? console.log(10 == \"10\");", opts: ["false", "true", "Error", "undefined"], correct: 1 },
  { q: "Output? console.log(10 === \"10\");", opts: ["true", "false", "Error", "undefined"], correct: 1 },
  { q: "Which creates element?", opts: ["createNode()", "createElement()", "newElement()", "makeElement()"], correct: 1 },
  { q: "Which adds element?", opts: ["appendChild()", "push()", "pop()", "join()"], correct: 0 },
  { q: "Which inserts before element?", opts: ["insertBefore()", "appendChild()", "before()", "insert()"], correct: 0 },
  { q: "Output? console.log(typeof \"Hello\");", opts: ["string", "text", "object", "char"], correct: 0 },
  { q: "Output? console.log(typeof 100);", opts: ["int", "number", "float", "object"], correct: 1 },
  { q: "Which checks null?", opts: ["x = null", "x == null", "typeof null", "x === \"null\""], correct: 1 },
  { q: "Which event triggers on change?", opts: ["onclick", "onchange", "onload", "onmouseover"], correct: 1 },
  { q: "Which method reads JSON?", opts: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], correct: 1 },
  { q: "Which converts object → string?", opts: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], correct: 1 },
  { q: "Output? console.log(0 == false);", opts: ["true", "false", "Error", "undefined"], correct: 0 },
  { q: "Output? console.log(0 === false);", opts: ["true", "false", "Error", "undefined"], correct: 1 },
  { q: "Which method removes first element?", opts: ["shift()", "pop()", "splice()", "slice()"], correct: 0 },
  { q: "Which adds at start?", opts: ["push()", "unshift()", "shift()", "pop()"], correct: 1 },
  { q: "Which event for keyboard?", opts: ["onmouseover", "onclick", "onkeydown", "onload"], correct: 2 },
  { q: "Output? console.log(\"5\" * 2);", opts: ["10", "\"10\"", "52", "Error"], correct: 0 },
  { q: "Output? console.log(undefined + 1);", opts: ["1", "NaN", "undefined", "Error"], correct: 1 },
  { q: "Which method rounds up?", opts: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.random()"], correct: 1 },
  { q: "Which selects class?", opts: ["getElementById", "getElementsByClassName", "querySelector", "selectClass"], correct: 1 },
  { q: "Output? console.log([] + {});", opts: ["[object Object]", "{}", "[]", "Error"], correct: 0 },
  { q: "Which checks type?", opts: ["checkType", "typeof", "instance", "typeOfVar"], correct: 1 },
  { q: "Which method splits string?", opts: ["split()", "join()", "slice()", "splice()"], correct: 0 },
  { q: "Output? console.log(\"10\" - \"5\");", opts: ["5", "\"5\"", "105", "Error"], correct: 0 },
  { q: "Which keyword skips loop?", opts: ["break", "continue", "skip", "next"], correct: 1 },
  { q: "Which method returns index?", opts: ["indexOf()", "find()", "search()", "locate()"], correct: 0 },
  { q: "Output? console.log(null + 1);", opts: ["1", "null", "NaN", "Error"], correct: 0 },
  { q: "Which keyword defines block scope?", opts: ["var", "let", "const", "define"], correct: 1 },
  { q: "Which symbol is comment?", opts: ["<!-- -->", "//", "##", "**"], correct: 1 },
  { q: "Output? console.log(\"Hello\".length);", opts: ["4", "5", "6", "Error"], correct: 1 },
  { q: "Which method trims spaces?", opts: ["trim()", "strip()", "clean()", "remove()"], correct: 0 },
  { q: "Output? console.log(Boolean(\"\"));", opts: ["true", "false", "\"\"", "undefined"], correct: 1 }
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
