document.addEventListener('DOMContentLoaded', () => {
   
    if (!checkAuth()) {
        window.location.href = 'dashboard.html';
        return;
    }

    
    const user = getCurrentUser();
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;

   
  

    
    loadDashboardContent(user.role);
});
  document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

function checkAuth() {
    const token = localStorage.getItem('authToken');
    
    if (!token) return false;
    
    try {
        const tokenData = JSON.parse(atob(token));
        
       
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
    window.location.href = 'login.html';
}

function loadDashboardContent(role) {
   
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
