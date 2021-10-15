let searching = false
const searchClicked = ()=>{
    let container = document.querySelector("#searchContainer")
    container.id = 'searchContainerExpanded'
    document.querySelector("#search").src = "Resources/Images/close.svg"
    console.log('hello2')
}

function openSearch(){
    let container = document.querySelector("#searchContainer")
    container.id = 'searchContainerExpanded'
    document.querySelector("#search").src = "Resources/Images/close.svg"
    document.querySelector("#searchField").focus()
    searching = true
}

function closeSearch(){
    let container = document.querySelector("#searchContainerExpanded")
    container.id = 'searchContainer'
    document.querySelector("#search").src = "Resources/Images/magnifyingGlass.svg"
    searching = false
}

function toggleSearch(){
    if (searching) {
        return closeSearch()
    }
    else{
        return openSearch()
    }
}

document.querySelector("#search").addEventListener('click', toggleSearch)


let burgerMenuOpen = false
const slideBurgerOut = ()=>{
    let menu = document.querySelector("#burgermenu")
    menu.style.top = "50px"
    document.querySelector("#burger").src = "Resources/Images/burgerOpen.svg"
    burgerMenuOpen = true;
}

const slideBurgerIn = ()=>{
    let menu = document.querySelector("#burgermenu")
    menu.style.top = "-50px"
    document.querySelector("#burger").src = "Resources/Images/burgerClosed.svg"
    burgerMenuOpen = false;
}

const toggleBurger = () =>{
    if (burgerMenuOpen) {
        return slideBurgerIn()
    }
    else{
        return slideBurgerOut()
    }
}

document.querySelector("#burger").addEventListener('click', toggleBurger)