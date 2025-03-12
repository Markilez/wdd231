// DOM Elements
const memberContainer = document.getElementById("member-container");
const gridViewButton = document.getElementById("grid-view");
const listViewButton = document.getElementById("list-view");

// Fetch Members Data
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched members:', data); // Log the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching members data:', error);
    return [];
  }
}

// Display Members
async function displayMembers(view = "grid") {
  const members = await fetchMembers();
  memberContainer.innerHTML = ""; // Clear the container before adding new cards

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    // Add list-view class to the card if the view is "list"
    if (view === "list") {
      card.classList.add("list-view");
    }

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">Visit</a></p>
        <p>Membership Level: ${["Member", "Silver", "Gold"][member.membershipLevel - 1]}</p>
      </div>
    `;
    memberContainer.appendChild(card);
  });

  // Add or remove list-view class from the container based on the view
  if (view === "list") {
    memberContainer.classList.add("list-view");
  } else {
    memberContainer.classList.remove("list-view");
  }
}

// View Toggle Event Listeners
gridViewButton.addEventListener("click", () => {
  displayMembers("grid");
});

listViewButton.addEventListener("click", () => {
  displayMembers("list");
});

// Footer Information
document.getElementById("copyright-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Initial Load
displayMembers();
