// login.js
// Hardcoded user data
let users = [
    { username: 'mert', password: '1234' },
    { username: 'ivan', password: '4321' }
];

// Function to handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match any user
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Успешно влизане!');
        window.location.href="../pages/index.html"
    } else {
        alert('Грешно потребителско име или парола');
    }
}

// Function to handle signup
function signup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        alert('Потребителското име вече съществува.');
        return;
    }

    // Add the new user to the list of users
    users.push({ username, password });
    alert('Успешна регистрация!');
    window.location.href="../pages/login.html"
}

// Determine the current page and attach appropriate event listener
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', signup);
} else {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
}
