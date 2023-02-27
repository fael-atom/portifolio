let seta = document.getElementById("seta");

document.addEventListener("scroll", function () {
  // Pega a posição do scroll
  let scrollPosition = window.scrollY;

  // Calcula se o scroll está em 350px ou não e coloca a opacidade
  if (scrollPosition <= 350) {
    seta.style.opacity = 1 - scrollPosition / 350;
  } else {
    seta.style.opacity = 0;
  }
});
