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
}

module.exports = form;