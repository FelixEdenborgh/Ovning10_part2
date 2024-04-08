document.getElementById("drawCard").addEventListener("click", function () {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => {
      const card = data.cards[0]; // Hämtar första kortet från svaret
      const cardContainer = document.getElementById("cardContainer");

      // Rensa tidigare kort
      cardContainer.innerHTML = "";

      // Skapa och lägg till nytt kort
      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", card.image);
      cardImage.setAttribute("alt", `Kort: ${card.value} av ${card.suit}`);
      cardContainer.appendChild(cardImage);
    })
    .catch((error) => console.error("Fel vid anrop till API", error));
});
