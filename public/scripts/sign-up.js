const signUpForm = document.querySelector('.sign-up-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('.confirm-password-error ');
const errorMessages = document.querySelectorAll('.errors');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  } else {
    try {
      const adminBoolean = document.getElementById('adminCheckbox').checked;

      const formValues = {};

      Array.from(signUpForm.elements).forEach((el) => {
        // Ensures no null values are added to the formValues object
        if (el.getAttribute('name')) {
          formValues[el.getAttribute('name')] = el.value;
        }
      });

      const response = await fetch('/user/sign-up', {
        method: 'POST',
        body: JSON.stringify({
          ...formValues,
          isAdmin: adminBoolean,
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
          confirmPasswordError.textContent = data;
        }
      }
    } catch (err) {
      confirmPasswordError.textContent = err;
    }
  }
});
