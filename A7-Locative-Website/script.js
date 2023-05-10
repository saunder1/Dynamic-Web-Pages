const questions = [
    {
        question: "Are you at the circular brick window ring at WWU now?",
        options: ["Yes", "No", "I don't know"],
        feedbacks: ["Good. You will need to be if you want to win this quiz.", 
                    "This quiz will be very difficult if you are not there.", 
                    "That is concerning, you should probably figure out where you are."],
        correctOption: 0
    },
    {
        question: "How many windows are there in the structure?",
        options: ["10", "13", "100"],
        feedbacks: ["Unlucky!", "Correct", "Hmm... You might want to count again."],
        correctOption: 1
    },
    {
        question: "How many rings are in the structure?",
        options: ["0", "infinite", "2"],
        feedbacks: ["There's definitely more than 0 pal.", "Circles are ininite, so are there infinite rings?? No.", "Wow nice job, you can count!"],
        correctOption: 2
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
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                stopTimer();
                setTimeout(endQuiz, bufferTime);
            } else {
                setTimeout(nextQuestion, bufferTime);
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


