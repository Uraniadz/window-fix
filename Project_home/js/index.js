"use strict";
// Menu Burger show and noshow
const btn_burger = document.getElementById('burger_btn');
const menu = document.getElementById('menu');
const wraper = document.getElementById('wrap');

function showMenu () {
wraper.classList.add('open');
}

function closeMenu () {
wraper.classList.remove('open');
}

btn_burger.addEventListener('click', function () {
    wraper.classList.toggle('open');
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        wraper.classList.remove('open');
    }
})

menu.addEventListener('click', event => {
    console.log('-- menu')
    event._isClickWithInMenu = true;
});
btn_burger.addEventListener('click', event => {
    console.log('-- btn_burger')
    event._isClickWithInMenu = true;
  
});
document.body.addEventListener('click', event => {
    // console.log('-- body', event)
    if (event._isClickWithInMenu) return;
    closeMenu();
});

// scroll regForm formCallback
let scroll = true;
const bodyScroll = document.getElementById('body');
const btnLogin = document.getElementById('sign-in-btn');
const btnSignin = document.getElementById('btnSignin');
const openBtn = document.getElementById('btn');
const closeBtnForm = document.getElementById('close');

openBtn.addEventListener('click', function () {
    if (scroll) {
        enableScroll();
        scroll = false;
    }
})

btnLogin.addEventListener('click', function () {
    if (scroll) {
        enableScroll();
        scroll = false;
    }
})

function enableScroll () {
    bodyScroll.classList.add('scroll');
}
function dizableScroll () {
    bodyScroll.classList.remove('scroll');
}

// modal window
openBtn.onclick = showForm;

closeBtnForm.onclick = noShowForm;

const backDrop = document.getElementById('back-drop');

function showForm () {
    backDrop.classList.add('open_form');
}

function noShowForm () {
    backDrop.classList.remove('open_form');
}

const generalClose = document.addEventListener('click', function (event) {
    if (event.target === backDrop || event.target === closeBtnForm) {
        if (!scroll) {
            dizableScroll();
            scroll = true;
        }
    noShowForm();
    }
// console.log(event.target);
})

// mock-дані start вийшов трохи великоватий код, ще буду думати як можна його покращити.
//  тут конструктор до mock-даних

const serviceOne = document.getElementById('mock_1');
const serviceTwo = document.getElementById('mock_2');
const serviceThree = document.getElementById('mock_3');

function Services (img, name, price, created) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.created = created;
}
Services.prototype.getHtmlFromService = function () {
    return `<li><img src=${this.img}>
    </li><li><h4> ${this.name}</h4></li>
    <li><p> від ${this.price} грн</p></li>`;
};

const obFromConstr = new Services ("img/tools.png", 'Регулювання вікон', 200, new Date().toISOString());
const obFromConstr2 = new Services("img/fix2.png", 'Ремонт фурнітури', 400, new Date().toISOString());
const obFromConstr3 = new Services("img/fix3.png", 'Заміна ущільнювача', 80, new Date().toISOString());

let html = obFromConstr.getHtmlFromService();
let html2 = obFromConstr2.getHtmlFromService();
let html3 = obFromConstr3.getHtmlFromService();

serviceOne.innerHTML = html;
serviceTwo.innerHTML = html2;
serviceThree.innerHTML = html3;

// mock-дані End

// login Entrence Exit

btnLogin.onclick = showRegForm;

function showRegForm () {
    document.getElementById('backdrop').classList.remove('hidden');
}
function closeRegForm () {
    document.getElementById('backdrop').classList.add('hidden');
}
const backDropFormReg = document.getElementById('backdrop');
const btnCancel = document.getElementById('btnCancel');

document.addEventListener('click', function (e) {
    if (e.target === backDropFormReg || e.target === btnCancel || e.target === btnSignin) {
        if (!scroll) {
            dizableScroll();
            scroll = true;
        }
        closeRegForm();
    }
})

// form
const userInfoKey = 'userInfo';

const userName = document.getElementById('user-name');
const userLoginfromStorig = localStorage.getItem(userInfoKey);
document.getElementById('user-info').onclick = onSignout;

if (userLoginfromStorig) {
    const userInfo = JSON.parse(userLoginfromStorig);
    console.log(`${userInfo.login} was in site ${userInfo.date}`);
    onSignin(userInfo.login);
}

function onSignin (login) {
document.getElementById('user-info').classList.remove('hidden');
document.getElementById('sign-in-btn').classList.add('hidden');
localStorage.setItem(userInfoKey, 
    JSON.stringify({
    login,
    date: new Date().toISOString()
    })
    );
userName.innerText = login;
}
function onSignout () {
    document.getElementById('user-info').classList.add('hidden');
    document.getElementById('sign-in-btn').classList.remove('hidden');
localStorage.removeItem(userInfoKey);
userName.innerText = '';
}

function validatorUser(login, password) {
    switch(login) {
        case 'Yurii':
            return password === '1234';
        case 'Admin':
            return password === '1313';
        default: 
        return 
    }
}
// form
document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
const formData = new FormData(e.target);
const formValue = Object.fromEntries(formData);
console.log(formValue);
    if (validatorUser(formValue.login, formValue.password)) {
    onSignin(formValue.login);
    closeRegForm();
    }else {
        alert("No validate data");
    }
}


