// Product data
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product dropdown
function populateProducts() {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });
}

// Rating functionality
function setupRating() {
    const circleBtns = document.querySelectorAll('.circle-btn');
    const ratingInput = document.getElementById('ratingValue');
    
    circleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove selected class from all buttons
            circleBtns.forEach(b => b.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Set the rating value
            ratingInput.value = this.getAttribute('data-value');
        });
    });
}

// Set today's date as default
function setTodayDate() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('installationDate').value = formattedDate;
}

// Update last modified date
function updateLastModified() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }) + ' ' + now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const lastModifiedElement = document.querySelector('.last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = 'Last Modification: ' + formattedDate;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateProducts();
    setupRating();
    setTodayDate();
    updateLastModified(); // Añadida esta línea
});