document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessages = '';

    if (name === '' || email === '' || message === '') {
        errorMessages += 'Por favor preencha todos os campos.\n';
    }

    if (!isValidEmail(email)) {
        errorMessages += 'Por favor insira um endereço de e-mail válido.\n';
    }

    if (errorMessages !== '') {
        event.preventDefault();
        document.getElementById('errorMessages').textContent = errorMessages;
    }
});

function isValidEmail(email) {    
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}