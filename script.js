// Navbar scroll effect
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(4,11,24,0.8)";
    navbar.style.backdropFilter = "blur(10px)";
  }else{
    navbar.style.background = "transparent";
  }

});


// Mouse Move Glow Effect
document.addEventListener("mousemove", (e) => {

  const blur = document.querySelector(".blur-1");

  blur.style.left = e.clientX - 200 + "px";
  blur.style.top = e.clientY - 200 + "px";

});


// Fade Animation On Scroll
const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

const hiddenElements = document.querySelectorAll(".about, .hero-desc, .tool-card");

hiddenElements.forEach((el)=> observer.observe(el));
window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 3000);

});
const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click", () => {

  navWrapper.classList.toggle("active");

});