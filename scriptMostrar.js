$(document).ready(function() {
    $(".toggle-text").on("click", function(event) {
        event.preventDefault();

        // Alterna la visibilidad del contenido completo
        $(".contenido-completo").slideToggle();
        
        // Cambia el texto del enlace entre "Mostrar más" y "Mostrar menos"
        if ($(this).text() === "Mostrar más") {
            $(this).text("Mostrar menos");
        } else {
            $(this).text("Mostrar más");
        }
    });
});