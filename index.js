function creating() {
    let element = document.getElementsByClassName("creatingunseen");
    let hidden = element.getAttribute("hidden");
    if(hidden=="hidden"){
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }

}
