function sum() {
	return true;
}
let num = 5;

function each() {
	return "Hello";
}
let assert = require('chai').assert;

describe("sum", function () {
	it("Получение true от функции sum", function () {
		assert.equal(sum(), true);
	});
	it("Проверяем значение переменной num на соответствие 5", function () {
		assert.equal(num, 5);
	});
	it("Проверяем возвращаемое функцией each значение", function () {
		assert.typeOf(each(), "String");
		assert.equal(each(), "Hello");
		assert.lengthOf(each(), 5);
	});
});