import {emailSection} from './homePage.js'



/**
 * Renders the elements for the menu page
 */

function renderMenuPage()
{
    const CONTENT = document.querySelector(".content");

    // Clears previous content
    while(CONTENT.lastChild)
    {
        CONTENT.lastChild.remove();
    }

    // adds menu
    CONTENT.appendChild(menuContent());
    CONTENT.appendChild(emailSection());
}


/**
 * 
 * Creates the elements for one item for sale
 * 
 * @param {*} item Name of the item for sale
 * @param {*} itemPrice price of the item 
 */
function menuItemCreator(item, itemPrice)
{
    let menuItemContainer = document.createElement("div"); 
    menuItemContainer.setAttribute("class", "menuItem");

    let menuItemName = document.createElement("div");
    menuItemContainer.appendChild(menuItemName);

    let menuItemPrice = document.createElement("div");
    menuItemContainer.appendChild(menuItemPrice);

    menuItemName.textContent = item; 
    menuItemPrice.textContent = itemPrice;

    return menuItemContainer;
}


/**
 * 
 * Populate the menu with different items for sale 
 * 
 */

function menuContent()
{

    let MenuItemAndPrice = 
    {
        "Cheese Pizza": "$14.00", 
        "Pepperoni Pizza": "$15.00", 
        "Ham Pizza": "$15.00", 
        "Meat Pizza": "$18.00", 
        "BBQ Chicken Pizza": "$20.00", 
        "Hotdog": "$3.00", 
        "chicken Fingers": "$7.00", 
        "Hamburger": "$5.00", 
    }


    let resturantMenuContainer = document.createElement("div"); 
    resturantMenuContainer.setAttribute("id", "resturantMenuContainer");

    let resturantMenuContainerSection = document.createElement("SECTION"); 
    resturantMenuContainer.appendChild(resturantMenuContainerSection); 

    let resturantMenuContainerHeader = document.createElement("HEADER"); 
    resturantMenuContainerHeader.setAttribute("class", "mainContentHeader");
    resturantMenuContainer.appendChild(resturantMenuContainerHeader);

    resturantMenuContainerSection.appendChild(resturantMenuContainerHeader);

    let resturantMenuContainerHeaderH1 = document.createElement("h1"); 
    resturantMenuContainerHeaderH1.textContent = "Menu";
    resturantMenuContainerHeader.appendChild(resturantMenuContainerHeaderH1);


    let mainMenuContentContainer = document.createElement("div"); 
    mainMenuContentContainer.setAttribute("class", "mainMenuContentContainer");
    resturantMenuContainerSection.appendChild(mainMenuContentContainer);

    

    const entries = Object.entries(MenuItemAndPrice);


    for (const [item, price] of entries)
    {
        mainMenuContentContainer.appendChild(menuItemCreator(item, price));
    }

    return resturantMenuContainer;
}



export {renderMenuPage};