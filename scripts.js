  var toggle = document.getElementById("toggle")
  toggle.innerHTML="<img src=\"https://cdn2.vectorstock.com/i/1000x1000/64/21/dollar-arrow-decrease-icon-money-arrow-symbol-vector-23116421.jpg\" width=\"20px\" height=\"25px\">";

  // https://www.solodev.com/assets/anchor/arrow-down.png

var myText = "I'm Ayush Shankar";
var myArray = myText.split("");
var loopTimer;
function frameLooper()
{
  if(myArray.length>0)
  {
    document.getElementById("type_text").innerHTML += myArray.shift();
  }else{
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout('frameLooper()',130);
}
frameLooper();


jQuery(document).ready(function($) {
  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>` tag.
  // Example:
  // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
}(jQuery));

mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
};

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}

// NAVBAR FIXED JS
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}