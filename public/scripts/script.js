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
      const formValues = {};

      Array.from(signUpForm.elements).forEach((el) => {
        // Ensure no null values are added to the formValues object
        if (el.getAttribute('name')) {
          formValues[el.getAttribute('name')] = el.value;
        }
      });

      console.log('formValues', formValues);

      const response = await fetch('/user/sign-up', {
        method: 'POST',
        body: JSON.stringify(formValues),
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
  }
});
