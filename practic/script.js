/*let listStart = document.getElementById('block__link');
let listOverflow = document.getElementById('field-list');

listStart.addEventListener('click', function() {
    listOverflow.classList.toggle('field-list-start');
});*/
/*-----------------------------------------------------*/

/* BURGER_MENU */
let burgerMenu = document.getElementById('burger');
let burgerStart = document.getElementById('header__menu');
let burgerActive = document.getElementById('burger__line');

burgerMenu.addEventListener('click', function() {
    burgerStart.classList.toggle('burger-start');
    burgerActive.classList.toggle('rotate');
});

/* POP_UP */
let popUp = document.getElementById('pop-up');
let popZone = document.getElementById('pop-up__content');
let popWidth = document.getElementById('pop-up__img');

popUp.addEventListener('click', function() {
    popZone.classList.toggle('screen-fool');
    popWidth.classList.toggle('pop-up__width-img');
});