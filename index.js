// Connaitre niveau de scroll (window.scrollY)
const nav = document.querySelector("nav");
console.log(nav);


// On l'implémente une première fois avec la valeur initiale
let scrollValue = window.scrollY;

window.addEventListener("scroll", (e) => {
  console.log(scrollValue);

  // Une fois le scroll commencé on le compare avec la variable scrollValue
  if (window.scrollY < 15) {
    nav.style.top = "20px";
    nav.style.background = "var(--white2)";
    nav.style.width = "95%";
  } else {
    nav.style.top = "0px";
    nav.style.background = "var(--color2)";
    nav.style.width = "100%";
  }

  // Une fois le test terminé on réimplémente scrollValue avec la nouvelle valeur du scrollY
  scrollValue = window.scrollY;
});