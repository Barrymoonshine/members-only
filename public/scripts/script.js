const signUpForm = document.querySelector('.sign-up-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('.confirm-password-error ');

signUpForm.addEventListener('submit', (e) => {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    e.preventDefault();
  } else {
    // Do nothing and submit the form
  }
});
