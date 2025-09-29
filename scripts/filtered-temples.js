// Función principal que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año actual
    const currentYear = new Date();
    document.getElementById("currentYear").textContent = `© ${currentYear.getFullYear()}`;
    
    // Actualizar última modificación
    document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

    const homeAction = document.querySelector('#homeAction');

    homeAction.addEventListener('click', () => {
        createTempleList(temples);
    });
});

// Array de objetos de templos
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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-utah-temple-768192-wallpaper.jpg"
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
    }
];

// Función para crear la lista de templos
function createTempleList(filteredTemples) {
    const container = document.querySelector('#templeContainer');
    container.innerHTML = '';
    
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Event listeners para los filtros
const oldFilter = document.querySelector('#oldFilter');
const newFilter = document.querySelector('#newFilter');
const largeFilter = document.querySelector('#largeFilter');
const smallFilter = document.querySelector('#smallFilter');

oldFilter.addEventListener('click', () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    createTempleList(oldTemples);
});

newFilter.addEventListener('click', () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    createTempleList(newTemples);
});

largeFilter.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleList(largeTemples);
});

smallFilter.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleList(smallTemples);
});

// Inicializar con todos los templos
createTempleList(temples);