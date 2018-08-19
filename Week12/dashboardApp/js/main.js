// 
// USER INFO
// 

    var user = {
        name: "Evan Winston",
        image: "img/cuteGirlsEh.png",
        progress: 0.66
    }

    var courseArr = [{
            title: "Readings in World Literature",
            subject: "Social Studies"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Farsi 301",
            subject: "Languages"
        }];

    var activityArr = [{
            title: "Completed SOSC 503 Module 7 Quiz",
            subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Lorem ipsum dolores sit..."
        }, {
            title: "Enrolled in FARS301",
            subject: "Cohort begins 9/08/18"
        }];

    var accountArr = [{
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Computer Science"
        }];

// 
// 
// 

function setUser(user, image, name, number) {
	image.src = user.image;
	image.alt = user.name;
	name.innerText = user.name;
	number.innerText = "User #: " + (Math.floor(Math.random() * (9999-1000)) + 1000);
}

setUser(user, document.getElementById('image'), document.getElementById('name'), document.getElementById('userN'));



function time() {
	var obj = new Date();
	var h = adjHour(obj.getHours());
	var m = adj(obj.getMinutes());
	var s = adj(obj.getSeconds());
	var month = adjMonth(obj.getMonth());
	var day = adj(obj.getDate());
	var year = adj(obj.getFullYear());

	document.getElementById('time').innerHTML = month + "/" + day + "/" + year +
	 " <i class='far fa-clock'></i> " + h + ":" + m + ":" + s;

	setTimeout(function() {
		time()}, 1000)
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


// $('document').ready(function() {
// 	var userN = document.getElementById('userN');
// 	userN.innerHTML = "User #: " + (Math.floor(Math.random() * (9999-1000)) + 1000)
// })

