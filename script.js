document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll(".review");
    let currentReview = 0;

    function mostrarSiguienteReview() {
        reviews.forEach(review => review.classList.remove("visible"));
        reviews[currentReview].classList.add("visible");

        currentReview = (currentReview + 1) % reviews.length;
    }

    mostrarSiguienteReview();  // Mostrar la primera reseña
    setInterval(mostrarSiguienteReview, 3000);  // Cambiar de reseña cada 3 segundos
});