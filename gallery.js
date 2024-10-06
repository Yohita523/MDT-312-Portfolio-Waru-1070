window.onload = function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = document.querySelectorAll('.gallery img');
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateGallery();
    });

    document.getElementById('prev').addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateGallery();
    });

    function updateGallery() {
        const offset = -index * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }
};
