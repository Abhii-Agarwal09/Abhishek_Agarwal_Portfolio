const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__logo');
const navLinks = document.querySelectorAll('.navbar__link');
const navListItems = document.querySelectorAll('.navbar__item');
const navBtn = document.querySelector('.btn-work');
const logo = document.querySelector('.logo-item');
const logoWork = document.querySelector('.logo-work')
const hamburger = document.querySelector('.bars');

const homeBtn = document.querySelector('#home-btn');
const skillsBtn = document.querySelector('#skills-btn');
const educationBtn = document.querySelector('#education-btn');

const body = document.getElementsByTagName('body')[0];
console.log(body);
console.log(body.id);


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
        // hamburger.style.color = '#fff';
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
        hamburger.classList.add('scroll')
        

    } else {
        // hamburger.style.color = 'var(--primary-color)';
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
        hamburger.classList.remove('scroll')
        
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
}


// navbar animation 


const navList = document.querySelector('.navbar__list');
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamColor();
})

const hamColor = () => {
    if (navList.classList.contains('active')) {
        hamburger.classList.add('scroll');
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    }else {
        hamburger.classList.remove('scroll');
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-times');
    }
}
