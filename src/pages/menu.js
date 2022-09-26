function createMenu() {
    const tab = document.createElement("div");
    
    const info = document.createElement("p");
    info.innerHTML = "Here awaits menu just for you";
    tab.appendChild(info);

    return tab
}

export {createMenu}
