function openNavigation() {
  var nav = document.getElementById("topNav");
  if (nav.className === "top-navigation") {
    nav.className += " nav-open";
  } else {
    nav.className = "top-navigation";
  }
}
