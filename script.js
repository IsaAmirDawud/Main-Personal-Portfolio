/*========================= toggle icon navbar ========================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const section = document.querySelectorAll('section'); 
const navLinks = document.querySelectorAll('nav a'); 

let currentSection = 'home'; 
window.addEventListener('scroll', () =>{
    section.forEach(sec => {
        if(window.scrollY >= (sec.offsetTop - sec.clientHeight / 3)){
            currentSection = sec.id; 
        }
    })

    navLinks.forEach(navLink =>{
        if(navLink.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLink.classList.add('active'); 
        }
    })
})

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-content, .about-main-heading, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-data', { origin: 'right' });

window.onload = () =>{
    console.log(section[0].offsetTop)
    console.log(section[1].offsetTop)
    console.log(section[2].offsetTop)
    console.log(section[3].offsetTop)
    console.log(section[4].offsetTop)
}
