// Fetch and Display Spotlights
async function fetchSpotlights() {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      displaySpotlights(data);
    } catch (error) {
      console.error('Error fetching members data:', error);
    }
  }
  
  // Display Spotlights
  function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    const goldSilverMembers = members.filter(member => member.membershipLevel >= 2);
    const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    spotlightContainer.innerHTML = randomMembers.map(member => `
      <div class="spotlight-card">
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">Visit</a></p>
        <p>Membership Level: ${["Member", "Silver", "Gold"][member.membershipLevel - 1]}</p>
      </div>
    `).join('');
  }
  
  // Initial Load
  fetchSpotlights();
  