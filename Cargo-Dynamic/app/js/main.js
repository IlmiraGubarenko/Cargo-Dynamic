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
    let bodyBg = document.querySelector('.body-background');
    let btnPhone = document.querySelector('.btn-phone');
    let btnClose = document.querySelector('.btn-close');

    btnPhone.addEventListener('click', function() {              
        openModal.classList.remove('off-modal');
        bodyBg.classList.remove('off-modal');                           
    });

    btnClose.addEventListener('click', function() {  
        openModal.classList.add('off-modal');
        bodyBg.classList.add('off-modal');         
    });
}

