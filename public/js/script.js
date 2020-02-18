


//change color button b&w

let boutonnoir = document.getElementsByClassName('boutonnoir')[0]
let boutonblanc = document.getElementsByClassName('boutonblanc')[0]
let navbarre = document.getElementsByTagName('nav')[0]

let body = document.querySelector('body')





boutonnoir.addEventListener ('click',() => {
    body.style.backgroundColor = 'black'
    body.classList.add("text-light") 
    navbarre.classList.add("bg-dark text-light")
    navbarre.classList.remove("bg-light")



})


boutonblanc.addEventListener('click',() =>{
    body.style.backgroundColor = 'white'
    body.classList.remove('text-light')


})

// navbar part fixed top 

window.addEventListener('scroll',() =>{ 
    //scroll du  haut vers le bas 
   if(window.scrollY >= 70){
    navbarre.classList.add("fixed-top")
    // scroll du bas vers le haut 
 } else if (window.scrollY < 70){
    navbarre.classList.remove("fixed-top")
}

})

//modal part


let modal = document.getElementById('modal')
modal.style.display = 'none'
let buttonConnexion = document.getElementById('BtnModal')
let buttonDone = document.getElementsByClassName('btnDone')


buttonConnexion.addEventListener('click', ()=>{

    modal.style.display = 'block'

})



// buttonDone.removeEventListener('click', ()=>{

//     modal.style.display = 'none'

// })

















    
    