function createContact() {
    const tab = document.createElement("div");
    
    const info = document.createElement("p");
    info.innerHTML = "Contact us now\n Come to our Restaurant";
    tab.appendChild(info);

    return tab
}

export {createContact}
