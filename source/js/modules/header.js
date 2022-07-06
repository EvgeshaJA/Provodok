
export function header() {

    let catalogOpen = document.querySelector('.catalog');
    let menu = document.querySelector('.header__menu');
    let hero = document.querySelector('.hero--scroll');
    let numbLinks = document.querySelectorAll('.header__numbers-link');
    let search = document.querySelector('.header__search');
    let hiddenMenu = document.querySelector('.header__hidden');

    const burger = document.querySelector('.hamburger-wrapper');
    const burgerAct = document.querySelector('.hamburger');
    const burgSpan = document.querySelector('.hamburger-inner');




    window.onscroll = function() {
        scrollFunction();
        
    };

    function scrollFunction() {
         if (matchMedia("(max-width: 768px)").matches) {
            hiddenMenu.style.display = "block";
              
        } 

        else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            hiddenMenu.style.display = "none";

        }
         else {
            hiddenMenu.style.display = "block";
        }
        
        if (document.body.scrollTop > hero.clientHeight || document.documentElement.scrollTop > hero.clientHeight ) {
            numbLinks.forEach(link => {
                link.classList.add('header__numbers-link--active');
                search.style.border = '1px solid rgba(41, 41, 41, 0.3)';
                burgSpan.style.backgroundColor = '#333';

            });

        } else {
            numbLinks.forEach(link => {
                link.classList.remove('header__numbers-link--active');
                burgSpan.style.backgroundColor = '#fff';

            });
            search.style.border = 'none';

        }



    }


    catalogOpen.addEventListener('click', event => {
        event.preventDefault();
        menu.classList.toggle('header__menu--active');
    });

    document.addEventListener('click', (event) => {
        if(!(event.target.closest('.catalog') || event.target.closest('.header__menu-inner'))) { 
            menu.classList.remove('header__menu--active');
        }

        if(!(event.target.closest('.hamburger-wrapper') || event.target.closest('.header__hidden'))) { 
            hiddenMenu.classList.remove('header__hidden--active');
        }

    });



    burger.addEventListener('click', event => {
        event.preventDefault();
        hiddenMenu.classList.toggle('header__hidden--active');
        burgerAct.classList.toggle('is-active');
    });



}

