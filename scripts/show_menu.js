
function showMenu() {
    var button = document.getElementById("button");
    var menu = document.getElementById("menu");
    if (button.classList.contains("is-active")) {
        menu.style.display = "none";
        button.classList.remove("is-active");
    } else {
        menu.style.display = "block";
        button.classList.add("is-active");
    }
}