//For first dice

var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var image1="dice"+randomNumber1+".png";

var n1=document.querySelectorAll("img")[0];
n1.setAttribute("src",image1);

//For second dice

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var image2="dice"+randomNumber2+".png";
var n2=document.querySelectorAll("img")[1];
n2.setAttribute("src",image2);


//For heading

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins" ;
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins";
}
else{
  document.querySelector("h1").textContent="Draw";
}
