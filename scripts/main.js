document.querySelectorAll('.speaker-card').forEach(card => {
  const activate = () => card.classList.add('active');
  const deactivate = () => card.classList.remove('active');
  const toggle = () => card.classList.toggle('active');

  card.addEventListener('mouseenter', activate);
  card.addEventListener('mouseleave', deactivate);
  card.addEventListener('click', toggle);
});
