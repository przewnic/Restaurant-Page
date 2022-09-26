import { createHeader } from "./header";
import { createFooter } from "./footer"
import { createHome } from "./pages/home";
import { createMenu } from "./pages/menu";
import { createContact } from "./pages/contact";

// import "../static/styles/style.css"  // Styles with loader
const content = document.getElementById("content");

content.appendChild(createHeader());
// main - dynamically rendered pages
const main = document.createElement("main");
content.appendChild(main);
content.appendChild(createFooter());

const navButtons = document.querySelectorAll(".nav-button");

for (let button of navButtons) {
    button.addEventListener("click", (event) => {renderMain(event, main);});
}


function renderMain(event, tabContainer) {
    if (tabContainer.firstChild) {
        tabContainer.removeChild(tabContainer.firstChild);
    }

    switch(event.target.id) {
        case "Home":
            tabContainer.appendChild(createHome());
            break;
        case "Menu":
            tabContainer.appendChild(createMenu());
            break;
        case "Contact":
            tabContainer.appendChild(createContact());
            break;
    }
}
