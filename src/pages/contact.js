import { createCard } from "../card";
import dish_1 from "../../static/img/contact/pexels-anna-tarazevich-7287725.jpg";
import dish_2 from "../../static/img/contact/pexels-anna-tarazevich-7287728.jpg";


function createContact() {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add("contact-tab");

    const cardText_1 = "Call us today and order your favorite Dumplings!";
    const card_1 = createCard(dish_1, "Dumplings", cardText_1, "contact-card");
    tab.appendChild(card_1);

    const cardText_2 = "Come to our Restaurant!";
    const card_2 = createCard(dish_2, "Dumplings", cardText_2, "contact-card");
    tab.appendChild(card_2);

    return tab
}

export {createContact}
