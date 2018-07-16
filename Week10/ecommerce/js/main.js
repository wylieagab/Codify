var titleh1 = document.createElement("H1");
titleh1.appendChild(document.createTextNode("T-Shirt Gallery"));
titleh1.style.fontSize = "100px";
titleh1.style.padding = "50px 0"
document.body.appendChild(titleh1);
document.body.style.textAlign = "center";

function tShirt(image, name, size, color, stock) {
	this.image = image;
	this.name = name;
	this.size = size;
	this.color = color; 
	this.stock = stock;
}

var whiteShirt = new tShirt("img/whitetee.png", "White T-Shirt", "Medium" , "White", "150");
var blackShirt = new tShirt("img/blacktee.png", "Black T-Shirt", "Medium" , "Black", "50");
var redShirt = new tShirt("img/redtee.png", "Red T-Shirt", "Large" , "Red", "20");
var blueShirt = new tShirt("img/bluetee.png", "Blue T-Shirt", "Small" , "Blue", "70");
var greenShirt = new tShirt("img/greentee.png", "Green T-Shirt", "Large" , "Green", "55");
var yellowShirt = new tShirt("img/yellowtee.png", "Yellow T-Shirt", "Medium" , "Yellow", "250");

var myContainer = [whiteShirt, blackShirt, redShirt, blueShirt, greenShirt, yellowShirt];

for (i = 0; i < myContainer.length; i++) {
	var myDiv = document.createElement("DIV");
	myDiv.style.textAlign = "center";
	myDiv.style.border = "1px solid grey";
	var head = document.createElement("H1");
	var myImg = document.createElement("IMG");
	var head1 = document.createElement("H2");
	var head2 = document.createElement("H2");
	var head3 = document.createElement("H2");
	var button1 = document.createElement("BUTTON");
	head.appendChild(document.createTextNode(myContainer[i].name));
	myDiv.appendChild(head);
	myImg.src = myContainer[i].image;
	myDiv.appendChild(myImg);
	head1.appendChild(document.createTextNode("Available size: " + myContainer[i].size));
	head2.appendChild(document.createTextNode("Color: " + myContainer[i].color));
	head3.appendChild(document.createTextNode("In Stock: " + myContainer[i].stock));
	myDiv.appendChild(head1);
	myDiv.appendChild(head2);
	myDiv.appendChild(head3);
	button1.innerHTML = "Buy Now!";
	button1.style.margin = "20px 0"
	myDiv.appendChild(button1);
	document.body.appendChild(myDiv);
}