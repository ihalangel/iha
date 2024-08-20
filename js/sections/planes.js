// Cargar el contenido de la sección de precios
document.addEventListener('DOMContentLoaded', function() {
    fetch('./../../sections/planes.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('precios-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de precios:', error));
});
