let profileMenu = document.getElementById("profile-menu");
function toggelMenu() {
  profileMenu.classList.toggle("open-menu");
}

let sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLinks = document.getElementById("show-more-links");

function show() {
  sidebarActivity.classList.toggle("open-links");

  if ((showMoreLinks.classList.contains = "open-links")) {
    showMoreLinks.innerHTML = "Show less <b>-</b>";
  } else {
    showMoreLinks.innerHTML = "Show more <b>+</b>";
  }
}
