var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 3000); 
}













const form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission behavior
  
  // get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // validate form
  if (!name || !email) {
    alert('Please fill in all fields');
    return;
  }
  
  // submit form
  submitForm(name, email);
});












