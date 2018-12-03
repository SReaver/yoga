window.addEventListener("DOMContentLoaded", function () {

	'use strict';
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");

	function hideTabContent(a) {
		//let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	};

	hideTabContent(1);

	function showTabContent(b) {
		//let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	};

	info.addEventListener("click", function (event) {
		//info.addEventListener("click", (event) => {
		let target = event.target;
		if (target && target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
	//timer
	function addZeroToDate(date) {
		//let addZeroToDate = (date) => {
		if (date.toString().length == 1) {
			return "0" + date.toString();
		} else {
			return date;
		}
	};
	let deadline = "2018-12-01";

	function getTimeRemaining(endtime) {
		//let getTimeRemaining = (endtime) => {

		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60));
		//hours = Math.floor((t / 1000 / 60 / 60) % 24),
		//days = Math.floor((t/(1000*60*60*24)));
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		//let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			//let updateClock = () => { лучше оставить старый вариант, иначе придётся менять местами объявление переменных
			let t = getTimeRemaining(endtime);
			hours.textContent = addZeroToDate(t.hours);
			minutes.textContent = addZeroToDate(t.minutes);
			seconds.textContent = addZeroToDate(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
			}
		}
	};
	setClock("timer", deadline);
	//Modal
	let more = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close"),
		description = document.querySelectorAll(".description-btn");

	more.addEventListener("click", function () { //из-за контекста вызова лучше не менять
		modal.call(this);
	});

	description.forEach(function (item) { //из-за контекста вызова лучше не менять
		item.addEventListener("click", function () {
			modal.call(this);
		});
	});


	function modal() { //из-за контекста вызова лучше не менять
		overlay.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";
		if (window.screen.width > 992) {
			//проверка на браузер от MS
			if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
				overlay.classList.add('fade');
				console.log("MS");
			} else {
				animate(overlay);
				console.log("Not MS");
			}
		}
	}

	close.addEventListener("click", function () {
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
	});

	//additional animation of Modal

	function animate(element) {
		let op = 0;

		function step() {
			if (op > 1) {
				cancelAnimationFrame(step);
			} else {
				op = op + 0.01;
				element.style.opacity = op;
				requestAnimationFrame(step);
			}
		}
		requestAnimationFrame(step);
	}
});