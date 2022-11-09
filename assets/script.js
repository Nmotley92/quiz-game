var h1El = $('#main-header');
var questionEl = $('#question-text');
var startBtnEl = $('#start');
var answerBtnsEl = $('#answer-buttons');
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
var oderlistEl = $('#high-list');
var pEl = $('#title');
var mainEl = $('main');
var questionCount = 0;
var timeLeft = 75;
var highScoreLink = $('high-link');

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
// Hides all elements I need later
btn1.hide();
btn2.hide();
btn3.hide();
btn4.hide();
inputEl.hide();
span.hide();
submitEl.hide();
pEl.hide();
response.hide();

highScoreLink.on('click', () => {
  displayHighList()
})
// sets timer
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.text('Time:' + timeLeft);
      timeLeft--;
    }
    if (questionCount == 5) {
      timerEl.textContent = '';
      clearInterval(timeInterval)
    } else if (timeLeft == 0) {
      displayScore();
    }
  }, 1000);
}
// gamestarts
startBtnEl.on('click', startQuiz);

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
// displays question
function displayQuestion(question) {
  questionEl.text(question.question);
  questionEl.css('font-weight', 'bold');
  questionEl.css('font-size', '2.2em');

}

// fills the anser buttons and add a value for telling if it is correct
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
// all the possible answer clicks
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
// tells whether right or wrong
function displayResponse(clicked) {

  if (clicked == true) {
    response.show();
    response.text("Correct");
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    if (questionCount == 5 || timeLeft == 0) {
      displayScore();
    }

  } else {
    response.show();
    response.text("Wrong");
    timeLeft = timeLeft - 10;
    displayQuestion(questions[questionCount]);
    createAnswers(questions[questionCount]);
    if (questionCount == 5 || timeLeft == 0) {
      displayScore();
    }
  }
}

var highScoreArray = [];
// Displays final score
function displayScore() {
  questionEl.text("All done");
  var score = timeLeft;
  btn1.hide();
  btn2.hide();
  btn3.hide();
  btn4.hide();
  pEl.hide();
  timerEl.hide();
  response.hide();
  answerBtnsEl.text("Your final score is: " + score);
  span.show();
  inputEl.show();
  submitEl.show();

  // takes user intials
  submitEl.on('click', () => {
    if (!inputEl.val()) {
      alert("please enter your initials");
      return;
    }
    // removes already created high scores
    $(".bye").remove();
    submitEl.hide();
    inputEl.hide();
    span.hide();
    answerBtnsEl.hide();
    questionEl.hide();
    pEl.show();
    var name = inputEl.val();
    // push name and score in
    highScoreArray.push({
      name,
      score
    });
    displayHighList(highScoreArray);
  });
}
// creates and shows High Score List
function displayHighList(e) {
  // creates go back and clear list buttons
  var goBack = $('<button>');
  var clearHigh = $('<button>');

  goBack.text("Go Back To Start");
  clearHigh.text("Clear High Scores");

  goBack.addClass('high-buttons');
  clearHigh.addClass('high-buttons');

  mainEl.append(goBack);
  mainEl.append(clearHigh);
// if they click go back it reloads the page
  if (goBack.on('click', () => {
      window.location.reload()
    }));
// clears local storage
  if (clearHigh.on('click', () => {
      localStorage.clear();
      $('.bye').remove();
    }));
// pulls from local storage
  var oldHighScore = JSON.parse(localStorage.getItem("HighScoreNew"));
  var highScoreArray = e;
// if no previous saved data
  if (!oldHighScore) {
    localStorage.setItem("HighScoreNew", JSON.stringify(highScoreArray));
    var firstScore = $('<li>');
    firstScore.text(highScoreArray[0].name + " " + highScoreArray[0].score);
    oderlistEl.append(firstScore);
  }
  // adds new hight score to the list
  else {
    var newHigh = oldHighScore.concat(highScoreArray);
    newHigh.sort((a, b) => b.score - a.score);
    localStorage.setItem("HighScoreNew", JSON.stringify(newHigh));

    for (let i = 0; i < newHigh.length; i++) {
      var listItem = $('<li>');
      listItem.text(newHigh[i].name + " " + newHigh[i].score);
      listItem.addClass("bye");
      oderlistEl.append(listItem);
    }
  }
}