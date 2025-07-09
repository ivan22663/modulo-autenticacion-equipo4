function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}