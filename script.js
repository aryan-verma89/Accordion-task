document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            const accordion = document.getElementById('accordion');
            data.faqs.forEach(faq => {
                const item = document.createElement('div');
                item.classList.add('accordion-item');

                const button = document.createElement('button');
                button.classList.add('accordion-button');
                button.textContent = faq.question;

                const content = document.createElement('div');
                content.classList.add('accordion-content');
                content.innerHTML = `<p>${faq.answer}</p>`;

                item.appendChild(button);
                item.appendChild(content);
                accordion.appendChild(item);

                button.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight;
                    document.querySelectorAll('.accordion-content').forEach(c => {
                        c.style.maxHeight = null;
                        c.style.padding = '0 15px';
                    });
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.padding = '15px';
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching the FAQ data:', error));
});
