$(document).ready(function() {
	$("#list__sel .h-list").click(function() {
		$(this).find("~ ul").stop().slideToggle("slov");
	});
});