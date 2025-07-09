# Módulo de Autenticación – Equipo 3

## Objetivo del Módulo

Desarrollar un módulo que permita a los usuarios registrarse, iniciar sesión y acceder a un dashboard personalizado, implementado bajo principios de desarrollo ágil, clean code, control de versiones con Git y planificación con GitHub Projects.

---

## Historias de Usuario (completas y por módulos)

### Módulo 1: Registro de Usuarios

- **HU1:** Como nuevo usuario quiero registrarme ingresando mis datos (nombre, correo, contraseña), para poder crear una cuenta en la plataforma.
- **HU2:** Como usuario quiero recibir advertencias si ingreso una contraseña con campos vacíos o con los caracteres insufisientes , para asegurar que mis datos son válidos.
- **HU3:** Como sistema, quiero evitar el registro de correos repetidos para garantizar la unicidad de cada cuenta de usuario.

### Módulo 2: Inicio de Sesión

- **HU4:** Como usuario registrado quiero iniciar sesión con mi correo y contraseña para acceder a mi cuenta personal.
- **HU5:** Como usuario quiero recibir un mensaje claro si mis credenciales no son válidas, para poder corregir el error.
- **HU6:** Como sistema, quiero generar un token seguro al autenticar al usuario, para proteger el acceso a las rutas privadas.

### Módulo 3: Dashboard

- **HU7:** Como usuario autenticado quiero ver un dashboard personalizado al iniciar sesión para acceder a mis funciones rápidamente.
- **HU8:** Como administrador quiero asegurar que el dashboard solo esté disponible para usuarios autenticados para proteger la información.
- **HU9:** Como sistema, quiero verificar la validez del token en cada acceso al dashboard, para impedir accesos no autorizados.

---

## Planificación Ágil – GitHub Projects

[Acceder al tablero de GitHub Projects](https://github.com/users/ivan22663/projects/1)

**Columnas del tablero:**

- Pendiente
- En proceso
- En revisión
- Finalizado

** Campos personalizados:**

- Tipo de tarea (análisis, desarrollo, pruebas, documentación)
- Complejidad (alta, media, baja)
- Módulo (Registro, Login, Dashboard)
- Tiempo estimado (horas)

---

## Integrantes del equipo

| Nombre de usuario GitHub | Rol asignado                     |
|--------------------------|----------------------------------|
| @ivan22663               | Líder de proyecto / Documentación|
| @felipelandinez          | QA / Interfaz  / Validaciones    |
| @cuadros11               | Testing /  Backend               |

---

## Estado del Proyecto

| Tarea                                     | Estado       |
|-------------------------------------------|--------------|
| Formulario de registro                    | ✅ Completado |
| Validación de campos                      | ✅ Completado |
| Registro en MongoDB                       | ✅ Completado |
| Formulario de login                       | ✅ Completado |
| Lógica y seguridad con JWT                | ✅ Completado |
| Middleware de autenticación               | ✅ Completado |
| Dashboard y protección de ruta            | 🟡 En proceso |
| Pruebas y documentación final             | 🟡 En proceso |

---

