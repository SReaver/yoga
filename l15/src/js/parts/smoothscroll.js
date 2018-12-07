function smoothscroll() {
 let menu = document.querySelectorAll("li a");
 menu.forEach(function (item) {
  item.addEventListener("click", function (event) {
   event.preventDefault();
   document.querySelector(this.getAttribute("href")).scrollIntoView({
    block: "start",
    behavior: "smooth"
   });
  });
 });
}

module.exports = smoothscroll;