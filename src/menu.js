// import {navigationBar} from './mainPage.js';



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




function menuContent()
{
    const  MENU_ITEM_AMOUNT = 8; 

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



export {menuItemCreator, menuContent};