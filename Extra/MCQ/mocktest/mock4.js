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
        question: "What will be the output of the following JavaScript code?\nconsole.log(\"10\" + 5 - 2);",
        options: ["103", "13", "1052", "Error"],
        correct: 0,
        explanation: "\"10\" + 5 becomes \"105\", then \"105\" - 2 converts to a number and gives 103."
    },
    {
        id: 2,
        question: "Which of the following is used to declare a block-scoped constant?",
        options: ["var", "let", "const", "define"],
        correct: 2,
        explanation: "const declares a constant with block scope."
    },
    {
        id: 3,
        question: "What will be the output of the following code?\nconsole.log(typeof true);",
        options: ["\"boolean\"", "\"true\"", "boolean", "Error"],
        correct: 0,
        explanation: "typeof true returns the string \"boolean\"."
    },
    {
        id: 4,
        question: "Which of the following method is used to convert a string into a number?",
        options: ["parseInt()", "toString()", "join()", "concat()"],
        correct: 0,
        explanation: "parseInt() converts a numeric string into an integer."
    },
    {
        id: 5,
        question: "What will be the output of the following code?\nconsole.log(0 == \"\");",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation: "Loose equality coerces both values, so 0 == \"\" is true."
    },
    {
        id: 6,
        question: "Which of the following is used to remove the first element of an array?",
        options: ["pop()", "shift()", "push()", "splice()"],
        correct: 1,
        explanation: "shift() removes the first element from an array."
    },
    {
        id: 7,
        question: "What will be the output of the following code?\nconsole.log(typeof function(){});",
        options: ["\"object\"", "\"function\"", "\"undefined\"", "Error"],
        correct: 1,
        explanation: "Functions have the type \"function\" in JavaScript."
    },
    {
        id: 8,
        question: "Which operator is used for exponentiation in JavaScript?",
        options: ["^", "**", "exp", "^^"],
        correct: 1,
        explanation: "** is the exponentiation operator."
    },
    {
        id: 9,
        question: "What will be the output of the following code?\nconsole.log(\"5\" == 5);",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation: "Loose equality converts the string to a number, so the comparison is true."
    },
    {
        id: 10,
        question: "Which of the following is a valid way to create an array?",
        options: ["var arr = [1,2,3];", "var arr = {1,2,3};", "var arr = (1,2,3);", "var arr = <1,2,3>;"],
        correct: 0,
        explanation: "Square brackets are used to create an array literal."
    },
    {
        id: 11,
        question: "What will be the output of the following code?\nconsole.log(typeof \"5\" + 2);",
        options: ["\"string2\"", "\"string\"", "\"number2\"", "Error"],
        correct: 0,
        explanation: "typeof \"5\" gives \"string\", and then adding 2 concatenates it into \"string2\"."
    },
    {
        id: 12,
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
        correct: 1,
        explanation: "JSON.parse() converts a JSON string into a JavaScript object."
    },
    {
        id: 13,
        question: "What will be the output of the following code?\nconsole.log(2 + true + false);",
        options: ["3", "2", "true", "Error"],
        correct: 0,
        explanation: "true becomes 1 and false becomes 0, so the result is 3."
    },
    {
        id: 14,
        question: "Which keyword is used to define a variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        correct: 2,
        explanation: "const creates a binding that cannot be reassigned."
    },
    {
        id: 15,
        question: "What will be the output of the following code?\nconsole.log(\"4\" * \"2\");",
        options: ["8", "\"8\"", "42", "Error"],
        correct: 0,
        explanation: "The multiplication operator converts both strings to numbers, resulting in 8."
    },
    {
        id: 16,
        question: "Which of the following method removes the last element from an array?",
        options: ["shift()", "push()", "pop()", "unshift()"],
        correct: 2,
        explanation: "pop() removes and returns the last element of an array."
    },
    {
        id: 17,
        question: "What will be the output of the following code?\nconsole.log([] + []);",
        options: ["\"\"", "[]", "0", "Error"],
        correct: 0,
        explanation: "Both arrays become empty strings during coercion, so the result is an empty string."
    },
    {
        id: 18,
        question: "Which operator is used to assign a value to a variable?",
        options: ["==", "===", "=", "!="],
        correct: 2,
        explanation: "= is the assignment operator."
    },
    {
        id: 19,
        question: "What will be the output of the following code?\nconsole.log(10 > 5 && 5 > 10);",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation: "The first condition is true, but the second is false, so the full && expression is false."
    },
    {
        id: 20,
        question: "Which of the following is used to define a function in JavaScript?",
        options: ["func myFunc() {}", "function myFunc() {}", "def myFunc() {}", "create myFunc() {}"],
        correct: 1,
        explanation: "function myFunc() {} is valid JavaScript function syntax."
    },
    {
        id: 21,
        question: "What will be the output of the following code?\nconsole.log(typeof []);",
        options: ["\"array\"", "\"object\"", "\"list\"", "Error"],
        correct: 1,
        explanation: "Arrays are objects in JavaScript, so typeof [] returns \"object\"."
    },
    {
        id: 22,
        question: "Which of the following method adds one or more elements to the beginning of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 3,
        explanation: "unshift() adds elements to the start of an array."
    },
    {
        id: 23,
        question: "What will be the output of the following code?\nconsole.log(\"6\" + 2 * 3);",
        options: ["36", "\"612\"", "\"66\"", "Error"],
        correct: 2,
        explanation: "Multiplication happens first, so 2 * 3 is 6, then \"6\" + 6 becomes the string \"66\"."
    },
    {
        id: 24,
        question: "Which of the following is used to check the type of a variable?",
        options: ["type()", "typeof", "checkType()", "instanceof"],
        correct: 1,
        explanation: "typeof is the operator used to check a value's type."
    },
    {
        id: 25,
        question: "What will be the output of the following code?\nconsole.log(Boolean(\"false\"));",
        options: ["false", "true", "Error", "undefined"],
        correct: 1,
        explanation: "Any non-empty string is truthy, including \"false\"."
    },
    {
        id: 26,
        question: "Which of the following keyword is used to exit from a loop?",
        options: ["stop", "break", "exit", "return"],
        correct: 1,
        explanation: "break exits the current loop immediately."
    },
    {
        id: 27,
        question: "What will be the output of the following code?\nconsole.log(3 === \"3\");",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation: "Strict equality compares both type and value, so number 3 is not equal to string \"3\"."
    },
    {
        id: 28,
        question: "Which of the following method is used to join array elements into a string?",
        options: ["concat()", "join()", "slice()", "splice()"],
        correct: 1,
        explanation: "join() combines array elements into a string."
    },
    {
        id: 29,
        question: "What will be the output of the following code?\nconsole.log(null === undefined);",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation: "Strict equality does not coerce types, so null and undefined are not equal."
    },
    {
        id: 30,
        question: "Which of the following is a correct syntax to write an arrow function?",
        options: ["function => () {}", "() => {}", "=> function() {}", "-> () {}"],
        correct: 1,
        explanation: "() => {} is the correct arrow function syntax."
    },
    {
        id: 31,
        question: "What will be the output of the following code?\nconsole.log(\"5\" - \"2\" + \"3\");",
        options: ["33", "\"33\"", "23", "Error"],
        correct: 1,
        explanation: "\"5\" - \"2\" gives 3, then 3 + \"3\" becomes the string \"33\"."
    },
    {
        id: 32,
        question: "Which of the following method returns the length of an array?",
        options: ["size()", "length", "count()", "index()"],
        correct: 1,
        explanation: "Array length is accessed with the length property."
    },
    {
        id: 33,
        question: "What will be the output of the following code?\nconsole.log(!!0);",
        options: ["true", "false", "0", "Error"],
        correct: 1,
        explanation: "0 is falsy, so applying double negation returns false."
    },
    {
        id: 34,
        question: "Which of the following is used to remove specific elements from an array?",
        options: ["slice()", "splice()", "join()", "concat()"],
        correct: 1,
        explanation: "splice() can remove elements from a specific array position."
    },
    {
        id: 35,
        question: "What will be the output of the following code?\nconsole.log(typeof null);",
        options: ["\"null\"", "\"object\"", "\"undefined\"", "Error"],
        correct: 1,
        explanation: "typeof null is the well-known JavaScript quirk that returns \"object\"."
    },
    {
        id: 36,
        question: "Which operator is used to compare both value and type?",
        options: ["==", "=", "===", "!="],
        correct: 2,
        explanation: "=== compares both the value and the type."
    },
    {
        id: 37,
        question: "What will be the output of the following code?\nconsole.log(2 + \"2\" * 2);",
        options: ["6", "\"24\"", "24", "Error"],
        correct: 0,
        explanation: "\"2\" * 2 evaluates to 4 first, then 2 + 4 is numeric addition, so the result is 6."
    },
    {
        id: 38,
        question: "Which of the following is used to handle errors in JavaScript?",
        options: ["try-catch", "if-else", "switch", "loop"],
        correct: 0,
        explanation: "try-catch is used to catch and handle runtime errors."
    },
    {
        id: 39,
        question: "What will be the output of the following code?\nconsole.log(Boolean(null));",
        options: ["true", "false", "null", "Error"],
        correct: 1,
        explanation: "null is a falsy value, so Boolean(null) returns false."
    },
    {
        id: 40,
        question: "Which of the following is a valid way to declare an object?",
        options: ["var obj = {};", "var obj = [];", "var obj = ();", "var obj = <>;"],
        correct: 0,
        explanation: "Curly braces create an object literal."
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
