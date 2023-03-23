const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const navWrapper = document.getElementById("navWrapper");

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

// const featuredItem = document.getElementsByClassName("featured-item");
// for (var i = 0; i < featuredItem.length; i++) {
//   featuredItem[i].addEventListener("mouseover", async (e) => {
//     e.preventDefault;
//     await e.target.parentNode.nextElementSibling.classList.add("item-show");
//   });
// }

// for (var i = 0; i < featuredItem.length; i++) {
//   featuredItem[i].addEventListener("mouseout", (e) => {
//     e.preventDefault;
//     console.log(e.target);
//     e.target.classList.remove("item-show");
//   });
// }

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
