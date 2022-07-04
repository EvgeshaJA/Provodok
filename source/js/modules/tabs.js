
export function tabs() {

    const cards = document.querySelectorAll('.assortment__item');
    const content = document.querySelectorAll('.assortment__cards');


    const changeContent = (array, value) => {
        array.forEach((element) => {
            if(element.dataset.tabsField === value) {
                element.classList.remove('hidden');
            }else {
                element.classList.add('hidden');
            }
        });
    };
    
    cards.forEach((i) => { 
        i.addEventListener('click', (event) => { 
            const dataValue = i.dataset.tabsHandler;
    
            changeContent(content, dataValue);

            cards.forEach(card => {
                card.classList.remove('assortment__item--active');
            });

            i.classList.add('assortment__item--active');

        });
    });



}

