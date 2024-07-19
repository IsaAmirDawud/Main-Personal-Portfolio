/*      MODAL         */
const serviceModals = document.querySelectorAll('.services-modal');
const serviceButton = document.querySelectorAll('.services-button');
const serviceModalClose = document.querySelectorAll('.services-modal-close');
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

const ssr = document.getElementById("ssr")
//const servicesCard = document.querySelectorAll('.services-card');

/*          Service Modal       */ 
let serviceModal = (modalClick) => {
    serviceModals[modalClick].classList.add('active-modal');
}

/*let idk = (idk2) =>{
    servicesCard[idk2].classList.remove('services-card-hover-effect'); 
}*/

serviceButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        serviceModal(i)
        //idk(i); 
    })
})

serviceModalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        serviceModals.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

/*          Portfolio Modal       */ 
const portfolioModal = modalClick =>{
    portfolioModals[modalClick].classList.add("active-modal");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active-modal");
        })
    })
})
