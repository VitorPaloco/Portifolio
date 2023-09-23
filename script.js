document.addEventListener("DOMContentLoaded", function () {
    const openContateButton = document.getElementById("openContate");
    const wrapper = document.querySelector(".wrapper");
    const iconClose = document.querySelector(".icon-close");

    wrapper.style.display = "none";

    openContateButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        wrapper.style.display = "flex";

        setTimeout(() => {
            wrapper.style.opacity = 1;
            wrapper.style.transform = "translateY(0)";
        }, 10);
    });

    iconClose.addEventListener("click", function () {
        wrapper.style.opacity = 0;
        wrapper.style.transform = "translateY(10px)";

        setTimeout(() => {
            wrapper.style.display = "none";
        }, 300); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-top-button");

    scrollButton.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

