function returnCurrentQuestionHTML(currentQuestion) {
    return /*html*/`
        <h5 class="card-title">${currentQuestion['question']}</h5>

        <div class="card pointer mb-2" onclick="validateAnswer('answer_1')">
            <div id="answer_1" class="card-body card-answer">
                ${currentQuestion['answer_1']}
            </div>
        </div>
        <div class="card pointer mb-2" onclick="validateAnswer('answer_2')">
            <div id="answer_2" class="card-body card-answer">
                ${currentQuestion['answer_2']}
            </div>
        </div>
        <div class="card pointer mb-2" onclick="validateAnswer('answer_3')">
            <div id="answer_3" class="card-body card-answer">
                ${currentQuestion['answer_3']}
            </div>
        </div>
        <div class="card pointer mb-2" onclick="validateAnswer('answer_4')">
            <div id="answer_4" class="card-body card-answer">
                ${currentQuestion['answer_4']}
            </div>
        </div>

        <div class="question-footer mt-3">
            <p class="mb-0"><b>${currentQuestionNumber} </b>von <b>${totalQuestionsNumber}</b> Fragen</p>
            <button onclick="nextQuestion()" id="nextQuestionBtn" href="#" class="btn btn-primary" disabled>Nächste Frage</button>
        </div>
    `;
}