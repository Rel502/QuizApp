function init() {
    renderCurrentQuestion();
}

let totalQuestionsNumber = questions.length;    /*---> 1 von X Fragen */
let currentQuestionNumber = 1;                  /*---> X von 10 Fragen */

let currentQuestionIndex = 0;

function renderCurrentQuestion() {
    let content = document.getElementById('cardContent');
    content.innerHTML = '';

    let currentQuestion = questions[currentQuestionIndex]
    content.innerHTML = returnCurrentQuestionHTML(currentQuestion);
}

function answer(answerIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let givenAnswer = answerIndex;
    let correct_answer = currentQuestion['correct_answer'];

    if (givenAnswer == correct_answer) {
        // -> card soll sich grün färben
        // -> button wird aktiv (blau)
    } else {
        // -> card soll sich rot färben
        // -> button bleibt inaktiv (grau)
    }
}

