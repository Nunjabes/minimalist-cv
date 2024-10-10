document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío real del formulario
    document.getElementById('form-response').style.display = 'block'; // Muestra el mensaje de éxito
    document.getElementById('contact-form').reset(); // Resetea el formulario
  });
  