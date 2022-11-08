var h1El = $('#main-header');
var questionEl = $('#question-text');
var startBtnEl = $('#start');
var answerBtnsEl = $('#answer-buttons');
var questionCount = 0;
var questionContEl = $('.question-container');
var response = $('#response');
var span = $('#enter')
var btn1 = $('#btn1');
var btn2 = $('#btn2');
var btn3 = $('#btn3');
var btn4 = $('#btn4');
var timerEl = $('#countdown');
var inputEl = $('#input');
var submitEl = $('#submit');
var goBackEl = $('#go-back');
var oderlistEl = $('#high-list');
var pEl = $('#title');

var questions = [{
    question: 'Comonly used data types do not include: ?',
    answers: [{
        text: 'strings',
        correct: false
      },
      {
        text: 'booleans',
        correct: false
      },
      {
        text: 'alerts',
        correct: true
      },
      {
        text: 'numbers',
        correct: false
      }
    ]
  },
  {
    question: 'the condition in an if/ else statement is enclose with _____?',
    answers: [{
        text: 'quotes',
        correct: false
      },
      {
        text: 'curly brackets',
        correct: false
      },
      {
        text: 'parenthesis',
        correct: true
      },
      {
        text: 'square brackets',
        correct: false
      }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store ______',
    answers: [{
        text: 'numbers and strings',
        correct: false
      },
      {
        text: 'other arrays',
        correct: false
      },
      {
        text: 'booleans',
        correct: false
      },
      {
        text: 'all of the above',
        correct: true
      }
    ]
  },
  {
    question: 'String values must be closed within ______ when being assigned to variables?',
    answers: [{
        text: 'commas',
        correct: false
      },
      {
        text: 'curely brackets',
        correct: false
      },
      {
        text: 'qoutes',
        correct: true
      },
      {
        text: 'parenthesis',
        correct: false
      }
    ]
  },
  {
    question: 'A very useful tool used during developement and debugging for printing content to the debugger is:',
    answers: [{
        text: 'JavaScript',
        correct: false
      },
      {
        text: 'terminal/bash',
        correct: false
      },
      {
        text: 'for loops',
        correct: false
      },
      {
        text: 'console.log',
        correct: true
      }
    ]
  },
  {
    question: '',
    answers: [{
        text: 'JavaScript',
        correct: false
      },
      {
        text: 'terminal/bash',
        correct: false
      },
      {
        text: 'for loops',
        correct: false
      },
      {
        text: 'console.log',
        correct: true
      }
    ]
  }
]
btn1.hide();
btn2.hide();
btn3.hide();
btn4.hide();
inputEl.hide();
span.hide();
goBackEl.hide();
submitEl.hide();
pEl.hide();


var timeLeft = 75;

function countdown() {


  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {

      timerEl.text('Time:' + timeLeft);

      timeLeft--;
    }
    if (questionCount == 5) {

      timerEl.textContent = '';

      clearInterval(timeInterval)

    } else if (timeLeft == 0)
      displayScore;
  }, 1000);
}

startBtnEl.on('click', startQuiz)

function startQuiz() {
  
  countdown();
  startBtnEl.remove();
  h1El.remove();
  btn1.show();
  btn2.show();
  btn3.show();
  btn4.show();


  displayQuestion(questions[questionCount]);
  createAnswers(questions[questionCount]);
  clickedAnswer();

}



function createAnswers(answer) {
  btn1.text(answer.answers[0].text);
  btn2.text(answer.answers[1].text);
  btn3.text(answer.answers[2].text);
  btn4.text(answer.answers[3].text);
  questionContEl.css('align-items', 'start');
  btn1.value = answer.answers[0].correct;
  btn2.value = answer.answers[1].correct;
  btn3.value = answer.answers[2].correct;
  btn4.value = answer.answers[3].correct;

}

function clickedAnswer() {
  var clicked;
  btn1.on('click', () => {
    clicked = btn1.value;
    questionCount++;
    displayResponse(clicked);

  });
  btn2.on('click', () => {
    clicked = btn2.value;
    questionCount++;
    displayResponse(clicked);
  });
  btn3.on('click', () => {
    clicked = btn3.value;
    questionCount++;
    displayResponse(clicked);
  });
  btn4.on('click', () => {
    clicked = btn4.value;
    questionCount++;
    displayResponse(clicked);

  });
}

function displayQuestion(question) {
  questionEl.text(question.question);
  questionEl.css('font-weight', 'bold');
  questionEl.css('font-size', '2.2em');

}


function displayResponse(clicked) {

  if (clicked == true) {
    response.text("Correct");
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    if (questionCount == 5) {
      displayScore();
    }

  } else {
    response.text("Wrong");
    timeLeft = timeLeft - 10;
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    if (questionCount == 5) {
      displayScore();
    }

  }

}

function displayScore() {
  questionEl.text("All done");
  var score = timeLeft;
  btn1.hide();
  btn2.hide();
  btn3.hide();
  btn4.hide();
  response.text(" ");

  answerBtnsEl.text("Your final score is: " + score);
  span.show();
  inputEl.show();
  submitEl.show();
  pEl.show();

  var initals = $('input[name="input"]').val();
  submitEl.on('click', () => {
    var highScore = {
      name: [inputEl.val()],
      score: [score],
    }

    localStorage.setItem("HighScore", JSON.stringify(highScore));

    var listItem = $('<li>');
    listItem.text(highScore.name + " " + highScore.score);
    oderlistEl.append(listItem);


  });
}