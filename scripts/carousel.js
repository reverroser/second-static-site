let i = 0;
const slides = document.getElementsByClassName("carousel-item");

function setActiveCarouselImage() {
    if (i === 0) {
        slides[0].classList.add('active');
    } else if (i === slides.length) {
        i = 0;
        slides[slides.length - 1].classList.remove('active');
        slides[0].classList.add('active');
    } else {
        slides[i - 1].classList.remove('active');
        slides[i].classList.add('active');
    }

    i = i + 1;

    setTimeout(() => {
        setActiveCarouselImage();
    }, 3000);
}

setActiveCarouselImage();
