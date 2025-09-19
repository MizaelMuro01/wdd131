document.addEventListener('DOMContentLoaded', function() {
    // Actualizar el año actual en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    // Actualizar la fecha de última modificación
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    document.getElementById('lastModified').textContent = "Última modificación: " + lastModified.toLocaleDateString('es-MX', options);
    
    // Calcular y mostrar el windchill
    calculateAndDisplayWindChill();
});

function calculateAndDisplayWindChill() {
    // Obtener temperatura y velocidad del viento
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    
    // Elemento donde mostraremos el resultado
    const windChillElement = document.getElementById('wind-chill');
    
    // Verificar si cumple las condiciones para calcular windchill
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

function calculateWindChill(temp, windSpeed) {
    // Fórmula para calcular windchill en °C
    // windChill = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
    
    // Redondear a un decimal
    return Math.round(windChill * 10) / 10;
}