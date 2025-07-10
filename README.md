# Módulo de Autenticación – Equipo 4

## Objetivo del Módulo

Desarrollar un módulo que permita a los usuarios registrarse, iniciar sesión y acceder a un dashboard personalizado, implementado bajo principios de desarrollo ágil, clean code

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

[Acceder al tablero de GitHub Projects](https://github.com/user-attachments/assets/788ea1e5-9b93-4b44-935b-5572ee38ece4)
)

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

| Tarea                                                            | Estado       |
|------------------------------------------------------------------|--------------|
| pruebas funcionales del registro de usuario                      |  Finalizado  |
| diseñar interfaz del formulario de registro                      |  Finalizado  |
| implementar logica de registro en backend                        |  Finalizado  |
| validar campos obligatorios y contraseña segura                  |  Finalizado  |
| guardar datos en base de datos (MongoDB)                         |  En proceso  |
| diseñar formulario de login                                      |  Finalizado  |
| implementar logica de login                                      |  Finalizado  |
| Pruebas unitarias del login                                      |  Finalizado  |
| mostrar mensaje de error al fallar login                         |  Finalizado  |
| crear middlleware  de autenticacion                              |  Finalizado  |
| mostrar datos del usuario en dashboard                           |  Finalizado  |
|validar emails duplicados en el registro                          |  Finalizado  |
| diseñar vista del dashboard                                      |  Finalizado  |
| pruebas de seguridad del dashboard                               |  Finalizado  |
| restringir acceso al dashboard solo si autenticado               |  Finalizado  |
| crear y mantener archivo README.md                               |  Finalizado  |
---

