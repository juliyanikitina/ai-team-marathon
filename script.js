// Set only after the payment link and sales terms are approved.
const PAYMENT_URL = '';
const dialog = document.querySelector('#signup-dialog');
document.querySelector('#enroll').addEventListener('click', () => {
  if (PAYMENT_URL) {
    const destination = new URL(PAYMENT_URL);
    if (destination.protocol === 'https:') window.location.assign(destination.href);
  } else dialog.showModal();
});
document.querySelectorAll('.close, .close-dialog').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});