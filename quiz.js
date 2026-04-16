const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');
const resetButton = document.getElementById('resetBtn'); // NEW

const quizQuestions = [
    {
        question: "What is the main goal of Annalise's research?",
        answers: {
            a: "To build a rocketship",
            b: "To develop new methods of cooking beef",
            c: "To develop peptides to be used as biofungicides",
            d: "She still hasn't figured it out",
        },
        correctAnswer: "c"
    },
    {
        question: "Who is Annalise's industry partner?",
        answers: {
            a: "Nestle",
            b: "Nufarm",
            c: "Nuseed",
            d: "Nike",
        },
        correctAnswer: "b"
    },
    {
        question: "What disease is Annalise focused on?",
        answers: {
            a: "Blackleg",
            b: "Orangearm",
            c: "Yellowhead",
            d: "Purplefoot",
        },
        correctAnswer: "a"
    },
    {
        question: "How much canola yield can be lost without control methods?",
        answers: {
            a: "10-20%",
            b: "50-60%",
            c: "80-90%",
            d: "100%",
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
  const output = [];

  for (let i = 0; i < quizQuestions.length; i++) {
    const answers = [];

    for (const letter in quizQuestions[i].answers) {
      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
      );
    }

    output.push(
      // CHANGED: wrap each whole question in a container with class "question-block"
      '<div class="question-block">'
      + '<div class="question">' + quizQuestions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
      + '</div>'
    );
  }

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const questionBlocks = quizContainer.querySelectorAll('.question-block'); // NEW
  let numCorrect = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

    // NEW: remove old styling first
    questionBlocks[i].classList.remove('correct', 'incorrect');

    if (userAnswer === quizQuestions[i].correctAnswer) {
      numCorrect++;
      // CHANGED: add class instead of changing text colour
      questionBlocks[i].classList.add('correct');
    } else {
      // CHANGED: add class instead of changing text colour
      questionBlocks[i].classList.add('incorrect');
    }
  }

  if (numCorrect === 0) {
    resultsContainer.innerHTML = "You can do better than that! Try again.";
  }
  if (numCorrect === 1) {
    resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
  }
  if (numCorrect === 2) {
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4. Have another go to improve.";
  }
  if (numCorrect === 3) {
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4.";
  }
  if (numCorrect === 4) {
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4.";
  }

  updateFeedback("You scored " + numCorrect + " out of " + quizQuestions.length + ".");
}

function updateFeedback(message) {
  feedbackEl.textContent = message;
}

// NEW: reset function
function resetQuiz() {
  const questionBlocks = quizContainer.querySelectorAll('.question-block');
  const radioButtons = quizContainer.querySelectorAll('input[type="radio"]');

  // remove correct/incorrect background colours
  for (let i = 0; i < questionBlocks.length; i++) {
    questionBlocks[i].classList.remove('correct', 'incorrect');
  }

  // uncheck all radio buttons
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }

  // clear result text
  resultsContainer.innerHTML = '';
  feedbackEl.textContent = '';
}

buildQuiz();

submitButton.onclick = function () {
  showResults();
};

// NEW
resetButton.onclick = function () {
  resetQuiz();
};


