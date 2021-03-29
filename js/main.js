var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// toggle div containers

const containerDivs = document.querySelectorAll('.toggle-div');
const hiddenDivs = document.querySelectorAll('.hidden-contents');

containerDivs.forEach((div) => {
    div.addEventListener('click', showContents);
});

function showContents() {
    hiddenDivs.forEach((element) => {
        if (element.style.display === "none") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    });
}