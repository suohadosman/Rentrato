/******** Swiper View ********/
function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




