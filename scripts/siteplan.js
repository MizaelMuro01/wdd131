// JavaScript for website planning document features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Visit counter using localStorage
    function updateVisitCount() {
        let visitCount = localStorage.getItem('yonkettSitePlanVisits') || 0;
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem('yonkettSitePlanVisits', visitCount);
        
        // Show counter in footer
        const visitCounter = document.createElement('p');
        visitCounter.textContent = `Document viewed ${visitCount} times`;
        visitCounter.style.fontSize = '0.8rem';
        visitCounter.style.color = '#4C4C4C';
        visitCounter.style.marginTop = '0.5rem';
        visitCounter.style.fontFamily = 'Montserrat, sans-serif';
        
        const footer = document.querySelector('footer .container');
        // Remove old counter if exists
        const oldCounter = footer.querySelector('.visit-counter');
        if (oldCounter) {
            oldCounter.remove();
        }
        visitCounter.classList.add('visit-counter');
        footer.appendChild(visitCounter);
    }

    updateVisitCount();

    // Add click effects to wireframe elements
    const wireframeElements = document.querySelectorAll('.wireframe-mockup > div');
    
    wireframeElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Print document function
    function setupPrintButton() {
        const printButton = document.createElement('button');
        printButton.textContent = 'Print Document';
        printButton.style.position = 'fixed';
        printButton.style.bottom = '20px';
        printButton.style.right = '20px';
        printButton.style.padding = '10px 15px';
        printButton.style.backgroundColor = '#FA0001';
        printButton.style.color = 'white';
        printButton.style.border = 'none';
        printButton.style.borderRadius = '5px';
        printButton.style.cursor = 'pointer';
        printButton.style.fontFamily = 'Montserrat, sans-serif';
        printButton.style.fontWeight = '500';
        printButton.style.zIndex = '1000';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }

    setupPrintButton();

    // Console message for development
    console.log('Yonkett Website Planning Document loaded successfully');
    console.log('Features active:');
    console.log('- Smooth navigation between sections');
    console.log('- Active section highlighting');
    console.log('- Visit counter with localStorage');
    console.log('- Print document button');
});

// Additional functions for interactivity
function showSectionInfo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        alert(`This section contains information about: ${section.querySelector('h2').textContent}`);
    }
}

// Make functions available globally
window.YonkettPlan = {
    showSectionInfo
};