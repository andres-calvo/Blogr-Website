function openNavigation() {
  var nav = document.getElementById("topNav");
  if (nav.className === "top-navigation") {
    nav.className += " nav-open";
  } else {
    nav.className = "top-navigation";
  }
}

var drops = document.querySelectorAll("li.dropdown");
for (drop of drops) {
  drop.addEventListener("click", function manageDropdown(drop) {
    var drop = window.event || drop; //window.event for IE
    if (!drop.target) {
      drop.target = drop.srcElement; //extend target property for IE
    }

    var parent = drop.target.parentNode;

    while (parent.tagName != "LI") {
      parent = parent.parentNode;
    }
    console.log(parent);
    if (parent.getAttribute("state") == "open") {
      parent.setAttribute("state", "close");
    } else {
      var otherelements = document.querySelectorAll(".dropdown[state='open']");
      for (element of otherelements) {
        element.setAttribute("state", "close");
      }
      parent.setAttribute("state", "open");
    }
  });
}
