function myFunction() {
  var x = document.getElementById("search-input");

  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("toggle").classList.remove("fa-times");
    document.getElementById("toggle").classList.add("fa-search");
  } else {
    x.style.display = "block";
    document.getElementById("toggle").classList.remove("fa-search");
    document.getElementById("toggle").classList.add("fa-times");
  }
}
