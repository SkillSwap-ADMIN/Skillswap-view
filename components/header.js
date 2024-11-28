// Create and insert the header HTML
function createHeader() {
    const headerHTML = `
        <div class="nav-container">
            <a href="../index.html" class="logo">
                <img src="../pics/logo.png" alt="SkillSwap Logo">
                SKILLSWAP
            </a>
            <div class="nav-links">
                <a href="../index.html">Home</a>
                <a href="../service.html">Services</a>
                <a href="../about.html">About</a>
                <a href="../contact.html">Contact</a>
                <div class="user-profile-nav">
                    <img src="../pics/default-avatar.png" alt="Profile" class="profile-pic">
                    <div class="user-dropdown">
                        <span class="username" id="currentUsername">Loading...</span>
                        <button class="logout-btn" onclick="logout()">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Insert the header HTML
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Update username
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        document.getElementById('currentUsername').textContent = currentUser;
    }
}

// Create and insert the profile/logout section
function addProfileSection() {
    // Find the existing nav-links div
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Create profile section HTML
    const profileHTML = `
        <div class="user-profile-nav">
            <img src="../pics/default-avatar.png" alt="Profile" class="profile-pic">
            <div class="user-dropdown">
                <span class="username" id="currentUsername">${localStorage.getItem('currentUser') || 'User'}</span>
                <button class="logout-btn" onclick="logout()">Logout</button>
            </div>
        </div>
    `;

    // Add styles
    const styles = `
        <style>
            .user-profile-nav {
                position: relative;
                display: flex;
                align-items: center;
                margin-left: 20px;
            }

            .profile-pic {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                cursor: pointer;
            }

            .user-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                padding: 10px;
                display: none;
                min-width: 150px;
                z-index: 1000;
            }

            .user-profile-nav:hover .user-dropdown {
                display: block;
            }

            .username {
                display: block;
                padding: 5px;
                color: #666;
                border-bottom: 1px solid #eee;
                margin-bottom: 5px;
            }

            .logout-btn {
                width: 100%;
                padding: 8px;
                background: #ff4444;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .logout-btn:hover {
                background: #cc0000;
            }
        </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML('beforeend', styles);

    // Add profile section to nav-links
    navLinks.insertAdjacentHTML('beforeend', profileHTML);
}

// Function to handle logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userIdentifier');
        window.location.href = '../index.html';
    }
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    addProfileSection();
});

// Make logout function globally available
window.logout = logout; 