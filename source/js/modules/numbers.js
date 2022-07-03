export function numbers() {

    const numbOpen = document.querySelector('.numbers__open');
    const hiddenNumber = document.querySelector('.numbers__hidden');
    const imageBlok = document.querySelectorAll('.numbers__image')[4];


    hiddenNumber.addEventListener('click', () => {
        numbOpen.classList.toggle('numbers__open');
        numbOpen.classList.toggle('numbers__close');
        imageBlok.classList.toggle('image-open');

    });



}