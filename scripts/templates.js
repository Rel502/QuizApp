function returnCurrentQuestionHTML(currentQuestion) {
    return /*html*/`
        <h5 class="card-title">${currentQuestion['question']}</h5>

        <div class="card pointer mb-2">
            <div class="card-body card-answer" onclick="answer(1)">
                ${currentQuestion['answer_1']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body card-answer" onclick="answer(2)">
                ${currentQuestion['answer_2']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body card-answer" onclick="answer(3)">
                ${currentQuestion['answer_3']}
            </div>
        </div>
        <div class="card pointer mb-2">
            <div class="card-body card-answer" onclick="answer(4)">
                ${currentQuestion['answer_4']}
            </div>
        </div>

        <div class="question-footer mt-3">
            <p class="mb-0"><b>${currentQuestionNumber} </b>von <b>${totalQuestionsNumber}</b> Fragen</p>
            <a href="#" class="btn btn-primary">Nächste Frage</a>
        </div>
    `;
}