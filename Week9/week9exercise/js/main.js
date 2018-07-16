// var theArray = ["the", "dog", "sat", "on", "log"]
// var theArrayCopy = theArray.slice();
// console.log(theArray);
// var arrLength = theArray.length;
// for (i = 0; i < theArray.length; i++) {
// 	console.log(theArray[i].length);
// }
// var copiedArray = [];
// //theArray = theArray.reverse();
// for(j = arrLength; j > 0; j--) {
// 	copiedArray.push(theArray.pop());
// }
// console.log(copiedArray);
// var newArray = [];

// //console.log(theArrayCopy)
//  for (k = 0; k < arrLength; k++) {
// 	newArray.push(theArrayCopy[k]);
// }

// newArray.sort()
// console.log(newArray);

// var intArr = [10, 20, 11, 23, 19];

// intArr.sort(function(a,b){return a-b});
// console.log(intArr);

// intArr.sort(function(a,b){return b-a});
// console.log(intArr);

// var strArr = ["how", "de", "do"];
// strArr.push("dey")
// strArr.push("doo")
// strArr.shift();
// console.log(strArr);
var myCounter = 0;
var theFinalArr = [];
//var myLi = document.createElement("LI");
var theUl = document.getElementById("myUl");

function textIn() {
	theUl.innerHTML = "";
	theFinalArr.push(document.getElementsByTagName("input")[0].value);
	for (i = 0; i < theFinalArr.length; i++) {
		var myLi = document.createElement("LI");
		myLi.appendChild(document.createTextNode(theFinalArr[i]));
		theUl.appendChild(myLi);
	}
}

function sortMe() {
	theUl.innerHTML = "";
	theFinalArr.sort(function(a,b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});
	for (i = 0; i < theFinalArr.length; i++) {
		var myLi = document.createElement("LI");
		myLi.appendChild(document.createTextNode(theFinalArr[i]));
		theUl.appendChild(myLi);
	}
}

function removeLast() {
	theUl.innerHTML = "";
	theFinalArr.pop();
	for (i = 0; i < theFinalArr.length; i++) {
		var myLi = document.createElement("LI");
		myLi.appendChild(document.createTextNode(theFinalArr[i]));
		theUl.appendChild(myLi);
	}
}

function removeFirst() {
	theUl.innerHTML = "";
	theFinalArr.shift();
	for (i = 0; i < theFinalArr.length; i++) {
		var myLi = document.createElement("LI");
		myLi.appendChild(document.createTextNode(theFinalArr[i]));
		theUl.appendChild(myLi);
	}
}
console.log(theFinalArr);