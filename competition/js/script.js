"use stict";

fetch('js/cars.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data.cars);
    });