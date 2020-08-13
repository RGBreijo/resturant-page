
import {renderHomePage} from './homePage.js';
import {renderMenuPage} from './menu.js';


/**
 * Renders the navigation bar to the page along with opening and closing functionality 
 */
function renderNavigationbar()
{
    // insert it before because right now it is inserting it after the div 

    const NAVBAR_CONTAINER = document.querySelector("#navbarContainer");
    NAVBAR_CONTAINER.appendChild(navigationBar()); 

    document.querySelector("#mobileHamburger").addEventListener('click', OpenMobileNavBarAnimation);
    navigationBarEventListeners();
}


/**
 * Ads event listeners for the different pages of the web site 
 */
function navigationBarEventListeners()
{
    let home = Array.from(document.querySelectorAll(".homePage")); 
    let menu = Array.from(document.querySelectorAll(".menuPage")); 


    for(let i = 0; i < home.length; i++)
    {
        home[i].addEventListener('click', renderHomePage); // To add it again once page is cleared
        menu[i].addEventListener('click', renderMenuPage); // To add it again once page is cleared
    }
}



/**
 * Creates a nav bar for mobile and desktop devices
 * 
 * Main Elements Used: 
 * p - Logo Text
 * Ul / li - Navigation links for mobile 
 * Ul / li - Navigation links for desktop 
 * 
 * All other elements are for styling purposes 
 * 
 */
function navigationBar()
{   
    // Container for all the navbar elements 
    let navigationContainer = document.createElement("div");
    navigationContainer.setAttribute("id", "navigationContentContainer")


    // First child of navbar 
    let logoContainer = document.createElement("div");
    logoContainer.setAttribute("id", "logoContainer")

    let logoContainerP = document.createElement("p");
    logoContainerP.textContent = "Pizza Planet"; 

    logoContainer.appendChild(logoContainerP);

    // Second child of navbar 

    let mobileNavContent = document.createElement("div");
    mobileNavContent.setAttribute("class", "mobileNavContent");

    // First Child of mobileNavContent
    let mobileHamburger = document.createElement("div");
    mobileHamburger.setAttribute("id", "mobileHamburger");

    mobileHamburger.appendChild(document.createElement("div"));
    mobileHamburger.appendChild(document.createElement("div"));
    mobileHamburger.appendChild(document.createElement("div"));

    // Second child of mobileNavContent
    let mobileNavContainer = document.createElement("div");
    mobileNavContainer.setAttribute("class", "mobileNavContainer");

    // Exit button of mobileNavContainer
    let mobileNavContainerExit = mobileNavContainer.appendChild(document.createElement("div"));
    let mobileNavContainerExitP = document.createElement("p"); 
    mobileNavContainerExitP.textContent = "X";
    mobileNavContainerExitP.setAttribute("id", "closeMobileNav");

    mobileNavContainerExit.appendChild(mobileNavContainerExitP);


    // second child of mobileNavContainer  
    let mobileMainNavigation = document.createElement("nav"); 
    mobileMainNavigation.setAttribute("id", "mobileMainNavigation");


    let mobileMainNavigationOuterDiv = mobileMainNavigation.appendChild(document.createElement("div"));
    
    let mobileMainNavigationUL = document.createElement("ul");
    mobileMainNavigationOuterDiv.appendChild(mobileMainNavigationUL);



    let mobileLinkOne = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkOne.textContent = "Home"; 
    mobileLinkOne.setAttribute("class", "homePage");


    
    let mobileLinkTwo = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkTwo.textContent = "Menu"; 
    mobileLinkTwo.setAttribute("class", "menuPage");


    let mobileLinkThree = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkThree.textContent = "Contact"; 
    mobileLinkThree.setAttribute("class", "contactPage"); 

    mobileNavContainer.appendChild(mobileMainNavigation);

    mobileNavContent.appendChild(mobileHamburger);
    mobileNavContent.appendChild(mobileNavContainer);


    // Thrid child of navigationContainer (navigationContentContainer)

    let desktopMainNavigation = document.createElement("nav");
    desktopMainNavigation.setAttribute("id", "desktopMainNavigation");

    let desktopMainNavigationUl = document.createElement("ul");

    desktopMainNavigation.appendChild(desktopMainNavigationUl);

    let DesktopLinkOne = desktopMainNavigationUl.appendChild(document.createElement("li"));
    DesktopLinkOne.textContent = "Home"; 
    DesktopLinkOne.setAttribute("class", "homePage");
    
    let DesktopLinkTwo = desktopMainNavigationUl.appendChild(document.createElement("li"));
    DesktopLinkTwo.textContent = "Menu"; 
    DesktopLinkTwo.setAttribute("class", "menuPage");

    let DesktopLinkThree = desktopMainNavigationUl.appendChild(document.createElement("li"));
    DesktopLinkThree.textContent = "Contact"; 
    DesktopLinkThree.setAttribute("class", "contactPage");


    navigationContainer.appendChild(logoContainer);
    navigationContainer.appendChild(mobileNavContent);
    navigationContainer.appendChild(desktopMainNavigation);

    return navigationContainer;
}



/**
 * Opens the navigation menu on mobile devices 
 * 
 */
function OpenMobileNavBarAnimation()
{
    let expandMobileNavBar = document.querySelector(".mobileNavContainer");
    expandMobileNavBar.style.width = '200px'; 

    document.querySelector("#closeMobileNav").addEventListener('click', closeMobileNavBarAnimiation);
}


/**
 * Closes the mobile menu on mobile devices
 */
function closeMobileNavBarAnimiation()
{
    let closeMobileNavBar = document.querySelector(".mobileNavContainer");
    closeMobileNavBar.style.width = '0'; 
}

export {renderNavigationbar};