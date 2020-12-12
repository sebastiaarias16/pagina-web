let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// menu desplegable

btnMenu.addEventListener('click', () =>{
    
    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
    menu.style.left = "0";
    menu.style.transition = "0.5s";

    activador = false;

    }else{
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
    }
});

//intercalar activo del menu

let enlaces = document.querySelectorAll('.lists li a')

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) =>{
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});

//Efectos scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () =>{
    let currenScrollPos = window.pageYOffset;

    //mostrar y ocultar menu
    if (prevScrollPos > currenScrollPos){
        containerMenu.style.top = '0';
        containerMenu.style.transition = '0.2s';
    }else{
        containerMenu.style.top = '-74px';
        containerMenu.style.transition = '0.2s';
    }

    prevScrollPos = currenScrollPos;

    //mostrar y ocultar scroll efecto

    let arriba = window.pageYOffset;

    if(arriba <= 600){
        containerMenu.style.borderBottom = 'none';
    }else{
        containerMenu.style.borderBottom = '4px solid #841818'
    }

}

let verAabajo = document.querySelector('#abajo');

verAabajo.addEventListener('click', () =>{
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});
