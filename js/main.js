// ******************** VARS SELECTING ELEMENTS  ********************
// NAVIGATION
const navReachMeBtn = document.querySelector('.navigation__reachme');
const logo = document.querySelector('.navigation__logo');

// HEADER
const helloIAmGrzegorz = document.querySelector('.heading-primary');

// HEADER BTNS
const works = document.querySelector('.navigation__works');
const reachme = document.querySelector('.reachme');
const sectionReachme = document.querySelector('.reach-me');

// ABOUT
const sectionAbout = document.querySelector('.about');
const iconsDescBox = document.querySelector('.about__tech-desc');

// REACH-ME
const current = document.querySelector('.reach-me__more-current');

// SVG ICONS
const js = document.querySelector('.js');
const css = document.querySelector('.css');
const html = document.querySelector('.html');
const github = document.querySelector('.github-icon');
const npm = document.querySelector('.npm');
const webpack = document.querySelector('.webpack');
const sass = document.querySelector('.sass');

// FOOTER
const year = document.getElementById('year');

// MODAL
const modal = document.querySelector('.reach-me__modal');
const modalExitBtn = document.querySelector('.reach-me__modal-exitBtn');
const backdrop = document.querySelector('.backdrop');

// SCROLL TOP
const scrollTopButton = document.querySelector('.text-box-btn');

// ******************** WINDOW EVENTS ********************

window.addEventListener('scroll', e => {
    const distanceFromTop = document.documentElement.scrollTop;
    if (distanceFromTop > 500) {
        scrollTopButton.style.transform = "translate(0)"
    } else {
        scrollTopButton.style.transform = "translate(30rem)"
    }
})

// ******************** LOAD EVENTS ********************
// showing hello ad the start of the page
window.addEventListener('load', e => {
    showGreeting();
    helloIAmGrzegorz.style.opacity = "1";
});

// ****************************** NAVIGATION ******************************

// Linking logo with GitHub for mobile devices
logo.addEventListener('click', e => setLink("https://github.com/gkonar"));


// ****************************** SECTION ABOUT ******************************
// Technologies icons

const icons = [js, css, html, github, npm, webpack, sass];
const desc = ['JavaScript', 'CSS', 'HTML', 'GitHub', 'NPM', 'Webpack', 'Sass'];

icons.forEach((icon, i) => {
    icon.addEventListener('mouseover', e => setTextContent(desc[i]));
    icon.addEventListener('mouseleave', e => setTextContent(''));
})
// ****************************** FOOTER ******************************
// Place year in DOM
year.textContent = yearUpdate();

// ****************************** MODAL  ******************************
modalExitBtn.addEventListener('click', e => {
    hideModal();
});

current.addEventListener('click', e => {
    e.preventDefault();
    showModal();
});

backdrop.addEventListener('click', e => {
    hideModal()
})

// ****************************** SCROLL EVENTS  ******************************
navReachMeBtn.addEventListener('click', (e) => {
    scrollTo(document.querySelector('.text-box-paragraph-second'));
});

scrollTopButton.addEventListener('click', (e) => {
    scrollTo(document.querySelector('.navigation'));
});