window.addEventListener("DOMContentLoaded", function () {
 'use strict';
 let popupCall = document.getElementsByClassName("popup__call-wrap")[0],
  phoneCall = document.getElementsByClassName("popup__call-phone"),
  arrow = document.getElementsByClassName("popup__call-svg")[0],
  input0 = document.getElementsByTagName("input")[0],
  input1 = document.getElementsByTagName("input")[1],
  country0 = document.getElementsByClassName("popup__call-country")[0],
  country1 = document.getElementsByClassName("popup__call-country")[1],
  placeholder, country;

 popupCall.addEventListener("click", function () {
  document.querySelector(".popup__call-phone-hidden").style.visibility = "visible";
  arrow.style.transform = 'rotate(' + 180 + 'deg)';
 });

 phoneCall[1].addEventListener("click", function () {
  document.querySelector(".popup__call-phone-hidden").style.visibility = "hidden";
  arrow.style.transform = 'rotate(' + 360 + 'deg)';
  input0.value = "";
  placeholder = input0.placeholder;
  input0.placeholder = input1.placeholder;
  input1.placeholder = placeholder;
  country = country0.innerHTML;
  country0.innerHTML = country1.innerHTML;
  country1.innerHTML = country;
 });
});