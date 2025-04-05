document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    fetch('items.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const attractionCardsContainer = document.getElementById('attraction-cards');
            data.forEach(attraction => {
                // Create card element
                const card = document.createElement('div');
                card.classList.add('card');

                // Create content for the card
                card.innerHTML = `
                    <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">
                    <h2>${attraction.name}</h2>
                    <p>${attraction.address}</p>
                    <p>${attraction.description}</p>
                `;

                // Append card to the container
                attractionCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Set copyright year
    const copyrightYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = copyrightYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('last-modified').textContent = lastModifiedDate;
});
