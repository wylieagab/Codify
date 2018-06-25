document.getElementById("content").innerHTML = "Sup";

function myFunction() {
	document.getElementById("content").innerHTML = "Change";
}

function userInput1() {
	var input = document.getElementById("userInput1");
	document.getElementById("content").innerHTML = input;
}


function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
    document.getElementById("content").innerHTML = input;
}