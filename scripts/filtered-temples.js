// Función principal que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Página cargada - JavaScript iniciado");
    
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

// Array de objetos de templos - CON URLs QUE SÍ FUNCIONAN
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-115333-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/11-Rome-Temple-2160338.jpg"
    }
];

// Función para crear una tarjeta de templo
function createTempleCard(temple) {
    console.log(`🖼️ Creando tarjeta para: ${temple.templeName}`);
    
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-image" loading="lazy"
             onerror="console.error('❌ ERROR IMAGEN: No se pudo cargar: ${temple.imageUrl}')"
             onload="console.log('✅ IMAGEN CARGADA: ${temple.templeName}')">
        <div class="temple-info"><strong>Ubicación:</strong> ${temple.location}</div>
        <div class="temple-info"><strong>Dedicado:</strong> ${temple.dedicated}</div>
        <div class="temple-info"><strong>Área:</strong> ${temple.area.toLocaleString()} sq ft</div>
    `;
    
    return card;
}

// Función para mostrar templos según el filtro
function displayTemples(filter = 'home') {
    console.log(`🔍 Aplicando filtro: ${filter}`);
    
    const container = document.getElementById('temple-container');
    if (!container) {
        console.error("❌ ERROR: No se encontró el contenedor 'temple-container'");
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
    }
    
    console.log(`📊 Templos filtrados: ${filteredTemples.length}`);
    
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
    console.log("🔗 Configurando navegación...");
    
    const navLinks = document.querySelectorAll('nav a');
    console.log("Enlaces de navegación encontrados:", navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover clase active de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Agregar clase active al enlace clickeado
            link.classList.add('active');
            
            // Obtener el filtro del atributo data-filter
            const filter = link.dataset.filter;
            console.log(`🎯 Filtro seleccionado: ${filter}`);
            
            // Mostrar templos según el filtro
            displayTemples(filter);
        });
    });
}