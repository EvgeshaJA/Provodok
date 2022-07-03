
export function form(){

    const forms = document.querySelectorAll('.form-body');

    forms.forEach((form) => {
        form.addEventListener('submit', function (e){
          e.preventDefault();
          const formData = new FormData(e.target); 
          const formProps = Object.fromEntries(formData); 
          fetch('php/send.php',{
            method: 'POST',
            body: JSON.stringify(formProps),
            headers: {
              'Content-type': 'application/json'
            }
          });
      
     
        });
      });

}

