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


//Get the button:
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}