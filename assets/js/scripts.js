// dark mode function
var darkBtn = document.querySelector(".dark-mode");
function darkLightMode() {
    var darkMode = document.body;
    darkMode.classList.toggle("dark-mode");
}
darkBtn.addEventListener("click", darkLightMode )
