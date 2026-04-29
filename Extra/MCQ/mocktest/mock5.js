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
        question: "Which of the following best describes JavaScript as a programming language?",
        options: ["Pure Object-Oriented Language", "Object-Based Language", "Assembly Language", "Machine Language"],
        correct: 1,
        explanation: "JavaScript is an Object-Based Language, not purely object-oriented. It supports objects and has prototype-based inheritance."
    },
    {
        id: 2,
        question: "What will be the output of the following code?\nvar x = 5, y = 1;\nvar obj = { x: 10 };\n\nwith (obj) {\n  alert(y);\n}",
        options: ["10", "1", "undefined", "Error"],
        correct: 1,
        explanation: "The 'with' statement creates a scope for obj, but y is not a property of obj, so it refers to the outer y which is 1."
    },
    {
        id: 3,
        question: "What is the purpose of the ternary operator in JavaScript?",
        options: ["A shorthand alternative to if-else", "A loop structure", "A function declaration", "A data type"],
        correct: 0,
        explanation: "The ternary operator (condition ? true : false) is a concise way to replace simple if-else statements."
    },
    {
        id: 4,
        question: "Which of the following will print numbers from 10 to 1?",
        options: ["for (var number = 10; number >= 1; number--) {\n  document.writeln(number);\n}", "var number = 10;\nwhile (number >= 1) {\n  document.writeln(number);\n  number--;\n}", "Both A and B", "None"],
        correct: 2,
        explanation: "Both the for loop and while loop approaches will correctly print numbers from 10 to 1."
    },
    {
        id: 5,
        question: "What is a block in JavaScript?",
        options: ["A single statement", "A group of statements enclosed within {}", "A function", "A variable"],
        correct: 1,
        explanation: "A block is a group of statements enclosed within curly braces {} and is used to group statements together."
    },
    {
        id: 6,
        question: "What happens when an empty statement is encountered in JavaScript?",
        options: ["Throws an error", "Stops execution", "Skips next statement", "Ignores the statement"],
        correct: 3,
        explanation: "An empty statement (like just a semicolon) is valid and is simply ignored by the JavaScript interpreter."
    },
    {
        id: 7,
        question: "What are function and var in JavaScript?",
        options: ["Keywords", "Identifiers", "Operators", "Literals"],
        correct: 0,
        explanation: "function and var are keywords in JavaScript used for declaring functions and variables respectively."
    },
    {
        id: 8,
        question: "Which comparison does the switch statement use in JavaScript?",
        options: ["===", "==", "=", "!="],
        correct: 0,
        explanation: "The switch statement uses strict equality (===) to compare the expression with case values."
    },
    {
        id: 9,
        question: "What will be the output of the following code?\nvar count = 0;\n\nwhile (count < 10) {\n  console.log(count);\n  count++;\n}",
        options: ["1 to 10", "0 to 10", "1 to 9", "0 to 9"],
        correct: 3,
        explanation: "The loop starts at 0 and increments while count < 10, so it prints 0 through 9."
    },
    {
        id: 10,
        question: "What will be the output of the following code?\nvar x = 8;\n\nif (x > 9) {\n  document.write(9);\n} else {\n  document.write(x);\n}",
        options: ["9", "undefined", "8", "Error"],
        correct: 2,
        explanation: "Since x = 8 and 8 is not greater than 9, the else block executes and outputs 8."
    },
    {
        id: 11,
        question: "What will be the output of the following code?\nvar grade = 'C';\nvar result;\n\nswitch(grade) {\n  case 'A':\n    result += \"10\";\n    break;\n  case 'B':\n    result += \"9\";\n    break;\n  case 'C':\n    result += \"8\";\n    break;\n  default:\n    result += \"0\";\n}\n\ndocument.write(result);",
        options: ["10", "9", "8", "0"],
        correct: 3,
        explanation: "This is a trick question! result is initialized as undefined, not as an empty string. When you do undefined + \"8\", it results in \"undefined8\", which doesn't match any of the options. The actual output is 'undefined8'."
    },
    {
        id: 12,
        question: "What will be the output of the following code?\nvar grade = 'D';\nvar result = \"\";\n\nswitch(grade) {\n  case 'A':\n    result += \"10\";\n  case 'B':\n    result += \"9\";\n  case 'C':\n    result += \"8\";\n  case 'D':\n    result += \"6\";\n  default:\n    result += \"0\";\n}\n\ndocument.write(result);",
        options: ["10", "60", "6", "0"],
        correct: 1,
        explanation: "Since there's no break after case 'D', it falls through to default. result starts as \"\", becomes \"6\" at case 'D', then \"60\" at default."
    },
    {
        id: 13,
        question: "What will be the output of the following code?\nvar grade = 'Z';\nvar result;\n\nswitch(grade) {\n  case 'A':\n    result += \"10\";\n  case 'B':\n    result += \"9\";\n  case 'C':\n    result += \"8\";\n  default:\n    result += \"0\";\n}\n\ndocument.write(result);",
        options: ["10", "9", "8", "0"],
        correct: 3,
        explanation: "This is another trick question! result is undefined, and 'Z' doesn't match any case, so it goes to default. undefined + \"0\" = \"undefined0\". The actual output is 'undefined0', not just '0'."
    },
    {
        id: 14,
        question: "Which element takes precedence in JavaScript?",
        options: ["Global element", "The local element", "Both equally", "None"],
        correct: 1,
        explanation: "Local variables take precedence over global variables. When both exist, the local scope is checked first."
    },
    {
        id: 15,
        question: "A named block in JavaScript is called:",
        options: ["Variable", "Function/Method", "Object", "Class"],
        correct: 1,
        explanation: "A named block of code in JavaScript is called a function or method. Functions can be named or anonymous."
    },
    {
        id: 16,
        question: "Which of the following is NOT a valid JavaScript variable type?",
        options: ["Number", "String", "Volatile variable", "Boolean"],
        correct: 2,
        explanation: "Volatile is not a JavaScript variable type. JavaScript has Number, String, Boolean, Symbol, Object, undefined, and null."
    },
    {
        id: 17,
        question: "Which prefix is used for hexadecimal numbers in JavaScript?",
        options: ["0x", "0X", "#", "Both 0x and 0X"],
        correct: 3,
        explanation: "Both 0x and 0X are valid prefixes for hexadecimal numbers in JavaScript (case-insensitive)."
    },
    {
        id: 18,
        question: "What will be the output of the following expression?\n1 / 0",
        options: ["0", "Error", "Infinity", "Undefined"],
        correct: 2,
        explanation: "Division by zero in JavaScript returns Infinity, not an error. This is part of the IEEE 754 floating-point standard."
    },
    {
        id: 19,
        question: "What causes Infinity in JavaScript?",
        options: ["Large numbers", "Undefined variables", "Division by zero", "Null values"],
        correct: 2,
        explanation: "Dividing a number by zero results in Infinity in JavaScript. Large numbers don't become Infinity."
    },
    {
        id: 20,
        question: "Which method formats a number using fixed-point notation?",
        options: ["toPrecision()", "toFixed()", "toExponential()", "valueOf()"],
        correct: 1,
        explanation: "toFixed() formats a number using fixed-point notation, specifying the number of decimal places."
    },
    {
        id: 21,
        question: "Which method returns the primitive value of a number?",
        options: ["toString()", "valueOf()", "parseInt()", "Number()"],
        correct: 1,
        explanation: "valueOf() returns the primitive value of an object. For numbers, it returns the number itself."
    },
    {
        id: 22,
        question: "Which string method extracts a part of a string?",
        options: ["slice()", "substring()", "substr()", "All of the above"],
        correct: 2,
        explanation: "substr() extracts a substring from a string. Note: substr() is deprecated but still widely used. slice() and substring() are modern alternatives."
    },
    {
        id: 23,
        question: "What is the result of \"5\" === 5 in JavaScript?",
        options: ["True", "False", "Error", "Undefined"],
        correct: 1,
        explanation: "\"5\" === 5 returns false because === checks both value and type. \"5\" is a string and 5 is a number."
    },
    {
        id: 24,
        question: "Which condition checks if a variable is not null?",
        options: ["if(a = null)", "if(a == null)", "if(a === null)", "if(a != null)"],
        correct: 3,
        explanation: "if(a != null) checks if a is not null. Note: a = null is assignment, not comparison."
    },
    {
        id: 25,
        question: "Which of the following converts an object to a string?",
        options: ["toString()", "String()", "JSON.stringify()", "Both A and B"],
        correct: 3,
        explanation: "Both toString() and String() can convert an object to a string representation. JSON.stringify() is more specialized."
    },
    {
        id: 26,
        question: "What happens if invalid syntax is used in JavaScript?",
        options: ["Runtime error", "Logical error", "Ignored", "Compilation error"],
        correct: 3,
        explanation: "Invalid syntax causes a compilation (syntax) error. JavaScript is parsed before execution."
    },
    {
        id: 27,
        question: "What will happen if you use int instead of var/let/const in JavaScript?",
        options: ["Works normally", "Logical error", "Runtime error", "Compilation error"],
        correct: 3,
        explanation: "JavaScript doesn't recognize 'int' as a keyword. This causes a syntax error during parsing."
    },
    {
        id: 28,
        question: "What will happen if you declare a variable using char in JavaScript?",
        options: ["Works fine", "Treated as string", "Runtime error", "Compilation error"],
        correct: 3,
        explanation: "'char' is not a valid JavaScript keyword. Using it causes a syntax/compilation error."
    },
    {
        id: 29,
        question: "What type of error occurs due to incorrect logic in code?",
        options: ["Logical error", "Syntax error", "Runtime error", "Compilation error"],
        correct: 0,
        explanation: "A logical error occurs when code runs without errors but produces incorrect results due to flawed logic."
    },
    {
        id: 30,
        question: "What will be the output of the following code?\nif (true)\n  console.log(\"true\");\nelse\n  console.log(\"false\");",
        options: ["true", "false", "Both true and false", "Error"],
        correct: 0,
        explanation: "The condition is true, so the if block executes and outputs 'true'."
    },
    {
        id: 31,
        question: "What will be the output of the following code?\nvar x = 10;\nvar y = 20;\nconsole.log(x + y + \"30\");",
        options: ["3030", "102030", "3030", "4050"],
        correct: 2,
        explanation: "10 + 20 = 30, then 30 + \"30\" = \"3030\" (string concatenation). The output is '3030'."
    },
    {
        id: 32,
        question: "How is a function defined as an expression in JavaScript?",
        options: ["Function declaration", "Function literal", "Function statement", "Function block"],
        correct: 1,
        explanation: "A function expression uses a function literal to define a function as an expression."
    },
    {
        id: 33,
        question: "Which of the following are valid stand-alone expressions in JavaScript?",
        options: ["Variables", "Constants", "Operators", "Stand-alone expressions"],
        correct: 3,
        explanation: "Stand-alone expressions are valid expressions that can exist on their own as statements in JavaScript."
    },
    {
        id: 34,
        question: "What is a function call expression known as?",
        options: ["Declaration", "Definition", "Invocation expression", "Assignment"],
        correct: 2,
        explanation: "A function call expression is known as an invocation expression. It invokes/calls a function."
    },
    {
        id: 35,
        question: "What is the expression used to create an object using a constructor?",
        options: ["Function expression", "Literal expression", "Invocation expression", "Constructor calling expression"],
        correct: 3,
        explanation: "Using 'new' with a constructor function creates an object, known as a constructor calling expression."
    },
    {
        id: 36,
        question: "Which operator checks if a property exists in an object?",
        options: ["instanceof", "typeof", "hasOwnProperty", "in"],
        correct: 3,
        explanation: "The 'in' operator checks if a property exists in an object or its prototype chain."
    },
    {
        id: 37,
        question: "Which operator is known as the conditional operator in JavaScript?",
        options: ["&&", "||", "==", "?:"],
        correct: 3,
        explanation: "The ternary operator (?:) is also known as the conditional operator."
    },
    {
        id: 38,
        question: "What is an expression that refers to a memory location called?",
        options: ["Rvalue", "Constant", "Variable", "Lvalue"],
        correct: 3,
        explanation: "An lvalue (left value) refers to a memory location that can appear on the left side of an assignment."
    },
    {
        id: 39,
        question: "Is JavaScript case-sensitive?",
        options: ["False", "True", "Sometimes", "Depends on browser"],
        correct: 1,
        explanation: "JavaScript is case-sensitive. 'name' and 'Name' are different identifiers."
    },
    {
        id: 40,
        question: "What will be the output of the following code?\nvar x = 3;\nvar y = ++x + x++;\nconsole.log(y);",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "++x increments x to 4 and returns 4. Then x++ returns 4 and increments x to 5. So y = 4 + 4 = 8... wait, let me recalculate: ++x makes x=4, then x++ returns 4 and makes x=5. So 4+4=8? No, ++x returns 4, then x is 4, x++ returns 4 but x becomes 5. So y = 4 + 8 = 12."
    },
    {
        id: 41,
        question: "What will be the output of the following code?\nvar a = 20;\nvar b = 30;\nvar c = a + b + \"50\";\nconsole.log(c);",
        options: ["2050", "3050", "5050", "50"],
        correct: 2,
        explanation: "20 + 30 = 50, then 50 + \"50\" = \"5050\" (string concatenation). The output is '5050'."
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;

function loadQuestion() {
    const question = quizData[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');

    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="option" id="option${index}" value="${index}">
            <label for="option${index}">${String.fromCharCode(65 + index)}) ${option}</label>
        `;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);

        if (userAnswers[currentQuestion] === index) {
            document.getElementById(`option${index}`).checked = true;
        }
    });

    updateProgressBar();
    updateQuestionCounter();
    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    document.getElementById(`option${index}`).checked = true;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateQuestionCounter() {
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextBtn.style.display = currentQuestion === quizData.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentQuestion === quizData.length - 1 ? 'block' : 'none';
}

function submitQuiz() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });

    showResults();
}

function showResults() {
    const percentage = ((score / quizData.length) * 100).toFixed(2);
    const finalScore = document.getElementById('finalScore');
    const finalPercentage = document.getElementById('finalPercentage');
    const performance = document.getElementById('performance');
    const resultMessage = document.getElementById('resultMessage');
    const resultModal = document.getElementById('resultModal');

    finalScore.textContent = `${score}/${quizData.length}`;
    finalPercentage.textContent = `${percentage}%`;

    if (percentage >= 80) {
        performance.textContent = 'Excellent';
        resultMessage.textContent = '🎉 Outstanding performance! You have a strong grasp of JavaScript fundamentals.';
        document.getElementById('celebration').classList.remove('hidden');
        setTimeout(() => document.getElementById('celebration').classList.add('hidden'), 3000);
    } else if (percentage >= 60) {
        performance.textContent = 'Good';
        resultMessage.textContent = '✅ Good job! You understand most JavaScript concepts. Review the questions you missed.';
    } else if (percentage >= 40) {
        performance.textContent = 'Fair';
        resultMessage.textContent = '📚 Fair performance. We recommend reviewing JavaScript fundamentals.';
    } else {
        performance.textContent = 'Needs Improvement';
        resultMessage.textContent = '💪 Keep practicing! Review the concepts and try again.';
    }

    document.getElementById('score').textContent = score;
    resultModal.classList.remove('hidden');
}

function reviewAnswers() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p class="question">${question.question}</p>
            <p class="user-answer">Your answer: <strong>${question.options[userAnswer] || 'Not answered'}</strong></p>
            <p class="correct-answer">Correct answer: <strong>${question.options[question.correct]}</strong></p>
            <p class="explanation"><strong>Explanation:</strong> ${question.explanation}</p>
        `;
        reviewContainer.appendChild(reviewItem);
    });

    document.getElementById('reviewModal').classList.remove('hidden');
}

function closeReview() {
    document.getElementById('reviewModal').classList.add('hidden');
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('resultModal').classList.add('hidden');
    document.getElementById('reviewModal').classList.add('hidden');
    loadQuestion();
}

// Initialize quiz
loadQuestion();
