let closeMenu = document.querySelector('#close');
let openMenu = document.querySelector('#open-menu');
let nav = document.querySelector('nav');

openMenu.addEventListener('click', () => {
    nav.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('open');
});