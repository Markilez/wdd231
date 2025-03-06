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

// Event listeners
document.getElementById("filter-input").addEventListener("input", filterCourses);

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadCourses();
    updateFooter();
});
