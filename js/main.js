// ******************** VARS SELECTING ELEMENTS  ********************
// GENERAL
const body = document.querySelector('body');

// NAVIGATION
const navWorksBtn = document.querySelector('.navigation__works');
const navReachMeBtn = document.querySelector('.navigation__reachme');
const logo = document.querySelector('.navigation__logo');

// HEADER
const headerTextBox = document.querySelector('.header__text-box'); // Text box holding paragraphs about
const helloIAmGrzegorz = document.querySelector('.heading-primary');

// HEADER BTNS
const works = document.querySelector('.works');
const reachme = document.querySelector('.reachme');

// HEADER ** MOBILE **
const headerTextBoxMobile = document.querySelector('.text-box__mobile');

const headerTextBoxParagraphOne = document.querySelector('.text-box__mobile-p1');
const headerTextBoxParagraphTwo = document.querySelector('.text-box__mobile-p2');
const headerTextBoxParagraphThree = document.querySelector('.text-box__mobile-p3');

// ABOUT
const sectionAbout = document.querySelector('.about');
const iconsDescBox = document.querySelector('.about__tech-desc');

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

/////////////////////////////////////////////////////////////////////////////////////////


// ******************** LOAD EVENTS ********************
// showing hello ad the start of the page
window.addEventListener('load', e => {
   showGreeting();
   headerTextBoxParagraphTwo.style.webkitFilter = "blur(3px)";
   helloIAmGrzegorz.style.opacity = "1";
});

// window.addEventListener('scroll', e => {
//     console.log(scrollY);

//     if (body.clientWidth < 1000) {
//         if(scrollY >= 160) {
//             console.log('chuj');
//         }
//     }
// })


// ****************************** NAVIGATION ******************************
logo.addEventListener('click', e => {
    if (body.clientWidth > 1000) {
        logo.removeAttribute("href");
        logo.removeAttribute("target");
        toggleReachMe();
        hideSectionWorks();
    } else { 
        logo.setAttribute("href", "https://github.com/gkonar");
        logo.setAttribute("target", "_blank");
     }
});

navWorksBtn.addEventListener('click', e => {
    showSectionWorks();
    hideReachMe();
    headerTextBox.addEventListener('scroll', e => hideSectionWorksOnScroll());
});

navReachMeBtn.addEventListener('click', e => {
    toggleReachMe();
    hideSectionWorks();
});

// ****************************** SECTION HEADER  ******************************
// HEADER TEXT BOX EVENTS
headerTextBox.addEventListener('scroll', e => animateGreetingOnScroll());

// HEADER BUTTONS EVENTS
// Works Btn Event
works.addEventListener('click', e => {
    showSectionWorks();
    hideReachMe();
    
    // Start to fire that event after click --->> hide section works on scroll
    headerTextBox.addEventListener('scroll', e => hideSectionWorksOnScroll());
});

// HEADER TEXT BOX  ** ONLY VERTICAL MOBILE VIEW **
headerTextBoxMobile.addEventListener('scroll', e => {
    console.log(headerTextBoxMobile.scrollLeft);
    // Blur for smartphones
    if(headerTextBoxParagraphTwo.clientWidth <= 350 ) {
        ActivateBlurSmartphones();
    }
    // Blur for big smartphones and tablets
    if(headerTextBoxParagraphTwo.clientWidth >= 425 || headerTextBoxParagraphTwo.clientWidth >= 510) {
        ActivateBlurForSmallTablets();
    }
    // // Blur for tablets
    if(headerTextBoxParagraphTwo.clientWidth >= 595 || headerTextBoxParagraphTwo.clientWidth >= 680) {
        ActivateBlurForBigTablets();
    }
});


// ****************************** SECTION REACH ME  ******************************
reachme.addEventListener('click', e => hideSectionWorks());

// show and hide .ReachMe
reachme.addEventListener('click', e => toggleReachMe());

// Hide reachMe section on scroll
headerTextBox.addEventListener('scroll', e => hideReachMe());

// ****************************** SECTION ABOUT ******************************
// Technologies icons
js.addEventListener('mouseover', e => setTextContent('JavaScript'));
js.addEventListener('mouseleave', e => setTextContent(''));

css.addEventListener('mouseover', e => setTextContent('CSS'));
css.addEventListener('mouseleave', e => setTextContent(''));

html.addEventListener('mouseover', e => setTextContent('HTML'));
html.addEventListener('mouseleave', e => setTextContent(''));

github.addEventListener('mouseover', e => setTextContent('GitHub'));
github.addEventListener('mouseleave', e => setTextContent(''));

npm.addEventListener('mouseover', e => setTextContent('NPM'));
npm.addEventListener('mouseleave', e => setTextContent(''));

webpack.addEventListener('mouseover', e => setTextContent('Webpack'));
webpack.addEventListener('mouseleave', e => setTextContent(''));

sass.addEventListener('mouseover', e => setTextContent('Sass'));
sass.addEventListener('mouseleave', e => setTextContent(''));


// ****************************** FOOTER ******************************
// Place year in DOM
year.textContent = yearUpdate();

// ****************************** PARTICLES JS SETTINGS

const particles = Particles.init({
    selector: '.background',
    maxParticles: 200,

    color: ['#404B69', '#DBEDF3'],
    connectParticles: true,
    speed: .5,
    
    connectParticles: false,

    responsive: [
        {
            breakpoint: 800,
            options: {
                maxParticles: 150,
                color: ['#404B69', '#DBEDF3'],
                connectParticles: false,
                sizeVariations: 1,
                speed: .2
            }
        },
        {
            breakpoint: 600,
            options: {
                maxParticles: 100,
                color: ['#404B69', '#DBEDF3'],
                connectParticles: false,
                sizeVariations: 1,
                speed: .2
            }
        }, 
        {
            breakpoint: 500,
            options: {
                maxParticles: 180,
                color: ['#404B69', '#DBEDF3'],
                connectParticles: false,
                sizeVariations: 1,
                speed: .2
            }
        }
    ]
});
