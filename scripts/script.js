// Sample data for courses
const courses = [
    { name: "CSE 110", credits: 3, completed: true },
    { name: "CSE 111", credits: 4, completed: true },
    { name: "WDD 130", credits: 4, completed: false },
    { name: "WDD 131", credits: 3, completed: true },
    { name: "WDD 231", credits: 4, completed: false },
];

// Function to dynamically load courses into the course-list section
function loadCourses() {
    const courseList = document.getElementById("courses-container");
    courseList.innerHTML = ""; // Clear existing content

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "business-item";
        courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} credits`;
        if (course.completed) {
            courseDiv.classList.add("completed");
        }
        courseList.appendChild(courseDiv);
    });

    // Update the total credits count
    updateCredits();
}

// Function to filter courses by name
function filterCourses() {
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(filterInput)
    );

    const courseList = document.getElementById("courses-container");
    courseList.innerHTML = ""; // Clear existing content

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "business-item";
        courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} credits`;
        if (course.completed) {
            courseDiv.classList.add("completed");
        }
        courseList.appendChild(courseDiv);
    });

    // Update the total credits count
    updateCredits();
}

// Function to update the total credits count
function updateCredits() {
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("credits-count").textContent = totalCredits;
}

// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
}

// Function to load attractions from JSON
async function loadAttractions() {
    try {
        const response = await fetch('data/item.json'); // Updated path to the JSON file
        const items = await response.json();

        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = ""; // Clear existing content

        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading attractions:', error);
    }
}

// LocalStorage for visitor information
function handleVisitorInfo() {
    const visitorInfo = document.getElementById('visitor-info');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if (!lastVisit) {
        visitorInfo.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitorInfo.innerText = "Back so soon! Awesome!";
        } else {
            visitorInfo.innerText = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate);
}

// Event listeners
document.getElementById("filter-input")?.addEventListener("input", filterCourses);

// Initial load for courses or attractions based on the page
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("courses-container")) {
        loadCourses();
        updateFooter();
    } else if (document.querySelector('.grid-container')) {
        loadAttractions();
        handleVisitorInfo();
    }
});
