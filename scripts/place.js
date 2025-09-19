document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    document.getElementById('lastModified').textContent = "Última modificación: " + lastModified.toLocaleDateString('es-MX', options);
    
    calculateAndDisplayWindChill();
});

function calculateAndDisplayWindChill() {

    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    
    const windChillElement = document.getElementById('wind-chill');
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

function calculateWindChill(temp, windSpeed) {
    const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
    
    return Math.round(windChill * 10) / 10;
}