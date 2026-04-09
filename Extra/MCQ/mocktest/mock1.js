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
        question: "What is the recommended way to compare values in JavaScript?",
        options: ["==", "=", "===", "!="],
        correct: 2,
        explanation: "=== is strict equality that checks both value and type without type coercion."
    },
    {
        id: 2,
        question: "What is the output?\nvar x = \"10\";\nvar y = x + 10;",
        options: ["20", "\"20\"", "\"1010\"", "1010"],
        correct: 2,
        explanation: "String + Number results in string concatenation, so \"10\" + 10 = \"1010\""
    },
    {
        id: 3,
        question: "Which method is used to select element by ID?",
        options: ["getElementsByClassName", "querySelectorAll", "getElementById", "getElementsByTagName"],
        correct: 2,
        explanation: "getElementById is the standard method to select an element by its ID attribute."
    },
    {
        id: 4,
        question: "Which object is used to display popup window?",
        options: ["document", "window", "screen", "body"],
        correct: 1,
        explanation: "The window object is used for alert(), confirm(), and prompt() popup windows."
    },
    {
        id: 5,
        question: "What does prompt() return?",
        options: ["number", "boolean", "string", "undefined"],
        correct: 2,
        explanation: "prompt() always returns a string (or null if cancelled), never a number."
    },
    {
        id: 6,
        question: "Which keyword skips current loop iteration?",
        options: ["break", "continue", "stop", "skip"],
        correct: 1,
        explanation: "continue skips to the next iteration of the loop."
    },
    {
        id: 7,
        question: "Which tag works when JavaScript is disabled?",
        options: ["script", "meta", "noscript", "link"],
        correct: 2,
        explanation: "<noscript> tag content displays only when JavaScript is disabled in the browser."
    },
    {
        id: 8,
        question: "Output of:\nvar n = 50;\nvar c;\nconsole.log(c);",
        options: ["0", "null", "undefined", "50"],
        correct: 2,
        explanation: "Variables declared but not initialized have the value undefined."
    },
    {
        id: 9,
        question: "Which is correct empty string check?",
        options: ["str = \"\"", "str == \"\"", "str = null", "str == \"empty\""],
        correct: 1,
        explanation: "Use == or === to compare, not = which is assignment. str == \"\" checks if string is empty."
    },
    {
        id: 10,
        question: "Which event is used for mouse hover?",
        options: ["onclick", "onmouseover", "onmouseup", "onchange"],
        correct: 1,
        explanation: "onmouseover event fires when mouse pointer enters an element."
    },
    {
        id: 11,
        question: "Which is correct array declaration?",
        options: ["var arr = {}", "var arr = []", "var arr = ()", "var arr = \"\""],
        correct: 1,
        explanation: "Arrays use square brackets []. {} is for objects, () is for function calls."
    },
    {
        id: 12,
        question: "Which function shows alert box?",
        options: ["console.log()", "alert()", "print()", "display()"],
        correct: 1,
        explanation: "alert() displays a modal dialog box with a message."
    },
    {
        id: 13,
        question: "What is output?\nconsole.log(typeof 23);",
        options: ["string", "number", "object", "boolean"],
        correct: 1,
        explanation: "The typeof operator returns \"number\" for numeric values."
    },
    {
        id: 14,
        question: "Which loop runs at least once?",
        options: ["for", "while", "do...while", "foreach"],
        correct: 2,
        explanation: "do...while executes the body at least once before checking the condition."
    },
    {
        id: 15,
        question: "What is correct condition for validation?",
        options: ["height > min && < max", "height >= min && height < max", "height == min", "height <= max"],
        correct: 1,
        explanation: "Both operands must be specified in compound conditions: height >= min && height < max"
    },
    {
        id: 16,
        question: "Which keyword exits loop?",
        options: ["break", "continue", "skip", "stop"],
        correct: 0,
        explanation: "break statement exits/terminates the loop immediately."
    },
    {
        id: 17,
        question: "Output:\nMath.ceil(100.5)",
        options: ["100", "101", "100.5", "99"],
        correct: 1,
        explanation: "Math.ceil() rounds UP to the nearest integer, so 100.5 becomes 101."
    },
    {
        id: 18,
        question: "Which is correct JS file extension?",
        options: [".java", ".js", ".json", ".jsx"],
        correct: 1,
        explanation: ".js is the standard JavaScript file extension."
    },
    {
        id: 19,
        question: "Which is NOT a data type?",
        options: ["Number", "Boolean", "Float", "String"],
        correct: 2,
        explanation: "JavaScript doesn't have a Float type. It has Number (which includes decimals), Boolean, String, etc."
    },
    {
        id: 20,
        question: "Output:\ntypeof \"Hello\"",
        options: ["string", "number", "boolean", "object"],
        correct: 0,
        explanation: "typeof operator returns \"string\" for string values."
    },
    {
        id: 21,
        question: "Which method adds element at end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        explanation: "push() adds elements to the end of an array."
    },
    {
        id: 22,
        question: "Output:\n[20,40,60,80].pop()",
        options: ["80", "60", "40", "20"],
        correct: 0,
        explanation: "pop() removes and returns the last element of the array, which is 80."
    },
    {
        id: 23,
        question: "Which method removes first element?",
        options: ["pop()", "shift()", "push()", "splice()"],
        correct: 1,
        explanation: "shift() removes the first element from an array."
    },
    {
        id: 24,
        question: "Which keyword declares variable?",
        options: ["var", "int", "string", "define"],
        correct: 0,
        explanation: "var (also let and const) are used to declare variables in JavaScript."
    },
    {
        id: 25,
        question: "Output:\n\"5\" * 2",
        options: ["10", "\"10\"", "52", "error"],
        correct: 0,
        explanation: "Multiplication operator coerces \"5\" to number 5, so \"5\" * 2 = 10."
    },
    {
        id: 26,
        question: "Which is correct event for click?",
        options: ["onmouseover", "onclick", "onmouseout", "onload"],
        correct: 1,
        explanation: "onclick event fires when an element is clicked."
    },
    {
        id: 27,
        question: "Which operator is strict equality?",
        options: ["==", "===", "=", "!="],
        correct: 1,
        explanation: "=== is strict equality (checks type and value), while == is loose equality."
    },
    {
        id: 28,
        question: "Output:\nBoolean(0)",
        options: ["true", "false", "null", "undefined"],
        correct: 1,
        explanation: "Boolean(0) returns false. In JavaScript, 0 is falsy."
    },
    {
        id: 29,
        question: "Which function converts string to integer?",
        options: ["parseInt()", "toString()", "Number()", "parseFloat()"],
        correct: 0,
        explanation: "parseInt() converts a string to an integer. Number() is also valid."
    },
    {
        id: 30,
        question: "Which keyword is used for error handling?",
        options: ["try", "catch", "finally", "All"],
        correct: 3,
        explanation: "try, catch, and finally are all used in error handling - try for code, catch for errors, finally for cleanup."
    },
    {
        id: 31,
        question: "Output:\nconsole.log(3 * 10, 4 * 10);",
        options: ["20 40", "30 40", "40 30", "10 10"],
        correct: 1,
        explanation: "3 * 10 = 30 and 4 * 10 = 40, so output is \"30 40\"."
    },
    {
        id: 32,
        question: "Which is correct DOM method?",
        options: ["getElementById", "getElement", "selectById", "findElement"],
        correct: 0,
        explanation: "getElementById is the correct DOM method. getElement, selectById, findElement don't exist."
    },
    {
        id: 33,
        question: "Which adds element at beginning?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 3,
        explanation: "unshift() adds elements to the beginning of an array."
    },
    {
        id: 34,
        question: "Output:\nMath.floor(100.5)",
        options: ["100", "101", "100.5", "99"],
        correct: 0,
        explanation: "Math.floor() rounds DOWN to the nearest integer, so 100.5 becomes 100."
    },
    {
        id: 35,
        question: "Which stores data in key-value pair?",
        options: ["Array", "Object", "String", "Number"],
        correct: 1,
        explanation: "Objects store data as key-value pairs. Arrays store data with numeric indices."
    },
    {
        id: 36,
        question: "Which is correct?",
        options: ["POST cached", "GET unlimited", "GET limited", "POST stored"],
        correct: 2,
        explanation: "GET requests have URL length limitations (browser/server dependent), while POST doesn't."
    },
    {
        id: 37,
        question: "Which keyword defines function?",
        options: ["func", "function", "def", "method"],
        correct: 1,
        explanation: "function is the keyword to define functions in JavaScript."
    },
    {
        id: 38,
        question: "Output:\n\"10\" + 5",
        options: ["15", "\"105\"", "105", "error"],
        correct: 1,
        explanation: "Addition with string operand causes string concatenation: \"10\" + 5 = \"105\"."
    },
    {
        id: 39,
        question: "Which is asynchronous best practice?",
        options: ["callbacks", "setTimeout", "async/await", "ignore errors"],
        correct: 2,
        explanation: "async/await is the modern best practice for handling asynchronous code."
    },
    {
        id: 40,
        question: "Which is correct for reusable JS?",
        options: ["HTML", "CSS", ".js file", "inline"],
        correct: 2,
        explanation: "External .js files are the correct way to write reusable, maintainable JavaScript."
    },
    {
        id: 41,
        question: "Output:\ntypeof false",
        options: ["string", "boolean", "number", "object"],
        correct: 1,
        explanation: "typeof operator returns \"boolean\" for boolean values like false."
    },
    {
        id: 42,
        question: "Which statement is true?",
        options: ["prompt returns number", "prompt returns string", "prompt returns boolean", "prompt returns object"],
        correct: 1,
        explanation: "prompt() always returns a string (or null if cancelled)."
    },
    {
        id: 43,
        question: "Which event triggers on page load?",
        options: ["onclick", "onload", "onmouseover", "onsubmit"],
        correct: 1,
        explanation: "onload event fires when the page has finished loading."
    },
    {
        id: 44,
        question: "Which operator assigns value?",
        options: ["==", "=", "===", "!="],
        correct: 1,
        explanation: "= is the assignment operator. == and === are comparison operators."
    },
    {
        id: 45,
        question: "Output:\n2 + \"2\"",
        options: ["4", "\"22\"", "22", "error"],
        correct: 1,
        explanation: "Addition with string operand causes string concatenation: 2 + \"2\" = \"22\"."
    },
    {
        id: 46,
        question: "Which is loop keyword?",
        options: ["for", "while", "do", "All"],
        correct: 3,
        explanation: "for, while, and do...while are all loop keywords in JavaScript."
    },
    {
        id: 47,
        question: "Which is NOT loop?",
        options: ["for", "while", "if", "do"],
        correct: 2,
        explanation: "if is a conditional statement, not a loop. for, while, and do are loops."
    },
    {
        id: 48,
        question: "Which is correct array result?",
        options: ["[100,40,60,10]", "[20,40,10]", "[40,10,100]", "[100,20,40]"],
        correct: 0,
        explanation: "This is a general array knowledge question - typical array output format."
    },
    {
        id: 49,
        question: "Which is correct loop control pair?",
        options: ["break, stop", "continue, break", "skip, exit", "return, end"],
        correct: 1,
        explanation: "break and continue are the loop control statements. break exits, continue skips iteration."
    },
    {
        id: 50,
        question: "Which prevents program crash?",
        options: ["if", "loop", "try...catch", "function"],
        correct: 2,
        explanation: "try...catch blocks catch and handle errors, preventing program crash."
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
