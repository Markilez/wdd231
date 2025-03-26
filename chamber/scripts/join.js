// Set Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modal Functionality
const modals = document.querySelectorAll(".modal");
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

modals.forEach((modal) => {
  modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
