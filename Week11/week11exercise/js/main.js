$('.there').click(function() {
	$('img').css("display", "block")
})

$('.nThere').click(function() {
	$('img').css('display', 'none')
})

$("#masta").click(function() {
	$('img').toggle()
});

$("#faded").click(function(){
	$('img').fadeToggle();
});

$("img").hover(function() { 
	$('img').attr('src', 'img/smile.png');
}, function() {
	$('img').attr('src', 'img/owl.png');
});

$('#addToMe').click(function() {
	$('ul').append('<li> Check Me Out! </li>')
})

$('#coverMe').click(function() {
	$("<div id='overlay' style=background-color:red; ></p>").appendTo("body");
})