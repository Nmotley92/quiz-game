var h1El=$('#main-header');
var questionEl= $('#question-text');
var startBtnEl= $('#start');
var answerBtnsEl= $('#answer-buttons');
var questionCount=0;

var questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]

startBtnEl.on('click', startQuiz);
function startQuiz(){
    startBtnEl.remove();
    h1El.remove();
    console.log(questions[questionCount]);
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    
  
}
function createAnswers(answer){
  
  for(let i=0; i<answer.answers.length; i++){
    var answersButton= $('<button>');
    answersButton.text(answer.answers[i].text);
    answerBtnsEl.append(answersButton);

  }
}

function displayQuestion(question){
  questionEl.text(question.question);
  questionEl.css('font-weight', 'bold');
  questionEl.css('font-size', '2.2em');
  
}

function checkAnswer(){

}
function diplayResponse(){

}