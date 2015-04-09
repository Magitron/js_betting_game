$(function(){


var total = 100;
  
while (total > 0) {
var bet = prompt("How much money between $5-10 would you like to bet?");
  var number = Math.floor((Math.random() * 10) + 1);
  var guess = prompt("Guess a number between 1 and 10");



if (number === guess) {
    total += (+bet * 2);
    alert("Correct! You have $" + total + " left");
} else if (Math.abs(number - +guess) === 1) {
    total += +bet;
    alert("Close! The number was " + number + ". You have $" + total + " left");
} else {
   total -= +bet;
  alert("Wrong! The number was " + number + ". You have $" + total + " left");
}
}

});