document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusDiv.textContent = "⏳ Sending...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      statusDiv.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusDiv.textContent = "❌ Something went wrong. Try again.";
    }
  } catch (error) {
    statusDiv.textContent = "⚠️ Network error. Please check your connection.";
  }
});