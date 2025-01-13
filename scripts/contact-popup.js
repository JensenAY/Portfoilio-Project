const openButton = document.getElementById("contact");
const closeButton = document.getElementById("close");
const popup = document.getElementById("popup-background");

openButton.addEventListener("click", () => {
  popup.style.opacity = 1;
  popup.style.display = "grid";
});

closeButton.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.display = "none";
});
