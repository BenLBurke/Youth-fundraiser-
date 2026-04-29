const scriptURL = 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE';
const form = document.getElementById('rsvpForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    successMessage.innerText = "Thanks! Your RSVP has been recorded.";
    form.reset();
  })
  .catch(error => {
    successMessage.innerText = "Error submitting. Try again.";
  });
});
