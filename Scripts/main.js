let searching = false

const movie = {
    "Title":"No Time to Die",
    "Year":"2021",
    "Rated":"PG-13",
    "Released":"08 Oct 2021",
    "Runtime":"163 min",
    "Genre":"Action, Adventure, Thriller",
    "Director":"Cary Joji Fukunaga",
    "Writer":"Neal Purvis, Robert Wade, Cary Joji Fukunaga",
    "Actors":"Daniel Craig, Ana de Armas, Rami Malek",
    "Plot":"James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "Language":"English, French, Italian, Russian",
    "Country":"United Kingdom, United States",
    "Awards":"1 nomination",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}, {"Source":"Metacritic","Value":"70/100"}],
    "Metascore":"70",
    "imdbRating":"7.6",
    "imdbVotes":"59,047",
    "imdbID":"tt2382320",
    "Type":"movie",
    "DVD":"N/A",
    "BoxOffice":"N/A",
    "Production":"B25, Metro-Goldwyn-Mayer (MGM), Danjaq Productions, Eon Productions Ltd., Universal Pictures, Cinesite Animation",
    "Website":"N/A",
    "Response":"True"}

const movieTest = () =>{
    let image = document.querySelector("#spinnerImage")
    image.src = movie.Poster
    let title = document.querySelector("#title")
    title.textContent = movie.Title
    let plot = document.querySelector("#plot")
    plot.innerHTML = movie.Plot.substr(0,50) + '...' + plot.innerHTML
    document.querySelector("#CMDbRating").textContent = "3.2 / 10"

    document.querySelector("#IMDbRating").textContent = movie.imdbRating + `(${movie.imdbVotes})`
}    
movieTest()

const expandPlot=()=>{
    document.querySelector("#plot").innerHTML = movie.Plot
}

document.querySelector("#expandPlot").addEventListener('click', expandPlot)

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