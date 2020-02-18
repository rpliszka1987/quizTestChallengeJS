var quizQuestions = [
  ['How many hours in a day?', 24],
  ['How many days in a week?', 7],
  ['How many sides in a triangle?', 3]
];
var score = ;
var htmlCorrect = [];
var htmlWrong = [];

function print(message) {
  document.write(message);
}


function printCorrect(answer) {
  var listHTML = '<ol>';
  for (var i = 0; i < answer.length; i++) {
    listHTML += '<li>' + answer[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

for (var i = 0; i < quizQuestions.length; i++) {
  var answer = prompt(quizQuestions[i][0]);
  answer = parseInt(answer);
  if (answer === quizQuestions[i][1]) {
    score++
    htmlCorrect.push(quizQuestions[i][0]);

  } else {
    htmlWrong.push(quizQuestions[i][0]);
  }
}

document.write('You guessed ' + score + ' questions.');
document.write('<h3> Correct Answers </h3>');
printCorrect(htmlCorrect);
document.write('<h3> Wrong Answers </h3>');
printCorrect(htmlWrong);