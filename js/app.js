/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
    const navList = document.getElementById('navbar__list');
    const [...sections] = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    const createMenuLink = (section) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'menu__link';
    link.textContent = section.dataset.nav;
    link.setAttribute('href', `#${section.id}`)
    link.addEventListener('click', goToSection);
    li.appendChild(link);
    return li;
}

// check the loaction of a section in the viewport
    const isInViewport = (section) => {
    const { top, bottom } = section.getBoundingClientRect();
    return top <= 150 && bottom >= 150;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
    const goToSection = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth" });
}

//Start build the nav
    const navBuilder = (sections) => {
    const fragment = document.createDocumentFragment();
    sections.forEach((section) => {
    const newLink = createMenuLink(section);
    fragment.appendChild(newLink);
    })
    navList.appendChild(fragment);
}
navBuilder(sections);
//End build the nav

// Start class 'active' to section when near top of viewport
    const isActive = (sections) => {
    const menuLinks = document.querySelectorAll('.menu__link');
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            menuLinks[index].classList.add('active__link');
            section.classList.add('your-active-class');
        }
        else {
            menuLinks[index].classList.remove('active__link');
            section.classList.remove('your-active-class');
        }
    })
}
// End class 'active' to section when near top of viewport
    // scrolling to the section when clicking on the navigation bar
    function smoothScroll() { 
        let links = document.querySelectorAll('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                e.preventDefault();
                let section = document.querySelector(links[i].getAttribute('href'));
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }
    smoothScroll();
    function toggleNavBar(){
    let userScroll;
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    window.clearTimeout( userScroll );
    userScroll = setTimeout(function() {
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
// End of Toggle the NavBar According to User Scroll Activity

//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll', (e) => {
    isActive(sections);
});
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


