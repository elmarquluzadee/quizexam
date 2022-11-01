const btn_start = document.querySelector("#btnStart");
const btn_next = document.querySelector("#nextStart");
const question_text = document.querySelector(".question-text");
const quiz_box = document.querySelector(".quiz-box");
const over_id = document.querySelector("#overId");
const cards_id = document.querySelector("#cards");
const result_item = document.querySelector(".result-item");
const progressBar_footer = document.querySelector("#progressBarId");
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");



let count = 0;
let selectVariant = null;
let selectCount;
let correctAnswers = 0;
let wrongAnswers = 0;


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
    const calcWidthProgeress = (100 / questions.length) * (correctAnswers+wrongAnswers);
         let progressBar = ` <div class="progress">
                          <div 
                          style="width:${calcWidthProgeress}%" 
                          class="progress-bar progress-bar-striped progress-bar-animated" 
                          role="progressbar"  
                          aria-valuenow="25" 
                          aria-valuemin=""
                          aria-valuemax="100">
                          </div>
                          </div>`;

    for (let a in questions[count].answers) {
        html += `<div id="${a}" onclick='chooseVariant(this,${count},"${a}")'; class="option"><span"><b> &nbsp ${a}:</b> &nbsp ${questions[count].answers[a]}</span></div>`;
     };

    quiz_box.innerHTML = html;
    question_text.innerHTML = text;
    progressBar_footer.innerHTML = progressBar;
   
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
        correctAnswers++;
        }else{
        wrongAnswers++;
        }
});

function resultDisplay()
{
    let display =  `<div class="d-flex row">
    <h5 class="col-6 mx-2 "><i class=" correct mx-2 fa-sharp fa-solid fa-circle-check"></i>correct: <span>${correctAnswers}</span></h5>
    <h5 class="col-6 mx-2"><i class=" wrong mx-2 fa-sharp fa-solid fa-circle-xmark"></i> wrong:<span>${wrongAnswers}</span></h5>
    </div>`;
    result_item.innerHTML = display;
};

btn_next.addEventListener('click', () => {
    if (count < questions.length - 1) {
         count++;
         displayQuiz();
         btn_next.classList.remove("active");
       } else {
         cards_id.classList.add("noshow");
         over_id.classList.remove("noshow");   
         btn_next.classList.remove("active");
         progressBarDisplay();
         resultDisplay();
         displayQuiz();
         
       }
 });

//progressbar
function progressBarDisplay(){
let correctAnswersBar = correctAnswers * 100/questions.length

  let progressValue = 0;
  let progressEndValue = Math.round(correctAnswersBar);
  let speed = 20;

let progress = setInterval(() =>{
     progressValue++;
     valueContainer.textContent = `${progressValue}%`;
     progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue *3.6}deg,
        #cadcff ${progressValue * 3.6}deg  
     )`
     if(progressValue == progressEndValue){
        clearInterval(progress);
     }
} ,speed);}
//  progressBarDisplay();