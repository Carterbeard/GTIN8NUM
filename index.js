function creating() {
    let element = document.getElementByClassName("creatingunseen");
    let hidden = element.getAttribute("hidden");
    if(hidden){
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "");
    }
}
