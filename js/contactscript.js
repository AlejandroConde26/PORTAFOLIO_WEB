

  function copiarTexto() {
    var texto = document.getElementById("textoCopiar").innerText;
    
    navigator.clipboard.writeText(texto).then(function() {
      var mensaje = document.getElementById("mensajeCopiado");
      mensaje.style.display = "block"; // Muestra el mensaje

      setTimeout(function() {
        mensaje.style.display = "none"; // Oculta el mensaje después de 2 segundos
      }, 2000);
    }).catch(function(err) {
      alert("Error al copiar: " + err);
    });
  }


  
// Reloj

function actualizarReloj() {
    // Cambia el valor de 'timeZone' a la zona de tu ciudad.
    const opciones = {
      timeZone: 'America/Lima', // Ejemplo: 'America/Mexico_City'
      hour: '2-digit',
      minute: '2-digit',
      hour12: true 
    };

    // Obtenemos la hora actual en la zona horaria especificada
    const horaActual = new Date().toLocaleTimeString('es-ES', opciones);

    // Mostramos la hora en el elemento con id "reloj"
    document.getElementById('reloj').textContent = horaActual;
  }

  // Actualiza la hora cada segundo
  actualizarReloj();
  setInterval(actualizarReloj, 1000);

