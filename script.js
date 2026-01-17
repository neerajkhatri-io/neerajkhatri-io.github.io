function toggleCard(header) {
  const card = header.closest(".card");
  const allCards = document.querySelectorAll(".card.expandable");

  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove("open");
      const t = c.querySelector(".toggle-text");
      if (t) t.textContent = "Open full case →";
    }
  });

  card.classList.toggle("open");

  const toggle = header.querySelector(".toggle-text");
  toggle.textContent = card.classList.contains("open")
    ? "Collapse ↑"
    : "Open full case →";
}
