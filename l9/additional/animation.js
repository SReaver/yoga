function detectBrowser() {
 if (navigator.userAgent.indexOf("Edge") != -1 || (navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode ==
   true)) {


  alert(window.screen.width);
 }
}
alert(window.screen.width);
console.log("Привет из animation.js");
detectBrowser();