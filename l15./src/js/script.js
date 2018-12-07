window.addEventListener("DOMContentLoaded", function () {

	'use strict';
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");


	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	};

	hideTabContent(1);


	let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	};

	info.addEventListener("click", (event) => {
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
	let addZeroToDate = (date) => {
		if (date.toString().length == 1) {
			return "0" + date.toString();
		} else {
			return date;
		}
	};
	let deadline = "2018-12-12";

	let getTimeRemaining = (endtime) => {

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

	let setClock = (id, endtime) => {
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
	};
	setClock("timer", deadline);

	//Modal
	let more = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close"),
		description = document.querySelectorAll(".description-btn");

	more.addEventListener("click", function () {
		modal.call(this);
	});

	description.forEach(function (item) {
		item.addEventListener("click", function () {
			modal.call(this);
		});
	});


	function modal() {
		overlay.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";
		if (window.screen.width > 992) {

			if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
				overlay.classList.add('fade');

			} else {
				animate(overlay);

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

	//Form
	let message = {
		loading: "Загрузка...",
		success: "Спасибо! Скором мы с вами свяжемся",
		failure: "Что-то пошло не так"
	};

	let form = document.querySelector(".main-form"),
		input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div"),
		formContact = document.getElementById("form"),
		inputs = document.querySelectorAll("input");
	statusMessage.classList.add("status");
	//проверка на ввод цифр и плюса в поле телефона
	inputs.forEach(function (item) {
		if (item.type == "tel") {
			item.addEventListener("keypress", function (e) {
				if ((!/\d|\+/gm.test(e.key) && e.keyCode != 8) || item.value.length >= 12 && e.keyCode != 8) {
					e.preventDefault();
				}
				if (e.key == '+' && item.value.length > 0) {
					e.preventDefault();
				}

			});
		}
	});


	[form, formContact].forEach(function (item) {
		item.addEventListener("submit", function (event) {
			event.preventDefault();
			item.appendChild(statusMessage);
			let formData = new FormData(item);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();
					request.open("POST", "server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					request.onreadystatechange = function () {
						if (request.status == 200 && request.readyState == 4) {
							resolve();
						} else {
							reject();
						}
					};
					request.send(data);
				});
			}

			function clearInput() {
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].value = "";
				}
			}
			postData(formData).then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					statusMessage.innerHTML = "";
					let success = document.createElement("img");
					success.src = "img/Commons-emblem-success.svg";
					success.width = 48;
					success.height = 48;
					statusMessage.appendChild(success);
					setTimeout(function () {
						statusMessage.innerHTML = "";
					}, 5000);
				})
				.catch(() => {
					statusMessage.innerHTML = "";
					let alarm = document.createElement("img");
					alarm.src = "img/alarmforesthumour.jpg";
					alarm.width = 200;
					statusMessage.appendChild(alarm);
					setTimeout(function () {
						statusMessage.innerHTML = "";
					}, 5000);
				})
				.then(() => clearInput());
		});
	});
	//Плавная прокрутка
	let menu = document.querySelectorAll("li a");
	menu.forEach(function (item) {
		item.addEventListener("click", function (event) {
			event.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		});
	});

	//Slider
	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.querySelectorAll(".dot");

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => {
			item.style.display = "none";
		});
		dots.forEach((item) => {
			item.classList.remove("dot-active");
		});
		slideAnimate(slides[slideIndex - 1]);
		dots[slideIndex - 1].classList.add("dot-active");
	}

	function slideAnimate(item) {
		item.style.display = "block";
		let left = -1000;

		function step() {
			if (left == 0) {
				cancelAnimationFrame(step);
			} else {
				left = left + 50;
				item.style.left = left + "px";
				requestAnimationFrame(step);
			}
		}
		requestAnimationFrame(step);
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	prev.addEventListener("click", function () {
		plusSlides(-1);
	});
	next.addEventListener("click", function () {
		plusSlides(1);
	});
	dotsWrap.addEventListener("click", function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
	showSlides(1);

	//calculator
	let persons = document.querySelectorAll(".counter-block-input")[0],
		restDays = document.querySelectorAll(".counter-block-input")[1],
		calcInputs = document.querySelectorAll(".counter-block-input"),
		place = document.getElementById("select"),
		totalValue = document.getElementById("total"),
		total = 0;

	totalValue.innerHTML = total;
	//функция анимации чисел
	function animateTotalSum(startCount, endCount, element) {
		let totalValue = startCount;
		let increament = totalValue < endCount ? 100 : -100;
		let timer = setInterval(function () {
			totalValue += increament;
			element.innerHTML = totalValue;
			if (totalValue == endCount) {
				clearInterval(timer);
			}
		}, 1);
	}
	//Функция подсчёта итоговой суммы
	function totalSumCalc(rst, prs) {
		if (+rst && +prs) {
			total = (+rst + +prs) * 4000;

			animateTotalSum(+totalValue.innerHTML, total * place.options[place.selectedIndex].value, totalValue);
		} else {
			totalValue.innerHTML = 0;
		}
	}

	[persons, restDays, place].forEach((item) => {
		item.addEventListener("change", () => {
			totalSumCalc(restDays.value, persons.value);
		});
	});
	//провека ввода только цифр
	calcInputs.forEach((item) => {
		item.addEventListener("keypress", (e) => {
			if (/\D/.test(e.key)) {
				e.preventDefault();
			}
		});
	});
});