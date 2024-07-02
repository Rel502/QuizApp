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

function returnCurrentQuestionHTML(currentQuestion) {
    return /*html*/`
        <h5 class="card-title">${currentQuestion['question']}</h5>

        <div class="card pointer mb-2">
            <div class="card-body">
                ${currentQuestion['answer_1']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body">
                ${currentQuestion['answer_2']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body">
                ${currentQuestion['answer_3']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body">
                ${currentQuestion['answer_4']}
            </div>
        </div>

        <div class="question-footer mt-3">
            <p class="mb-0"><b>${currentQuestionNumber} </b>von <b>${totalQuestionsNumber}</b> Fragen</p>
            <a href="#" class="btn btn-primary">Nächste Frage</a>
        </div>
    `;
}