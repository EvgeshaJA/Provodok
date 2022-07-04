
export function header() {

    let catalogOpen = document.querySelector('.catalog');
    let menu = document.querySelector('.header__menu');

 
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("hidden-menu").style.display = "block";

        } else {
            document.getElementById("hidden-menu").style.display = "none";

        }
        prevScrollpos = currentScrollPos;


    }; 

    catalogOpen.addEventListener('click', event => {
        event.preventDefault();
        menu.classList.toggle('header__menu--active');
    });

    document.addEventListener('click', (event) => {
        if(!(event.target.closest('.catalog') || event.target.closest('.header__menu-inner'))) { 
           menu.classList.remove('header__menu--active');
        }
    });



}

