function checkPassword(input) {
    if (input.value !== document.getElementById('password').value) {
      input.setCustomValidity('Passwords must match');
    } else {
      input.setCustomValidity('');
    }
}