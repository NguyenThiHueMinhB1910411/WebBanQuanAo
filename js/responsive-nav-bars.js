
function responsive() {
    let nav = document.getElementsByClassName("nav__link--item");
    for (let i = 0; i < nav.length; i++) {
        if (nav[i].className === "nav__link--item") {
            nav[i].className += " nav__link--responsive";
        } else {
            nav[i].className = "nav__link--item";
        }
    }
}