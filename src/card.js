/*
  Author: przewnic
  Project: Restaurant-Page 
*/
// Card creator

function createCard(imgSrc, imgAlt, text, cardClass) {
    const card = document.createElement("div");
    card.classList.add(cardClass);

    const cardImg = document.createElement("img");
    cardImg.src = imgSrc;
    cardImg.alt = imgAlt;
    card.appendChild(cardImg);

    const cardDescription = document.createElement("div");
    const cardText = document.createElement("p");
    cardText.innerHTML = text;
    cardDescription.appendChild(cardText);
    card.appendChild(cardDescription);

    return card
}

export {createCard}
