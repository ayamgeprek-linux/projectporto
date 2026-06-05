// REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

});



// FILTER ACTIVE
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn)=>{

  btn.addEventListener("click", ()=>{

    buttons.forEach((remove)=>{
      remove.classList.remove("active");
    });

    btn.classList.add("active");

  });

});



// MOUSE GLOW EFFECT
const blur = document.querySelector(".blur-1");

document.addEventListener("mousemove", (e)=>{

  blur.style.left = e.clientX - 200 + "px";
  blur.style.top = e.clientY - 200 + "px";

});