const currentSlideID = 1;

const sliderElement = document.getElementById('slider');
const totalSlides = sliderElement.childElementCount;

function next() {
    if (currentSlideID < totalSlides) {
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