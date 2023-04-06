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





const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission behavior
  
  // get form values
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  
  // validate form
  if (!firstName || !lastName || !email || !subject) {
    alert('Please fill in all required fields');
    return false;
  }
  
  // display form data in alert message
  alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}`);
});




























