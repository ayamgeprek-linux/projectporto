const images = document.querySelectorAll("img");

images.forEach(img => {

  img.addEventListener("mouseenter", () => {

    img.style.transform = "scale(1.03)";
    img.style.transition = ".4s";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform = "scale(1)";

  });

});