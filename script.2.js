const btn_start = document.querySelector("#btnStart");
const btn_next = document.querySelector("#nextStart");
const question_text = document.querySelector(".question-text");
const quiz_box = document.querySelector(".quiz-box");
const over_id = document.querySelector("#overId");
const cards_id = document.querySelector("#cards");
const result_item = document.querySelector(".result-item");

let count = 0;
let selectVariant = null;
let selectCount;
let trueAnswer = 0;
let falseAnswer = 0;

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

const displayQuiz = () => {
    let html = '';
    let text = `<span><b>${questions[count].question}</b> sözünün ingiliscə qarşılqı nədir</span>`;

    for (let a in questions[count].answers) {
        html += `<div id="${a}" onclick='chooseVariant(this,${count},"${a}")'; class="option"><span"><b> &nbsp ${a}:</b> &nbsp ${questions[count].answers[a]}</span></div>`;
     };
    quiz_box.innerHTML = html;
    question_text.innerHTML = text;
   
};

chooseVariant = (element,count, option) => {
         btn_next.classList.add("active");  
         quiz_box.querySelectorAll(".option").forEach(variant => variant.classList.remove("bg-primary"))
         element.classList.add("bg-primary");
         selectVariant = option;
         selectCount = count
}

btn_next.addEventListener("click",() =>
{
    if(questions[selectCount].checkAnswer(selectVariant) === true){
        trueAnswer++;
        }else{
        falseAnswer++;
        }
});

function resultDisplay()
{
    let display =  `  <div class="d-flex row">
    <h5 class="col-5 mx-2 ">dogru: <span>${trueAnswer}</span></h5>
    <h5 class="col-5 mx-2">yalnis: <span>${falseAnswer}</span></h5>
    </div>`;
    result_item.innerHTML = display ;
};

btn_next.addEventListener('click', () => {
    if (count < questions.length - 1) {
         count++;
         displayQuiz();
         btn_next.classList.remove("active");
    } else {
         cards_id.classList.add("noshow");
         over_id.classList.remove("noshow");   
         displayQuiz();
         resultDisplay();
     }
 });