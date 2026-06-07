/* ============================================================
   PREETHAM BHANDARY — Shared JS
   ============================================================ */

/* ===== SCROLL RESTORATION ===== */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== COUPON COPY ===== */
function copyCoupon() {
  const code = document.getElementById('couponCode');
  const btn  = document.getElementById('copyBtn');
  if (!code || !btn) return;
  navigator.clipboard.writeText(code.textContent.trim()).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ===== LEAD FORM ===== */
function submitLead() {
  const input = document.getElementById('leadEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor = '#ff5b1f';
    input.focus();
    return;
  }
  input.style.borderColor = '';
  // Simulate success
  const form = input.closest('.lead-form');
  if (form) {
    form.innerHTML = '<span style="font-family:\'Caveat\',cursive;font-size:18px;padding:8px 16px;color:#15130f">✓ Check your inbox! eBook is on its way 🎉</span>';
  }
}

/* ===== FAQ ACCORDION (for inner pages) ===== */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    item.classList.toggle('open');
  });
});

/* ===== ROBUST SMOOTH SCROLL FOR HASH LINKS ===== */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href && href.startsWith('#')) {
    const target = document.getElementById(href.substring(1));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else if (href && href.includes('index.html#')) {
    const parts = href.split('index.html#');
    if (parts.length === 2 && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '')) {
      const target = document.getElementById(parts[1]);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
});

// Handle initial page load with a hash anchor (e.g. index.html#contact)
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    // Delay slightly to allow layout and animations to initialize
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Clear the hash from the address bar so refreshing won't scroll here again
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    }, 150);
  } else {
    // Scroll to top of the page on clean load/refresh
    window.scrollTo(0, 0);
  }
});

/* ============================================================
   AI PORTFOLIO ASSISTANT
   ============================================================ */
(function() {
  const chatWidgetHTML = `
    <div id="portfolio-chat-widget" class="chat-widget-container">
      <button id="chat-toggle-btn" class="chat-toggle-btn wobble">
        <span class="chat-toggle-icon">💬</span>
        <span class="chat-toggle-text">Ask About My Work</span>
      </button>
      
      <div id="chat-window" class="chat-window-box">
        <div class="chat-header">
          <div class="chat-header-title">
            <span class="chat-status-dot"></span>
            <span class="h-display" style="font-size: 13px;">Portfolio Assistant</span>
          </div>
          <button id="chat-close-btn" class="chat-close-btn">×</button>
        </div>
        
        <div id="chat-messages-container" class="chat-messages">
          <div class="chat-message assistant">
            <div class="message-content">
              <p class="welcome-text"><strong>Hi! I'm Preetham's Portfolio Assistant.</strong></p>
              <p class="welcome-sub">I can help you learn about:</p>
              <ul class="welcome-list">
                <li>• AutoCTI</li>
                <li>• NavMind AI</li>
                <li>• Electra</li>
                <li>• Inklayer</li>
                <li>• Experience</li>
                <li>• Education</li>
                <li>• Achievements</li>
                <li>• Contact Information</li>
              </ul>
              <p class="welcome-sub">Try asking:</p>
              <div class="chat-suggestions">
                <button class="chat-suggestion-btn" data-msg="Tell me about AutoCTI">"Tell me about AutoCTI"</button>
                <button class="chat-suggestion-btn" data-msg="What projects has Preetham built?">"What projects has Preetham built?"</button>
                <button class="chat-suggestion-btn" data-msg="What is his experience?">"What is his experience?"</button>
                <button class="chat-suggestion-btn" data-msg="How can I contact him?">"How can I contact him?"</button>
              </div>
            </div>
          </div>
        </div>
        
        <div id="chat-typing-indicator" class="chat-typing-indicator hidden">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        
        <form id="chat-input-form" class="chat-input-form">
          <input type="text" id="chat-user-message" placeholder="Ask me something..." autocomplete="off" required />
          <button type="submit" class="chat-send-btn">➔</button>
        </form>
      </div>
    </div>
  `;

  // Safely inject chat widget when document body is available
  function injectWidget() {
    if (document.getElementById('portfolio-chat-widget')) return;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = chatWidgetHTML.trim();
    document.body.appendChild(tempDiv.firstChild);

    // Setup DOM elements
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatMessagesContainer = document.getElementById('chat-messages-container');
    const chatInputForm = document.getElementById('chat-input-form');
    const chatUserInput = document.getElementById('chat-user-message');
    const chatTypingIndicator = document.getElementById('chat-typing-indicator');

    let history = [];
    let isThinking = false;

    // Toggle open
    chatToggleBtn.addEventListener('click', () => {
      chatWindow.classList.add('open');
      chatToggleBtn.classList.add('hidden');
      setTimeout(() => {
        chatUserInput.focus();
      }, 300);
    });

    // Toggle close
    chatCloseBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
      chatToggleBtn.classList.remove('hidden');
    });

    // Handle Suggestions clicks
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('chat-suggestion-btn')) {
        const msg = e.target.getAttribute('data-msg');
        if (msg) {
          sendMessage(msg);
        }
      }
    });

    // Form submission
    chatInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatUserInput.value.trim();
      if (text) {
        sendMessage(text);
        chatUserInput.value = '';
      }
    });

    function appendMessage(role, text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `chat-message ${role}`;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'message-content';
      
      if (role === 'assistant') {
        contentDiv.innerHTML = formatMarkdown(text);
      } else {
        contentDiv.textContent = text;
      }
      
      messageDiv.appendChild(contentDiv);
      chatMessagesContainer.appendChild(messageDiv);
      
      // Auto scroll to bottom
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }

    function formatMarkdown(text) {
      let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formatted = formatted.replace(/^\s*[\*\-]\s+(.*?)$/gm, '• $1');
      formatted = formatted.replace(/\n\n/g, '<div style="margin-bottom: 8px;"></div>');
      formatted = formatted.replace(/\n/g, '<br/>');
      return formatted;
    }

    async function sendMessage(text) {
      if (isThinking) return;
      
      // Append user message to UI and history
      appendMessage('user', text);
      
      isThinking = true;
      chatTypingIndicator.classList.remove('hidden');
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: text,
            history: history
          })
        });

        chatTypingIndicator.classList.add('hidden');

        if (!response.ok) {
          throw new Error('API server returned error status');
        }

        const data = await response.json();
        
        if (data.reply) {
          appendMessage('assistant', data.reply);
          history.push({ role: 'user', text: text });
          history.push({ role: 'model', text: data.reply });
        } else {
          throw new Error('Invalid response data');
        }
      } catch (err) {
        console.error('Chat error:', err);
        chatTypingIndicator.classList.add('hidden');
        appendMessage('assistant', '<span class="chat-error-text">I\'m sorry, but I\'m having trouble communicating right now. Please try again in a moment.</span>');
      } finally {
        isThinking = false;
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      }
    }
  }

  // Ensure body is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWidget);
  } else {
    injectWidget();
  }
})();

