//////////////////////////////////////////////////// HAmburger code /////////////////////////////////////////////////////
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////setting sliders form here ///////////////////////////////////////////////////////////
const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slider');
const prevButton = document.querySelector('.manual.prev');
const nextButton = document.querySelector('.manual.next');


let currentSlideIndex = 0;

// Set up the automatic slideshow
setInterval(() => {
  currentSlideIndex++;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? 'block' : 'none';
  });
}, 2000);

// Add event listeners to the manual buttons
prevButton.addEventListener('click', () => {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? 'block' : 'none';
  });
});

nextButton.addEventListener('click', () => {
  currentSlideIndex++;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? 'block' : 'none';
  });
});

///////////////////////////////////// slider Fun() ends  /////////////////////////////////////////////////////

///////////////////////////////////////////book cars////////////////////////////////////////////////////////
function openModal() {
  document.getElementById('').style.display = 'block';

  document.getElementById('').style.display = 'none';
}

function bookCab() {
  // Code to book a cab
}