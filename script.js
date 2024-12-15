let autoPlayInterval;

window.onload = startAutoPlay;

function startAutoPlay() {
    const container = document.querySelector('.wat-container');
    let scrollPosition = 0;
    const scrollStep = container.clientWidth / 4;

    autoPlayInterval = setInterval(() => {
        scrollPosition += scrollStep;

        if (scrollPosition >= container.scrollWidth) {
            scrollPosition = 0;
        }

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }, 3000);
}
