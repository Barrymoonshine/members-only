const joinUsForm = document.querySelector('.join-us-form');
const riddleError = document.querySelector('.riddle-error');

joinUsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const riddleInputValue = document.getElementById('riddle').value;
  if (riddleInputValue.toLowerCase() === 'friend') {
    try {
      const response = await fetch('/user/join-us', {
        method: 'PUT',
        body: JSON.stringify({
          riddle: riddleInputValue,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.redirect;
      } else {
        riddleError.textContent = data[0].msg;
      }
    } catch (err) {
      riddleError.textContent = err;
    }
  } else {
    riddleError.textContent = 'You shall not pass!';
  }
});
