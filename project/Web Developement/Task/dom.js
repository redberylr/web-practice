const  input = document.querySelector('[name=myInput]')

console.log(input);
input.addEventListener('keypress', (e) =>{

    if(e.key.toLowerCase() == 'enter'){
        const value = e.target.value

       if(value == ""){
         alert('please enter somethimg')  

        }else{
          const li =`<li> ${value} <span class="close">&times;</span></li>`

          document.querySelector('ul.list').insertAdjacentHTML('afterbegin',li);
        
            e.target.value = ""

            addDeletEvent()
        }
    }
})

function addDeletEvent(){

    const closeButtons = document.querySelectorAll('.close')

    closeButtons.forEach(closeButton =>{


        closeButton.addEventListener('click' ,(e)  =>{

           const parent = e.target.parentElement

           parent.remove()
         } )

            
        
    })
}