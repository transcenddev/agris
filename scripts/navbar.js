// Mobile Navbar
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");


    // console.log(visibility);
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

}); 

// Hide the navbar when scrolling down, display when scrolling up
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY) {
        // console.log("we are going down");
      primaryHeader.classList.add("nav--hidden");
  }else{
        // console.log("we are going up");
    primaryHeader.classList.remove("nav--hidden");
  }
    lastScrollY = window.scrollY;
});


// Change the appearance of navbar when scrolling down
const header = document.querySelector(".primary-header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = { 
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav--scrolled");
    } else {
      header.classList.remove("nav--scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//change logo on scroll

// Get the logo element
// var logo = document.getElementById("logo");

// // Get the position of the logo
// var logoPosition = logo.getBoundingClientRect().top;

// // Listen for the scroll event
// window.addEventListener("scroll", function() {
//   // Get the current scroll position
//   var scrollPosition = window.pageYOffset;

//   // Check if the scroll position is greater than the logo position
//   if (scrollPosition > logoPosition) {
//     // Change the logo
//     logo.src = "./images/crab-logo-black.png";
//   } else {
//     // Change back to the original logo
//     logo.src = "./images/crab-logo-white.png";
//   }
// });


// var logo = document.getElementById("logo");

// // Get the section element
// var section = document.getElementById("section-two");

// // Get the position of the section
// var sectionPosition = section.getBoundingClientRect().top;

// // Listen for the scroll event
// window.addEventListener("scroll", function() {
//   // Get the current scroll position
//   var scrollPosition = window.pageYOffset;

//   // Check if the scroll position is within the section
//   if (scrollPosition > sectionPosition && scrollPosition < (sectionPosition + section.offsetHeight)) {
//     // Change the logo
//     logo.src = "./images/crab-logo-black.png";
//     logo.style.transition = "all 300ms ease-in";
//   } else {
//     // Change back to the original logo
//     logo.src = "./images/crab-logo-white.png";
//     logo.style.transition = "all 300ms ease-in";
//   }
// });


// Get the logo element
var logo = document.getElementById("logo");

// Get the section element
var section = document.getElementById("section-two");

// Get the position of the section
var sectionPosition = section.getBoundingClientRect().top;

// Get the screen width
var screenWidth = window.innerWidth;

// Listen for the scroll event
window.addEventListener("scroll", function() {
  // Check the screen size
  if (screenWidth > 768) {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset;

    // Check if the scroll position is within the section
    if (scrollPosition > sectionPosition && scrollPosition < (sectionPosition + section.offsetHeight)) {
      // Change the logo
      logo.src = "./images/crab-logo-black.png";
      logo.style.transition = "all 0.7s ease-in-out";
    } else {
      // Change back to the original logo
      logo.src = "./images/crab-logo-white.png";
      logo.style.transition = "all 0.7s ease-in-out";
    }
  }
});


