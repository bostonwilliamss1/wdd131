document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector(".menu-button");
    var menu = document.querySelector(".menu");

    console.log(menuButton);
    console.log(menu);

    menuButton.onclick = function() {
        console.log("Button clicked");
        menu.classList.toggle("show");
        console.log(menu.classList.contains("show"));
    };
});