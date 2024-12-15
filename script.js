let autoPlayInterval;

// เริ่ม Auto Play เมื่อโหลดหน้าเว็บ
window.onload = startAutoPlay;

// ฟังก์ชันเริ่ม Auto Play
function startAutoPlay() {
    const container = document.querySelector('.wat-container');
    let scrollPosition = 0;
    const scrollStep = container.clientWidth / 4; // เลื่อนไปทีละ 4 ไอเท็ม

    autoPlayInterval = setInterval(() => {
        scrollPosition += scrollStep;

        // ถ้าเลื่อนไปเกิน Scroll ความกว้างทั้งหมด ให้กลับมาเริ่มต้น
        if (scrollPosition >= container.scrollWidth) {
            scrollPosition = 0;
        }

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }, 3000); // Auto Play ทุก 3 วินาที
}
