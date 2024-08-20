// Cargar el contenido de la sección de precios
document.addEventListener('DOMContentLoaded', function() {
    fetch('./../../sections/servicios.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('servicios-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección de precios:', error));
});
