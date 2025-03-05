// JavaScript for Mosiya Tunya Chamber of Commerce

// Sample data for businesses
const businesses = [
    { name: "Zambezi Adventures", type: "Tourism" },
    { name: "Livingstone Lodge", type: "Hospitality" },
    { name: "Victoria Falls Crafts", type: "Retail" },
    { name: "Mosi Brewery", type: "Manufacturing" },
    { name: "Tunga Transport", type: "Logistics" },
];

// Function to dynamically load businesses into the course-list section
function loadBusinesses() {
    const courseList = document.getElementById("course-list").querySelector("div");
    courseList.innerHTML = ""; // Clear existing content

    businesses.forEach(business => {
        const businessDiv = document.createElement("div");
        businessDiv.className = "business-item";
        businessDiv.innerHTML = `<strong>${business.name}</strong> - ${business.type}`;
        courseList.appendChild(businessDiv);
    });

    // Update the total business count
    document.getElementById("credits-count").textContent = businesses.length;
}

// Function to filter businesses by name
function filterBusinesses() {
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filteredBusinesses = businesses.filter(business => 
        business.name.toLowerCase().includes(filterInput)
    );

    const courseList = document.getElementById("course-list").querySelector("div");
    courseList.innerHTML = ""; // Clear existing content

    filteredBusinesses.forEach(business => {
        const businessDiv = document.createElement("div");
        businessDiv.className = "business-item";
        businessDiv.innerHTML = `<strong>${business.name}</strong> - ${business.type}`;
        courseList.appendChild(businessDiv);
    });

    // Update the total business count
    document.getElementById("credits-count").textContent = filteredBusinesses.length;
}

// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
}

// Event listeners
document.getElementById("filter-input").addEventListener("input", filterBusinesses);

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadBusinesses();
    updateFooter();
});
