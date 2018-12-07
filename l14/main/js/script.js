$(document).ready(function () {
	$(".main_btna, .main_btn, .main_nav a[href='#sheldure']").on("click", function () {
		document.body.style.overflow = "hidden";
		$(".overlay").fadeToggle(1000, function () {
			$(".modal").slideDown(1000);
		});

	});
	$(".close").on("click", function () {
		document.body.style.overflow = "";
		$(".modal").slideUp(1000, function () {
			$(".overlay").fadeToggle(1000);
		});
	});
});