var answers = ["It is Arthur, King of the Britons", "To seek the Holy Grail", "What do you mean? An African or European swallow?"]
var userIn = []
var correct = 0;
var incorrect = 0;
var looper = document.getElementsByTagName("input").length


function quiz() {
	for (i = 0; i < looper; i++) {
		userIn.push(document.getElementsByTagName("input")[i].value)
		if (userIn[i] == answers[i]) {
			correct++
		} else {
			incorrect++
		}
	}
	userIn  = []
	document.getElementById("correct").innerHTML = "Correct: " + correct;
	document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrect;
	correct = 0;
	incorrect = 0;
}
