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
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const ratingInput = document.getElementById('ratingValue');
    
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateProducts();
    setupRating();
    setTodayDate();
});