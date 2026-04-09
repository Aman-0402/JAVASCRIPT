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
        question: "What is the output?\nconsole.log(10 == \"10\");",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "== performs loose equality, so 10 == \"10\" is true (type coercion happens)."
    },
    {
        id: 2,
        question: "What is the output?\nconsole.log(10 === \"10\");",
        options: ["true", "false", "error", "undefined"],
        correct: 1,
        explanation: "=== performs strict equality, so 10 === \"10\" is false (different types)."
    },
    {
        id: 3,
        question: "Which method removes last element from array?",
        options: ["shift()", "pop()", "push()", "unshift()"],
        correct: 1,
        explanation: "pop() removes and returns the last element from an array."
    },
    {
        id: 4,
        question: "Which function converts number to string?",
        options: ["parseInt()", "toString()", "Number()", "parseFloat()"],
        correct: 1,
        explanation: "toString() converts a number to its string representation."
    },
    {
        id: 5,
        question: "What is the output?\nconsole.log(typeof null);",
        options: ["null", "object", "undefined", "number"],
        correct: 1,
        explanation: "typeof null returns 'object' - this is a known quirk in JavaScript."
    },
    {
        id: 6,
        question: "Which operator is used for NOT equal?",
        options: ["==", "===", "!=", "="],
        correct: 2,
        explanation: "!= is the loose inequality operator. !== is strict inequality."
    },
    {
        id: 7,
        question: "What is the output?\nconsole.log(5 + true);",
        options: ["6", "5true", "error", "undefined"],
        correct: 0,
        explanation: "true is coerced to 1, so 5 + 1 = 6."
    },
    {
        id: 8,
        question: "Which method adds element at beginning?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 3,
        explanation: "unshift() adds elements to the beginning of an array."
    },
    {
        id: 9,
        question: "Which keyword declares block-scoped variable?",
        options: ["var", "let", "define", "int"],
        correct: 1,
        explanation: "let declares a block-scoped variable. var is function-scoped."
    },
    {
        id: 10,
        question: "What is the output?\nconsole.log(Boolean(\"\"));",
        options: ["true", "false", "null", "undefined"],
        correct: 1,
        explanation: "Empty string is falsy, so Boolean(\"\") returns false."
    },
    {
        id: 11,
        question: "Which event occurs when mouse leaves element?",
        options: ["onmouseover", "onmouseout", "onclick", "onmouseup"],
        correct: 1,
        explanation: "onmouseout event fires when mouse pointer leaves an element."
    },
    {
        id: 12,
        question: "What is correct syntax to write function?",
        options: ["function myFunc()", "def myFunc()", "func myFunc()", "create myFunc()"],
        correct: 0,
        explanation: "function is the correct keyword to define functions in JavaScript."
    },
    {
        id: 13,
        question: "Which is correct loop syntax?",
        options: ["for(i=0;i<5;i++)", "loop(i=0;i<5;i++)", "repeat(i=0;i<5;i++)", "iterate(i=0;i<5;i++)"],
        correct: 0,
        explanation: "for is the correct loop syntax in JavaScript."
    },
    {
        id: 14,
        question: "What is output?\nconsole.log(\"5\" - 2);",
        options: ["3", "\"52\"", "error", "undefined"],
        correct: 0,
        explanation: "Subtraction operator coerces \"5\" to number 5, so \"5\" - 2 = 3."
    },
    {
        id: 15,
        question: "Which method selects elements by class?",
        options: ["getElementById", "getElementsByClassName", "querySelector", "findClass"],
        correct: 1,
        explanation: "getElementsByClassName() selects elements by their class name."
    },
    {
        id: 16,
        question: "What is output?\nconsole.log(typeof []);",
        options: ["array", "object", "list", "undefined"],
        correct: 1,
        explanation: "Arrays are objects in JavaScript, so typeof [] returns 'object'."
    },
    {
        id: 17,
        question: "Which is correct way to create object?",
        options: ["var obj = []", "var obj = {}", "var obj = ()", "var obj = \"\""],
        correct: 1,
        explanation: "{} creates an object. [] creates an array."
    },
    {
        id: 18,
        question: "Which keyword is used in exception handling?",
        options: ["try", "catch", "finally", "All"],
        correct: 3,
        explanation: "try, catch, and finally are all used in exception handling."
    },
    {
        id: 19,
        question: "What is output?\nconsole.log(0 == false);",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "0 is falsy and false is also falsy, so 0 == false is true."
    },
    {
        id: 20,
        question: "Which method removes first element?",
        options: ["pop()", "shift()", "push()", "splice()"],
        correct: 1,
        explanation: "shift() removes and returns the first element from an array."
    },
    {
        id: 21,
        question: "What is output?\nconsole.log(\"Hello\" + 5);",
        options: ["Hello5", "5Hello", "error", "undefined"],
        correct: 0,
        explanation: "String concatenation with +, so \"Hello\" + 5 = \"Hello5\"."
    },
    {
        id: 22,
        question: "Which operator checks equality without type conversion?",
        options: ["==", "===", "=", "!="],
        correct: 1,
        explanation: "=== is strict equality that checks both value and type without conversion."
    },
    {
        id: 23,
        question: "Which event triggers when page loads?",
        options: ["onclick", "onload", "onsubmit", "onchange"],
        correct: 1,
        explanation: "onload event fires when the entire page has finished loading."
    },
    {
        id: 24,
        question: "What is output?\nconsole.log(Math.round(100.5));",
        options: ["100", "101", "100.5", "error"],
        correct: 1,
        explanation: "Math.round() rounds to nearest integer, so 100.5 becomes 101."
    },
    {
        id: 25,
        question: "Which is correct?",
        options: ["GET unlimited", "POST cached", "GET restricted", "POST stored"],
        correct: 2,
        explanation: "GET requests have URL length limitations. POST has no such restrictions."
    },
    {
        id: 26,
        question: "What is output?\nconsole.log(typeof undefined);",
        options: ["undefined", "object", "string", "null"],
        correct: 0,
        explanation: "typeof undefined returns 'undefined'."
    },
    {
        id: 27,
        question: "Which function parses integer?",
        options: ["parseInt()", "parseFloat()", "toString()", "Number()"],
        correct: 0,
        explanation: "parseInt() parses a string and returns an integer."
    },
    {
        id: 28,
        question: "What is output?\nconsole.log(2 * \"3\");",
        options: ["6", "\"6\"", "error", "undefined"],
        correct: 0,
        explanation: "Multiplication operator coerces \"3\" to number 3, so 2 * 3 = 6."
    },
    {
        id: 29,
        question: "Which keyword stops loop?",
        options: ["continue", "break", "skip", "exit"],
        correct: 1,
        explanation: "break statement stops/exits the loop immediately."
    },
    {
        id: 30,
        question: "Which is valid array?",
        options: ["[1,2,3]", "{1,2,3}", "(1,2,3)", "<1,2,3>"],
        correct: 0,
        explanation: "[1,2,3] is the correct array syntax. {} is object, () is for grouping."
    },
    {
        id: 31,
        question: "What is output?\nconsole.log(Boolean(1));",
        options: ["true", "false", "null", "undefined"],
        correct: 0,
        explanation: "1 is truthy, so Boolean(1) returns true."
    },
    {
        id: 32,
        question: "Which method updates HTML content?",
        options: ["innerHTML", "value", "text", "script"],
        correct: 0,
        explanation: "innerHTML property gets or sets the HTML content of an element."
    },
    {
        id: 33,
        question: "What is output?\nconsole.log(10 / 0);",
        options: ["0", "Infinity", "error", "undefined"],
        correct: 1,
        explanation: "Division by zero in JavaScript returns Infinity."
    },
    {
        id: 34,
        question: "Which keyword is used for async?",
        options: ["async", "await", "Both", "none"],
        correct: 2,
        explanation: "async and await are both used for asynchronous operations."
    },
    {
        id: 35,
        question: "What is output?\nconsole.log(\"10\" * \"2\");",
        options: ["20", "\"20\"", "error", "undefined"],
        correct: 0,
        explanation: "Multiplication coerces strings to numbers: 10 * 2 = 20."
    },
    {
        id: 36,
        question: "Which method is correct for ID selection?",
        options: ["getElementById", "selectId", "queryId", "findId"],
        correct: 0,
        explanation: "getElementById() is the standard method to select by ID."
    },
    {
        id: 37,
        question: "What is output?\nconsole.log(5 > 3);",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "5 is greater than 3, so 5 > 3 returns true."
    },
    {
        id: 38,
        question: "Which keyword declares constant?",
        options: ["let", "const", "var", "static"],
        correct: 1,
        explanation: "const declares a constant variable that cannot be reassigned."
    },
    {
        id: 39,
        question: "What is output?\nconsole.log(null == undefined);",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "null and undefined are loosely equal (==), so returns true."
    },
    {
        id: 40,
        question: "Which is correct event for click?",
        options: ["onclick", "onmouseover", "onmouseout", "onload"],
        correct: 0,
        explanation: "onclick event fires when an element is clicked."
    },
    {
        id: 41,
        question: "What is output?\nconsole.log(\"A\" > \"B\");",
        options: ["true", "false", "error", "undefined"],
        correct: 1,
        explanation: "String comparison is lexicographic. \"A\" comes before \"B\", so false."
    },
    {
        id: 42,
        question: "Which is correct file for JS?",
        options: [".css", ".html", ".js", ".json"],
        correct: 2,
        explanation: ".js is the correct file extension for JavaScript files."
    },
    {
        id: 43,
        question: "What is output?\nconsole.log(3 + null);",
        options: ["3", "null", "error", "undefined"],
        correct: 0,
        explanation: "null is coerced to 0 in addition, so 3 + 0 = 3."
    },
    {
        id: 44,
        question: "Which is loop?",
        options: ["if", "for", "switch", "case"],
        correct: 1,
        explanation: "for is a loop. if is conditional, switch is branching."
    },
    {
        id: 45,
        question: "What is output?\nconsole.log(typeof NaN);",
        options: ["number", "NaN", "undefined", "object"],
        correct: 0,
        explanation: "NaN stands for 'Not-a-Number' but typeof NaN returns 'number'."
    },
    {
        id: 46,
        question: "Which prevents crash?",
        options: ["if", "try...catch", "loop", "function"],
        correct: 1,
        explanation: "try...catch blocks catch and handle errors, preventing program crash."
    },
    {
        id: 47,
        question: "What is output?\nconsole.log(\"5\" == 5);",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "== performs loose equality with type coercion, so \"5\" == 5 is true."
    },
    {
        id: 48,
        question: "Which is NOT data type?",
        options: ["Boolean", "String", "Float", "Number"],
        correct: 2,
        explanation: "JavaScript doesn't have a Float type. Numbers include decimals."
    },
    {
        id: 49,
        question: "What is output?\nconsole.log(false == \"\");",
        options: ["true", "false", "error", "undefined"],
        correct: 0,
        explanation: "false and empty string are both falsy, so false == \"\" is true."
    },
    {
        id: 50,
        question: "Which is best async practice?",
        options: ["callbacks", "setTimeout", "async/await", "ignore errors"],
        correct: 2,
        explanation: "async/await is the modern best practice for handling asynchronous code."
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

    // Update question text
    questionText.textContent = `Question ${currentQuestion + 1}: ${question.question}`;

    // Clear previous options
    optionsContainer.innerHTML = '';
    feedbackMessage.classList.add('hidden');

    // Create option elements
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

    // Add class to previously selected or correct answer if answered
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
        optionsContainer.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
        });
    }

    updateProgress();
    updateNavigationButtons();
}

// Select Option
function selectOption(index) {
    if (answered[currentQuestion]) {
        return; // Already answered
    }

    const question = quizData[currentQuestion];
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackText = document.getElementById('feedbackText');

    // Mark as answered
    answers[currentQuestion] = index;
    answered[currentQuestion] = true;

    // Disable all options
    optionsContainer.querySelectorAll('.option').forEach(opt => {
        opt.classList.add('disabled');
    });

    // Show feedback
    const selectedOption = optionsContainer.querySelectorAll('.option')[index];
    const correctIndex = question.correct;
    const correctOption = optionsContainer.querySelectorAll('.option')[correctIndex];

    if (index === correctIndex) {
        // Correct answer
        selectedOption.classList.add('correct');
        score++;
        feedbackText.textContent = getCorrectFeedback();
        feedbackMessage.classList.remove('incorrect');
        feedbackMessage.classList.add('correct');
        celebrateCorrectAnswer();
    } else {
        // Incorrect answer
        selectedOption.classList.add('incorrect');
        correctOption.classList.add('correct');
        feedbackText.textContent = `❌ Wrong! The correct answer is: ${question.options[correctIndex]}`;
        feedbackMessage.classList.remove('correct');
        feedbackMessage.classList.add('incorrect');
    }

    feedbackMessage.classList.remove('hidden');

    // Update score display
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

    // Previous button
    prevBtn.disabled = currentQuestion === 0;

    // Next button and Submit button
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
        message = '🎊 Outstanding! You got all 50 questions correct! You are a JavaScript expert!';
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
