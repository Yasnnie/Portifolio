var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.navegador-button');
let aux = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active-slide');

        buttons.forEach((btn) =>{
            btn.classList.remove('active-slide');
        });
    });

    slides[manual].classList.add('active-slide');
    buttons[manual].classList.add('active-slide');
}

buttons.forEach((buttons,i) =>{
    buttons.addEventListener("click", ()=> {
        manualNav(i);
        aux = i;
    });
});