$(document).ready(function () {


  let $btns = $('.project-area .button-group button');


  $btns.click(function (e) {

      $('.project-area .button-group button').removeClass('active');
      e.target.classList.add('active');


      // filltering the data 
      let selector = $(e.target).attr('data-filter');
      $('.project-area .grid').isotope({
          filter: selector
      });

      return false;
  })
});


//jquery for toggle dropdown menus
//jquery for toggle dropdown menus
$(document).ready(function(){
//toggle sub-menus
$(".sub-btn").click(function(){
  $(this).next(".sub-menu").slideToggle();
});

});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
menu.classList.remove("active");
});

//javascript for the navigation bar effects on scroll
window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
});


var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});
