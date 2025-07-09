document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión al cargar
    if (!checkAuth()) {
        window.location.href = 'index.html';
        return;
    }

    // Mostrar información del usuario
    const user = getCurrentUser();
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;

    // Configurar botón de logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    // Cargar contenido según el rol
    loadDashboardContent(user.role);
});

function checkAuth() {
    const token = localStorage.getItem('authToken');
    
    if (!token) return false;
    
    try {
        const tokenData = JSON.parse(atob(token));
        
        // Verificar expiración
        const now = new Date().getTime();
        if (now > tokenData.expires) {
            logout();
            return false;
        }
        
        return true;
    } catch (e) {
        return false;
    }
}

function getCurrentUser() {
    const token = localStorage.getItem('authToken');
    return JSON.parse(atob(token));
}

function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'index.html';
}

function loadDashboardContent(role) {
    // Cargar contenido diferente según el rol
    // Esto es un ejemplo simplificado
    const contentSection = document.querySelector('.dashboard-content');
    
    if (role === 'admin') {
        contentSection.innerHTML += `
            <div class="card">
                <h2>Herramientas de Administrador</h2>
                <p>Contenido exclusivo para administradores.</p>
            </div>
        `;
    } else {
        contentSection.innerHTML += `
            <div class="card">
                <h2>Tu Actividad</h2>
                <p>Contenido para usuarios regulares.</p>
            </div>
        `;
    }
}
