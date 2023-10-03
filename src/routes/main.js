document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vehicleForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const apiURL = 'http://localhost:3000/vehicles/POST'; // Reemplaza con la URL de tu API
        const formData = new FormData(form);

        fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
            alert('Datos insertados con éxito');
            form.reset();
        })
        .catch(error => {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error('Error al insertar datos:', error);
        });
    });
});
