$('#mSubmit').click(function() {
	var mName = $('#mName').val();
	var mRate = $('#mRate').val();
	$('#movie').html(mName);
	$('#rating').html(mRate);
})