let currentSlide = 0;
function moveCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    if (!track || slides.length === 0) return;
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function filterCatalog(category, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
    document.querySelectorAll('.product-item').forEach(item => {
        if (category === 'todos' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}