function toggleCard(header) {
  const card = header.parentElement;
  const allCards = document.querySelectorAll(".card.expandable");

  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove("open");
      c.querySelector(".toggle-text").textContent = "Open full case →";
    }
  });

  const isOpen = card.classList.contains("open");

  card.classList.toggle("open");
  header.querySelector(".toggle-text").textContent =
    isOpen ? "Open full case →" : "Collapse ↑";
}
