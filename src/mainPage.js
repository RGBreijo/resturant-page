


function navigationBar()
{
    let navigationContainer = document.createElement("div");
    navigationContainer.setAttribute("id", "navigationContentContainer")

    let logoContainer = document.createElement("div");
    logoContainer.setAttribute("id", "logoContainer")

    let logoContainerP = document.createElement("p");
    logoContainerP.textContent = "Pizza Planet"; 

    logoContainer.appendChild(logoContainerP);


    let mobileNavContent = document.createElement("div");
    mobileNavContent.setAttribute("class", "mobileNavContent");

    let mobileHamburger = document.createElement("div");
    mobileHamburger.setAttribute("id", "mobileHamburger");

    mobileHamburger.appendChild(document.createElement("div"));
    mobileHamburger.appendChild(document.createElement("div"));
    mobileHamburger.appendChild(document.createElement("div"));


    let mobileNavContainer = document.createElement("div");
    mobileNavContainer.setAttribute("class", "mobileNavContainer");
    let mobileNavContainerExit = mobileNavContainer.appendChild(document.createElement("div").appendChild((document.createElement("p"))))
    mobileNavContainerExit.textContent = "X";


    let mobileMainNavigation = document.createElement("nav"); 
    mobileMainNavigation.setAttribute("class", "mobileMainNavigation");

    let mobileMainNavigationUL = mobileMainNavigation.appendChild(document.createElement("div").appendChild(document.createElement("ul")));
    
    let mobileLinkOne = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkOne.textContent = "Home"; 
    
    let mobileLinkTwo = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkTwo.textContent = "Menu"; 

    let mobileLinkThree = mobileMainNavigationUL.appendChild(document.createElement("li"));
    mobileLinkThree.textContent = "Contact"; 


    let desktopMainNavigation = document.createElement("div"); 
    desktopMainNavigation.setAttribute("id", "desktopMainNavigation");


    let desktopMainNavigationUL = desktopMainNavigation.appendChild(document.createElement("ul"));
    
    let desktopLinkOne = desktopMainNavigation.appendChild(document.createElement("li"));
    desktopLinkOne.textContent = "Home"; 
    
    let desktopLinkTwo = desktopMainNavigation.appendChild(document.createElement("li"));
    desktopLinkTwo.textContent = "Menu"; 

    let desktopLinkThree = desktopMainNavigation.appendChild(document.createElement("li"));
    desktopLinkThree.textContent = "Contact"; 

}



function pageHeader(source)
{
    let headerContentContainer = document.createElement("div");
    let headerImg = headerContentContainer.appendChild(document.createElement("HEADER").appendChild(document.createElement("img")))
    headerImg.setAttribute("src", source);
    console.log(headerContentContainer);
}








export 
{
    navigationBar, pageHeader
};
