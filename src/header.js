/*
  Author: przewnic
  Project: Restaurant-Page 
*/
function createHeader() {
    const header = document.createElement("header");

    const logo = document.createElement("h1");
    logo.innerHTML = "Dumplings";
    header.appendChild(logo);

    const nav = document.createElement("nav");
    nav.appendChild(createTabButton("Home", true));
    nav.appendChild(createTabButton("Menu"));
    nav.appendChild(createTabButton("Contact"));

    header.appendChild(nav);

    return header;
}


function createTabButton(name, active=false) {
    const tab = document.createElement("button");
    tab.innerHTML = name;
    tab.id = name;
    tab.classList.add("nav-button");
    if (active) {
      tab.classList.add("active");
    }
    return tab;
}


export {createHeader}
