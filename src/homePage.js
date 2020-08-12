



/**
 * Renders the elements for the home page 
 */
function renderHomePage()
{
    const CONTENT = document.querySelector(".content");
 
    while(CONTENT.lastChild)  // Remove the elements currently on the page 
    {
        CONTENT.lastChild.remove();
    }
    // INDEX MAIN IMAGE
    CONTENT.appendChild(createMainImage("pizzaPlanetPhotos/outsidePizzaPlanet.jpg"));


    // MAIN CONTENT 
    CONTENT.appendChild(mainPageContent("pizzaPlanetPhotos/pizzaPlanetGames.jpg"));

    // EMAIL SECTION 
    CONTENT.appendChild(emailSection());
}

/**
 * 
 * Creates the elements that hold the main image of the home page
 * 
 * Main Elements Used: 
 * Img - Image of the resturant 
 * 
 * All other elements are for styling purposes 
 * 
 * @param {*} source source to where the main page image is located 
 */
function createMainImage(source)
{
    let headerContentContainer = document.createElement("div");
    let headerImg = headerContentContainer.appendChild(document.createElement("HEADER").appendChild(document.createElement("img")))

    headerContentContainer.setAttribute("id", "headerContentContainer");
    headerImg.setAttribute("src", source);

    return headerContentContainer; 
}


/**
 * 
 * Creates the elements for the main content of the home page. 
 * 
 * Main Elements Used: 
 * 
 * H1 - Name of resturant 
 * P - Slogan 
 * 
 * Img - Image of the resturant 
 * P - Information about the resturant
 *    
 * 
 * All other elements are for styling purposes 
 * @param {*} source 
 */
function mainPageContent(source)
{
    let resturantDescriptionContainer = document.createElement("div");
    resturantDescriptionContainer.setAttribute("id", "resturantDescriptionContainer");

    let sectionContainer = document.createElement("SECTION");
    resturantDescriptionContainer.appendChild(sectionContainer); 



    let mainContentHeader = document.createElement("HEADER"); 
    mainContentHeader.setAttribute("class", "mainContentHeader");


    let mainContentHeaderHOne = document.createElement("h1"); 
    mainContentHeaderHOne.textContent = "Pizza Planet"; 


    let mainContentHeaderHOneP = document.createElement("p"); 
    mainContentHeaderHOneP.textContent = "The galaxies most delicious pizza"; 

    mainContentHeader.appendChild(mainContentHeaderHOne);
    mainContentHeader.appendChild(mainContentHeaderHOneP);

    sectionContainer.appendChild(mainContentHeader);

    // second child 
    let mainContentContainer = document.createElement("div"); 
    mainContentContainer.setAttribute("class", "mainContentContainer");
    sectionContainer.appendChild(mainContentContainer); 

    let mainContentImageContainer = document.createElement("div");
    mainContentImageContainer.setAttribute("class", "mainContentImageContainer");

    let insideArcade = document.createElement("img"); 
    insideArcade.setAttribute("id", "insideArcade");
    insideArcade.setAttribute("src", source); 

    mainContentImageContainer.appendChild(insideArcade); 

    mainContentContainer.appendChild(mainContentImageContainer);


    // third chidl 
    let mainContentText = document.createElement("div"); 
    mainContentText.setAttribute("id", "mainContentText");

    sectionContainer.appendChild(mainContentText);

    let mainContentTextP = document.createElement("p"); 
    mainContentTextP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius magni eaque molestias porro vel optio tempora officia, sapiente impedit repellendus! Ad consequuntur quis ullam praesentium consectetur architecto voluptatum, eveniet ab placeat, rem minima numquam officia tempora. Minus numquam perferendis quisquam reiciendis quia veritatis quas doloremque, quis corrupti sed. Nulla.";

    mainContentText.appendChild(mainContentTextP);

    mainContentContainer.appendChild(mainContentText);

    return resturantDescriptionContainer; 
}


/**
 * 
 * Creates the elements for an email sign up form 
 * 
 * 
 * Main Elements Used: 
 * 
 * label  - Label of email ( Not implemented, no textContent )
 * input  - Customer Email address  
 * button - Sign Up Button 
 * 
 */
 function emailSection()
 {
     let emailSignUpContainer = document.createElement("div"); 
     emailSignUpContainer.setAttribute("id", "emailSignUpContainer");

     let mainSection = document.createElement("SECTION"); 

     emailSignUpContainer.appendChild(mainSection); 

    let sectionDiv = document.createElement("div"); 
    mainSection.appendChild(sectionDiv);

    let sectionDivH2 = document.createElement("h2"); 
    sectionDivH2.textContent = "Sign Up For 10 Free Tokens!";
    sectionDiv.appendChild(sectionDivH2); 

    let sectionDivP = document.createElement("p"); 
    sectionDivP.textContent = "Sign up to our news letter";
    sectionDiv.appendChild(sectionDivP); 


    let emailSectionForm =  document.createElement("form"); 
    emailSignUpContainer.appendChild(emailSectionForm); 


    let emailSectionFormLabel =  document.createElement("label"); 
    emailSectionForm.appendChild(emailSectionFormLabel);

    let emailSectionFormInput =  document.createElement("input"); 
    emailSectionFormInput.setAttribute("type", "email");
    emailSectionFormInput.setAttribute("placeholder", "example@email.com");
    emailSectionFormInput.required = true; 

    emailSectionForm.appendChild(emailSectionFormInput);

    let emailSectionFormButton =  document.createElement("button"); 
    emailSectionFormButton.textContent = "Sign Up"; 


    emailSectionForm.appendChild(emailSectionFormButton);

    return emailSignUpContainer; 
 }


export {renderHomePage};
