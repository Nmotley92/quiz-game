var h1El=$('#main-header');
var questionEl= $('#question-text');
var startBtnEl= $('#start');
var answerBtnsEl= $('#answer-buttons');
var questionCount=0;
var questionContEl= $('.question-container');
var answerKey= [];


var questions = [
    {
      question: 'Comonly used data types do not include: ?',
      answers: [
        { text: 'strings', correct: false },
        { text: 'booleans', correct: false },
        { text: 'alerts', correct: true },
        { text: 'numbers', correct: false }
      ]
    },
    {
      question: 'the condition in an if/ else statement is enclose with _____?',
      answers: [
        { text: 'quotes', correct: false },
        { text: 'curly brackets', correct: false },
        { text: 'parenthesis', correct: true },
        { text: 'square brackets', correct: false }
      ]
    },
    {
      question: 'Arrays in JavaScript can be used to store ______',
      answers: [
        { text: 'numbers and strings', correct: false },
        { text: 'other arrays', correct: false },
        { text: 'booleans', correct: false },
        { text: 'all of the above', correct: true }
      ]
    },
    {
      question: 'String values must be closed within ______ when being assigned to variables?',
      answers: [
        { text: 'commas', correct: false },
        { text: 'curely brackets', correct: false },
        { text: 'qoutes', correct: true },
        { text: 'parenthesis', correct: false }
      ]
    },
    {
      question: 'A very useful tool used during developement and debugging for printing content to the debugger is:',
      answers: [
        { text: 'JavaScript', correct: false },
        { text: 'terminal/bash', correct: false },
        { text: 'for loops', correct: false },
        { text: 'console.log', correct: true }
      ]
    }
  ]

startBtnEl.on('click', startQuiz);
function startQuiz(){
    startBtnEl.remove();
    h1El.remove();

    
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    answerBtnsEl.on('click', function(event){
      console.log(event)
    
      
      
    });
  
}
function createAnswers(answer){
  
  for(let i=0; i<answer.answers.length; i++){
    var answersButton= $('<button>');
    answersButton.text(answer.answers[i].text);
    jQuery.data(answersButton, "correct", {
      correct: answer.answers[i].correct,
    } );
    questionContEl.css('align-items', 'start' );
    answersButton.addClass('answer-buttons');
    answerBtnsEl.append(answersButton);
    
    
  }
}

function displayQuestion(question){
  questionEl.text(question.question);
  questionEl.css('font-weight', 'bold');
  questionEl.css('font-size', '2.2em');
  
}

function checkAnswer(event){
  
  
  
}
function displayResponse(){

}