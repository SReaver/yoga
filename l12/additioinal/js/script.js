let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function getData() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve(JSON.parse(request.response));
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.readyState == 4) {
                        //console.log(typeof (request.response));
                        resolve(JSON.parse(request.response));
                    } else {
                        reject(JSON.parse(request.response));
                    }
                }
            };
            request.send();
        });
    }

    getData().then((data) => {
        // console.log(data);
        // let jdata = JSON.stringify(data);
        // console.log(jdata);
        inputUsd.value = inputRub.value / data.usd;
    }).catch((data) => inputUsd.value = data);

});