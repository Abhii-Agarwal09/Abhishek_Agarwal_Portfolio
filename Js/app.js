const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__logo');
const navLinks = document.querySelectorAll('.navbar__link');
const navListItems = document.querySelectorAll('.navbar__item');
const navBtn = document.querySelector('.btn-work');
const logo = document.querySelector('.logo-item');
const logoWork = document.querySelector('.logo-work')

const homeBtn = document.querySelector('#home-btn');
const skillsBtn = document.querySelector('#skills-btn');
const educationBtn = document.querySelector('#education-btn');
const contactBtn = document.querySelector('.cta__btn-contact');

const body = document.getElementsByTagName('body')[0];
console.log(body);
console.log(body.id);


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    // console.log(scroll);
    console.log(logoWork)

    if (scroll > 0) {
        navbar.classList.add('scrolled');


        navLinks.forEach(link => {
            link.classList.add('navbar__items-scrolled');       
        });


        navListItems.forEach(link => {
            link.classList.add('navbar__items-scrolled');       
        });


        navBtn.classList.add('nav-btn-scrolled');

        if (body.id === 'work-page') {
            logoWork.src = "../Assets/Logo-name-scrolled.svg"
        } else {
            logo.src = "./Assets/Logo-name-scrolled.svg"
        }

    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => {
            link.classList.remove('navbar__items-scrolled')
        });

        navListItems.forEach(link => {
            link.classList.remove('navbar__items-scrolled');       
        });

        navBtn.classList.remove('nav-btn-scrolled');


        if (body.id === 'work-page') {
            logoWork.src = "../Assets/Logo-name-normal.svg"
        } else {
            logo.src = "./Assets/Logo-name-normal.svg"
        }

        
    }
})

if (body.id !== 'work-page') {
    homeBtn.addEventListener('click', () => {
        window.scroll(0, 0);
        console.log(window.scrollY);
    });
    
    skillsBtn.addEventListener('click', () => {
        window.scroll(0, 720);
        console.log(window.scrollY);
    
        // const skillSection = document.getElementById('skills');
        // console.log(skillSection);
        // skillSection.scrollIntoView();
    });
    
    educationBtn.addEventListener('click', () => {
        window.scrollBy(0, 1440);
        console.log(window.scrollY);
    });
    
    contactBtn.addEventListener('click', () => {
        window.scroll(0, 2170);
        console.log(window.scrollY);
    });
}


// navbar animation 
const hamburger = document.querySelector('.navbar-hamburger__container');

hamburger.addEventListener('click', () => {
    const navList = document.querySelector('.navbar__list');
    navList.classList.toggle('active');
})