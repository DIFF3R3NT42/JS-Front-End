window.addEventListener("load", solve);
function solve() {
    // DOM Elements
    const emailInput = document.getElementById('email');
    const eventInput = document.getElementById('event');
    const locationInput = document.getElementById('location');
    const nextBtn = document.getElementById('next-btn');
    const previewList = document.getElementById('preview-list');
    const approvedList = document.getElementById('event-list');

    // Helper function to create elements
    function createElement(type, className, textContent = '') {
        const element = document.createElement(type);
        if (className) element.classList.add(className);
        if (textContent) element.textContent = textContent;
        return element;
    }

    // Event listener for 'Next' button
    nextBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const event = eventInput.value.trim();
        const location = locationInput.value.trim();

        // Validation: Skip empty inputs
        if (!email || !event || !location) {
            return;
        }

        // Create preview list item
        const li = createElement('li', 'application');
        const article = createElement('article');

        const h4 = createElement('h4', '', email);
        const eventParagraph = createElement('p', '', `Event: ${event}`);
        const locationParagraph = createElement('p', '', `Location: ${location}`);

        article.append(h4, eventParagraph, locationParagraph);

        const editBtn = createElement('button', 'edit-btn', 'Edit');
        const approveBtn = createElement('button', 'approve-btn', 'Approve');

        li.append(article, editBtn, approveBtn);
        previewList.appendChild(li);

        // Clear input fields
        emailInput.value = '';
        eventInput.value = '';
        locationInput.value = '';

        // Edit Button Functionality
        editBtn.addEventListener('click', () => {
            emailInput.value = email;
            eventInput.value = event;
            locationInput.value = location;
            previewList.removeChild(li);
        });

        // Approve Button Functionality
        approveBtn.addEventListener('click', () => {
            previewList.removeChild(li);

            const approvedLi = createElement('li');
            approvedLi.appendChild(article);
            approvedList.appendChild(approvedLi);
        });
    });
}
