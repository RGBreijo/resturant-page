import {createMainImage, mainPageContent, emailSection} from './homePage.js'



function renderContactPage()
{
    console.log("clicked");
    const CONTENT = document.querySelector(".content");
 
    while(CONTENT.lastChild)  // Remove the elements currently on the page 
    {
        CONTENT.lastChild.remove();
    }


    // INDEX MAIN IMAGE

    CONTENT.appendChild(createMainImage("pizzaPlanetPhotos/outsidePizzaPlanet.jpg"));

    // MAIN CONTENT 
    CONTENT.appendChild(mainPageContent("pizzaPlanetPhotos/pizzaPlanet.png"));

    document.querySelector("#insideArcade").style.boxShadow = "none";


    // EMAIL SECTION 
    CONTENT.appendChild(emailSection());
}


export {renderContactPage};

