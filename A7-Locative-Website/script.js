const questions = [
    {
        question: "Are you at the stone ring structure of WWU now?",
        options: ["Yes", "No", "I don't know"],
        feedbacks: ["Good. You will need to be if you want to win this quiz.", 
                    "This quiz will be very difficult if you are not there.", 
                    "That is concerning, you should probably figure out where you are."],
        correctOption: 0
    },
    {
        question: "How many windows are in the structure?",
        options: ["14", "12", "100"],
        feedbacks: ["Unlucky, you'll get it next time!", "12 you say... you're right!", "Hmm... Not really close at all. Sorry."],
        correctOption: 1
    },
    {
        question: "How many rings are in the structure?",
        options: ["0", "infinite", "2"],
        feedbacks: ["There's definitely more than 0 pal.", "Circles are ininite, so are there infinite rings?? No.", "Wow nice job, you can count!"],
        correctOption: 2
    },
    {
        question: "How many doorways are in the structure?",
        options: ["4", "2", "300"],
        feedbacks: ["Great job person!", "Try again, I know you can do it!", "huh? you're silly"],
        correctOption: 0
    },
    {
        question: "Standing in the very middle, how many lamp poles with the round lights can you see out the windows?",
        options: ["3", "4", "2"],
        feedbacks: ["Stand directly in the middle. DIRECTLY.", "You're not in the middle.", "Yippee you're on a roll!"],
        correctOption: 2
    },
    {
        question: "Who created the stone ring structure?",
        options: ["Nancy Kerrigan", "Nancy Holt", "Nancy Drew"],
        feedbacks: ["No but she was a great figure ice skater.", "Correct. You win!", "Wrong Nancy!"],
        correctOption: 1
    }
    // Add more question objects here...
];

const winDisplay = [
    "Yes",
    "No",
    "Yes but make it harder"
]

let currentQuestionIndex = 0;
let countdownId;
let startTime = 30;
let timeRemaining = startTime;
const bufferTime = 2.5 * 1000;

const options = document.querySelectorAll('.option');
const question = document.getElementById('question');
const feedback = document.getElementById('feedback');
const timerDisplay = document.getElementById('timer');

options.forEach((option, index) => {
    option.addEventListener('click', handleOptionClick(index));
});

let nextQuestionTimeoutId;
let endQuizTimeoutId;
let allowSkip = false;

document.addEventListener('click', function(event) {
    if (!feedback.hidden && allowSkip && !event.target.classList.contains('option')) {
        if (currentQuestionIndex < questions.length) {
            clearTimeout(nextQuestionTimeoutId); // Clear existing timeout
            nextQuestion();
        } else {
            clearTimeout(endQuizTimeoutId); // Clear existing timeout
            endQuiz();
        }
    }
});
function handleOptionClick(index) {
    return function() {
        if (question.innerText === 'Would you like to play again?') {
            handleEndOfQuizClick(index);
            return;
        }

        hideQuestion();
        showFeedback(index);

        if (currentQuestionIndex === 0) {
            startTimer();
        }

        if (index === questions[currentQuestionIndex].correctOption) {
            allowSkip = true;
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                stopTimer();
                endQuizTimeoutId = setTimeout(endQuiz, bufferTime);
            } else {
                nextQuestionTimeoutId = setTimeout(nextQuestion, bufferTime);
            }
        } else {
            stopTimer();
            setTimeout(resetQuiz, bufferTime);
        }
    }
}

function handleEndOfQuizClick(index) {
    switch(index) {
        case 0:
            resetQuiz();
            break;
        case 1:
            showMessage('Thanks for playing!');
            break;
        case 2:
            startTime = 10;
            resetQuiz();
            break;
    }
}

function nextQuestion() {
    allowSkip = false;
    hideFeedback();
    displayQuestion();
}

function showFeedback(index) {
    feedback.innerText = questions[currentQuestionIndex].feedbacks[index];
    feedback.hidden = false;
}

function hideFeedback() {
    feedback.hidden = true;
}

function showMessage(msg) {
    question.innerText = msg;
    options.forEach(option => option.style.display = 'none');
    question.hidden = false;
}

function displayQuestion() {
    question.innerText = questions[currentQuestionIndex].question;
    options.forEach((option, index) => {
        option.style.display = 'block';
        option.innerText = questions[currentQuestionIndex].options[index];
    });
    question.hidden = false;
}

function hideQuestion() {
    question.hidden = true;
    options.forEach(option => option.style.display = 'none');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    timeRemaining = startTime;
    timerDisplay.innerText = `${timeRemaining}`;
    hideFeedback();
    displayQuestion();
    allowSkip = false;
}

function startTimer() {
    countdownId = setInterval(updateCountdown, 1000);
    timerDisplay.innerText = `${timeRemaining}`;
}

function stopTimer() {
    clearInterval(countdownId);
}

function updateCountdown() {
    timeRemaining--;
    timerDisplay.innerText = `${timeRemaining}`;

    if (timeRemaining <= 0) {
        stopTimer();
        hideQuestion();
        feedback.innerText = 'Sorry, you ran out of time!';
        feedback.hidden = false;
        setTimeout(endQuiz, bufferTime);
    }
}

function endQuiz() {
    hideFeedback();
    question.hidden = false;
    question.innerText = 'Would you like to play again?';
    options.forEach((option, index) => {
        option.style.display = 'block';
        option.innerText = winDisplay[index];
    });
}

// Initialize the first question
displayQuestion();


