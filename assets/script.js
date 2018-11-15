var correct = 0;
var incorrect = 0;

$(document).ready(function() {
  console.log("HELLLO");
  $("input").on("click", function() {
    if ($(this).hasClass("guessed")) {
      $(this).removeClass("guessed");
    } else {
      $(this).addClass("guessed");
    }
  });

  //This is where we could loop through and see the amount of elements that have both guessed and correct
  $("SUBMIT BUTTON").on("submit", function(e) {
    e.preventDefault();
    $("input").each(function() {
      if ($(this).hasClass("guessed") && $(this).hasClass("correct")) {
        correct += 1;
      }
    });
    alert(
      `This is what you got right: ${coreect}. This is what you got wrong: ${4 -
        correct}`
    );
  });
});
