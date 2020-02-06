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

// ** Sets text content of div.about__tech-desc 
function setTextContent(name) {
    iconsDescBox.textContent = name;
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
// function setLink(link) {
//     logo.setAttribute("href", link);
//     logo.setAttribute("target", "_blank");
// }