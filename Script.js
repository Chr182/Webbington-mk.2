var side_open = false;
var margin_side = 0;
var check = true;
var id = null;
var indicator = -300
var rotated = false;
var navbar = document.getElementById("navbar");
var bodypage = document.getElementById("bodypage");
var typewrited = document.getElementById("centertext")
var side = document.getElementById("placeholder")
var body = document.querySelector("body");
var button = document.getElementById("circle")
var icon = document.getElementById("arrow")
window.onscroll = function() {sticks()};
window.onresize = function() {checkzoom()};
window.addEventListener( "resize", sticks(), false); 

function checkzoom() {
  var size = window.devicePixelRatio
  if (size > 1.875) {
    typewrited.style.visibility = "hidden";
  }
  if (size < 1.875) {
    typewrited.style.visibility = "visible";
  }
  if (size >= 2.5) {
    navbar.style.visibility = "hidden";
  }
  if (size < 2.5) {
    navbar.style.visibility = "visible";
  }
  if (size > 2.1875) {
    side.style.visibility = "hidden";
  }
  if (size <= 2.1875) {
    side.style.visibility = "visible";
  }
}

function slide() {
  if (check == true) {
    check = false;
    clearInterval(id)
    id = setInterval(slide2, 1);
    id2 = setInterval(rotate, 1);
    var side = document.getElementById("sidebox")
    var button = document.getElementById("circle")
    var icon = document.getElementById("arrow")
    function rotate() {
      if ((rotated == true)) {
        icon.style.transform = "rotate(0deg)";
        clearInterval(id2)
        rotated = false;
        return
      }
      if ((rotated == false)) {
        icon.style.transform = "rotate(180deg)";
        clearInterval(id2)
        rotated = true;
        return
      }
    }
    function slide2() {
      if (side_open == true) {
        indicator = indicator - 5;
        side.style.marginLeft = indicator + "px";
      }
      if (side_open == false) {
        indicator = indicator + 5;
        side.style.marginLeft = indicator + "px";
      }
      if (indicator == -360 && side_open == true) {
        clearInterval(id);
        check = true;
        side_open = false;
      }
      if (indicator == 0 && side_open == false) {
        clearInterval(id);
        check = true;
        side_open = true;
      }
    }
  }
}

function sticks() {
  const Ycheck = document.documentElement.scrollTop
  let checker = document.getElementById("checker")
  let Ypos = checker.offsetTop
  if (Ypos * 9/10 >= Ycheck) {
    navbar.style.position = "sticky"
    navbar.style.top = "0rem"
    navbar.style.marginTop = "-1rem"
    navbar.style.backgroundColor = "rgb(27, 27, 66);"
    bodypage.style.marginTop = "-150px"
    bodypage.style.paddingTop = "200px"
  }
  else {
    navbar.style.position = "fixed"
    navbar.style.top = "60px"
    navbar.style.marginTop = "0rem"
    navbar.style.backgroundColor = "rgb(27, 27, 66, 0.5);"
    bodypage.style.marginTop = "0px"
    bodypage.style.paddingTop = "100px"
  }
}

function fly(x) {
  if (x == '1') {
    const element = document.getElementById("bodypage");
    element.scrollIntoView();
  }
  if (x == '2') {
    const element = document.getElementById(x);
    element.scrollIntoView();
  }
  if (x == '3') {
    const element = document.getElementById(x);
    element.scrollIntoView();
  }
  if (x == '4') {
    const element = document.getElementById(x);
    element.scrollIntoView();
  }
}
