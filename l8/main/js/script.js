window.addEventListener("DOMContentLoaded", function () {

	'use strict';
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener("click", function (event) {
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
		if (date.toString().length == 1) {
			return "0" + date.toString();
		} else {
			return date;
		}
	}
	let deadline = "2018-11-30";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			offset = (new Date().getTimezoneOffset() / 60),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60) + offset);
		//hours = Math.floor((t / 1000 / 60 / 60) % 24),
		//days = Math.floor((t/(1000*60*60*24)));
		console.log(offset);
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
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
	}
	setClock("timer", deadline);
});