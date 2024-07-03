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

function validateAnswer(selection) {
    let currentQuestion = questions[currentQuestionIndex];
    let correct_answer = currentQuestion['correct_answer'];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == correct_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
    }
}

