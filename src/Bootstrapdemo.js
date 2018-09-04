$(document).ready(function(){
	var slider = document.getElementById("myRange");
	//var output = document.getElementById("demo");
	//output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	// slider.oninput = function() {
	//     output.innerHTML = this.value;
	// }

	$(".navTask > a").click(function(){
		$(".navTask > a").removeClass('activeTask');
		$(this).addClass('activeTask');
	});
	$(".addTask").click(function(){
		$('.addInnerDiv').show();
		$('.viewInnerDiv').hide();
	});
	$(".viewTask").click(function(){
		$('.addInnerDiv').hide();
		$('.viewInnerDiv').show();
	});
});