
import {navigationBar, pageHeader, mainPageContent} from './mainPage.js';



let indexContainer = document.querySelector(".container");

// NAVIGATION BAR 
indexContainer.appendChild(navigationBar());
document.querySelector("#mobileHamburger").addEventListener('click', OpenMobileNavBarAnimation);


// INDEX MAIN IMAGE
indexContainer.appendChild(pageHeader("pizzaPlanetPhotos/outsidePizzaPlanet.jpg"));


// MAIN CONTENT 

indexContainer.appendChild(mainPageContent("pizzaPlanetPhotos/pizzaPlanetGames.jpg"));



console.log(mainPageContent()); 







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

