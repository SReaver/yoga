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


	let message = {
		loading: "Загрузка...",
		success: "Спасибо! Скором мы с вами свяжемся",
		failure: "Что-то пошло не так"
	};

	let form = document.querySelector(".main-form"),
		//input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div"),
		formContact = document.getElementById("form"),
		inputs = document.querySelectorAll("input");
	statusMessage.classList.add("status");

	inputs.forEach(function (item) {
		if (item.type == "tel") {
			let word = ['+', '7', '(', '_', '_', '_', ')', '_', '_', '_', '-', '_', '_', '-', '_', '_'];
			item.setSelectionRange(word.indexOf('_'), 1);
			item.addEventListener("keydown", function (e) {
				let input = item;
				let regFull = /\+\d{1,3}\(\d{3}\)\d{3}-\d{2}-\d{2}/ig;
				let reg = /\d/;

				input.value = word.join('');

				if (reg.test(e.key) && word.indexOf('_') != -1) {
					e.preventDefault();
					e.returnValue = false;
					word[word.indexOf('_')] = e.key;
					input.value = word.join('');
					if (word.indexOf('_') != -1) {
						input.setSelectionRange(word.indexOf('_') + 1, word.indexOf('_'));
					} else {
						input.setSelectionRange(word.length, word.length);
					}

					//далее проверка и действие при нажатии на Backspace
				} else if (e.keyCode == 8) {
					e.preventDefault();
					let pos = this.selectionStart;

					if (word[this.selectionStart - 1] != '-' && word[this.selectionStart - 1] != ')' && word[this.selectionStart - 1] != '(') {
						if (word[this.selectionStart - 1] == '+') {
							e.returnValue = false;
						} else {
							word[this.selectionStart - 1] = '_';
							input.value = word.join('');

							input.setSelectionRange(pos - 1, pos - 1);
						}
					} else {

						word[this.selectionStart - 2] = '_';
						input.value = word.join('');
						input.setSelectionRange(pos - 2, pos - 2);
					}
				} else {
					e.returnValue = false;
				}
			});

		}
	});

	[form, formContact].forEach(function (item) {
		item.addEventListener("submit", function (event) {
			event.preventDefault();
			item.appendChild(statusMessage);
			let formData = new FormData(item);

			function clearInput() {
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].value = "";
				}
			}
			fetch("server.php", {
					method: "POST",
					body: formData
				})
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

	/*
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
								console.log(request.response);
								resolve();
							} else {
								reject();
								console.log(request.response);
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
	*/
	let menu = document.querySelectorAll("li a");
	menu.forEach(function (item) {
		item.addEventListener("click", function (event) {
			event.preventDefault();
			let elemPos = document.querySelector(this.getAttribute("href")).offsetTop - 60;
			window.scrollTo({
				top: elemPos,
				behavior: "smooth"
			});
		});
	});


	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.querySelectorAll(".dot");

	function showSlides(n, pos) {
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
		slideAnimate(slides[slideIndex - 1], pos);
		dots[slideIndex - 1].classList.add("dot-active");
	}

	function slideAnimate(item, pos) {
		item.style.display = "block";
		let left = -1000;
		let right = 1000;

		function step() {
			if (pos) {
				if (left == 0) {
					cancelAnimationFrame(step);
				} else {
					left = left + 50;
					item.style.left = left + "px";
				}
			} else {
				if (right == 0) {
					cancelAnimationFrame(step);
				} else {
					right = right - 50;
					item.style.left = right + "px";
				}
			}
			requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	function plusSlides(n) {
		let pos = true;
		if (n == -1) {
			pos = false;
		}
		showSlides(slideIndex += n, pos);
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


	let persons = document.querySelectorAll(".counter-block-input")[0],
		restDays = document.querySelectorAll(".counter-block-input")[1],
		calcInputs = document.querySelectorAll(".counter-block-input"),
		place = document.getElementById("select"),
		totalValue = document.getElementById("total"),
		total = 0;

	totalValue.innerHTML = total;

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

	calcInputs.forEach((item) => {
		item.addEventListener("keypress", (e) => {
			if (/\D/.test(e.key)) {
				e.preventDefault();
			}
		});
	});
});