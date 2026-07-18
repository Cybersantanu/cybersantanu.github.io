/* ===================================================================
   CYBERSANTANU PORTFOLIO — SCRIPT.JS
=================================================================== */
(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ LOADING SCREEN ============ */
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBarFill = document.getElementById('loading-bar-fill');
  const loadingPercent = document.getElementById('loading-percent');
  const loadingTerminal = document.getElementById('loading-terminal');

  const bootLines = [
    'initializing_system.sh',
    'loading_portfolio_modules...',
    'loading_projects.db',
    'loading_skills.json',
    'access_granted'
  ];

  function runLoadingSequence() {
    let progress = 0;
    let lineIndex = 0;

    function renderLine(text) {
      const p = document.createElement('p');
      p.innerHTML = `<span class="prompt">root@cybersantanu:~$</span> ${text}`;
      loadingTerminal.appendChild(p);
      loadingTerminal.scrollTop = loadingTerminal.scrollHeight;
    }

    const lineTimer = setInterval(() => {
      if (lineIndex < bootLines.length) {
        renderLine(bootLines[lineIndex]);
        lineIndex++;
      } else {
        clearInterval(lineTimer);
      }
    }, 380);

    const progressTimer = setInterval(() => {
      progress += Math.random() * 14 + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressTimer);
        setTimeout(() => {
          loadingScreen.classList.add('hidden');
          document.body.style.overflow = '';
          triggerInitialReveal();
        }, 400);
      }
      loadingBarFill.style.width = progress + '%';
      loadingPercent.textContent = Math.floor(progress) + '%';
    }, 180);
  }

  document.body.style.overflow = 'hidden';
  if (reducedMotion) {
    loadingScreen.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    window.addEventListener('load', runLoadingSequence);
    // fallback in case 'load' already fired
    setTimeout(() => { if (!loadingBarFill.style.width) runLoadingSequence(); }, 500);
  }

  /* ============ MATRIX RAIN BACKGROUND ============ */
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let columns, drops;
  const chars = 'アイウエオカキクケコサシスセソタチツテト01アイウエオ$#@%&ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 16;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }
  sizeCanvas();

  function drawMatrix() {
    ctx.fillStyle = 'rgba(5,5,5,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff66';
    ctx.font = '15px "JetBrains Mono", monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let matrixInterval;
  if (!reducedMotion) {
    matrixInterval = setInterval(drawMatrix, 55);
  } else {
    canvas.style.display = 'none';
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sizeCanvas, 200);
  });

  /* ============ MOUSE GLOW ============ */
  const mouseGlow = document.getElementById('mouse-glow');
  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      mouseGlow.style.left = e.clientX + 'px';
      mouseGlow.style.top = e.clientY + 'px';
    });
  }

  /* ============ SCROLL PROGRESS BAR ============ */
  const scrollProgress = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  }

  /* ============ NAVBAR SCROLL STATE + ACTIVE LINK ============ */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    updateScrollProgress();
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('visible', window.scrollY > 500);

    let currentId = sections[0] ? sections[0].id : '';
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  /* ============ MOBILE NAV TOGGLE ============ */
  const navToggle = document.getElementById('nav-toggle');
  const navLinksList = document.getElementById('nav-links');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinksList.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinksList.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinksList.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============ HERO TYPING ANIMATION ============ */
  const typingTarget = document.getElementById('typing-text');
  const typingStrings = [
    'Ethical Hacker',
    'Penetration Tester',
    'Network Security Learner',
    'Bug Bounty Hunter (in training)'
  ];

  function typeLoop() {
    let stringIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      const current = typingStrings[stringIndex];
      if (!deleting) {
        charIndex++;
        typingTarget.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        typingTarget.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          stringIndex = (stringIndex + 1) % typingStrings.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  if (reducedMotion) {
    typingTarget.textContent = typingStrings[0];
  } else {
    typeLoop();
  }

  /* ============ SCROLL REVEAL (IntersectionObserver) ============ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));

  function triggerInitialReveal() {
    // catch any elements already in view once loading screen clears
    onScroll();
  }

  /* ============ SKILL BARS ============ */
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card) => {
    const level = card.getAttribute('data-level') || '0';
    card.style.setProperty('--w', level + '%');
  });
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skillCards.forEach((card) => skillObserver.observe(card));

  /* ============ HERO STAT COUNTERS ============ */
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current;
      }, 30);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  statNums.forEach((el) => statObserver.observe(el));

  /* ============ ABOUT "WHOAMI" TERMINAL SEQUENCE ============ */
  const aboutTerminalBody = document.getElementById('about-terminal-body');
  const whoamiLines = [
    { key: 'name', val: 'Santanu Biswas' },
    { key: 'role', val: 'Cyber Security Enthusiast' },
    { key: 'focus', val: 'Ethical Hacking / Pentesting' },
    { key: 'status', val: 'Learning. Building. Securing.' },
    { key: 'goal', val: 'Join the fight against cyber crime' }
  ];
  let aboutTyped = false;
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !aboutTyped) {
        aboutTyped = true;
        typeWhoami();
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  if (aboutTerminalBody) aboutObserver.observe(aboutTerminalBody);

  function typeWhoami() {
    let i = 0;
    function next() {
      if (i >= whoamiLines.length) return;
      const line = whoamiLines[i];
      const p = document.createElement('p');
      p.innerHTML = `<span class="out-key">${line.key}:</span> <span class="out-val">${line.val}</span>`;
      aboutTerminalBody.appendChild(p);
      i++;
      setTimeout(next, 420);
    }
    setTimeout(next, 300);
  }

  /* ============ CONTACT FORM (client-side only) ============ */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      if (!contactForm.checkValidity()) {
        formStatus.textContent = '> error: please fill in all fields correctly.';
        formStatus.style.color = '#ff3860';
        return;
      }
      formStatus.style.color = '';
      formStatus.textContent = `> message queued, ${name.split(' ')[0] || 'friend'}. I'll respond via email shortly.`;
      contactForm.reset();
    });
  }

  /* ============ FOOTER YEAR ============ */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============ SCROLL INDICATOR CLICK ============ */
  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }

})();
