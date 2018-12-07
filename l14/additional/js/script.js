$(document).ready(function () {
  //Анимация модального окна
  $(".main_btna, .main_btn, .main_nav nav ul li:eq(1) a").on("click", function () {
    $(".overlay").animate({
      opacity: "show",
      height: "show"
    }, {
      duration: 1000,
      specialEasing: {
        opacity: 'linear',
        height: 'swing'
      }
    });
    $(".modal").animate({
      opacity: "show",
      height: "+=30"
    }, {
      duration: 1000,
      specialEasing: {
        opacity: 'linear',
        height: 'swing'
      }
    });
  });
  $(".close").on("click", function () {
    $(".overlay").fadeToggle(1000);
    $(".modal").slideUp(1000);
  });
  //Отправка формы
  $(".form-inline").on("submit", function (e) {
    e.preventDefault();
    $.post("server.php", $(this).serialize())
      .done(function () {
        alert("Благодарим Вас! \rДанные успешно отправлены!");
        $(".overlay").fadeToggle(1000);
        $(".modal").slideUp(1000);
      })
      .fail(function () {
        alert("Ошибка отправки информации.");
      });
  });

});