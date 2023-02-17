/*const galleryItems = document.querySelectorAll('.gallery-item');
const galleryContainer = document.querySelector('.gallery-container');

let currentImageIndex = 0;
let backgroundIndex = 0;

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  galleryItems.forEach(item => item.classList.remove('active'));
  galleryItems[currentImageIndex].classList.add('active');

  backgroundIndex = (backgroundIndex + 1) % 3;
  galleryContainer.className = 'gallery-container';
  galleryContainer.classList.add(`background-${backgroundIndex + 1}`);
}, 5000);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const colorIndex = Math.floor(scrollPosition / (window.innerHeight / 3));
  galleryContainer.className = 'gallery-container';
  galleryContainer.classList.add(`background-${colorIndex + 1}`);
}); */
/*
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryContainer = document.querySelector('.gallery-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentImageIndex = 0;
let backgroundIndex = 0;

function setActiveItem(index) {
  currentImageIndex = index;
  galleryItems.forEach(item => item.classList.remove('active'));
  galleryItems[currentImageIndex].classList.add('active');
}

function switchToNextItem() {
  setActiveItem((currentImageIndex + 1) % galleryItems.length);
}

function switchToPrevItem() {
  setActiveItem((currentImageIndex - 1 + galleryItems.length) % galleryItems.length);
}

function switchToItem(index) {
  setActiveItem(index);
}

leftArrow.addEventListener('click', switchToPrevItem);
rightArrow.addEventListener('click', switchToNextItem);

setInterval(switchToNextItem, 5000);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const colorIndex = Math.floor(scrollPosition / (window.innerHeight / 3));
  galleryContainer.className = 'gallery-container';
  galleryContainer.classList.add(`background-${colorIndex + 1}`);
});
*/

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
      console.log('click');
        
        $('.menu a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    console.log("this is getting activated")
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

