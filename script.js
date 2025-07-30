/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
  const nav = document.getElementsByClassName("nav")[0];
  if (nav.className === "nav") {
    nav.className += " responsive";
  } else {
    nav.className = "nav";
  }
} 