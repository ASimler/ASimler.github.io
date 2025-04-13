const sideBar = document.getElementById("side-bar");
const content = document.querySelector("main");
console.log(content);

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  // Mettre l'opacité au fond : voir CSS .active ~ .content {};
});

// Pour que lorsqu'on click sur content ça range la sidebar :
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});