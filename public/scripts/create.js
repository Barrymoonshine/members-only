const createMessageForm = document.querySelector('.create-message-form');
const messageError = document.querySelector('.message-error');
const errorMessages = document.querySelectorAll('.errors');

createMessageForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formValues = {};

    Array.from(createMessageForm.elements).forEach((el) => {
      // Ensures no null values are added to the formValues object
      if (el.getAttribute('name')) {
        formValues[el.getAttribute('name')] = el.value;
      }
    });

    const response = await fetch('/message/create', {
      method: 'POST',
      body: JSON.stringify({
        ...formValues,
        username: e.target.dataset.doc,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirect;
    } else {
      Array.from(errorMessages).forEach((msg) => {
        msg.textContent = '';
      });
      // Account for multiple erors
      if (Array.isArray(data)) {
        data.forEach((err) => {
          const el = document.querySelector(`.${err.path}-error`);
          el.textContent = err.msg;
        });
      } else {
        messageError.textContent = data;
      }
    }
  } catch (err) {
    messageError.textContent = err;
  }
});
