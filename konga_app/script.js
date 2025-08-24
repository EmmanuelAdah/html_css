let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);

}
function currentSlide(n) {
    showSlides(slideIndex = n);

}
function showSlides(n) {
    let index;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
        dots[index].className = dots[index].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

function displayImages() {
    let index = 0;
    const images = document.getElementsByClassName("mySlides");
    for (index = 0; index < images.length; index++) {
        images[index].style.display = "none";
    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index-1].style.display = "block";
    setTimeout(displayImages, 2000);
}
