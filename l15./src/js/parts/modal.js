function modal() {
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
}

module.exports = modal;