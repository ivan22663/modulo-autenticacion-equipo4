function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isPasswordSecure(password) {
    // Mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

function validatePasswordStrength(password) {
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const number = document.getElementById('number');
    const special = document.getElementById('special');

    // Validar longitud
    if (password.length >= 8) {
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
    }

    // Validar mayúscula
    if (/[A-Z]/.test(password)) {
        uppercase.classList.add('valid');
    } else {
        uppercase.classList.remove('valid');
    }

    // Validar minúscula
    if (/[a-z]/.test(password)) {
        lowercase.classList.add('valid');
    } else {
        lowercase.classList.remove('valid');
    }

    // Validar número
    if (/\d/.test(password)) {
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
    }

    // Validar carácter especial
    if (/[@$!%*?&]/.test(password)) {
        special.classList.add('valid');
    } else {
        special.classList.remove('valid');
    }
}