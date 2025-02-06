const images = [
  "images/car.png",
  "images/cat.png",
  "images/cola.png",
  "images/corn.png",
  "images/dog.png",
  "images/donut.png",
  "images/fries.png",
  "images/hamburger.png",
  "images/penguine.png",
  "images/pizza.png",
  "images/pumpkin.png",
  "images/santa.png",
];
const cards = [...images, ...images];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledCards = shuffle(cards);

const board = document.getElementById("gameBoard");

shuffledCards.forEach((src) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  const img = document.createElement("img");
  img.src = src;
  cardDiv.appendChild(img);
  board.appendChild(cardDiv);
});
let firstCard = null;
let secondCard = null;
let lockBoard = false;
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    if (lockBoard || card.classList.contains("flipped")) return;
    card.classList.add("flipped");
    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;
    }

    const firstImg = firstCard.querySelector("img").src;
    const secondImg = secondCard.querySelector("img").src;
    if (firstImg === secondImg) {
      reset();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        reset();
      }, 1000);
    }
  });
});
function reset() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
