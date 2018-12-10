function smoothscroll() {
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
}

module.exports = smoothscroll;