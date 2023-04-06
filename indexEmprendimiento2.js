const nav = document.querySelector(".nav");
const navBoton = document.querySelector(".fa-bars");
const navBoton2 = document.querySelector(".boton");


navBoton.addEventListener("click", ()=>{
        nav.style.cssText = "transition: all 800ms ease; left: 70vw; opacity: .8;"
        navBoton.style.cssText = "transition: all 800ms ease; opacity: 0;"
    })

navBoton2.addEventListener("click", ()=>{
    nav.style.cssText = "transition: all 800ms ease; left: 100vw; opacity: .5;"
    navBoton.style.cssText = "transition: all 800ms ease; opacity: 1;"
})
