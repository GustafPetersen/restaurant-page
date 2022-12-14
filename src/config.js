// create title function "component"
// return title in a div
import loadHomePage from './home';

const createHeader = () => {
    const createHeader = document.createElement("header");
    const headerContent = document.createElement("h1");
    createHeader.appendChild(headerContent);
    headerContent.innerText = "A Place by the Sea";
    createHeader.appendChild(headerContent);
    return createHeader;
}

const navButtons = () => {
    const navBar = document.createElement("div");
    navBar.className = "navbar";

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("homeButton");
    homeBtn.textContent = "Home"
    homeBtn.addEventListener('click', (e) => {
        return loadHomePage();
    })

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menuButton");
    menuBtn.textContent = "Menu"

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("contactButton");
    contactBtn.textContent = "Contact"

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    
    return navBar;
}

const backgroundImage = () => {
    const myImage = new Image();
    myImage.src = "./assets/lighthouse.jpg"
    return myImage
}

const exportPageContents = () => {
    const mainContent = document.querySelector("#content")
    mainContent.appendChild(createHeader());
    mainContent.appendChild(navButtons());
    mainContent.appendChild(backgroundImage())
}


export { exportPageContents }

