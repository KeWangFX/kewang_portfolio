/* ============================================================
   KE WANG — FX ARTIST PORTFOLIO
   script.js
   ============================================================ */

/* ── Nav: transparent → frosted on scroll ───────────────── */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run on load in case page is already scrolled

/* ── Mobile menu ─────────────────────────────────────────── */
const burger     = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

function closeMobile() {
    mobileMenu.classList.remove('open');
    burger.classList.remove('active');
    document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
    const opening = !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', opening);
    burger.classList.toggle('active', opening);
    document.body.style.overflow = opening ? 'hidden' : '';
});

mobileLinks.forEach(link => link.addEventListener('click', closeMobile));

/* ── Showreel modal (YouTube + local video) ─────────────── */
const showreelBtn  = document.getElementById('showreelBtn');
const modal        = document.getElementById('showreelModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const iframe       = document.getElementById('showreelIframe');
const localVideo   = document.getElementById('localVideo');

function openModal(src) {
    const isYouTube = src.startsWith('http');
    iframe.style.display    = isYouTube ? 'block' : 'none';
    localVideo.style.display = isYouTube ? 'none'  : 'block';
    if (isYouTube) {
        iframe.src = src;
    } else {
        localVideo.src = src;
        localVideo.play();
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
        iframe.src = '';
        localVideo.pause();
        localVideo.src = '';
        localVideo.style.display = 'none';
        iframe.style.display = 'block';
    }, 300);
}

showreelBtn.addEventListener('click', () => openModal(iframe.dataset.src));
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Scroll reveal with staggered children ───────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

// Add stagger delay to siblings within the same grid
const staggerParents = document.querySelectorAll('.works-grid, .tutorials-grid, .edu-grid');
staggerParents.forEach(parent => {
    const children = [...parent.querySelectorAll('.reveal-up')];
    children.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -48px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

/* ── Hero: trigger reveals on load ──────────────────────── */
window.addEventListener('load', () => {
    const heroReveals = document.querySelectorAll('#hero .reveal');
    heroReveals.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 160);
    });
});

/* ── Work card: hover preview + click to open modal ─────── */
document.querySelectorAll('.work-card[data-video]').forEach(card => {
    const vid = card.querySelector('.work-thumb-video');

    if (vid) {
        card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
        card.addEventListener('mouseleave', () => {
            vid.pause();
            vid.currentTime = 0;
        });
    }

    card.addEventListener('click', e => {
        e.preventDefault();
        openModal(card.dataset.video);
    });
});

/* ── Tutorial card video hover preview ──────────────────── */
document.querySelectorAll('.tut-card').forEach(card => {
    const vid = card.querySelector('.work-thumb-video');
    if (vid) {
        card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
        card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }
});

/* ── Tutorial play buttons ───────────────────────────────── */
// To enable: add data-video="https://youtube.com/embed/VIDEO_ID?autoplay=1"
// to the <article class="tut-card"> element.
document.querySelectorAll('.tut-card .play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.tut-card');
        if (card.dataset.video) openModal(card.dataset.video);
    });
});

/* ── Smooth scroll for anchor links ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-h')) || 70;
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
