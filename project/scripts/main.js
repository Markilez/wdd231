async function loadServices() {
    try {
        const response = await fetch('../data/services.json');
        const services = await response.json();
        const servicesContainer = document.getElementById('services-container');
        services.forEach(service => {
            const serviceDiv = document.createElement('div');
            serviceDiv.classList.add('service-card');
            serviceDiv.innerHTML = `
                <img src="images/${service.name.toLowerCase().replace(/\s+/g, '-')}.webp" alt="${service.name} Service" class="service-image">
                <h2>${service.name}</h2>
                <p>${service.description}</p>
                <p>Price: $${service.price}</p>
                <button class="cta-button">Book Now</button>
            `;
            servicesContainer.appendChild(serviceDiv);
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
}
