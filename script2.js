const reveals = document.querySelectorAll(".timeline,.about-section");

window.addEventListener("scroll",()=>{

  reveals.forEach(el=>{

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";

    }

  })

})