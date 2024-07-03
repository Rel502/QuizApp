function init() {
    renderCurrentQuestion();
}

let totalQuestionsNumber = questions.length;    /*---> 1 von X Fragen */
let currentQuestionNumber = 1;                  /*---> X von 10 Fragen */

let currentQuestionIndex = 0;
let playerScore = 0;
let quizProgress = 0;

let rightAnswerSound = new Audio ('./assets/audio/success.mp3');
let wrongAnswerSound = new Audio ('./assets/audio/fail.mp3');
let endingSound = new Audio ('./assets/audio/ending.mp3');

function renderCurrentQuestion() {
    let content = document.getElementById('cardContent');
    content.innerHTML = '';

    let currentQuestion = questions[currentQuestionIndex]
    content.innerHTML = returnCurrentQuestionHTML(currentQuestion);
}

function validateAnswer(selection) {
    let currentQuestion = questions[currentQuestionIndex];
    let correct_answer = currentQuestion['correct_answer'];
    let selectedQuestionNumber = selection.slice(-1);

    if (givenAnswerIsCorrect(selectedQuestionNumber, correct_answer)) {
        document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
        playerScore++;
        rightAnswerSound.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
        document.getElementById(`answer_${correct_answer}`).parentNode.classList.add('bg-success-subtle');
        wrongAnswerSound.play();
    }

    document.getElementById('nextQuestionBtn').disabled = false;
    quizProgress += 10;
}

function givenAnswerIsCorrect(selectedQuestionNumber, correct_answer) {
    return selectedQuestionNumber == correct_answer;
}

function nextQuestion() {
    if (notAllQuestionsAnswered()) {
        proceedQuiz();
        renderCurrentQuestion();
    } else {
        renderEndScreen();
    }
}

function proceedQuiz() {
    currentQuestionIndex++;
    currentQuestionNumber++;
}

function notAllQuestionsAnswered() {
    return currentQuestionNumber < totalQuestionsNumber;
}

function renderEndScreen() {
    changeBgImg();
    endingSound.play();
    let content = document.getElementById('cardContent');
    content.innerHTML = '';
    content.innerHTML += returnEndScreenHTML();
}

function playAgain() {
    resetPlayerScore();
    resetCurrentQuestion();
    renderCurrentQuestion();
    changeBgImg();
}

function resetPlayerScore() {
    playerScore = 0;
    quizProgress = 0;
}

function resetCurrentQuestion() {
    currentQuestionIndex = 0;
    currentQuestionNumber = 1;
}

function changeBgImg() {
    document.getElementById('quizImg').classList.toggle('d-none');
    document.getElementById('endScreenImg').classList.toggle('d-none');
}