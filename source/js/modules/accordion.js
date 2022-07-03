export function accordion(){

    let accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
      let items = accordion.querySelectorAll('.accordion__item');
      let title = accordion.querySelectorAll('.accordion__title');

      function toggleAccordion() {
        let thisItem = this.parentNode;
    
        items.forEach(item => {
        if (thisItem == item ) {
          // if this item is equal to the clicked item, open it.
          thisItem.classList.toggle('active');
          return;
        } 
      // otherwise, remove the open class
        item.classList.remove('active');
        });
    }
  
      title.forEach(question => question.addEventListener('click', toggleAccordion));


      
    });


}