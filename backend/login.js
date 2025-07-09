const form = document.getElementById("loginForm");
const errorDisplay = document.getElementById("loginError");

let attempts = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    errorDisplay.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (attempts >= 3) {
    errorDisplay.textContent = "Cuenta bloqueada por intentos fallidos.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email);

  if (!user || user.password !== password) {
    attempts++;
    errorDisplay.textContent = "Correo o contraseña incorrectos.";
    return;
  }

  localStorage.setItem("sessionToken", JSON.stringify({ email, token: Date.now() }));
  window.location.href = "dashboard.html";
});
