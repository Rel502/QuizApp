function init() {
    render();
}

function render() {
    let content = document.getElementById('cardContent');
    content.innerHTML = '';

    let currentQuestion = questions[0];
    let currentQuestionNumber = 1;

    content.innerHTML = renderCurrentQuestion(currentQuestion, currentQuestionNumber);
}

function renderCurrentQuestion(currentQuestion, currentQuestionNumber) {
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
            <p class="mb-0"><b>${currentQuestionNumber} </b>von <b>5</b> Fragen</p>
            <a href="#" class="btn btn-primary">Nächste Frage</a>
        </div>
    `;
}