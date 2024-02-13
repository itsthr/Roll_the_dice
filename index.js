setTimeout(()=>diceroll(),1000);
function diceroll(){
var flag1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + flag1 + ".png";
var dicesrc1 = "images/" + dice1;
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", dicesrc1);
var flag2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + flag2 + ".png";
var dicesrc2 = "images/" + dice2;
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", dicesrc2);

if(flag1>flag2) document.querySelector("h1").innerHTML = "Player1 Wins ✌️";
else if(flag1<flag2) document.querySelector("h1").innerHTML = "Player2 Wins ✌️";
else document.querySelector("h1").innerHTML = "It's a draw!! Roll the dice again";
}