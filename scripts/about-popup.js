const aboutOpenButton = document.getElementById("about");
const aboutCloseButton = document.getElementById("about-close");
const aboutPopup = document.getElementById("about-popup-background");

aboutOpenButton.addEventListener("click", () => {
  aboutPopup.style.opacity = 1;
  aboutPopup.style.display = "grid";
});

aboutCloseButton.addEventListener("click", () => {
  aboutPopup.style.opacity = 0;
  aboutPopup.style.display = "none";
});
