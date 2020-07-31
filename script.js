var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var email = document.getElementById('mail');
var errorMessage = document.getElementById('errorMessage');
var subButton = document.getElementById('subButton');

email.addEventListener('input', function (event) {

  if (email.validity.valid) {
    errorMessage.innerHTML = '';

  } else {
    errorMessage.innerHTML = 'Please put in a valid Email';
  }
});

subButton.addEventListener('click', function (event) {
  // if the email valid

  if(!email.validity.valid) {
    // If not
    event.preventDefault();
  }
});