const cards = document.querySelectorAll('.case-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('active');

    cards.forEach(c => c.classList.remove('active'));

    if (!isOpen) {
      card.classList.add('active');
    }
  });
});
