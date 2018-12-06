$(document).ready(function () {
	$(".main_btna, .main_btn, .main_nav nav ul li:eq(1) a").on("click", function () {
		$(".overlay").fadeToggle(1000);
		$(".modal").slideDown(1000);
	});
	$(".close").on("click", function () {
		$(".overlay").fadeToggle(1000);
		$(".modal").slideUp(1000);
	});
});