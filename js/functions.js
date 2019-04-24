// ** Futureproof year update function for footer
function yearUpdate() {
    const date = new Date();
    return date.getFullYear();
}

// ** Show greeting (used on page load)
function showGreeting() {
    helloParagraph.classList.add('showGreeting');
    firstName.classList.add('showName');
    secondName.classList.add('showNameDelay');
};

// ** Shows and hides greeting on scroll
function animateGreetingOnScroll() {
    if(headerTextBox.scrollTop > 300) {
        // Hide Greeting
        helloParagraph.classList.remove('showGreeting');
        firstName.classList.remove('showName');
        secondName.classList.remove('showNameDelay');
        
        helloParagraph.classList.add('hideGreeting');
        firstName.classList.add('hideName');
        secondName.classList.add('hideNameDelay');
    } else {
        // Show Greeting
        helloParagraph.classList.remove('hideGreeting');
        firstName.classList.remove('hideName');
        secondName.classList.remove('hideNameDelay');

        helloParagraph.classList.add('showGreeting');
        firstName.classList.add('showName');
        secondName.classList.add('showNameDelay');
    }
};

// ** Show works section
function showSectionWorks() {
    sectionAbout.classList.remove('bottomHide');
    sectionAbout.classList.remove('none');
    sectionAbout.classList.add('flex');
    setTimeout(()=> {
        sectionAbout.classList.add('bottomShow');
    }, 100); // ?
};

// ** Hide works section
function hideSectionWorks() {
    sectionAbout.classList.remove('bottomShow');
    sectionAbout.classList.add('bottomHide');
    setTimeout(()=> {
        sectionAbout.classList.remove('flex');
        sectionAbout.classList.add('none');
    }, 500);
};

// ** Hide works section on scroll
function hideSectionWorksOnScroll() {
    if(headerTextBox.scroll) {
        hideSectionWorks();
    };
};

// ** Toggle ReachMe section
function toggleReachMe() {
    body.classList.toggle('margin'); // toggle !
};

// ** Hide ReachMe section (used on scroll)
function hideReachMe() {
    body.classList.remove('margin'); // remove !
};

// ** Sets text content of div.about__tech-desc 
function setTextContent(name) {
    iconsDescBox.textContent = name;
} 

// ** Activates Blur for smartphones, only vertical mode ** 
function ActivateBlurSmartphones() {
  headerTextBoxMobile.scrollLeft >= 0 && headerTextBoxMobile.scrollLeft < 140 ?
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(3px)" :
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(0)";
}

// ** Activates Blur for small tablets, only vertical mode ** 
function ActivateBlurForSmallTablets() {
    headerTextBoxMobile.scrollLeft >= 0 && headerTextBoxMobile.scrollLeft < 180 ?
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(3px)" :
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(0)";
}

// ** Activates Blur for tablets, only vertical mode ** 
function ActivateBlurForBigTablets() {
    headerTextBoxMobile.scrollLeft >= 0 && headerTextBoxMobile.scrollLeft < 220 ?
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(3px)" :
        headerTextBoxParagraphTwo.style.webkitFilter = "blur(0)";
}