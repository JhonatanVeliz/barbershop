// Obtención de valores
let active = document.querySelector('#open');
let clouse = document.querySelector('#clouse');
let nav = document.querySelector('#nav');

// declaraciones funciones 

const visibeld = () => {
    nav.style.top = '0';
};

const disebeld = () => {
    nav.style.top = '-150%';
};

// invocación de funciones

active.addEventListener('click', visibeld);
clouse.addEventListener('click', disebeld);