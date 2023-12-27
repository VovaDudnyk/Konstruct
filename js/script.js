document.querySelector(".scroll-button").addEventListener("click", function () {
  const aboutSection = document.getElementById("main-about");
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
humb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  humb.classList.toggle("active");
  body.classList.toggle("noscroll");

  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  humb.classList.remove("active");
  body.classList.remove("noscroll");
}
