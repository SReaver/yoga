function addZeroToDate(date) {
 if (date.toString().length == 1) {
  return "0" + date.toString();
 } else {
  return date;
 }
}

function time() {
 let date = new Date();
 document.getElementById("timer").innerHTML = addZeroToDate(date.getHours()) + ":" + addZeroToDate(date.getMinutes()) + ":" + addZeroToDate(date.getSeconds());
}

setInterval(time, 1000);