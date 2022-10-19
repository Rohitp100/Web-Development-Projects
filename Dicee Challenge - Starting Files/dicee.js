var randomno1 = Math.floor(Math.random()*6 + 1);
var diceimage = "dice" + randomno1 + ".png";

var randomno2 = Math.floor(Math.random()*6 + 1);
var diceimage = "dice" + randomno2 + ".png";

var address1 = "images/dice" + randomno1 + ".png";
var address2 = "images/dice" + randomno2 + ".png"

var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", address1);

var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src",address2);

if(randomno1 > randomno2){
  document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins";
}

else if(randomno2 > randomno1){
  document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins";
}

else{
  document.getElementsByTagName("h1")[0].textContent = "Its a tie";
}
