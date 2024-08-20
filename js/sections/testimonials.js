// Cargar el contenido de la sección de testimonios
document.addEventListener('DOMContentLoaded', function() {
    fetch('./../../sections/testimonials.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('testimonios-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de testimonios:', error));
});
