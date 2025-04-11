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
        div.style.width = '100%'; // Set a width to avoid shifts

        div.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
            <p>"${testimonial.text}" - <strong>${testimonial.name}</strong></p>
        `;
        container.appendChild(div);
    });
}

// Hardcoded services data
const services = [
    { name: "Oil Change", price: 29.99 },
    { name: "Brake Inspection", price: 89.99 },
    { name: "Tire Rotation", price: 19.99 },
    { name: "Engine Diagnostics", price: 49.99 },
    { name: "Battery Replacement", price: 199.99 },
    { name: "Engine Overhaul", price: 299.99 } // Added price for Engine Overhaul
];

// Function to load services into the DOM
function loadServices() {
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

    services.forEach(service => {
        const priceElementId = serviceIds[service.name];
        if (priceElementId) {
            const priceElement = document.getElementById(priceElementId);
            if (priceElement) {
                priceElement.textContent = `$${service.price.toFixed(2)}`;
            }
        }
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

// Function to load the latest news dynamically
function loadLatestNews() {
    const newsContainer = document.getElementById('latest-news-container');
    if (!newsContainer) {
        console.error('Latest news container not found!');
        return;
    }

    // Example news articles
    const newsArticles = [
        { title: "New Service Launch", date: "2025-10-01", content: "We are excited to announce the launch of our new tire rotation service!" },
        { title: "Customer Appreciation Day", date: "2025-09-15", content: "Join us for our Customer Appreciation Day on September 30th!" },
        { title: "Winter Car Care Tips", date: "2025-09-10", content: "Get your car ready for winter with our top tips!" }
    ];

    newsArticles.forEach(article => {
        const div = document.createElement('div');
        div.classList.add('news-article');

        div.innerHTML = `
            <h3>${article.title}</h3>
            <p><em>${article.date}</em></p>
            <p>${article.content}</p>
        `;
        newsContainer.appendChild(div);
    });
}
