const dynamicRole = document.getElementById("dynamic-role");
const roles = ["Software Developer", "UI/UX Designer", "Tech Enthusiast"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100; // Adjust typing speed
let deletingSpeed = 50; // Adjust deleting speed
let isDeleting = false;

function typeRole() {
    if (isDeleting) {
        // Delete the current text
        dynamicRole.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Add a character to the text
        dynamicRole.textContent = roles[currentRoleIndex].substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    // If the full role name is typed out, start deleting it
    if (!isDeleting && currentCharIndex === roles[currentRoleIndex].length) {
        setTimeout(() => {
            isDeleting = true;
            setTimeout(typeRole, 500); // Wait before starting deletion
        }, 1000); // Wait for a while before starting the deletion
    } else if (isDeleting && currentCharIndex === 0) {
        // After deleting, move to the next role
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        setTimeout(typeRole, 200); // Start typing the next role
    } else {
        // Continue typing/deleting
        setTimeout(typeRole, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start typing the first role
typeRole();