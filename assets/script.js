var correct = 0;
var incorrect = 0;
var totalTime = 120;
$("#right").text(correct);
$("#wrong").text(incorrect);

//timer
function countdown() {
  totalTime = totalTime - 1;
  $("#time-left").text("Time Remaining:" + " " + totalTime);
  time = setTimeout(countdown, 1000);

  if (totalTime === -1) {
    $("#main-content").css("display", "none");
    $(".score").css("display", "block");
    $("#time-left").css("display", "none");
  }
}

//Massive wall of code that I should trim down at some point
$(".submit").on("click", function submitAnswer() {
  var radios = document.getElementsByName("major-scale");
  var i = 0,
    len = radios.length;
  var checked = false;
  var userAnswer;

  for (; i < len; i++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }
  // Correct answer
  if (userAnswer === "two") {
    correct++;
    $("#right").text(correct);
  }
  // incorrect answer
  else {
    incorrect++;
    $("#wrong").text(incorrect);
  }
});
//question 2
$(".submit").on("click", function submitAnswer() {
  var radios = document.getElementsByName("harmonic-minor-scale");
  var i = 0,
    len = radios.length;
  var checked = false;
  var userAnswer;

  for (; i < len; i++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }
  // Correct answer
  if (userAnswer === "three") {
    correct++;
    $("#right").text(correct);
  }
  // incorrect answer
  else {
    incorrect++;
    $("#wrong").text(incorrect);
  }
});
//question 3
$(".submit").on("click", function submitAnswer() {
  var radios = document.getElementsByName("octave");
  var i = 0,
    len = radios.length;
  var checked = false;
  var userAnswer;

  for (; i < len; i++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }
  // Correct answer
  if (userAnswer === "twelve") {
    correct++;
    $("#right").text(correct);
  }
  // incorrect answer
  else {
    incorrect++;
    $("#wrong").text(incorrect);
  }
});
//question 4
$(".submit").on("click", function submitAnswer() {
  var radios = document.getElementsByName("interval");
  var i = 0,
    len = radios.length;
  var checked = false;
  var userAnswer;

  for (; i < len; i++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }
  // Correct answer
  if (userAnswer === "minor-third") {
    correct++;
    $("#right").text(correct);
  }
  // incorrect answer
  else {
    incorrect++;
    $("#wrong").text(incorrect);
  }
});
//question 5
$(".submit").on("click", function submitAnswer() {
  var radios = document.getElementsByName("chord");
  var i = 0,
    len = radios.length;
  var checked = false;
  var userAnswer;

  for (; i < len; i++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }
  // Correct answer
  if (userAnswer === "egb") {
    correct++;
    $("#right").text(correct);
  }
  // incorrect answer
  else {
    incorrect++;
    $("#wrong").text(incorrect);
  }
});
//submit change CSS
$(".submit").on("click", function() {
  $("#main-content").css("display", "none");
  $(".score").css("display", "block");
  $("#time-left").css("display", "none");
});

//start game CSS
$(".begin").on("click", function() {
  $(".intro").css("display", "none");
  $("#main-content").css("display", "block");
  countdown();
});
