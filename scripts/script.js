// Sample array of course objects
const courses = [
    { name: "HTML Basics", credits: 3, completed: false },
    { name: "CSS Fundamentals", credits: 3, completed: false },
    { name: "JavaScript Essentials", credits: 4, completed: true },
    // Add more courses as needed
];

window.onload = () => {
    displayCourses();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    document.getElementById('filter-input').addEventListener('input', filterCourses);
};

function displayCourses() {
    const courseList = document.getElementById('course-list').querySelector('div');
    courseList.innerHTML = '';
    courses.forEach(course => {
        const item = document.createElement('div');
        item.textContent = course.name;
        courseList.appendChild(item);
        
        // Show completed courses
        if (course.completed) {
            const completedItem = document.createElement('li');
            completedItem.textContent = course.name;
            document.getElementById('completed-list').appendChild(completedItem);
        }
    });

    calculateTotalCredits();
}

function filterCourses() {
    const filterValue = document.getElementById('filter-input').value.toLowerCase();
    const courseList = document.getElementById('course-list').querySelector('div');
    const items = courseList.children;

    for (let item of items) {
        item.style.display = item.textContent.toLowerCase().includes(filterValue) ? 'block' : 'none';
    }
}

function calculateTotalCredits() {
    const totalCredits = courses.reduce((sum, course) => sum + (course.completed ? course.credits : 0), 0);
    document.getElementById('credits-count').textContent = totalCredits;
}