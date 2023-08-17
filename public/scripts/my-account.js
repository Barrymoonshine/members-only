const logOutButton = document.querySelector('.log-out-button');

logOutButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/user/log-out', {
      method: 'POST',
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirect;
    }
  } catch (err) {
    console.log(err);
  }
});
