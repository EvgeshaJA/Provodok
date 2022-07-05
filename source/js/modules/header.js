
export function header() {

    let catalogOpen = document.querySelector('.catalog');
    let menu = document.querySelector('.header__menu');
    let hero = document.querySelector('.hero');
    let numbLinks = document.querySelectorAll('.header__numbers-link');
    let search = document.querySelector('.header__search');
    let hiddenMenu = document.querySelector('.header__hidden');

    const burger = document.querySelector('.header__button');
    const menuMob = document.querySelector('.header__navigation');
    const burgerAct = document.querySelector('.hamburger');




    window.onscroll = function() {
        scrollFunction();
        
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            hiddenMenu.style.display = "none";

        } else if (matchMedia("(max-width: 768px)").matches) {
            hiddenMenu.style.display = "none";
              
        }
         else {
            hiddenMenu.style.display = "block";
        }
        
        if (document.body.scrollTop > hero.clientHeight || document.documentElement.scrollTop > hero.clientHeight ) {
            numbLinks.forEach(link => {
                link.classList.add('header__numbers-link--active');
                search.style.border = '1px solid rgba(41, 41, 41, 0.3)';

            });

        } else {
            numbLinks.forEach(link => {
                link.classList.remove('header__numbers-link--active');
            });
            search.style.border = 'none';

        }



    }


    catalogOpen.addEventListener('click', event => {
        event.preventDefault();
        menuMob.classList.toggle('header__menu--active');
    });

    document.addEventListener('click', (event) => {
        if(!(event.target.closest('.catalog') || event.target.closest('.header__menu-inner'))) { 
            menuMob.classList.remove('header__menu--active');
        }
    });



    burger.addEventListener('click', event => {
        event.preventDefault();
        menuMob.classList.toggle('header__navigation--active');
        burgerAct.classList.toggle('is-active');
    });

    document.addEventListener('click', (event) => {
        if(!(event.target.closest('.header__button') || event.target.closest('.header__navigation'))) { // дословно: если пользователь кликнул вне меню, то блок закоыть, кроме эл-тов меню и гамбургер меню
            menuMob.classList.remove('header__navigation--active');
        }
    });

}

