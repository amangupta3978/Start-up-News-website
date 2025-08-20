document.addEventListener("DOMContentLoaded", () => {
    // Share link alerts
    const shareLinks = document.querySelectorAll(".share-link");
    shareLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const platform = link.getAttribute("data-platform");
            alert(`This would share the article on ${platform}.`);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }
});
