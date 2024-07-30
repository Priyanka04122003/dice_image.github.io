function rollthedice(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


  var randomsource1 = "dice" + randomNumber1 + ".png"; 
  var randomsource2 = "dice" + randomNumber2 + ".png"; 
  
  document.querySelector(".image1").setAttribute("src",randomsource1);
  document.querySelector(".image2").setAttribute("src",randomsource2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


}
