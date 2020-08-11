
import {navigationBar, pageHeader, mainPageContent, emailSection} from './mainPage.js';
import {menuContent} from './menu.js';

menuContent(); 

let indexContainer = document.querySelector(".content");

// NAVIGATION BAR 
indexContainer.appendChild(navigationBar());
document.querySelector("#mobileHamburger").addEventListener('click', OpenMobileNavBarAnimation);


// INDEX MAIN IMAGE
indexContainer.appendChild(pageHeader("pizzaPlanetPhotos/outsidePizzaPlanet.jpg"));


// MAIN CONTENT 

indexContainer.appendChild(mainPageContent("pizzaPlanetPhotos/pizzaPlanetGames.jpg"));


// EMAIL SECTION 
indexContainer.appendChild(emailSection());









function OpenMobileNavBarAnimation()
{
    let expandMobileNavBar = document.querySelector(".mobileNavContainer");
    expandMobileNavBar.style.width = '200px'; 

    
    document.querySelector("#closeMobileNav").addEventListener('click', closeMobileNavBarAnimiation);
}


function closeMobileNavBarAnimiation()
{
    let closeMobileNavBar = document.querySelector(".mobileNavContainer");
    closeMobileNavBar.style.width = '0'; 
}

