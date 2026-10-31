```javascript
// RAJ ENTERPRISES - WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Navbar shadow on scroll
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
        } else {
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.06)";
        }

    });


    // Product cards animation
    const cards = document.querySelectorAll(
        ".product-card, .benefit-card"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(function (card) {
        observer.observe(card);
    });


    // Footer current year
    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.textContent =
            "© " + new Date().getFullYear() +
            " Raj Enterprises. All Rights Reserved.";
    }


    // WhatsApp button links
    const whatsappButtons = document.querySelectorAll(
        ".contact-buttons a"
    );

    whatsappButtons.forEach(function (button) {
        button.setAttribute("target", "_blank");
        button.setAttribute("rel", "noopener");
    });


    console.log("Raj Enterprises Website Loaded Successfully!");

});
```