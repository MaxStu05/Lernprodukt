function toggleMenu() {
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.querySelector('.menu-icon').innerHTML = "&#10005;";
    } else {
      x.style.display = "none";
      document.querySelector('.menu-icon').innerHTML = "&#9776;";
    }
  }
  