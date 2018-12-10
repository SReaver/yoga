"use stict";

fetch('js/cars.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data.cars);
    });



var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
    method: "POST",
    body: form
});


(async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            a: 1,
            b: 'Textual content'
        })
    });
    const content = await rawResponse.json();

    console.log(content);
})();