var startButton= document.getElementById("start");
var answerbtn1= document.getElementById("answer");
var answerbtn2= document.getElementById("answer2");
var answerbtn3= document.getElementById("answer3");
var answerbtn4= document.getElementById("answer4");
startButton.addEventListener('click', startGame);

function startGame(){
    startButton.classList.add('hide');
    answerbtn1.classList.remove('hide');
    answerbtn2.classList.remove('hide');
    answerbtn3.classList.remove('hide');
    answerbtn4.classList.remove('hide');
    generateQuestion();

}

function generateQuestion(){

}

function playerAnswer(){

}

var questions = [
    {
        question: "",
        answers: [
            {text:}
        ]
    }
]