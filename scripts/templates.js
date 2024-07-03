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

        <!-- Progress Bar -->
        <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="${quizProgress}" aria-valuemin="0" aria-valuemax="100">
            <div id="quizProgress" class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${quizProgress}%"></div>
        </div>

        <div class="question-footer mt-3">
            <p class="mb-0"><b>${currentQuestionNumber} </b>von <b>${totalQuestionsNumber}</b> Fragen</p>
            <button onclick="nextQuestion()" id="nextQuestionBtn" href="#" class="btn btn-primary" disabled>Nächste Frage</button>
        </div>
    `;
}

function returnEndScreenHTML() {
    return /*html*/`
        <div >
            <div class="text-center">
                <h1>Quiz beendet!</h1>
                <div class="p-1 text-info-emphasis bg-info-subtle border border-info-subtle rounded-3"><b>SCORE: ${playerScore} / ${totalQuestionsNumber}<b></div>
            </div>

            <button onclick="playAgain()" type="button" class="mt-2 btn btn-outline-info" style="width: 100%">Neuer Versuch</button>
        </div>
        </div>
    `;
}