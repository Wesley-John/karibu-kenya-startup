 const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;

      // Optional: Close other open items
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.carousel-track');
  const prevBtn = wrapper.querySelector('.carousel-btn.prev');
  const nextBtn = wrapper.querySelector('.carousel-btn.next');

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 370, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -370, behavior: 'smooth' });
  });
});

let visitCount = localStorage.getItem("visitCount");

if (!visitCount) {
  visitCount = 1;
} else {
   visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);


document.getElementById("visit-count").textContent = `Visits: ${visitCount}`;