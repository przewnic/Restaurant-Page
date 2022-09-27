import fried_d from "../../static/img/pexels-anna-tarazevich-7287719.jpg";
import spinach_d from "../../static/img/pexels-cats-coming-750941.jpg"
import soup_d from "../../static/img/pexels-cats-coming-955137.jpg";
import soucey_d from "../../static/img/pexels-cats-coming-1385185.jpg";
import parsley_d from "../../static/img/pexels-cottonbro-3296903.jpg";
import pierogis_d from "../../static/img/pexels-jamie-saw-13055484.jpg";
import round_d from "../../static/img/pexels-momo-king-5409015.jpg";


function createMenu() {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add("menu-tab");

    tab.appendChild(createCard("Fried Dumplings", fried_d));
    tab.appendChild(createCard("Spinach Dumplings", spinach_d));
    tab.appendChild(createCard("Soup Dumplings", soup_d));
    tab.appendChild(createCard("Soucey Dumplings", soucey_d));
    tab.appendChild(createCard("Parsley Dumplings", parsley_d));
    tab.appendChild(createCard("Pierogis Dumplings", pierogis_d));
    tab.appendChild(createCard("Round Dumplings", round_d));

    return tab
}

function createCard(dishName, imgSrc) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const dishImg = document.createElement("img");
    dishImg.alt = dishName;
    dishImg.src = imgSrc;
    card.appendChild(dishImg);

    const dish = document.createElement("p");
    dish.innerHTML = dishName;
    card.appendChild(dish);

    return card
}

export {createMenu}
