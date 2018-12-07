function form() {
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

 /*[form, formContact].forEach(function (item) {
		item.addEventListener("submit", function (event) {
			event.preventDefault();
			item.appendChild(statusMessage);
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");
			//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //закомментировали, чтобы отправлять данные в JSON формате
			request.setRequestHeader("Content-type", "application/json; charset=utf-8"); // вот так данные отправляются в JSON формате
			let formData = new FormData(item);
			//следующий метод переводит из формата FormData в формат Объекта. А далее уже стандартно омжно перевести в формат JSON
			let obj = {};
			formData.forEach(function (value, key) {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
			//request.send(formData); //отправка используя FormData
			request.send(json); //отправка используя JSON
			request.addEventListener("readystatechange", function () {
				if (request.readyState < 4) {
					//statusMessage.innerHTML = message.loading;
					statusMessage.innerHTML = "";
					let img = document.createElement("img");
					img.src = "img/ajax-loader.gif";
					statusMessage.appendChild(img);
				} else if (request.readyState == 4 && request.status == 200) {
					statusMessage.innerHTML = "";
					let success = document.createElement("img");
					success.src = "img/Commons-emblem-success.svg";
					success.width = 48;
					success.height = 48;
					statusMessage.appendChild(success);
				} else {
					//statusMessage.innerHTML = message.failure;
					statusMessage.innerHTML = "";
					let alarm = document.createElement("img");
					alarm.src = "img/alarmforesthumour.jpg";
					alarm.width = 200;
					statusMessage.appendChild(alarm);
				}
			});
			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
			}
		});
	});
*/
 //то же самое, но используя промисы
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
}

module.exports = form;