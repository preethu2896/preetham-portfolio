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
