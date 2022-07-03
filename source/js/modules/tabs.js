
export function tabs() {

    const cards = document.querySelectorAll('.assortiment__card');
    const content = document.querySelectorAll('.accordion__items');

    const mapButtons = document.querySelectorAll('.footer__btn');
    const maps = document.querySelectorAll('.footer__map-inner');

    const articleButtons = document.querySelectorAll('.blog-bts__button');
    const articles = document.querySelectorAll('.articles__list');

    const contactButtons = document.querySelectorAll('.contacts-btns__items');
    const contacts = document.querySelectorAll('.contacts-info');
    
    const jobButtons = document.querySelectorAll('.job__buttons');
    const job = document.querySelectorAll('.job');



    
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
                card.classList.remove('assortiment__card--active');
            });

            i.classList.add('assortiment__card--active');

        });
    });

    if(mapButtons) {
        mapButtons.forEach((i) => { 
            i.addEventListener('click', (event) => { 
                const dataValueMap = i.dataset.tabsHandler;

                changeContent(maps, dataValueMap);

                mapButtons.forEach(btn => {
                    btn.classList.remove('footer__btn--active');
                });
    
                i.classList.add('footer__btn--active');
    
            });
        });
        
    }

    articleButtons.forEach((i) => { 
        i.addEventListener('click', (event) => { 
            const dataValue = i.dataset.tabsHandler;
    
            changeContent(articles, dataValue);

            articleButtons.forEach(btn => {
                btn.classList.remove('blog-bts__button--active');
            });

            i.classList.add('blog-bts__button--active');

        });
    });

    contactButtons.forEach((i) => { 
        i.addEventListener('click', (event) => { 
            const dataValue = i.dataset.tabsHandler;
    
            changeContent(contacts, dataValue);

            contactButtons.forEach(btn => {
                btn.classList.remove('contacts-btns__items--active');
            });

            i.classList.add('contacts-btns__items--active');

        });
    });

    jobButtons.forEach((i) => { 
        i.addEventListener('click', (event) => { 
            const dataValue = i.dataset.tabsHandler;

            const changeContent2 = (array, value) => {
                array.forEach((element) => {
                    if(element.dataset.tabsField === value) {
                        element.classList.remove('hidden');
                    }else {
                        element.classList.toggle('hidden');
                    }
                });
            };
    
            changeContent2(job, dataValue);

            jobButtons.forEach(btn => {
                btn.classList.remove('contacts-btns__items--active');
            });

            i.classList.add('contacts-btns__items--active');

        });
    });

}

