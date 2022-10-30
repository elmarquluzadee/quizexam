const btn_start = document.querySelector("#btnStart");
const btn_next = document.querySelector("#nextStart");
const question_text = document.querySelector(".question-text");
const quiz_box = document.querySelector(".quiz-box");
const over_id = document.querySelector("#overId");
const cards_id = document.querySelector("#cards");


let count = 0;
let selectVariant = null;

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

    //     displayQuiz();
        // this.classList.add("bg-warning");
      //  answer.classList.add("bg-danger");

        // const opr = quiz_box.querySelectorAll(".option");
        
          
          
        // for(let a of opr){
        //     console.log(a);
        //     a.classList.add("bg-danger");}
     
        // if (questions[count].checkAnswer(option) === true) {
        //     console.log("true");
        //     }else {
        //     console.log("false");
        //     };

        // console.log(option)
}
 
btn_next.addEventListener("click",(e) =>
{
    if(selectVariant == dogruVariant){
        
    }
})

 // const opr = quiz_box.querySelectorAll(".option");
   
    // console.log(option)

    // for(let a of opr)
    // {  
        
    // }