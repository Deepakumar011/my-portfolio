// Step 4: script.js (Typing Animation)
// javascript

const text = ["Full Stack Developer", "React & Node.js Developer", "Tech Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  const typingElement = document.getElementById("typed-text");
  if (!typingElement) return;

  currentText = text[i];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  } else {
    typingElement.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

window.onload = type;



// ⚙️ 3. script.js — Add These Functions



function uploadResume() {
    alert("This would let you upload a new resume (Simulation).");
  }
  
  function editResume() {
    alert("This would open resume in editor (Simulation).");
  }
  
  function deleteResume() {
    const confirmDelete = confirm("Are you sure you want to delete your resume?");
    if (confirmDelete) {
      alert("Resume deleted (Simulation).");
    }
  }
  
//   6️⃣ Optional JS (if interactive):
//   If the feature requires interactivity, like dark mode, or displaying reviews dynamically, you might need to add some JavaScript functionality. For example, to add a dark mode toggle, you could write:

//   const toggleButton = document.getElementById('dark-mode-toggle');
// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// // Dark Mode Toggle Functionality
// const darkModeButton = document.getElementById('dark-mode-toggle');
// const body = document.body;

// darkModeButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         darkModeButton.textContent = '☀️ Light Mode';
//     } else {
//         darkModeButton.textContent = '🌙 Dark Mode';
//     }
// });


// 🌙 Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Optional: Apply to header/footer too
  document.querySelector("header")?.classList.toggle("dark-mode");
  document.querySelector("footer")?.classList.toggle("dark-mode");

  // Toggle Button Text
  toggleButton.textContent = body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// 📬 EmailJS Contact Form




// EmailJS Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
            alert('Message sent successfully!');
            contactForm.reset(); // Reset the form
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});

// Initialize AOS.js
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation happens once
});



 



