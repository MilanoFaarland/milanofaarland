/* ============================ Toggle Icon Navbar ============================ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* =========================== Scroll Section Active Link =========================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /* ============================ Scroll Section Active Link ============================ */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /* =========== Remove Toggle Icon and Navbar when clicked navbar link (scroll) =========== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* ===================================== Scroll Reveal ===================================== */
ScrollReveal({
    // reset: true,
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .footer-text', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .footer-iconTop', { origin: 'right' });

/* ===================================== Typed JS ===================================== */
const typed = new Typed('.multiple-text', {
    strings: ['Game Developer', 'Web Developer', 'UX/UI Designer', 'Blender Modeler'],
    startAfter: 1000,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/* ===================================== Contact Me ===================================== */

// https://www.youtube.com/watch?v=_p4Hgzm_oNQ 
// get text from message box
// get name from name input box
// get email from email input box
// send message to my email. (with all the fields filled in)

// const form = document.querySelector("form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     let nameValue = name.value;
//     let emailValue = email.value;
//     let messageValue = message.value;
// });


// ...existing code...

/* ===================================== Contact Me ===================================== */
/*
// Initialize EmailJS
(function(){
    emailjs.init("YOUR_USER_ID");
})();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission

    let nameValue = name.value;
    let emailValue = email.value;
    let messageValue = message.value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: nameValue,
        from_email: emailValue,
        message: messageValue
    })
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again later.");
    });
});

*/

/* ===================================== Color toggle ===================================== */

// color scheme 2
// --bg-color: rgb(15, 1, 31);
// --second-bg-color: rgb(19, 1, 41);
// --text-color: #fff;
// --main-color: #0ef;

// const body = document.querySelector("body");
// const paragraph = document.querySelector("p");
// const hiddenValue = document.querySelector("#hiddenValue");
// const button = document.querySelector("button");


// button.addEventListener("click", () => {
//     let currentValue = hiddenValue.value;

//     if (currentValue == 0) {
//         lightModeToggle("black", "white", 1, "light mode toggle");
//     }
//     else {
//         darkModeToggle("white", "black", 0, "dark mode toggle");
//     }

// });

// function lightModeToggle(bgColor, pColor, hValue, bText) {
//     body.style.backgroundColor = bgColor;
//     paragraph.style.color = pColor;
//     hiddenValue.value = hValue;
//     button.innerText = bText;
// }

// function darkModeToggle(bgColor, pColor, hValue, bText) {
//     body.style.backgroundColor = "white";
//     paragraph.style.color = "black";
//     hiddenValue.value = 0;
//     button.innerText = "dark mode toggle";
// }




