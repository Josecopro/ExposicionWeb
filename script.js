const buttons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    buttons.forEach((btn) => btn.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(targetId)?.classList.add('active');
  });
});
