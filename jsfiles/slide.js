var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.navegador-button');
let aux = 0;

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

var repetir = function(activeClass){
        setInterval(function(){
            slides[aux].classList.remove('active-slide');
            buttons[aux].classList.remove('active-slide');

            if(aux == slides.length-1){
                aux = 0;
                slides[aux].classList.add('active-slide');
                buttons[aux].classList.add('active-slide');
            }else{
                if(aux<slides.length)
                {
                    aux++;
            
                    slides[aux].classList.add('active-slide');
                    buttons[aux].classList.add('active-slide');
                }
            }

           
        },6000);
    
}
