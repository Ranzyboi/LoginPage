var isLoginForm = true;
document.getElementById('toggle-form').addEventListener('click', function() {
    isLoginForm = !isLoginForm;
    document.getElementById('form').action = isLoginForm ? '/login' : '/create-account';
    document.getElementById('form-title').textContent = isLoginForm ? 'Login' : 'Create Account';
    this.textContent = isLoginForm ? 'Create Account' : 'Login';
});