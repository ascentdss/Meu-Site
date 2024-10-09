// Inicializa o carrossel
let index = 0;
const items = document.querySelectorAll('.image-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalItems; // Incrementa o índice, volta ao início se necessário
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems; // Decrementa o índice, vai para o final se necessário
    updateCarousel();
});

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -index * 300; // Ajusta a posição com base no índice
    carousel.style.transform = `translateX(${offset}px)`; // Move o carrossel
}
