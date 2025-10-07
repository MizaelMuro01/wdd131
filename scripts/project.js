// FAQ Data
const faqData = [
    {
        question: "How does the platform work?",
        answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent rutrum odio ac efficitur faucibus!"
    },
    {
        question: "Why there is not a marketplace?",
        answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent rutrum odio ac efficitur faucibus!"
    },
    {
        question: "Can I have two or more car's profile?",
        answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent rutrum odio ac efficitur faucibus!"
    },
    {
        question: "When can I have the complete app?",
        answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent rutrum odio ac efficitur faucibus!"
    }
];

// Create FAQ items
function createFAQ() {
    const faqContainer = document.querySelector('.faq-container');
    
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        
        faqItem.innerHTML = `
            <button class="faq-question">
                ${item.question}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });
}

// Toggle FAQ answers
function setupFAQToggle() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('faq-question') || 
            e.target.parentElement.classList.contains('faq-question')) {
            
            const questionBtn = e.target.classList.contains('faq-question') ? 
                              e.target : e.target.parentElement;
            const faqItem = questionBtn.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = questionBtn.querySelector('.faq-icon');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('open');
                    otherAnswer.parentElement.querySelector('.faq-icon').textContent = '+';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('open');
            icon.textContent = answer.classList.contains('open') ? '−' : '+';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createFAQ();
    setupFAQToggle();
});