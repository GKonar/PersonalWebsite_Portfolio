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

// ** Sets text content of div.about__tech-desc 
function setTextContent(name) {
    iconsDescBox.textContent = name;
} 

// ** Toggle modal ** 

function showModal () {
    console.log('??')
    modal.classList.add('show');
    backdrop.classList.add('show');
}

function hideModal () {
    modal.classList.remove('show');
    backdrop.classList.remove('show');
}

// ** Scroll ** 
function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  // ** SetLink **

  function setLink(link) {
    logo.setAttribute("href", link);
    logo.setAttribute("target", "_blank");
  }

