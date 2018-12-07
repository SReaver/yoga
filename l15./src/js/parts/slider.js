function slider() {
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

}

module.exports = slider;