// Toggle Dark Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Toggle Hamburger Menu
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("show");
  });
  
  // Form Email Validation
  document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const msg = document.getElementById("form-message");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "✅ Subscribed successfully!";
      msg.style.color = "green";
    } else {
      msg.textContent = "❌ Please enter a valid email.";
      msg.style.color = "red";
    }
  });
  
  // Back to Top
  const topBtn = document.getElementById("topBtn");
  window.onscroll = () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  