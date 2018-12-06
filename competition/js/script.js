//let arr = [1, 2, 3, 4, 5];
//console.log(arr);

let carz = [];
let ttt = 1;
//let wer;
// function getData() {
//     return new Promise(function (resolve, reject) {

let request = new XMLHttpRequest();
request.open('GET', 'js/cars.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status == 200 && request.readyState == 4) {
            //console.log(typeof (request.response));
            //wer = request.response;
            //console.log(cars);
            //console.log(wer);
            //console.log(typeof (request.response));
            //console.log(cars);
            //console.log(JSON.parse(request.response));
            (JSON.parse(request.response)).cars.forEach(function (item) {
                carz.push(item);
                ttt++;
            });
            ttt = request.response;
            console.log(ttt);
            /* JSON.parse(request.response).forEach(function (item) {
                cars.push(item);
                console.log(item);
            });
*/
            //console.log(wer[1]);
            // console.log(JSON.parse(request.response));
            //resolve(request.response);
        } else {
            //reject();
            console.log(request.response);
        }
    }
    request.send();
};

console.log(carz);
console.log(carz[0]);
console.log(ttt);

//console.log(cars[0]);
//console.log(cars);

// cars.forEach(function (item) {
//     console.log("item: " + item);
// });

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
//console.log(cars[1].category);
//setTimeout(console.log(wer), 5000);
//console.log(wer);
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