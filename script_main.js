// website start
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    // Use classList for toggling the "responsive" class
    menuBtn.classList.toggle("responsive");
}



// dark mode

const body = document.querySelector('body');
const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/* Typing Effect */
var typingEffect = new Typed(".typedText",{
    strings: ["Graphic Designer","Video Editor","UI - UX Designer"],

    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay :2000,
})

// scroll animation

const sr = ScrollReveal({
    origin: "top",
    distance : "80px",
    duration : 2000,
    reset :true,
});

sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-info", {delay:200});
sr.reveal(".text-btn", {delay:200});
sr.reveal(".socical_icons", {delay:200});
sr.reveal(".featured-image", {delay:320});

sr.reveal(".project-box", {interval : 200});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance : "80px",
    duration : 2000,
    reset :true,
})

srLeft.reveal('.about-info', {delay:100});
srLeft.reveal('.contact-info', {delay:100});

const srRight = ScrollReveal({
    origin: "left",
    distance : "80px",
    duration : 2000,
    reset :true,
})

srRight.reveal('.skill', {delay:100});
srRight.reveal('.skill-box', {delay:100});




const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        // Construct the selector string
        const linkSelector = `.nav-menu a[href="#${sectionId}"]`;
        const linkElement = document.querySelector(linkSelector);

        if (linkElement) { // Check if the element exists before accessing classList
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                linkElement.classList.add("active-link");
            } else {
                linkElement.classList.remove("active-link");
            }
        }
    });
}

// Add an event listener for scroll
window.addEventListener("scroll", scrollActive);


// Add this to your script.js for PDF click tracking
document.querySelectorAll('.project-box1 a').forEach(link => {
    link.addEventListener('click', function(e) {
        // This will open PDF in new tab
        // The target="_blank" already handles this
        console.log('Opening PDF:', this.href);
    });
});