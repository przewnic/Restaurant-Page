function createHome() {
    const tab = document.createElement("div");
    
    const info = document.createElement("p");
    info.innerHTML = "Dumplings - the best Dumplings in your town!";
    tab.appendChild(info);

    return tab
}

export {createHome}