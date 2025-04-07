import services from '../data/services.json' assert { type: 'json' };

// Load testimonials on the home page
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonials();
    loadServices();
});

// Load testimonials (mock data)
const testimonials = [
    "Great service! My car has never run better.",
    "Friendly staff and quick service.",
    "I trust AutoCare Hub with all my vehicle needs."
];

function loadTestimonials() {
    const container = document.getElementById('testimonial-container');
    testimonials.forEach(testimonial => {
        const p = document.createElement('p');
        p.textContent = testimonial;
        container.appendChild(p);
    });
}

// Load services dynamically
function loadServices() {
    const servicesContainer = document.getElementById('services-container');
    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');
        serviceDiv.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: $${service.price}</p>
        `;
        servicesContainer.appendChild(serviceDiv);
    });
}

// Handle contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store form data in localStorage
    localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
