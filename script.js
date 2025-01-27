// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.backgroundColor = "#333";
backToTopBtn.style.color = "white";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme Toggle
const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "Toggle Theme";
themeToggleBtn.id = "themeToggle";
document.body.appendChild(themeToggleBtn);

themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.bottom = "60px";
themeToggleBtn.style.right = "20px";
themeToggleBtn.style.padding = "10px 15px";
themeToggleBtn.style.backgroundColor = "#555";
themeToggleBtn.style.color = "white";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.borderRadius = "5px";
themeToggleBtn.style.cursor = "pointer";

let isDarkMode = false;
themeToggleBtn.addEventListener("click", () => {
    if (!isDarkMode) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        themeToggleBtn.style.backgroundColor = "#fff";
        themeToggleBtn.style.color = "#222";
        isDarkMode = true;
    } else {
        document.body.style.backgroundColor = "#f4f4f9";
        document.body.style.color = "#000";
        themeToggleBtn.style.backgroundColor = "#555";
        themeToggleBtn.style.color = "#fff";
        isDarkMode = false;
    }
});

// Display greeting based on time of day
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(`Hello, ${greeting} Welcome to my portfolio!`);
}

window.onload = displayGreeting;
