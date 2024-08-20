// Cargar el contenido de la sección de precios
document.addEventListener('DOMContentLoaded', function() {
    fetch('./../../sections/hero.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de precios:', error));
});
