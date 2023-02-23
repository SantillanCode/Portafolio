const menuMainMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuMainMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');

}