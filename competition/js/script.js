let cars = [];
let wer;
// function getData() {
//     return new Promise(function (resolve, reject) {

let request = new XMLHttpRequest();
request.open('GET', 'js/cars.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status == 200 && request.readyState == 4) {
            //console.log(typeof (request.response));
            wer = request.response;
            //console.log(wer);
            //console.log(typeof (request.response));
            // Object.values(JSON.parse(request.response).cars).forEach(function (item) {
            //     cars.push(item);
            // });

            //console.log(cars);
            // console.log(JSON.parse(request.response));
            //resolve(request.response);
        } else {
            //reject();
            console.log(request.response);
        }
    }
};
request.send();

console.log(wer);
//     });
// }
/*
getData().then((data) => {
    let carz = Object.values(JSON.parse(data).cars);
    //cars = carz.concat();

    console.log(carz);
}).catch((data) => console.log("Что-то пошло не так!" + data));
*/
// cars.forEach(function (item) {
//     console.log(item);
// })