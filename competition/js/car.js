let xhr = new XMLHttpRequest();
let data2 = [];
let y = 123;
xhr.open('GET', 'js/cars.json');
xhr.setRequestHeader('Content-type', 'application/json; chraset=utf-8');
xhr.send();

xhr.addEventListener('readystatechange', function () {
 if (xhr.readyState === 4 && xhr.status == 200) {
  let data = JSON.parse(xhr.response);
  data2 = data;
  console.log(y);
  data.cars.forEach(element => {
   document.body.insertAdjacentHTML('beforeEnd', `<div class="item">
                                                <h2>${element.name}</h2>
                                                <p>${element.description}</p>
                                                <p>${element.price}</p>
                                                <img src=${element.img} />
                                                <p>${element.category}</p>
                                            </div>`);
  });

 }
});
console.log(data2);