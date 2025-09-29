// Función principal que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada - Iniciando JavaScript");
    
    // Actualizar año actual
    const currentYear = new Date();
    document.getElementById("currentyear").textContent = currentYear.getFullYear();
    
    // Actualizar última modificación
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    // Configurar navegación
    setupNavigation();
    
    // Inicializar con todos los templos
    displayTemples('home');
});

// Array de objetos de templos - CON NOMBRES REALES Y EXTENSIONES CORRECTAS
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-temple.jpeg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-temple.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-temple.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/peru-temple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/cdmx-temple.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "images/manti-temple.jpg" // Usar manti como placeholder
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "images/morelos-hor.jpg" // Usar morelos como placeholder
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "images/reynosa-temple.jpg" // Usar reynosa como placeholder
    }
];

// Función para crear una tarjeta de templo
function createTempleCard(temple) {
    console.log("Intentando cargar imagen:", temple.imageUrl);
    
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-image" loading="lazy"
             onerror="console.error('ERROR: No se pudo cargar la imagen: ${temple.imageUrl}')">
        <div class="temple-info"><strong>Ubicación:</strong> ${temple.location}</div>
        <div class="temple-info"><strong>Dedicado:</strong> ${temple.dedicated}</div>
        <div class="temple-info"><strong>Área:</strong> ${temple.area.toLocaleString()} sq ft</div>
    `;
    
    return card;
}

// Función para mostrar templos según el filtro
function displayTemples(filter = 'home') {
    const container = document.getElementById('temple-container');
    if (!container) {
        console.error("ERROR: No se encontró el contenedor con id 'temple-container'");
        return;
    }
    
    container.innerHTML = '';
    
    let filteredTemples = temples;
    
    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        // 'home' muestra todos los templos
    }
    
    if (filteredTemples.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron templos que coincidan con el filtro seleccionado.</p>';
        return;
    }
    
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

// Función para manejar la navegación y filtros
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover clase active de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Agregar clase active al enlace clickeado
            link.classList.add('active');
            
            // Obtener el filtro del atributo data-filter
            const filter = link.dataset.filter;
            
            // Mostrar templos según el filtro
            displayTemples(filter);
        });
    });
}