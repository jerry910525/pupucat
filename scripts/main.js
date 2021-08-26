function updateDisplay(val) {
    document.getElementById("counter").innerHTML = val;
}
var counter=0;
if(localStorage.getItem("count")) 
{
	counter = localStorage.getItem("count");
	updateDisplay(counter);
} 

var isSave =false;
var myImage = document.querySelector('img');
let mySrc = myImage.getAttribute('src');



var myButton = document.querySelector('img');
var restartbutton = document.getElementById("restartb");
var counttext =document.getElementById("counter").innerHTML;
myImage.setAttribute ('src','images/test.png');

audioyo = document.getElementById("yo")
audioyoyo = document.getElementById("yoyo")
myButton.onmouseup = function() {
myImage.setAttribute ('src','images/test2.png');
audioyo.pause();
audioyo.currentTime = 0;
audioyoyo.play();
//updateDisplay(++counter);
}
myButton.onmousedown = function() {
audioyoyo.pause();
audioyoyo.currentTime = 0;
	 myImage.setAttribute ('src','images/test.png');
	 audioyo.play();

	 updateDisplay(++counter);
	 
}
restartbutton.onclick= function()
{
	
	updateDisplay(counter=0);
}
var isSave =false;
function save(){
localStorage.setItem("count",counter)}

window.onbeforeunload =function() 
{
	if(!isSave)
	{
		//alert
	}
	else
	{
		return "";
	}
}
window.onunload =function() 
{
	if(!isSave)
	{
		save();
	}
} 

//alert("test");

