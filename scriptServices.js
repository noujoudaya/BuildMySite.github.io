     
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".image-container, .text-container");

    const revealOnScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.opacity = 1;
                el.style.transform = "translateX(0)";
            }
        });
    };

  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
