// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simulate form submission
    console.log("Form Submitted:", { name, email, message });
    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById("contactForm").reset();
  });
  