console.log("SCRIPT IS CONNECTED");

// ==============================
// SAY HELLO
// ==============================

const helloButton =
    document.getElementById("helloButton");

const message =
    document.getElementById("message");

helloButton.addEventListener("click", function () {
    message.textContent =
        "Thanks for visiting my portfolio! 👋";
});


// ==============================
// DARK / LIGHT MODE
// ==============================

const themeButton =
    document.getElementById("themeButton");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");
    }
});


// ==============================
// MOBILE MENU
// ==============================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

navLinks.addEventListener("click", function (event) {

    if (event.target.tagName === "A") {

        navLinks.classList.remove("show");

        menuButton.textContent = "☰";
    }
});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150) {

            currentSection =
                section.getAttribute("id");
        }
    });

    navItems.forEach(function (item) {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {

            item.classList.add("active");
        }
    });
});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements =
    document.querySelectorAll(
        ".section-title, " +
        ".section-text, " +
        ".skill-card, " +
        ".project-card, " +
        ".experience-card, " +
        ".contact-section"
    );

revealElements.forEach(function (element) {

    element.classList.add("reveal");
});


// Show elements when scrolling

window.addEventListener("scroll", function () {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");
        }
    });
});


// Run once when page loads

window.dispatchEvent(
    new Event("scroll")
);