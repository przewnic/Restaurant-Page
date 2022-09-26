function createFooter() {
    const footer = document.createElement("footer");

    const footer_info = document.createElement("p");
    footer_info.innerHTML = "Copyright 2022";
    footer.appendChild(footer_info);

    return footer;
}

export {createFooter}
