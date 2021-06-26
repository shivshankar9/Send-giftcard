// Sources of snippets and inspiration: 
// Button style & interaction https://codepen.io/bosworthco/pen/RjErEj
// Card flip https://codepen.io/supah/pen/OMdPpW
// Apple too, i guess
// I know jquery is old fashioned, but i'm more of a UX/UI designer these days 

// tilts the buttons on hover
$('.primary-cta, .secondary-cta').tilt({ scale: 1.1, speed: 1000 });

//flip the card to the back and change UI
$('#btn-card-flip').click(function() { // 'customise' button is pressed
  $('.card').addClass('flip'); // card flips over
	$("input:text:visible:first").focus(); //first field of form in auto-focus
	$('#btn-card-flip').addClass('hidden'); // 'customise' button goes invisible//
	$('.secondary-cta').removeClass('hidden'); // 'secondary' button appear //
});
	
//send the card
$('#btn-card-send').click(function() { // 'send' button is pushed
	$('.card').addClass('whoosh'); // slides card up out of view
	$('.confirmation').addClass('visible'); // show success message
		setTimeout(function(){ 
			$('input:text').val(''); }, 300);//scrub the input fields when card when is off canvas 
		setTimeout(function(){ 
