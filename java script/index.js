const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const navWrapper = document.getElementById("navWrapper");
console.log(navWrapper.classList);

cross.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.classList.add("display-none");
  hamburger.parentNode.parentNode.classList.remove("display-none");
  navWrapper.classList.add("nav-hide");
});

hamburger.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.classList.add("display-none");
  cross.parentNode.parentNode.classList.remove("display-none");
  navWrapper.classList.remove("nav-hide");
});
