import { event } from "jquery";

export function navigation(){

    const burger = document.querySelector('.header__button');
    const menu = document.querySelector('.header__navigation');
    const burgerAct = document.querySelector('.hamburger');

    burger.addEventListener('click', event => {
        event.preventDefault();
        menu.classList.toggle('header__navigation--active');
        burgerAct.classList.toggle('is-active');
    });

    document.addEventListener('click', (event) => {
        if(!(event.target.closest('.header__button') || event.target.closest('.header__navigation'))) { // дословно: если пользователь кликнул вне меню, то блок закоыть, кроме эл-тов меню и гамбургер меню
           menu.classList.remove('header__navigation--active');
        }
    });


}