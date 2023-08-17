const logOutButton = document.querySelector('.log-out-button');
const adminButton = document.querySelector('.admin-button');

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

if (adminButton === null) {
  // do nothing, user already has admin permissions
} else {
  adminButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/user/make-admin', {
        method: 'PUT',
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.redirect;
      }
    } catch (err) {
      console.log(err);
    }
  });
}
