document.addEventListener('DOMContentLoaded', () => {

const menuOpenIcon= document.getElementById('menu-open-icon');
const menuCloseIcon= document.getElementById('menu-close-icon');
const mobileNavOverlay= document.getElementById('mobile-nav-overlay');

function toggleMenu(){
   const menuIsOpen = mobileNavOverlay.classList.contains('active');
   if(menuIsOpen) {
    mobileNavOverlay.classList.remove('active');
    mobileNavOverlay.classList.add('inactive');
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
   } else {
    mobileNavOverlay.classList.remove('inactive');
    mobileNavOverlay.classList.add('active');
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
   }
}

menuOpenIcon.addEventListener('click', toggleMenu);
menuCloseIcon.addEventListener('click', toggleMenu);
});