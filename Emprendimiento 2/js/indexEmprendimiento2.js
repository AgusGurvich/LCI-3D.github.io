const nav = document.querySelector(".nav");
const navBoton = document.querySelector(".fa-bars");
const navBoton2 = document.querySelector(".boton");



const width = screen.width;
const heigth = screen.height;
// console.log(width, heigth);

if(width<heigth){
    let buttonState = false; // Cerrado por defecto
    navBoton.addEventListener("click", ()=>{
        if(buttonState){
            nav.style.cssText = "transition: all 800ms ease; top: -35vh; opacity: .8;"
            buttonState = false;
        }
        else{
            nav.style.cssText = "transition: all 800ms ease; top: 5vh; opacity: .8;"
            buttonState = true;
        }
    })



} else{
    navBoton.addEventListener("click", ()=>{
        nav.style.cssText = "transition: all 800ms ease; left: 70vw; opacity: .8;"
        navBoton.style.cssText = "transition: all 800ms ease; opacity: 0;"
    })

navBoton2.addEventListener("click", ()=>{
    nav.style.cssText = "transition: all 800ms ease; left: 100vw; opacity: .5;"
    navBoton.style.cssText = "transition: all 800ms ease; opacity: 1;"
})

}

console.log(width);