window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  const Navbar = document.getElementById("navbar");
  const Buynow = document.getElementById("buynow_a");


  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    Navbar.style.backdropFilter = "blur(32px)";
    Navbar.style.background = "rgb(185 205 198 / 45%)";
    Buynow.style.color = "#fff";
    Buynow.style.fontStyle = "bold";
  } else {
    Navbar.style.background = "transparent";
    Navbar.style.backdropFilter = "blur(0px)";
    Buynow.style.color = "#000";
    Buynow.style.fontStyle = "normal";
    Navbar.style.color = "#fff";
  }

let nodelist = document.querySelectorAll(".section_imgs img");
nodelist.forEach(function (i) {
  i.addEventListener("click", function () {
    this.style.position = "relative";
    location.assign(this.src);
  });
});

let bbtlst = document.querySelectorAll("#game-crd-buynow");
bbtlst.forEach(function (f) {
  f.style.cursor = "pointer";
  f.addEventListener("click", function () {
    location.assign(f.value);
  });
});
}

let imgls = document.querySelectorAll(".sec-buynow img");
imgls.forEach(function (e) {
  e.style.pointerEvents = "none";
  e.style.userSelect = "none";
  e.addEventListener("click", function () {
   
  });
});





