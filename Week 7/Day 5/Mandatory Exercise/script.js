function playTheGame() {
  let yes = confirm("Would you like to play a game?");
  if (yes === false) {
    alert("No Problem, Goodbye.");
    return;
  }
  let answer = prompt("Enter a number between 0 and 10");
  while (isNaN(answer)) {
    answer = prompt(
      "Sorry, not a number. Please enter a number between 0 and 10"
    ); // bonus
  }
  while (answer < 0 || answer > 10) {
    answer = prompt(
      "Sorry, not a valid number. Please enter a number between 0 and 10"
    ); // bonus
  }
  let computerNumber = Math.round(Math.random() * 10) + 1;
  compareNumbers(answer, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  let tries = 0;
  while (userNumber !== computerNumber && tries < 2) {
    if (userNumber > computerNumber) {
      alert("Your number is bigger than the computer's try again.");
      userNumber = prompt("Give a new number");
    } else {
      alert("Your number is smaller than the computer's try again.");
      userNumber = prompt("Give a new number");
    }

    tries++;
  }

  if (userNumber == computerNumber) {
    alert("WINNER");
    return;
  } else {
    alert("Out of Chances");
  }
}
