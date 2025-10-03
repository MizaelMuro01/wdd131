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

        // review counter
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
        
        // display counter
        document.getElementById('reviewCount').textContent = 'Total reviews submitted: ' + reviewCount;
        
        // last date
        updateLastModified();
