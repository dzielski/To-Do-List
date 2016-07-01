// Check on/off specific todos by clicking
//$("li").click(function(){
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
	$(this).find('i:last').toggleClass('fa-square-o fa-check-square-o')
});


// Click on X to delete Todo
//$("span").click(function(event){
$('ul').on('click', 'span', function(event){
	// need to go up to parent to get the li
	$(this).parent().fadeOut(500,function() {
		// this now is the individual li
		$(this).remove();
	});
	// stop event from bubbling up
	event.stopPropagation();
});


$('input[type="text"]').keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();

		if(todoText === "") {
			alert("Please Enter A To-Do")
		} else {
			// create new li and add to ul
			$('ul').append('<li><span><i class="fa fa-trash"></i></span><i class="fa fa-square-o"></i> ' + todoText + '</li>');
			// clear text field
			$(this).val("");			
		}
	}
});

$('.fa-pencil').click(function() {
	$('input[type="text"]').fadeToggle();
});