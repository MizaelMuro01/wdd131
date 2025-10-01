// JavaScript para funcionalidades interactivas del documento de planificación

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para navegación
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

    // Highlight de sección activa en navegación
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Animación para las tarjetas de sección
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar estilos iniciales y observar secciones
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Funcionalidad para mostrar/ocultar detalles en wireframes
    const wireframeSections = document.querySelectorAll('.mockup-content');
    
    wireframeSections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Contador de visitas usando localStorage
    function updateVisitCount() {
        let visitCount = localStorage.getItem('sitePlanVisits') || 0;
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem('sitePlanVisits', visitCount);
        
        // Mostrar contador discretamente en el footer
        const visitCounter = document.createElement('p');
        visitCounter.textContent = `Documento visto ${visitCount} veces`;
        visitCounter.style.fontSize = '0.8rem';
        visitCounter.style.color = 'var(--light-text)';
        visitCounter.style.marginTop = '0.5rem';
        
        const footer = document.querySelector('footer .container');
        footer.appendChild(visitCounter);
    }

    updateVisitCount();

    // Validación de formularios (si se añaden en el futuro)
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const inputs = this.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = 'red';
                    } else {
                        input.style.borderColor = '';
                    }
                });
                
                if (isValid) {
                    this.submit();
                }
            });
        });
    }

    // Inicializar validación de formularios si existen
    if (document.querySelector('form')) {
        setupFormValidation();
    }

    // Console log para desarrollo
    console.log('Yonkett Website Planning Document cargado correctamente');
    console.log('Características implementadas:');
    console.log('- Navegación suave entre secciones');
    console.log('- Highlight de sección activa');
    console.log('- Animaciones al hacer scroll');
    console.log('- Contador de visitas con localStorage');
});

// Funciones adicionales para interactividad
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('collapsed');
    }
}

function printDocument() {
    window.print();
}

// Exportar funciones para uso global
window.YonkettPlan = {
    toggleSection,
    printDocument
};