function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

myDropdown.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
  }
}
