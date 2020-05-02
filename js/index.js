var firstRandomNumber = 1 + Math.floor(6*(Math.random()));
//console.log(randomNumber);
document.querySelector(".img1").setAttribute("src","images/dice" + firstRandomNumber + ".png");
var secondRandomNumber = 1 + Math.floor(6*(Math.random()));
//console.log(randomNumber);
document.querySelector(".img2").setAttribute("src","images/dice" + secondRandomNumber + ".png");
if (firstRandomNumber > secondRandomNumber) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if(firstRandomNumber < secondRandomNumber){
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
else {
  {
    document.querySelector("h1").innerText = "Draw!";
  }
}
