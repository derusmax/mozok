
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector(".toggle-categories");
    var categoriesMenu = document.querySelector(".categories");

    toggleButton.addEventListener("click", function () {
        categoriesMenu.style.display = categoriesMenu.style.display === "block" ? "none" : "block";
    });
});
