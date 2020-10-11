var body = document.body;

document.addEventListener("DOMContentLoaded", function(){

    openBurgerMenu();

    openPopUp();

});

function openBurgerMenu() {
    let burgerNav = document.querySelector(".nav-opener");
    let nav = document.querySelector(".nav-list");    

    burgerNav.addEventListener('click', function () {
        nav.classList.toggle('nav-active'); 
        body.classList.toggle('scroll-hidden');       
    });
}

function openPopUp() {  

    let openModal = document.querySelector('#openModal');
    let btnPhone = document.querySelector('.btn-phone');
    let btnClose = document.querySelector('.btn-close');

    btnPhone.addEventListener('click', function() { 
        openModal.classList.remove('d-none');        
        openModal.classList.add('d-block');                      
    });

    btnClose.addEventListener('click', function() {  
        openModal.classList.remove('d-block');      
        openModal.classList.add('d-none');
    });
}


