// Initialize Lucide Icons
lucide.createIcons();

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
    menuIcon.setAttribute('data-lucide', 'x');
  } else {
    menuIcon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Toggle Switch Logic
const toggleLight = document.getElementById('toggle-light');
const iconLight = document.getElementById('icon-light');
const textLight = document.getElementById('text-light');

if (toggleLight) {
  toggleLight.addEventListener('change', (e) => {
    if (e.target.checked) {
      iconLight.style.background = 'var(--accent-blue)';
      iconLight.style.color = 'var(--primary-blue)';
      textLight.textContent = 'On';
    } else {
      iconLight.style.background = '#f1f5f9';
      iconLight.style.color = '#94a3b8';
      textLight.textContent = 'Off';
    }
  });
}

const toggleLock = document.getElementById('toggle-lock');
const iconLock = document.getElementById('icon-lock');
const textLock = document.getElementById('text-lock');

if (toggleLock) {
  toggleLock.addEventListener('change', (e) => {
    if (e.target.checked) {
      iconLock.style.background = '#fecaca';
      iconLock.style.color = '#ef4444';
      textLock.textContent = 'Locked';
    } else {
      iconLock.style.background = 'var(--accent-blue)';
      iconLock.style.color = 'var(--primary-blue)';
      textLock.textContent = 'Unlocked';
    }
  });
}

const togglePower = document.getElementById('toggle-power');
const iconPower = document.getElementById('icon-power');
const textPower = document.getElementById('text-power');

if (togglePower) {
  togglePower.addEventListener('change', (e) => {
    if (e.target.checked) {
      iconPower.style.background = '#dcfce7';
      iconPower.style.color = '#22c55e';
      textPower.textContent = 'Active';
    } else {
      iconPower.style.background = '#f1f5f9';
      iconPower.style.color = '#94a3b8';
      textPower.textContent = 'Standby';
    }
  });
}
