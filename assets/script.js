function openNav() {
  if (document.getElementById("mySidenav").style.width == "0px")
    document.getElementById("mySidenav").style.width = "250px";
  else document.getElementById("mySidenav").style.width = "0";
}

function menuClick(x) {
  x.classList.toggle("change");
}

document.getElementById("mySidenav").style.width = "0px";
