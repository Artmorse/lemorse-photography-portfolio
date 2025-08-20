document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".carousel").forEach(carousel => {
        const gliderEl = carousel.querySelector(".glider");
        if (!gliderEl) return;
        const prev = carousel.querySelector(".glider-prev");
        const next = carousel.querySelector(".glider-next");
        const dots = carousel.querySelector(".dots");

        new Glider(gliderEl, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: dots || undefined,
            arrows: {
                prev: prev || undefined,
                next: next || undefined
            }
        });
    });
});