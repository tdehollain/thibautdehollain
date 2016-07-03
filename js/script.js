$(document).ready(function() {

	// FastClick buttons
	new FastClick(document.getElementById("webDesign"));
	new FastClick(document.getElementById("cars"));
	new FastClick(document.getElementById("cinema"));
	new FastClick(document.getElementById("photo"));
	new FastClick(document.getElementById("cooking"));
	new FastClick(document.getElementById("elephants"));
	new FastClick(document.getElementById("mechEngTitle"));
	new FastClick(document.getElementById("cuEngTitle"));
	new FastClick(document.getElementById("TACTitle"));
	new FastClick(document.getElementById("MBATitle"));
	new FastClick(document.getElementById("andNowTitle"));


	// $("#webDesign").on('click', function() {
	// 	var isActive = $('#webDesignDiv').hasClass('active');
	// 	$('.interestDiv').removeClass('active'); // deactivate any div if there is an active one
	// 	if(!isActive) {
	// 		$('#webDesignDiv').addClass('active');
	// 	}
	// })

	$('#about ul li').click(function() {
		var relevantDiv = $('#' + $(this).attr('id') + "Div");
		var isActive = relevantDiv.hasClass('active');
		$('.interestDiv').removeClass('active');

		if(!isActive) {
			relevantDiv.addClass('active');
		}
	});


	$('#mechEngTitle').click(function() {
		$('#careerPath h3').removeClass('active');
		$(this).addClass('active');

		$('.descr').addClass('hidden');
		$('#descriptions').removeClass().addClass('up');
		$('#mechEng.descr').removeClass('hidden');
	});

	$('#cuEngTitle').click(function() {
		$('#careerPath h3').removeClass('active');
		$(this).addClass('active');

		$('.descr').addClass('hidden');
		$('#descriptions').removeClass().addClass('midUp');
		$('#cuEng.descr').removeClass('hidden');
	});

	$('#TACTitle').click(function() {
		$('#careerPath h3').removeClass('active');
		$(this).addClass('active');

		$('.descr').addClass('hidden');
		$('#descriptions').removeClass().addClass('middle');
		$('#TAC.descr').removeClass('hidden');
	});

	$('#MBATitle').click(function() {
		$('#careerPath h3').removeClass('active');
		$(this).addClass('active');

		$('.descr').addClass('hidden');
		$('#descriptions').removeClass().addClass('midDown');
		$('#MBA.descr').removeClass('hidden');
	});

	$('#andNowTitle').click(function() {
		$('#careerPath h3').removeClass('active');
		$(this).addClass('active');

		$('.descr').addClass('hidden');
		$('#descriptions').removeClass().addClass('down');
		$('#andNow.descr').removeClass('hidden');
	});

});