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
    const stars = document.querySelectorAll('.star');
    const circles = document.querySelectorAll('.circle');
    const ratingInput = document.getElementById('ratingValue');
    
    function setRating(value) {
        // Update stars
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
        
        // Update circles
        circles.forEach((circle, index) => {
            if (index < value) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
        
        // Update hidden input
        ratingInput.value = value;
    }
    
    // Add event listeners to stars
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            setRating(value);
        });
    });
    
    // Add event listeners to circles
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            setRating(value);
        });
    });
}

// Form submission
function setupForm() {
    const form = document.getElementById('reviewForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const productName = document.getElementById('productName').value;
        const rating = document.getElementById('ratingValue').value;
        const installationDate = document.getElementById('installationDate').value;
        
        if (!productName || !rating || !installationDate) {
            alert('Please fill in all required fields: Product Name, Overall Rating, and Date of Installation.');
            return;
        }
        
        // Update review counter
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
        
        // Show success message
        alert(`Thank you for your review!\nTotal reviews submitted: ${reviewCount}`);
        
        // Reset form
        form.reset();
        resetRating();
        
        // Reset date to today
        setTodayDate();
    });
}

// Reset rating display
function resetRating() {
    const stars = document.querySelectorAll('.star');
    const circles = document.querySelectorAll('.circle');
    const ratingInput = document.getElementById('ratingValue');
    
    stars.forEach(star => star.classList.remove('active'));
    circles.forEach(circle => circle.classList.remove('active'));
    ratingInput.value = '';
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
    setupForm();
    setTodayDate();
});