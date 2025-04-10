// scripts/main.js

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store data in localStorage
    localStorage.setItem('contactData', JSON.stringify({name, email, message}));

    // Static API call simulation (in a real application, you would fetch from a server)
    const apiResponse = await mockApiCall({name, email, message});

    // Display confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.textContent = 'Thank you for contacting us, ' + name + '!';
    confirmationDiv.classList.remove('hidden');

    // Clear the form
    document.getElementById('contact-form').reset();
});

// Mock function simulating an API call
async function mockApiCall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data sent:", data);
            resolve(true);
        }, 1000); // Simulate async with a timeout
    });
}

// Function to load testimonials dynamically
async function loadTestimonials() {
    try {
        const response = await fetch('path/to/your/testimonials.json'); // Ensure you replace with the actual path
        const testimonials = await response.json();
        const testimonialContainer = document.getElementById('testimonial-container');
        testimonialContainer.innerHTML = '';

        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            testimonialDiv.innerHTML = `
                <img src="${testimonial.image}" alt="Customer ${testimonial.name}" loading="lazy">
                <p>"${testimonial.message}" - ${testimonial.name}</p>
            `;
            testimonialContainer.appendChild(testimonialDiv);
        });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }
}

// Call the loadTestimonials function when the window loads
window.onload = loadTestimonials;