var slideIndex = 1;
showSlides(slideIndex);

//Arrow controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Control Thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


