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

async function initChatbot() {
  const input = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const chatBox = document.querySelector('.chat-box');

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    appendMessage('user', message);
    input.value = '';

    const reply = await puter.ai.chat(message);
    appendMessage('bot', reply);
    }

    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message', sender);
      msgDiv.innerText = text;
      chatBox.appendChild(msgDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  document.querySelector('.chatbot-toggle').addEventListener('click', () => {
    const bot = document.getElementById('chatbot');
    bot.style.display = bot.style.display === 'none' || bot.style.display === '' ? 'flex' : 'none';
  });

  function makeDraggable(header, container) {
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - container.offsetLeft;
      offsetY = e.clientY - container.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        container.style.left = e.clientX - offsetX + 'px';
        container.style.top = e.clientY - offsetY + 'px';
        container.style.position = 'fixed';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

initChatbot();
makeDraggable(document.getElementById('chat-header'), document.getElementById('chatbot'));