const joinUsForm = document.querySelector('.join-us-form');
const riddleInput = document.getElementById('riddle');
const riddleError = document.querySelectorAll('.riddle-error');

joinUsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (riddleInput === 'friend' || riddleInput === 'Friend') {
    try {
      const response = await fetch('/user/join-us', {
        method: 'PUT',
        body: JSON.stringify({
          riddle: riddleInput.value,
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
      console.log(err);
    }
  } else {
    riddleError.textContent = 'You shall not pass!';
  }
});
