


function navigationBar()
{   

    // Contains all the navbar elements 
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
    
    let mobileLinkTwo = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkTwo.textContent = "Menu"; 

    let mobileLinkThree = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkThree.textContent = "Contact"; 

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
    
    let DesktopLinkTwo = desktopMainNavigationUl.appendChild(document.createElement("li"));
    DesktopLinkTwo.textContent = "Menu"; 

    let DesktopLinkThree = desktopMainNavigationUl.appendChild(document.createElement("li"));
    DesktopLinkThree.textContent = "Contact"; 



    navigationContainer.appendChild(logoContainer);
    navigationContainer.appendChild(mobileNavContent);
    navigationContainer.appendChild(desktopMainNavigation);

    return navigationContainer;
}



function pageHeader(source)
{
    let headerContentContainer = document.createElement("div");
    let headerImg = headerContentContainer.appendChild(document.createElement("HEADER").appendChild(document.createElement("img")))

    headerContentContainer.setAttribute("id", "headerContentContainer");
    headerImg.setAttribute("src", source);

    return headerContentContainer; 
}


function mainPageContent(insideArcadeSrc)
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
    insideArcade.setAttribute("src", insideArcadeSrc); 

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


    //// 

    let emailSectionForm =  document.createElement("form"); 
    emailSignUpContainer.appendChild(emailSectionForm); 


    let emailSectionFormLabel =  document.createElement("label"); 
    // label attributes
    emailSectionForm.appendChild(emailSectionFormLabel);

    let emailSectionFormInput =  document.createElement("input"); 
    emailSectionFormInput.setAttribute("type", "email");
    emailSectionFormInput.setAttribute("placeholder", "example@email.com");
    emailSectionFormInput.required = true; 

    emailSectionForm.appendChild(emailSectionFormInput);

    let emailSectionFormButton =  document.createElement("button"); 
    emailSectionFormButton.textContent = "Sign Up"; 
    // button text content 
    emailSectionForm.appendChild(emailSectionFormButton);

    return emailSignUpContainer; 
 }

export 
{
    navigationBar, pageHeader, mainPageContent, emailSection
};
