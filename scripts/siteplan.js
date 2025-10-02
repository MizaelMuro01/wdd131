// Simple JavaScript for last update date
document.addEventListener('DOMContentLoaded', function() {
    // Show last update date in footer
    const lastUpdate = document.createElement('p');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdate.textContent = 'Last updated: ' + today.toLocaleDateString('en-US', options);
    lastUpdate.style.fontSize = '0.8rem';
    lastUpdate.style.color = '#4C4C4C';
    lastUpdate.style.marginTop = '0.5rem';
    
    const footer = document.querySelector('footer .container');
    footer.appendChild(lastUpdate);
});