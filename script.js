// Script for navigation bar
const navbarToggle = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navBar');

if (navbarToggle) {
  navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // toggle instead of add
  });
}
if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
        });
}