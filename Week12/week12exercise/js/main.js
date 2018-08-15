var myArr = [2.34,4.67,1.69,4.20,5.37]
var myArr2 = []
for (i=0; i < myArr.length; i++) {
	myArr2.push(Math.ceil(myArr[i]))
}

function randoms() {
	var rands = []
	for (i=0; i< 10; i++) {
		rands.push(Math.random() * (100 - 1) + 1)
	}
}

function time() {
	var obj = new Date()
	var h = adjHour(obj.getHours());
	var m = adj(obj.getMinutes());
	var s = adj(obj.getSeconds());
	var month = adjMonth(obj.getMonth());
	var day = adj(obj.getDate());
	var year = adj(obj.getFullYear());
	
	document.getElementById("time").innerHTML = "Time: " + h + ":" + m + ":" + s + "\n Date: " + month + "/" + day + "/" + year

	setTimeout(function() { 
		time() }, 1000) 
	
}

function adjHour(hours) { 
	if (hours < 12) {
		return "0" + hours;
	}
	else 
		return "0" + (hours - 12);
}

function adj(unit) {
	if (unit < 10) {
		return "0" + unit
	}
	else
		return unit
}

function adjMonth(unit) {
	if (unit < 10) {
		return "0" + (unit +1)
	}
	else
		return unit + 1
}



time()

// setInterval(function() {
	
// 	document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "\n" + (month+1) + ":" + day + ":" + year }
// , 1000)


