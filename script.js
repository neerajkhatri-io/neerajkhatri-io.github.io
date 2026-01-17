function toggleCard(card) {
  const all = document.querySelectorAll(".card.expandable");

  all.forEach(c => {
    if (c !== card) {
      c.classList.remove("open");
      c.querySelector(".toggle").textContent = "Open full case →";
    }
  });

  const isOpen = card.classList.toggle("open");
  card.querySelector(".toggle").textContent =
    isOpen ? "Collapse ↑" : "Open full case →";
}
