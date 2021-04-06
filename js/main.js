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

// const containerDivs = document.querySelectorAll('.toggle-div');
const extractDiv = document.getElementById('extraction');
const firingDiv = document.getElementById('firing');
const prepDiv = document.getElementById('prep');
// const hiddenDivs = document.querySelectorAll('.hidden-contents');

// contents
const extractContent = document.getElementById('extract-content');
const prepContent = document.getElementById('prep-content');
const firingContent = document.getElementById('firing-content');
const toggleChevrons = document.querySelectorAll('.fa-chevron-up');

// loop through the chevrons

let chevron = toggleChevrons.forEach((chevron) => {
    return chevron;
});
// containerDivs.forEach((div) => {
//     div.addEventListener('click', showContents);
// });

extractDiv.addEventListener('click', showExtractContents);
prepDiv.addEventListener('click', showPrepContents);
firingDiv.addEventListener('click', showFiringContents);


// extract functionality
function showExtractContents() {
    if (extractContent.style.display === "none") {
        extractContent.style.display = "block"
    } else {
        extractContent.style.display = "none"
    }
}


// prep functionality
function showPrepContents() {
    if (prepContent.style.display === "none") {
        prepContent.style.display = "block"

    } else {
        prepContent.style.display = "none"
    }
}

// firing content
function showFiringContents() {
    if (firingContent.style.display === "none") {
        firingContent.style.display = "block"

    } else {
        firingContent.style.display = "none"
    }
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

// form validation

const form = document.getElementById('form');
const inputFields = document.querySelectorAll('.input-field');

// loop each input field

inputFields.forEach((field) => {
    document.querySelector('.form-btn').addEventListener('click', showError);
    field.appendChild(error);
});

function showError(event) {
    event.preventDefault();
    let error = document.createElement('p');
    error.innerText = 'Field is required';
    error.style.color = 'red';
}


// modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector("#request");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// validate the input fields
const inputFields = document.querySelectorAll('.input-field');
const submitBtns = document.querySelectorAll('submit-btn');

submitBtns.forEach((btn) => {
    btn.addEventListener('click', showError);

    function showError() {
        inputFields.forEach((field) => {
            if (field.value == "") {
                alert('fill in the fields');
            }
        })
    }
});