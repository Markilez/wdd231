// Import services from the JSON file
import services from '../data/services.json' assert { type: 'json' };

// Load testimonials and services dynamically when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonials();
    loadServices();
});

console.log(services);

// Testimonials data
const testimonials = [
    { name: "Rodgers Mangena", text: "AutoCare Hub provided excellent service and my car runs like new!", image: "images/customer1.webp" },
    { name: "Onward Gwisai", text: "Fast and reliable! Highly recommend for all car maintenance.", image: "images/customer2.webp" },
    { name: "Arnold Matt", text: "The staff is knowledgeable and friendly. I trust them with my vehicle.", image: "images/customer3.webp" }
];

// Function to load testimonials into the DOM
function loadTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) {
        console.error('Testimonial container not found!');
        return;
    }
    
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.classList.add('testimonial');

        div.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
            <p>"${testimonial.text}" - <strong>${testimonial.name}</strong></p>
        `;
        container.appendChild(div);
    });
}

// Function to load services into the DOM
function loadServices() {
    const container = document.getElementById('services-container');
    if (!container) {
        console.error('Services container not found!');
        return;
    }

    services.forEach(service => {
        const div = document.createElement('div');
        div.classList.add('service-card');

        div.innerHTML = `
            <h2>${service.name}</h2>
            <p>${service.description}</p>
            <p>Price: $${service.price.toFixed(2)}</p>
        `;
        container.appendChild(div);
    });
}

// Handle contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Store form data in localStorage
    localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
    alert('Thank you for your message! We will get back to you soon.');

    this.reset(); // Reset the form fields
});
