var css1 = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function rgbtoHex(rgb){
	var hex = rgb.toString(16);
	if(hex.length===null)
		return "00";
	else if(hex.length===1)
		return "0"+hex;
	else
		return hex;
}

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css1.textContent = body.style.background + ";";
	css2.textContent = "linear-gradient(to right, " + rgbtoHex(color1.value).toUpperCase() + ", " + 
	rgbtoHex(color2.value).toUpperCase() + ");";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);