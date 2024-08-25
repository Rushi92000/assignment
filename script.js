let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}

function toggleMenu(menuElement, subBoxElement, otherMenuElement, otherSubBoxElement) {

  otherMenuElement.classList.remove('color-yellow');
  otherSubBoxElement.classList.add('d-none');

  menuElement.classList.toggle('color-yellow');
  subBoxElement.classList.toggle('d-none');


  const mainMenu = document.getElementById('mainMenu');
  mainMenu.classList.toggle('w-menu', !subBoxElement.classList.contains('d-none'));

  
  const logoImage = document.getElementById('mainLogo');
  if (logoImage.src.includes('logo-white.svg')) {
      logoImage.src = 'images/logo-grey.svg';
  } else {
      logoImage.src = 'images/logo-white.svg';
  }
}

document.getElementById('product').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu(
      document.getElementById('product'),
      document.getElementById('subProduct'),
      document.getElementById('Accessories'),
      document.getElementById('subAccessories')
  );
});

document.getElementById('Accessories').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu(
      document.getElementById('Accessories'),
      document.getElementById('subAccessories'),
      document.getElementById('product'),
      document.getElementById('subProduct')
  );
});

document.querySelectorAll('.f-title').forEach(function(titleElement) {
  titleElement.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const minusIcon = this.querySelector('.minus');
      const plusIcon = this.querySelector('.plus');
      const title = this.querySelector('.content-title');

      content.classList.toggle('d-none');
      minusIcon.classList.toggle('d-none');
      plusIcon.classList.toggle('d-none');

      if (!minusIcon.classList.contains('d-none')) {
          if (minusIcon.src.includes('yellow')) {
              title.style.color = '#D59E0F';
          } else if (minusIcon.src.includes('blue')) {
              title.style.color = '#0069A9'; 
          }
      } else {
          title.style.color = '';
      }
  });
});
