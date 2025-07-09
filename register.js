document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    
    // Elementos de error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');
    
    // Validación en tiempo real de contraseña
    passwordInput.addEventListener('input', () => {
        validatePasswordStrength(passwordInput.value);
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsAccepted = termsCheckbox.checked;
        
        let isValid = true;

        // Validar nombre
        if (!name) {
            nameError.textContent = 'El nombre es requerido';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validar email
        if (!email) {
            emailError.textContent = 'El correo es requerido';
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Ingrese un correo válido';
            isValid = false;
        } else if (isEmailRegistered(email)) {
            emailError.textContent = 'Este correo ya está registrado';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validar contraseña
        if (!password) {
            passwordError.textContent = 'La contraseña es requerida';
            isValid = false;
        } else if (!isPasswordSecure(password)) {
            passwordError.textContent = 'La contraseña no cumple los requisitos';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Validar confirmación de contraseña
        if (!confirmPassword) {
            confirmPasswordError.textContent = 'Confirme su contraseña';
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Las contraseñas no coinciden';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        // Validar términos
        if (!termsAccepted) {
            termsError.textContent = 'Debe aceptar los términos y condiciones';
            isValid = false;
        } else {
            termsError.textContent = '';
        }

        // Validar reCAPTCHA (simulado)
        if (!validateRecaptcha()) {
            alert('Por favor complete el reCAPTCHA');
            isValid = false;
        }

        if (!isValid) return;

        // Registrar usuario
        registerUser({
            id: generateId(),
            name,
            email,
            password,
            role: 'user',
            createdAt: new Date().toISOString()
        });

        alert('Registro exitoso. Será redirigido al login.');
        window.location.href = 'login.html';
    });

    // 🔧 FUNCIONES AUXILIARES

    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    function isEmailRegistered(email) {
        const users = getUsers();
        return users.some(user => user.email === email);
    }

    function registerUser(user) {
        const users = getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        console.log("Usuarios guardados:", users); // DEBUG opcional
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isPasswordSecure(password) {
        // Al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return re.test(password);
    }

    function validatePasswordStrength(password) {
        // Puedes agregar una barra o indicador visual si lo deseas
        // Este es solo un placeholder
        console.log("Evaluando fuerza de la contraseña...");
    }

    function validateRecaptcha() {
        // Simulación
        return true;
    }

    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
});

