// Logika Navigasi Header
const btnHumburger = document.getElementById('btnHumburger');
const listNav = document.getElementById('listNav');
const titleNav = document.getElementById('titleNav')

btnHumburger.addEventListener('click', () =>{
    listNav.classList.toggle('flex');
    listNav.classList.toggle('hidden');
    titleNav.classList.toggle('hidden')

    btnHumburger.classList.toggle('fa-bars')
    btnHumburger.classList.toggle('fa-solid')
    btnHumburger.classList.toggle('fa-xmark')

})

// Logika FAQ Section
const faqQuestion = document.querySelectorAll('.faqQuestion');

faqQuestion.forEach((faq) => {
    faq.addEventListener('click', () => {
        const textP = faq.parentElement.querySelector('p')
        textP.classList.toggle('hidden')
        const chevron = faq.parentElement.querySelector('i')
        chevron.classList.toggle('fa-chevron-down');
        chevron.classList.toggle('fa-chevron-up');
    })
})