const createMessageForm = document.querySelector('.create-message-form');
const messageError = document.querySelector('.message-error');

createMessageForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const messageValue = document.getElementById('message').value;

  try {
    const response = await fetch('/message/create', {
      method: 'POST',
      body: JSON.stringify({
        post: messageValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirect;
    } else {
      messageError.textContent = data[0].msg;
    }
  } catch (err) {
    console.log(err);
  }
});
