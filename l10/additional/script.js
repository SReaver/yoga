'use strict';
let input = document.querySelector("#input");
let regFull = /\+\d{1,3}\(\d{3}\)\d{3}-\d{2}-\d{2}/ig;
let reg = /\d/;
let word = ['+', '7', '(', '_', '_', '_', ')', '_', '_', '_', '-', '_', '_', '-', '_', '_'];
input.value = word.join('');
input.setSelectionRange(word.indexOf('_'), 1);
input.addEventListener("keydown", function (e) {
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
	if (regFull.test(input.value)) {
		input.style.backgroundColor = "green";
	} else if (!regFull.test(input.value)) {
		input.style.backgroundColor = "pink";
	}
});