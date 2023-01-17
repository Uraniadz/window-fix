"use strict";
// modal window
const openBtn = document.getElementById('btn');
openBtn.onclick = showForm;

const closeBtnForm = document.getElementById('close');
closeBtnForm.onclick = noShowForm;

const backDrop = document.getElementById('back-drop');

function showForm () {
    backDrop.classList.add('open_form');
}

function noShowForm () {
    backDrop.classList.remove('open_form');
}

const generalClose = document.addEventListener('click', function (event) {
    if (event.target === backDrop) {
    noShowForm();
    }
console.log(event.target);
})

// mock-дані start вийшов трохи великоватий код, ще буду думати як можна його покращити.

const serviceOne = document.getElementById('mock_1');
const serviceTwo = document.getElementById('mock_2');
const serviceThree = document.getElementById('mock_3');

const serviceArrOne = [{
     name: 'Регулювання вікон',
    price: 200
}];
const serviceArrTwo = [{
    name: 'Ремонт фурнітури',
    price: 400
}];
const serviceArrThree = [{
    name: 'Заміна ущільнювача',
    price: 80
}];

let html = '';
let html2 = '';
let html3 = '';

function getHtmlFromService (service) {
        return `<li><h4> ${service.name}</h4></li><li><p> від ${service.price} грн</p></li>`;
}

for (let i = 0; i < serviceArrOne.length; i++){
    html += getHtmlFromService(serviceArrOne[i]);
}
for (let i = 0; i < serviceArrTwo.length; i++){
    html2 += getHtmlFromService(serviceArrTwo[i]);
}
for (let i = 0; i < serviceArrThree.length; i++){
    html3 += getHtmlFromService(serviceArrThree[i]);
}

serviceOne.innerHTML = html;
serviceTwo.innerHTML = html2;
serviceThree.innerHTML = html3;

// mock-дані End