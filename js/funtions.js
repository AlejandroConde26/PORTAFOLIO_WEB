
function descargarPDF() {
    const enlace = document.createElement("a");
    enlace.href = "js/CV-ALEJANDRO-CONDE.pdf"; // Ruta del archivo PDF
    enlace.download = "CV-ALEJANDRO-CONDE.pdf"; // Nombre con el que se descargará el archivo
    enlace.style.display = "none"; // Ocultar el enlace en la UI
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}