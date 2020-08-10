
import {navigationBar, pageHeader} from './mainPage.js';

document.querySelector("#mobileHamburger").addEventListener('click', OpenMobileNavBarAnimation);



console.log(navigationBar());
console.log(pageHeader("source"));





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

