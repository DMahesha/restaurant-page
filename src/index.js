import _ from 'lodash';

//html
const html = document.querySelector('html')
html.style.cssText = 'margin:0'

//body
const body = document.querySelector('body')
body.style.cssText = 'margin:0; background-color: lightgrey'

//content
const content = document.getElementById('content')
content.style.cssText = 'background-color: lightpink; display:relative'

//top banner
const topBanner = document.createElement('div')
topBanner.style.cssText = 'display:absolute; bottom:0'
content.appendChild(topBanner)

//title
const webpageTitle = document.createElement('h1')
webpageTitle.textContent = 'Somewhere Nowhere'
webpageTitle.style.cssText = 'display:flex; justify-content:center'
topBanner.appendChild(webpageTitle)

//navigation
const navigation = document.createElement('div')

const homePage = document.createElement('div')
homePage.textContent = 'Home'
const menuPage = document.createElement('div')
menuPage.textContent = 'Menu'
const aboutPage = document.createElement('div')
aboutPage.textContent = 'About'

navigation.style.cssText = 'display:flex'
homePage.style.cssText = 'flex-grow:1; display:flex; justify-content:center; border: solid 1px black'
menuPage.style.cssText = 'flex-grow:1; display:flex; justify-content:center; border: solid 1px black'
aboutPage.style.cssText = 'flex-grow:1; display:flex; justify-content:center; border: solid 1px black'

topBanner.appendChild(navigation)
navigation.appendChild(homePage)
navigation.appendChild(menuPage)
navigation.appendChild(aboutPage)

homePage.addEventListener('mouseover', () => {
    homePage.style.cssText = 'cursor:pointer; flex-grow:1; display:flex; justify-content:center; border: solid 1px black'
})
menuPage.addEventListener('mouseover', () => {
    menuPage.style.cssText = 'cursor:pointer; flex-grow:1; display:flex; justify-content:center; border: solid 1px black'
})
aboutPage.addEventListener('mouseover', () => {
    aboutPage.style.cssText = 'cursor:pointer; flex-grow:1; display:flex; justify-content:center; border: solid 1px black'
})

//main-banner default:displays homepage

//adds main banner
addMainBanner()
function addMainBanner() {
    const mainBanner = document.createElement('div')
    mainBanner.id = 'main-banner'
    content.appendChild(mainBanner)
}

//removes main banner
function reset () {
    let removeContent = document.querySelector('#main-banner')
    content.removeChild(removeContent)
}

//default content displayed
displayHomeContent()

//navigation shows home content
homePage.addEventListener('click', displayHomeContent)
function displayHomeContent() {
    reset()
    const mainBanner = document.createElement('div')
    mainBanner.id = 'main-banner'
    content.appendChild(mainBanner)
    const homeContent = document.createElement('div')
    homeContent.textContent = 'Welcome to the home page for Somewhere Nowhere'
    mainBanner.appendChild(homeContent)
}

//navigation shows menu content
menuPage.addEventListener('click', displayMenuContent)
function displayMenuContent() {
    reset()
    const mainBanner = document.createElement('div')
    mainBanner.id = 'main-banner'
    content.appendChild(mainBanner)
    const menuContent = document.createElement('div')
    menuContent.textContent = 'Welcome to the menu page for Somewhere Nowhere'
    mainBanner.appendChild(menuContent)
}

//navigation shows about content
aboutPage.addEventListener('click', displayAboutContent)
function displayAboutContent() {
    reset()
    const mainBanner = document.createElement('div')
    mainBanner.id = 'main-banner'
    content.appendChild(mainBanner)
    const aboutContent = document.createElement('div')
    aboutContent.textContent = 'Welcome to the about page for Somewhere Nowhere'
    mainBanner.appendChild(aboutContent)
}