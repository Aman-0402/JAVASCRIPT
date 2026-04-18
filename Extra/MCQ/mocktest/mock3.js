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
        question: "Which one of the following is correct output for the following given JavaScript code?\nvar obj = {\n    length: 20,\n    height: 35,\n};\n\nif ('breadth' in obj === false) {\n    obj.breadth = 12;\n}\nconsole.log(obj.breadth);",
        options: ["Error", "Undefined", "12", "20"],
        correct: 2,
        explanation: "\"breadth\" is not in the object, so the condition is true and the property is added with value 12."
    },
    {
        id: 2,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar grade = 'Z';\nvar result = 0;\nswitch (grade) {\n    case 'A':\n        result += 10;\n    case 'B':\n        result += 9;\n    case 'C':\n        result += 8;\n    default:\n        result += 0;\n}\ndocument.write(result);",
        options: ["10", "17", "18", "0"],
        correct: 3,
        explanation: "No case matches until default, so result stays 0."
    },
    {
        id: 3,
        question: "Which type of JavaScript language is ___",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        correct: 1,
        explanation: "JavaScript is commonly described as an object-based scripting language."
    },
    {
        id: 4,
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        options: ["Global variable", "The local element", "The two of the above", "None of the above"],
        correct: 1,
        explanation: "A local variable shadows a global variable with the same name."
    },
    {
        id: 5,
        question: "What will happen if the following JavaScript code is executed?\nvar count = 0;\nwhile (count < 10) {\n    console.log(count);\n    count++;\n}",
        options: ["An error is displayed", "An exception is thrown", "Values stored", "The value of count from 0 to 9 is displayed in the console"],
        correct: 3,
        explanation: "The loop prints each value from 0 through 9 and then stops when count becomes 10."
    },
    {
        id: 6,
        question: "Which of the following is not considered as an error in JavaScript?",
        options: ["Syntax error", "Missing semicolon", "Division by zero", "Missing bracket"],
        correct: 2,
        explanation: "JavaScript evaluates division by zero as Infinity instead of throwing an error."
    },
    {
        id: 7,
        question: "Which operator is used in switch statement comparison?",
        options: ["===", "equals", "==", "="],
        correct: 0,
        explanation: "switch case matching uses strict equality semantics."
    },
    {
        id: 8,
        question: "Which of the following is used to check property existence?",
        options: ["exists", "exist", "within", "in"],
        correct: 3,
        explanation: "The in operator checks whether a property exists in an object."
    },
    {
        id: 9,
        question: "Which one is a ternary operator?",
        options: ["?:", ":", "-", "+"],
        correct: 0,
        explanation: "The conditional operator is written as condition ? valueIfTrue : valueIfFalse."
    },
    {
        id: 10,
        question: "Which of the following is the correct output?\nvar string1 = \"40\";\nvar valueinit = 50;\nalert(string1 + valueinit);",
        options: ["4090", "90", "4050", "Exception"],
        correct: 2,
        explanation: "A string plus a number triggers string concatenation, so the result is \"4050\"."
    },
    {
        id: 11,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar grade = 'C';\nvar result = 0;\nswitch (grade) {\n    case 'A': {\n        result += 10;\n        break;\n    }\n    case 'B': {\n        result += 9;\n        break;\n    }\n    case 'C': {\n        result += 8;\n        break;\n    }\n    default:\n        result += 0;\n}\ndocument.write(result);",
        options: ["10", "9", "8", "0"],
        correct: 2,
        explanation: "The case 'C' block runs and adds 8, then break stops the switch."
    },
    {
        id: 12,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar grade = 'D';\nvar result = 0;\nswitch (grade) {\n    case 'A':\n        result += 10;\n    case 'B':\n        result += 9;\n    case 'C':\n        result += 8;\n    case 'D':\n        result += 6;\n    default:\n        result += 0;\n}\ndocument.write(result);",
        options: ["10", "6", "33", "0"],
        correct: 1,
        explanation: "The switch starts at case 'D', adds 6, then falls through to default and adds 0, leaving 6."
    },
    {
        id: 13,
        question: "Which one of the following is also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "Immediate if"],
        correct: 3,
        explanation: "The ternary conditional operator is often referred to as the immediate if."
    },
    {
        id: 14,
        question: "In JavaScript, what is a block of statement?",
        options: ["Conditional block", "Block that combines a number of statements into a single compound statement", "Both conditional block and a single statement", "Block that contains a single statement"],
        correct: 1,
        explanation: "A block groups multiple statements together inside curly braces."
    },
    {
        id: 15,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar x = 5, y = 1;\nvar obj = { x: 10 };\n\nwith (obj) {\n    alert(y);\n}",
        options: ["1", "Error", "10", "5"],
        correct: 0,
        explanation: "The with block changes lookup for object properties, but y is still taken from the outer scope."
    },
    {
        id: 16,
        question: "When interpreter encounters an empty statement, what will it do:",
        options: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statement"],
        correct: 3,
        explanation: "An empty statement is valid syntax and is simply ignored."
    },
    {
        id: 17,
        question: "The \"function\" and \"var\" are known as:",
        options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        correct: 0,
        explanation: "\"function\" and \"var\" are reserved JavaScript keywords."
    },
    {
        id: 18,
        question: "Which one of the following is used for calling a function or a method in JavaScript:",
        options: ["Property Access Expression", "Functional expression", "Invocation expression", "Primary expression"],
        correct: 2,
        explanation: "Calling a function is done through an invocation expression."
    },
    {
        id: 19,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar grade = 'Z';\nvar result = 0;\nswitch (grade) {\n    case 'A':\n        result += 10;\n    case 'B':\n        result += 9;\n    case 'C':\n        result += 8;\n    default:\n        result += 0;\n}\ndocument.write(result);",
        options: ["10", "17", "18", "0"],
        correct: 3,
        explanation: "Since 'Z' matches no case, only default runs and the output remains 0."
    },
    {
        id: 20,
        question: "Which of the following Number object function returns the value of the number?",
        options: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        correct: 1,
        explanation: "valueOf() returns the primitive numeric value of a Number object."
    },
    {
        id: 21,
        question: "Which of the following functions of the Number object formats a number with a different number of digits to the right of the decimal?",
        options: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
        correct: 1,
        explanation: "toFixed() formats a number using a fixed number of digits after the decimal point."
    },
    {
        id: 22,
        question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        options: ["slice()", "split()", "substr()", "search()"],
        correct: 2,
        explanation: "substr() extracts part of a string from a starting position for a given length."
    },
    {
        id: 23,
        question: "In JavaScript the x === y statement implies that:",
        options: ["Both x and y are equal in value, type and reference address as well", "Both x and y are equal in value only", "Both are equal in the value and data type", "Both are not same at all"],
        correct: 2,
        explanation: "Strict equality means both the value and the data type must match."
    },
    {
        id: 24,
        question: "Choose the correct snippet from the following to check if the variable \"a\" is not equal to NULL:",
        options: ["if (a !== null)", "if (a!)", "if (a!null)", "if (a != null)"],
        correct: 0,
        explanation: "a !== null is the strict check that only excludes null."
    },
    {
        id: 25,
        question: "Suppose we have a text \"human\" that we want to convert into string without using the \"new\" operator. Which is the correct way from the following to do so:",
        options: ["toString()", "String(human)", "String newvariable = \"human\"", "Both human.toString() and String(human)"],
        correct: 3,
        explanation: "Both String(human) and human.toString() can produce a string value without using new."
    },
    {
        id: 26,
        question: "See the given code of JavaScript and choose the correct output from the following:\nfunction comparing() {\n    int x = 9;\n    char y = 9;\n    if (x == y)\n        return true;\n    else\n        return false;\n}",
        options: ["Compilation error", "False", "Runtime error", "True"],
        correct: 0,
        explanation: "int and char are not valid JavaScript declarations, so this code is not valid JavaScript."
    },
    {
        id: 27,
        question: "What will be the output of the following JavaScript code?\nfunction comparison() {\n    int number = 10;\n    if (number === \"10\")\n        return true;\n    else\n        return false;\n}",
        options: ["True", "False", "Runtime error", "Compilation error"],
        correct: 3,
        explanation: "JavaScript does not support int declarations, so the snippet fails before execution."
    },
    {
        id: 28,
        question: "Find out the correct output of the following given piece of code:\nfunction fun() {\n    var y = 10;\n    var z = 10;\n    if (y.toString() === z)\n        return true;\n    else\n        return false;\n}",
        options: ["Logical error", "False", "Runtime error", "True"],
        correct: 1,
        explanation: "y.toString() produces the string \"10\" while z is the number 10, so strict equality returns false."
    },
    {
        id: 29,
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        correct: 3,
        explanation: "JavaScript code is typically called through functions or methods."
    },
    {
        id: 30,
        question: "Which of the following type of a variable is volatile?",
        options: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        correct: 0,
        explanation: "Among the given choices, a mutable variable is the one whose value can change."
    },
    {
        id: 31,
        question: "Which of the following option is used as hexadecimal literal beginning?",
        options: ["00", "0x", "0X", "Both 0x and 0X"],
        correct: 3,
        explanation: "JavaScript accepts both 0x and 0X as hexadecimal prefixes."
    },
    {
        id: 32,
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        options: ["Prints an exception error", "Prints an overflow error", "Displays \"Infinity\"", "Prints the value as such"],
        correct: 2,
        explanation: "JavaScript represents infinite numeric results with the special value Infinity."
    },
    {
        id: 33,
        question: "Which one of the following operator is used to check whether a specific property exists or not?",
        options: ["Exists", "exist", "within", "in"],
        correct: 3,
        explanation: "The in operator checks whether an object has a given property."
    },
    {
        id: 34,
        question: "Which one of the following is an ternary operator:",
        options: ["?:", ":", "-", "+"],
        correct: 0,
        explanation: "The ternary conditional operator is written as ? :"
    },
    {
        id: 35,
        question: "\"An expression that can legally appear on the left side of an assignment expression.\" They are called_____:",
        options: ["Properties", "Prototypes", "Definition", "Lvalue"],
        correct: 3,
        explanation: "An lvalue is something that can appear on the left side of an assignment."
    },
    {
        id: 36,
        question: "Which of the following is the correct output for the following JavaScript code?\nfunction display1(option) {\n    return (option ? \"true\" : \"false\");\n}\n\nvar ans = true;\nconsole.log(display1(ans));",
        options: ["False", "True", "Runtime error", "Compilation error"],
        correct: 1,
        explanation: "Since ans is true, the function returns the string \"true\"."
    },
    {
        id: 37,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar x = 3;\nvar y = 2;\nvar z = 0;\n\nIf (x == y)\n    document.write(x);\nelseif (x == y)\n    document.write(x);\nelse\n    document.write(z);",
        options: ["3", "0", "Error", "2"],
        correct: 2,
        explanation: "JavaScript keywords are lowercase, so If and elseif make this invalid syntax."
    },
    {
        id: 38,
        question: "Among the following given JavaScript snippet codes, which is more efficient:\nCode A:\nfor (var number = 10; number >= 1; number--) {\n    document.writeln(number);\n}\n\nCode B:\nvar number = 10;\nwhile (number >= 1) {\n    document.writeln(number);\n    number++;\n}",
        options: ["Code 1", "Code 2", "Both Code 1 and Code 2", "Cannot Compare"],
        correct: 0,
        explanation: "Code B keeps increasing number and never stops, so Code A is the proper and more efficient choice here."
    },
    {
        id: 39,
        question: "Which of the following is the correct output for the following JavaScript code?\nvar x = 8;\nif (x > 9) {\n    document.write(9);\n} else {\n    document.write(x);\n}",
        options: ["9", "0", "8", "Undefined"],
        correct: 2,
        explanation: "x is not greater than 9, so the else block runs and writes 8."
    },
    {
        id: 40,
        question: "Consider the following snippet of JavaScript code:\nvar text = \"testing: 1, 2, 3\";\nvar pattern = /\\d+/g;\n\nWhich one of the following statement is most suitable to check if the pattern matches with the string \"text\"?",
        options: ["pattern.test(text)", "equals(pattern)", "test(pattern)", "text == pattern"],
        correct: 0,
        explanation: "pattern.test(text) returns true or false depending on whether the regular expression matches the string."
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
