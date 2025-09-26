let index = 0;

const grid = document.querySelector(".grid");
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");

const cardWidth = 400; 



// functie om de positie te updaten
function updateCarousel() {
  const carouselWidth = document.querySelector(".carousel").offsetWidth;
const cardWidth = cards[0].offsetWidth + 20; // 20 = marge links+rechts

  // bereken offset zodat de actieve kaart gecentreerd staat
  const offset = (carouselWidth - cardWidth) / 2;
  grid.style.transform = `translateX(${offset - index * cardWidth}px)`;

  cards.forEach((card, i) => {
    card.classList.remove("active", "side", "inactive");
    if (i === index) {
      card.classList.add("active");
    } else if (i === index - 1 || i === index + 1) {
      card.classList.add("side");
    } else {
      card.classList.add("inactive");
    }
  });
}

// volgende knop
nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    updateCarousel();
  }
});

// terug knop
backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// eerste keer aanroepen zodat het startbeeld goed staat
updateCarousel();
