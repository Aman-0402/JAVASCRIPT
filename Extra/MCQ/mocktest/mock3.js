// ── Theme Toggle ──
function initMockTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('mockThemeToggle');
    const savedTheme = localStorage.getItem('js-mock-theme') || 'dark';

    if (savedTheme === 'light') {
        html.classList.add('light-theme');
    }

    themeToggle?.addEventListener('click', () => {
        html.classList.toggle('light-theme');
        const isDark = !html.classList.contains('light-theme');
        localStorage.setItem('js-mock-theme', isDark ? 'dark' : 'light');
    });
}

initMockTheme();

// Quiz Questions Data
const quizData = [
    {
        id: 1,
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["int x = 10", "var x = 10", "declare x = 10", "variable x = 10"],
        correct: 1,
        explanation: "var x = 10 is a valid JavaScript variable declaration."
    },
    {
        id: 2,
        question: "What will be the output of the following code?\nconsole.log(10 + \"5\");",
        options: ["15", "\"105\"", "105", "Error"],
        correct: 1,
        explanation: "When a number is added to a string, JavaScript performs string concatenation."
    },
    {
        id: 3,
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "=", "===", "!="],
        correct: 2,
        explanation: "=== checks both value and type, so it is the strict equality operator."
    },
    {
        id: 4,
        question: "What will be the output of the following code?\nconsole.log(typeof \"Hello\");",
        options: ["string", "\"string\"", "text", "object"],
        correct: 1,
        explanation: "typeof returns the string value \"string\" for text data."
    },
    {
        id: 5,
        question: "Which loop executes at least once regardless of condition?",
        options: ["for", "while", "do...while", "foreach"],
        correct: 2,
        explanation: "A do...while loop runs its body once before checking the condition."
    },
    {
        id: 6,
        question: "What will be the output of the following code?\nconsole.log(5 == \"5\");",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation: "Loose equality converts the string to a number, so 5 == \"5\" is true."
    },
    {
        id: 7,
        question: "Which method is used to print output in the console?",
        options: ["print()", "echo()", "console.log()", "write()"],
        correct: 2,
        explanation: "console.log() is used to print output in the browser or Node.js console."
    },
    {
        id: 8,
        question: "What will be the output of the following code?\nconsole.log(Boolean(0));",
        options: ["true", "false", "0", "Error"],
        correct: 1,
        explanation: "0 is a falsy value in JavaScript, so Boolean(0) returns false."
    },
    {
        id: 9,
        question: "Which of the following is used to define a constant variable?",
        options: ["var", "let", "const", "static"],
        correct: 2,
        explanation: "const declares a variable whose binding cannot be reassigned."
    },
    {
        id: 10,
        question: "What will be the output of the following code?\nconsole.log(\"5\" * 2);",
        options: ["10", "\"10\"", "52", "Error"],
        correct: 0,
        explanation: "The multiplication operator converts \"5\" to the number 5, producing 10."
    },
    {
        id: 11,
        question: "What will be the output of the following code?\nconsole.log(typeof 10);",
        options: ["\"number\"", "\"int\"", "\"float\"", "number"],
        correct: 0,
        explanation: "typeof 10 returns the string \"number\"."
    },
    {
        id: 12,
        question: "Which of the following is used to add an element at the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correct: 1,
        explanation: "push() adds one or more elements to the end of an array."
    },
    {
        id: 13,
        question: "What will be the output of the following code?\nconsole.log(null == undefined);",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation: "With loose equality, null and undefined are considered equal."
    },
    {
        id: 14,
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correct: 3,
        explanation: "JavaScript does not have a separate Character data type."
    },
    {
        id: 15,
        question: "What will be the output of the following code?\nconsole.log(\"10\" - 3);",
        options: ["7", "\"7\"", "103", "Error"],
        correct: 0,
        explanation: "The subtraction operator converts \"10\" to the number 10, so the result is 7."
    },
    {
        id: 16,
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "static", "define"],
        correct: 1,
        explanation: "let creates a block-scoped variable."
    },
    {
        id: 17,
        question: "What will be the output of the following code?\nconsole.log(!!0);",
        options: ["true", "false", "0", "Error"],
        correct: 1,
        explanation: "Double negation converts a value to Boolean, and 0 becomes false."
    },
    {
        id: 18,
        question: "Which of the following method converts a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
        correct: 1,
        explanation: "JSON.stringify() converts a JavaScript value or object into a JSON string."
    },
    {
        id: 19,
        question: "What will be the output of the following code?\nconsole.log(3 + true);",
        options: ["3", "4", "true", "Error"],
        correct: 1,
        explanation: "true is coerced to 1 in numeric addition, so the result is 4."
    },
    {
        id: 20,
        question: "Which of the following is used to remove the first element from an array?",
        options: ["pop()", "shift()", "push()", "slice()"],
        correct: 1,
        explanation: "shift() removes the first element from an array."
    },
    {
        id: 21,
        question: "What will be the output of the following code?\nconsole.log(typeof NaN);",
        options: ["\"NaN\"", "\"number\"", "\"undefined\"", "Error"],
        correct: 1,
        explanation: "NaN is still of type number in JavaScript."
    },
    {
        id: 22,
        question: "Which of the following method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 1,
        explanation: "pop() removes and returns the last element of an array."
    },
    {
        id: 23,
        question: "What will be the output of the following code?\nconsole.log(\"6\" / 2);",
        options: ["3", "\"3\"", "62", "Error"],
        correct: 0,
        explanation: "Division converts \"6\" to a number, so the result is 3."
    },
    {
        id: 24,
        question: "Which of the following is used to combine two or more arrays?",
        options: ["join()", "concat()", "slice()", "splice()"],
        correct: 1,
        explanation: "concat() returns a new array by combining arrays or values."
    },
    {
        id: 25,
        question: "What will be the output of the following code?\nconsole.log([] == false);",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation: "With loose equality, an empty array is coerced and compares equal to false."
    },
    {
        id: 26,
        question: "Which keyword is used to exit from a loop in JavaScript?",
        options: ["stop", "break", "return", "exit"],
        correct: 1,
        explanation: "break immediately exits the current loop."
    },
    {
        id: 27,
        question: "What will be the output of the following code?\nconsole.log(typeof undefined);",
        options: ["\"null\"", "\"undefined\"", "\"object\"", "Error"],
        correct: 1,
        explanation: "typeof undefined returns the string \"undefined\"."
    },
    {
        id: 28,
        question: "Which of the following method is used to extract a part of a string?",
        options: ["substr()", "push()", "pop()", "join()"],
        correct: 0,
        explanation: "substr() is used to extract part of a string."
    },
    {
        id: 29,
        question: "What will be the output of the following code?\nconsole.log(1 + false);",
        options: ["1", "0", "false", "Error"],
        correct: 0,
        explanation: "false is coerced to 0, so the result of 1 + false is 1."
    },
    {
        id: 30,
        question: "Which of the following is a correct way to define a function in JavaScript?",
        options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "function = myFunc() {}"],
        correct: 0,
        explanation: "function myFunc() {} is valid JavaScript function syntax."
    },
    {
        id: 31,
        question: "What will be the output of the following code?\nconsole.log(\"5\" + 2 + 3);",
        options: ["10", "523", "55", "Error"],
        correct: 1,
        explanation: "Once JavaScript starts string concatenation, the remaining values are appended as strings."
    },
    {
        id: 32,
        question: "Which of the following method adds an element at the beginning of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 3,
        explanation: "unshift() adds elements to the beginning of an array."
    },
    {
        id: 33,
        question: "What will be the output of the following code?\nconsole.log(typeof []);",
        options: ["\"array\"", "\"object\"", "\"list\"", "Error"],
        correct: 1,
        explanation: "Arrays are a kind of object in JavaScript, so typeof [] returns \"object\"."
    },
    {
        id: 34,
        question: "Which of the following is used to convert a string into an integer?",
        options: ["parseInt()", "toString()", "Number.toInt()", "convert()"],
        correct: 0,
        explanation: "parseInt() converts a string into an integer value."
    },
    {
        id: 35,
        question: "What will be the output of the following code?\nconsole.log(2 == \"2\" && 2 === \"2\");",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation: "2 == \"2\" is true, but 2 === \"2\" is false, so the full expression is false."
    },
    {
        id: 36,
        question: "Which keyword is used to handle exceptions in JavaScript?",
        options: ["try", "catch", "throw", "All of the above"],
        correct: 3,
        explanation: "try, catch, and throw are all part of JavaScript exception handling."
    },
    {
        id: 37,
        question: "What will be the output of the following code?\nconsole.log(Boolean(\"0\"));",
        options: ["true", "false", "0", "Error"],
        correct: 0,
        explanation: "Any non-empty string is truthy, including \"0\"."
    },
    {
        id: 38,
        question: "Which of the following operator is used to check property existence in an object?",
        options: ["has", "exist", "in", "check"],
        correct: 2,
        explanation: "The in operator checks whether a property exists in an object."
    },
    {
        id: 39,
        question: "What will be the output of the following code?\nconsole.log(0 === false);",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation: "Strict equality does not coerce types, so number 0 is not equal to boolean false."
    },
    {
        id: 40,
        question: "Which of the following is a valid way to create an object in JavaScript?",
        options: ["var obj = [];", "var obj = {};", "var obj = ();", "var obj = <>;"],
        correct: 1,
        explanation: "Curly braces create an object literal in JavaScript."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let answers = new Array(quizData.length).fill(null);
let answered = new Array(quizData.length).fill(false);

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(quizData.length).fill(null);
    answered = new Array(quizData.length).fill(false);
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    const question = quizData[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');

    questionText.textContent = `Question ${currentQuestion + 1}: ${question.question}`;

    optionsContainer.innerHTML = '';
    feedbackMessage.classList.add('hidden');

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${currentQuestion}`;
        radio.value = index;
        radio.id = `option-${index}`;

        if (answered[currentQuestion] && answers[currentQuestion] === index) {
            radio.checked = true;
        }

        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);

        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });

    if (answered[currentQuestion]) {
        const selectedOption = optionsContainer.querySelectorAll('.option')[answers[currentQuestion]];
        const correctIndex = question.correct;
        const correctOption = optionsContainer.querySelectorAll('.option')[correctIndex];

        if (answers[currentQuestion] === correctIndex) {
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('incorrect');
            correctOption.classList.add('correct');
        }

        optionsContainer.querySelectorAll('.option').forEach((opt) => {
            opt.classList.add('disabled');
        });
    }

    updateProgress();
    updateNavigationButtons();
}

// Select Option
function selectOption(index) {
    if (answered[currentQuestion]) {
        return;
    }

    const question = quizData[currentQuestion];
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackText = document.getElementById('feedbackText');

    answers[currentQuestion] = index;
    answered[currentQuestion] = true;

    optionsContainer.querySelectorAll('.option').forEach((opt) => {
        opt.classList.add('disabled');
    });

    const selectedOption = optionsContainer.querySelectorAll('.option')[index];
    const correctIndex = question.correct;
    const correctOption = optionsContainer.querySelectorAll('.option')[correctIndex];

    if (index === correctIndex) {
        selectedOption.classList.add('correct');
        score++;
        feedbackText.textContent = getCorrectFeedback();
        feedbackMessage.classList.remove('incorrect');
        feedbackMessage.classList.add('correct');
        celebrateCorrectAnswer();
    } else {
        selectedOption.classList.add('incorrect');
        correctOption.classList.add('correct');
        feedbackText.textContent = `❌ Wrong! The correct answer is: ${question.options[correctIndex]}`;
        feedbackMessage.classList.remove('correct');
        feedbackMessage.classList.add('incorrect');
    }

    feedbackMessage.classList.remove('hidden');
    document.getElementById('score').textContent = score;

    updateNavigationButtons();
}

// Get Random Correct Feedback Message
function getCorrectFeedback() {
    const feedbackMessages = [
        "🎉 Correct! Well done!",
        "✨ Perfect! You nailed it!",
        "🚀 Excellent! Keep it up!",
        "⭐ Great! That's right!",
        "💯 Amazing! You're on fire!",
        "🌟 Brilliant! Spot on!",
        "🎯 Awesome! Exactly right!",
        "👏 Fantastic! You got it!",
        "🏆 Champion! That's correct!",
        "✅ Yes! That's the answer!"
    ];

    return feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
}

// Celebrate Correct Answer
function celebrateCorrectAnswer() {
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    setTimeout(() => {
        celebration.classList.add('hidden');
    }, 2000);
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === quizData.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// Navigate to Next Question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

// Navigate to Previous Question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Submit Quiz
function submitQuiz() {
    const percentage = (score / quizData.length) * 100;
    const resultModal = document.getElementById('resultModal');
    const finalScore = document.getElementById('finalScore');
    const finalPercentage = document.getElementById('finalPercentage');
    const performance = document.getElementById('performance');
    const resultMessage = document.getElementById('resultMessage');

    finalScore.textContent = `${score}/${quizData.length}`;
    finalPercentage.textContent = percentage.toFixed(1) + '%';

    let performanceText = '';
    let message = '';

    if (percentage === 100) {
        performanceText = 'Perfect! 🏆';
        message = '🎊 Outstanding! You got all 40 questions correct! You are a JavaScript expert!';
    } else if (percentage >= 90) {
        performanceText = 'Excellent! 🌟';
        message = '🎉 Excellent performance! You have a strong understanding of JavaScript.';
    } else if (percentage >= 80) {
        performanceText = 'Very Good! ✨';
        message = '👍 Very good! You have a solid grasp of JavaScript concepts.';
    } else if (percentage >= 70) {
        performanceText = 'Good! 👍';
        message = '💪 Good effort! Keep practicing to improve your JavaScript skills.';
    } else if (percentage >= 60) {
        performanceText = 'Fair 📚';
        message = '📖 You need more practice. Review the concepts and try again!';
    } else {
        performanceText = 'Needs Work 📖';
        message = '💡 Keep learning! Review JavaScript fundamentals and retake the quiz.';
    }

    performance.textContent = performanceText;
    resultMessage.textContent = message;
    resultModal.classList.remove('hidden');
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('resultModal').classList.add('hidden');
    document.getElementById('reviewModal').classList.add('hidden');
    initQuiz();
}

// Review Answers
function reviewAnswers() {
    const reviewModal = document.getElementById('reviewModal');
    const reviewContainer = document.getElementById('reviewContainer');

    reviewContainer.innerHTML = '';

    quizData.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        const isCorrect = answers[index] === question.correct;
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const questionDiv = document.createElement('div');
        questionDiv.className = 'review-question';
        questionDiv.textContent = `Q${index + 1}: ${question.question}`;

        const yourAnswerDiv = document.createElement('div');
        yourAnswerDiv.className = 'review-answer your-answer';
        yourAnswerDiv.textContent = `Your answer: ${answers[index] !== null ? question.options[answers[index]] : 'Not answered'}`;

        reviewItem.appendChild(questionDiv);
        reviewItem.appendChild(yourAnswerDiv);

        if (answers[index] !== question.correct) {
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.className = 'review-answer correct-answer';
            correctAnswerDiv.textContent = `Correct answer: ${question.options[question.correct]}`;
            reviewItem.appendChild(correctAnswerDiv);
        }

        reviewContainer.appendChild(reviewItem);
    });

    reviewModal.classList.remove('hidden');
}

// Close Review
function closeReview() {
    document.getElementById('reviewModal').classList.add('hidden');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initQuiz);
