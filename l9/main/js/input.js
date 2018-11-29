window.addEventListener("DOMContentLoaded", function () {
	'use strict';
	let age = document.getElementById('age');
	let user = {
		name: "Sergey",
		surname: "Plotnikov"
	};

	age.addEventListener("change", function () {
		showUser.apply(this, [user.surname, user.name]);
	});

	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}
});