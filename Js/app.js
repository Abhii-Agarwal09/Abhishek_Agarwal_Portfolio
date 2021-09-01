const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__logo');
const navLinks = document.querySelectorAll('.navbar__link');
const navListItems = document.querySelectorAll('.navbar__item');
const navBtn = document.querySelector('.btn-work');
const logo = document.querySelector('.logo-item');

const homeBtn = document.querySelector('#home-btn');
const skillsBtn = document.querySelector('#skills-btn');
const educationBtn = document.querySelector('#education-btn');
const contactBtn = document.querySelector('.cta__btn-contact');



window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    // console.log(scroll);

    if (scroll > 0) {
        navbar.classList.add('scrolled');


        navLinks.forEach(link => {
            link.classList.add('navbar__items-scrolled');       
        });


        navListItems.forEach(link => {
            link.classList.add('navbar__items-scrolled');       
        });


        navBtn.classList.add('nav-btn-scrolled');

        logo.src = "./Assets/logo-name-scrolled.svg"
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => {
            link.classList.remove('navbar__items-scrolled')
        });

        navListItems.forEach(link => {
            link.classList.remove('navbar__items-scrolled');       
        });

        navBtn.classList.remove('nav-btn-scrolled');

        logo.src = "./Assets/logo-name-svg.svg"
    }
})

homeBtn.addEventListener('click', () => {
    window.scrollBy(0, 0);
    console.log(window.scrollY);
});

skillsBtn.addEventListener('click', () => {
    window.scrollBy(0, 720);
    console.log(window.scrollY);
});

educationBtn.addEventListener('click', () => {
    window.scrollBy(0, 1440);
    console.log(window.scrollY);
});

contactBtn.addEventListener('click', () => {
    window.scrollBy(0, 2170);
    console.log(window.scrollY);
});