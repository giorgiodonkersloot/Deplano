const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  
  if (usernameValue === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  
  if (passwordValue === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  
  if (usernameValue !== '' && passwordValue !== '') {
    alert('Logged in successfully!');
    form.reset();
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const errorText = formControl.querySelector('.error-text');
  errorText.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

username.addEventListener('focus', () => {
  const formControl = username.parentElement;
  formControl.classList.remove('error');
});

password.addEventListener('focus', () => {
  const formControl = password.parentElement;
  formControl.classList.remove('error');
});