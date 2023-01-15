const accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active")
        const accordionBody = accordionHeader.nextElementSibling
        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
        }
        else {
            accordionBody.style.maxHeight = 0
        }
    })
})

//swiper JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 400,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    
});


//Slider Header
let currentSlideID = 1;

const sliderElement = document.getElementById('slider');
const totalSlides = sliderElement.childElementCount;

function next() {
    if (totalSlides < currentSlideID) {
        currentSlideID++;
        showSlide();
    }
}

function prev() {
    if (currentSlideID > 2) {
        currentSlideID--;
        showSlide();
    }
}

function showSlide() {
    let slides = document.getElementById('slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID===index+1) {
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    }
}
