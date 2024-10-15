const faqElements = document.querySelectorAll(".faq");

faqElements.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});