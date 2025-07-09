document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    
    const MAX_ATTEMPTS = 3;
    const BLOCK_TIME = 5 * 60 * 1000; 
    let attempts = 0;
    let blockedUntil = 0;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const now = new Date().getTime();
        if (now < blockedUntil) {
            const remainingTime = Math.ceil((blockedUntil - now) / 60000);
            alert(`Demasiados intentos fallidos. Intente nuevamente en ${remainingTime} minutos.`);
            return;
        }

        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

       
        if (!email) {
            emailError.textContent = 'El correo es requerido';
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Ingrese un correo válido';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        
        if (!password) {
            passwordError.textContent = 'La contraseña es requerida';
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) return;

        
        const user = authenticateUser(email, password);
        
        if (user) {
            
            attempts = 0;
            
            
            createSession(user);
            
            
            window.location.href = 'dashboard.html';
        } else {
            attempts++;
            
            if (attempts >= MAX_ATTEMPTS) {
                blockedUntil = now + BLOCK_TIME;
                alert(`Demasiados intentos fallidos. Su cuenta ha sido bloqueada temporalmente.`);
            } else {
                alert('Correo o contraseña incorrectos. Intente nuevamente.');
            }
        }
    });

    function authenticateUser(email, password) {
        const users = getUsers();
        const user = users.find(u => u.email === email);
        
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    function createSession(user) {
        
        const token = btoa(JSON.stringify({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            expires: new Date().getTime() + (24 * 60 * 60 * 1000) 
        }));
        
        
        localStorage.setItem('authToken', token);
    }
});