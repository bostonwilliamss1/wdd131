const select = document.getElementById("light-dark");
const body = document.body;
const logo = document.getElementById("logo");

function changeTheme() {
    const value = select.value;
    if (value === "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else {
        body.classList.remove("dark");
        logo.src = "byui-logo.webp";
    }
}

select.addEventListener("change", changeTheme);
changeTheme();