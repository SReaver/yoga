window.addEventListener("DOMContentLoaded", function () {

	"use strict";
	let calc = require("./parts/calc.js"),
		form = require("./parts/form.js"),
		modal = require("./parts/modal.js"),
		slider = require("./parts/slider.js"),
		smoothscroll = require("./parts/smoothscroll.js"),
		tabs = require("./parts/tabs.js"),
		timer = require("./parts/timer.js");
	calc();
	form();
	modal();
	slider();
	smoothscroll();
	tabs();
	timer();
});