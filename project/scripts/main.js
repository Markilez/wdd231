// Load testimonials and services dynamically when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonials();
    loadServices();
});

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

// Function to load services from the JSON file and update prices in the DOM
async function loadServices() {
    const serviceIds = {
        "Brake Inspection": "brake-inspection-price",
        "Battery Replacement": "battery-replacement-price",
        "Engine Diagnostics": "engine-diagnostics-price",
        "Engine Overhaul": "engine-overhaul-price",
        "Tire Rotation": "tire-rotation-price",
        "Oil Change": "oil-change-price"
    };

    const container = document.getElementById('services-container');
    if (!container) {
        console.error('Services container not found!');
        return;
    }

    try {
        const response = await fetch('../data/services.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const services = await response.json();

        services.forEach(service => {
            const priceElementId = serviceIds[service.name];
            if (priceElementId) {
                const priceElement = document.getElementById(priceElementId);
                if (priceElement) {
                    priceElement.textContent = `$${service.price.toFixed(2)}`;
                }
            }
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
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
