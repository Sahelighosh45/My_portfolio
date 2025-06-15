// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  // Intersection Observer to animate sections on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  // Observe all sections
  sections.forEach(section => observer.observe(section));

  // Section pop effect on nav click
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href").substring(1);
      const target = document.getElementById(id);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Remove and re-add class for pop animation
        target.classList.remove("section-pop");
        void target.offsetWidth; // Trigger reflow
        target.classList.add("section-pop");
      }
    });
  });

  // Modal Preview Logic
  const previewBtns = document.querySelectorAll('.preview-btn');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = btn.getAttribute('data-img');
      modalImg.src = imgSrc;
      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Optional: Close modal when clicking outside image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
