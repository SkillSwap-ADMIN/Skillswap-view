// Sample user profiles - in a real application, this would come from a database
const users = [
    { username: "user1", password: "pass123" },
    { username: "user2", password: "pass456" }
    // Add more users as needed
];

function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Play success sound using Web Speech API
        const msg = new SpeechSynthesisUtterance("Login successful");
        window.speechSynthesis.speak(msg);
        
        // Store login status
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
        
        // Redirect to home page after a brief delay
        setTimeout(() => {
            window.location.href = 'index.html';  // Changed to index.html
        }, 1500);
    } else {
        alert("Invalid username or password!");
    }
}

// Check login status when page loads
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'index.html';  // Replace with your home page URL
    }
}

// Call checkLoginStatus when page loads
window.onload = checkLoginStatus; 