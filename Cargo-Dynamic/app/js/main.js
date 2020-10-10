document.addEventListener('DOMContentLoaded', function () { 
    openBurgerMenu();
});


function openBurgerMenu() {
    let burgerNav = document.querySelector(".nav-opener");
    let nav = document.querySelector(".nav-list");
    let body = document.body;

    burgerNav.addEventListener('click', function () {
        nav.classList.toggle('nav-active'); 
        body.classList.toggle('scroll-hidden');       
    });
}
