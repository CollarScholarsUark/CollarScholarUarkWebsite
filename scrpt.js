function toggleMenu(){
    //Targets menu-links and hamburger-icon elements
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    //Either add or remove open class in that element, open class has styling
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}