const createMessageForm = document.querySelector('.create-message-form');
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

      data.forEach((err) => {
        const el = document.querySelector(`.${err.path}-error`);
        el.textContent = err.msg;
      });
    }
  } catch (err) {
    console.log(err);
  }
});
