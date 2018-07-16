var myDiv = document.getElementsByClassName("one")[0];
myDiv.style.backgroundColor = "red";

var elem = document.createElement('div');
elem.style.cssText = 'width:100%;height:200px;background-color:pink;'
elem.id = "imTheBigBadId"
document.body.appendChild(elem);


var elem2 = document.createElement('h1');
elem2.textContent = 'Hello Friend'
var myDiv2 = document.getElementById('imTheBigBadId')
myDiv2.appendChild(elem2);

var elem3 = document.createElement('div');
elem3.style.cssText = 'width:100%;height:200px;background-color:green;'
elem3.id = "imTheBigBadIdButNumber2"
document.body.appendChild(elem3);
var myDiv3 = document.getElementById('imTheBigBadIdButNumber2')

var myH1 = document.createElement("h1")
var myText = document.createTextNode("Sup G")
myH1.appendChild(myText)
myDiv3.appendChild(myH1)

var myImg = document.createElement("IMG")
myImg.src = "img/bull.jpg"
document.body.appendChild(myImg)

var myButton = document.createElement("BUTTON")
var myText2 = document.createTextNode("Change Pic")
myButton.appendChild(myText2)
myButton.onclick = function() {
	myImg.src="img/glass.jpg"
	myImg.alt="Chillin Bully"
}
document.body.appendChild(myButton)



