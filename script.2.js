const btn_start = document.querySelector("#btnStart");
const btn_next = document.querySelector("#nextStart");
const question_text = document.querySelector(".question-text");
const quiz_box = document.querySelector(".quiz-box");
const over_id = document.querySelector("#overId");
const cards_id = document.querySelector("#cards");

let count = 0;

function Quiz(question, answers, correctVariant) {
    this.question = question;
    this.answers = answers;
    this.correctVariant = correctVariant;
};

Quiz.prototype.checkAnswer = function (correctVariant) {
    return correctVariant == this.correctVariant;
};

btn_start.addEventListener('click', () => {
    displayQuiz();
});

btn_next.addEventListener('click', () => {
   if (count < questions.length - 1) {
        count++;
        displayQuiz();
        btn_next.classList.remove("active");
   } else {
        cards_id.classList.add("noshow");
        over_id.classList.remove("noshow");
        displayQuiz();
    }
});

const displayQuiz = () => {
    let html = '';
    let text = `<span><b>${questions[count].question}</b> sözünün ingiliscə qarşılqı nədir</span>`;

    for (let a in questions[count].answers) {
        html += `<div onclick='chooseVariant(${count},"${a}")'; class="option"><span><b>${a}:</b> &nbsp ${questions[count].answers[a]}</span></div>`;
     };
    quiz_box.innerHTML = html;
    question_text.innerHTML = text;
};

const chooseVariant = (count, option) => {
    btn_next.classList.add("active");

    if (questions[count].checkAnswer(option) === true) {
        console.log("true");
    }else {
        console.log("false");
    };

    console.log(count)
    console.log(option)
}