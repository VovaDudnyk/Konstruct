document.querySelector(".scroll-button").addEventListener("click", function () {
  const aboutSection = document.getElementById("main-about");
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
});
