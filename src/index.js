import _ from 'lodash';

//html
const html = document.querySelector('html')
html.style.cssText = 'margin:0'

//body
const body = document.querySelector('body')
body.style.cssText = 'margin:0'

//content
const content = document.getElementById('content')
content.style.cssText = 'background-color: lightpink'

//top banner
const topBanner = document.createElement('div')
content.appendChild(topBanner)

//title
const webpageTitle = document.createElement('h1')
webpageTitle.textContent = 'Somewhere Nowhere'
webpageTitle.style.cssText = 'border: solid 1px black; display:flex; justify-content:center'
topBanner.appendChild(webpageTitle)

//navigation
const navigation = document.createElement('div')

const homePage = document.createElement('div')
homePage.textContent = 'Home'
const menuPage = document.createElement('div')
menuPage.textContent = 'Menu'
const aboutPage = document.createElement('div')
aboutPage.textContent = 'About'

navigation.style.cssText = 'display:flex; border: solid 1px black'
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

//main-banner

//default: displays home

//mouseclick homePage () => displayHomePage()
homePage.addEventListener('click', () => displayHomePage())
const displayHomePage = (function (){
    alert('homepage')
})

//mouseclick menuPage () => displayMenuPage()
menuPage.addEventListener('click', () => displayMenuPage())
const displayMenuPage = (function (){
    alert('menupage')
})

//mouseclick aboutPage () => displayAboutPage()
aboutPage.addEventListener('click', () => displayAboutPage())
const displayAboutPage = (function (){
    alert('aboutpage')
})