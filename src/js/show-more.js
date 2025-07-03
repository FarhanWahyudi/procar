const showMoreBtn = document.getElementById("show-more-btn");
const moreContent = document.querySelectorAll(".more-content");

showMoreBtn.addEventListener('click', () => {
    let isAnyHidden = false;

    moreContent.forEach((content) => {
        if (content.classList.contains("hidden")) {
            isAnyHidden = true;
            content.classList.remove("hidden");
            content.classList.add("flex");
            setTimeout(() => {
                content.classList.remove('-translate-y-full', 'opacity-0');
                content.classList.add('translate-y-0', 'opacity-100');
            }, 300);
        } else {
            content.classList.remove('translate-y-0', 'opacity-100');
            content.classList.add('-translate-y-full', 'opacity-0');
            setTimeout(() => {
                content.classList.add("hidden");
                content.classList.remove("flex");
            }, 300);
        }
    })

    showMoreBtn.textContent = isAnyHidden ? "Tampilkan Sedikit" : "Lihat Selengkapnya";
});