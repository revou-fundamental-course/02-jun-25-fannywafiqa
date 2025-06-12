// Ambil nama user
const userName = prompt("Masukkan nama Anda:");
document.getElementById("userName").textContent =
  userName?.trim() || "Pengunjung";

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("message").value;
  const currentTime = new Date().toLocaleString();

  const result = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
  document.getElementById("formResult").innerHTML = result;
});
