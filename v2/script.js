window.onload = function homePageReveal() {
    const homePage = document.querySelector('.main-content');
    homePage.classList.add('active');
};

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
};

const observerCallback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

let observer = new IntersectionObserver(observerCallback, options);

let connectWithMeSection = document.querySelector('.contact-social--container');
let targets = document.querySelectorAll('.section');

observer.observe(connectWithMeSection);
targets.forEach((target) => {
    observer.observe(target);
});
