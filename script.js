/* ============================================================
   KE WANG — FX ARTIST PORTFOLIO
   script.js
   ============================================================ */

/* ── 1. Config injection ─────────────────────────────────── */
const email = SITE_CONFIG.contact.email;

document.getElementById('navCta').href        = `mailto:${email}`;
document.getElementById('mobileCta').href     = `mailto:${email}`;
document.getElementById('resumeDownload').href = SITE_CONFIG.resume;
document.getElementById('cvDownload').href     = SITE_CONFIG.resume;

document.getElementById('footerEmail').href      = `mailto:${email}`;
document.getElementById('footerEmail').textContent = email;
document.getElementById('footerCta').href        = `mailto:${email}`;
document.getElementById('footerEmailLink').href  = `mailto:${email}`;
document.getElementById('footerLinkedIn').href   = SITE_CONFIG.social.linkedin;
document.getElementById('footerGitHub').href     = SITE_CONFIG.social.github;
document.getElementById('footerShowreel').href   = SITE_CONFIG.social.showreel;
document.getElementById('footerLocation').textContent = SITE_CONFIG.contact.location;

document.getElementById('showreelIframe')
    .setAttribute('data-src', SITE_CONFIG.social.showreelEmbed);

/* ── 2. Render: Works ────────────────────────────────────── */
const PLAY_SVG = `<svg viewBox="0 0 60 60" fill="none" width="44" height="44">
  <circle cx="30" cy="30" r="29" stroke="white" stroke-opacity="0.4" stroke-width="1.5"/>
  <path d="M24 20L44 30L24 40V20Z" fill="white"/>
</svg>`;

function renderWorks() {
    const works  = PORTFOLIO_DATA.works;
    const filter = document.getElementById('worksFilter');
    const grid   = document.getElementById('worksGrid');
    const count  = document.getElementById('worksCount');

    // Filter bar
    const tags = [
        { key: 'all',       label: 'All' },
        { key: 'water',     label: 'Water' },
        { key: 'ocean',     label: 'Ocean' },
        { key: 'pyro',      label: 'Pyro' },
        { key: 'rbd',       label: 'RBD' },
        { key: 'explosion', label: 'Explosion' }
    ];
    filter.innerHTML = tags.map(t =>
        `<button class="filter-btn${t.key === 'all' ? ' active' : ''}" data-filter="${t.key}">${t.label}</button>`
    ).join('');

    // Cards
    grid.innerHTML = works.map(w => {
        const tagsStr = w.tags.join(' ');
        const thumb = w.video
            ? `<video class="work-thumb-video" src="${w.video}" muted playsinline preload="metadata"></video>
               <span class="work-badge">${w.badge}</span>
               <div class="work-play-overlay"><button class="play-btn" aria-label="Play">${PLAY_SVG}</button></div>`
            : `<span class="work-badge">${w.badge}</span>`;

        const inner = `
            <div class="work-thumb" style="--grad:${w.grad}">${thumb}</div>
            <div class="work-meta">
                <span class="work-studio">${w.studio}</span>
                <span class="work-year">${w.year}</span>
            </div>
            <h3 class="work-title">${w.title}</h3>
            <p class="work-desc">${w.desc}</p>`;

        if (w.video) {
            return `<article class="work-card reveal-up" data-video="${w.video}" data-tags="${tagsStr}">${inner}</article>`;
        } else {
            return `<article class="work-card reveal-up" data-tags="${tagsStr}"><a href="${w.link}">${inner}</a></article>`;
        }
    }).join('');

    count.textContent = String(works.length).padStart(2, '0');
}

/* ── 3. Render: Tutorials ────────────────────────────────── */
function renderTutorials() {
    const grid = document.getElementById('tutorialsGrid');

    grid.innerHTML = PORTFOLIO_DATA.tutorials.map(t => {
        const thumbInner = t.previewVideo
            ? `<video class="work-thumb-video" src="${t.previewVideo}" muted playsinline preload="metadata" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"></video>
               <div class="work-play-overlay" style="opacity:0;transition:opacity 0.25s;">
                   <svg viewBox="0 0 60 60" fill="none" width="52" height="52">
                       <circle cx="30" cy="30" r="29" stroke="white" stroke-opacity="0.35" stroke-width="1.5"/>
                       <path d="M24 20L44 30L24 40V20Z" fill="white"/>
                   </svg>
               </div>`
            : `<button class="play-btn" aria-label="Play tutorial">
                   <svg viewBox="0 0 60 60" fill="none" width="52" height="52">
                       <circle cx="30" cy="30" r="29" stroke="white" stroke-opacity="0.35" stroke-width="1.5"/>
                       <path d="M24 20L44 30L24 40V20Z" fill="white"/>
                   </svg>
               </button>`;

        const clickAttr = t.link && !t.comingSoon
            ? `onclick="location.href='${t.link}'" style="cursor:pointer"`
            : '';

        return `<article class="tut-card reveal-up" ${clickAttr}>
            <div class="tut-thumb">
                <div class="tut-thumb-bg" style="--tut-grad:${t.grad}">${thumbInner}</div>
                <span class="tut-duration">${t.duration}</span>
            </div>
            <div class="tut-info">
                <span class="tut-cat">${t.category}</span>
                <h3>${t.title}</h3>
                <p>${t.desc}</p>
            </div>
        </article>`;
    }).join('');
}

/* ── 4. Render: Timeline ─────────────────────────────────── */
function renderTimeline() {
    const timeline = document.getElementById('timeline');

    timeline.innerHTML = PORTFOLIO_DATA.experience.map(e => `
        <div class="timeline-item reveal-up">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${e.role}</h3>
                    <span class="tl-date">${e.date}</span>
                </div>
                <p class="tl-company">${e.company} · ${e.location}</p>
                <p class="tl-desc">${e.desc}</p>
            </div>
        </div>`
    ).join('');
}

/* ── 5. Render: Education ────────────────────────────────── */
function renderEducation() {
    const grid = document.getElementById('eduGrid');

    grid.innerHTML = PORTFOLIO_DATA.education.map(e => `
        <div class="edu-item reveal-up">
            <span class="edu-year">${e.years}</span>
            <h4>${e.degree}</h4>
            <p>${e.school}</p>
        </div>`
    ).join('');
}

/* ── 6. Run all renderers ────────────────────────────────── */
renderWorks();
renderTutorials();
renderTimeline();
renderEducation();

/* ── 7. Filter logic ─────────────────────────────────────── */
document.getElementById('worksFilter').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards  = document.querySelectorAll('#worksGrid .work-card');
    let visible  = 0;

    const grid = document.getElementById('worksGrid');
    grid.style.transition = 'opacity 0.15s';
    grid.style.opacity    = '0';

    setTimeout(() => {
        cards.forEach(card => {
            const tags  = card.dataset.tags ? card.dataset.tags.split(' ') : [];
            const match = filter === 'all' || tags.includes(filter);
            card.classList.toggle('hidden', !match);
            if (match) visible++;
        });
        document.getElementById('worksCount').textContent = String(visible).padStart(2, '0');
        grid.style.opacity = '1';
    }, 150);
});

/* ── 8. Nav: transparent → frosted on scroll ─────────────── */
const nav     = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── 9. Mobile menu ──────────────────────────────────────── */
const burger      = document.getElementById('navBurger');
const mobileMenu  = document.getElementById('mobileMenu');
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

/* ── 10. Showreel modal ──────────────────────────────────── */
const showreelBtn  = document.getElementById('showreelBtn');
const modal        = document.getElementById('showreelModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const iframe       = document.getElementById('showreelIframe');
const localVideo   = document.getElementById('localVideo');

function openModal(src) {
    const isYouTube = src.startsWith('http');
    iframe.style.display     = isYouTube ? 'block' : 'none';
    localVideo.style.display = isYouTube ? 'none'  : 'block';
    if (isYouTube) {
        iframe.src = src;
    } else {
        localVideo.src = src;
        localVideo.play().catch(() => {});
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
        iframe.style.display     = 'block';
    }, 300);
}

showreelBtn.addEventListener('click', () => openModal(iframe.dataset.src));
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── 11. Work card: hover preview + click to play ────────── */
function initWorkCards() {
    document.querySelectorAll('.work-card[data-video]').forEach(card => {
        const vid = card.querySelector('.work-thumb-video');
        if (vid) {
            card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
            card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
        }
        card.addEventListener('click', e => {
            e.preventDefault();
            openModal(card.dataset.video);
        });
    });
}

/* ── 12. Tutorial card: hover preview ───────────────────── */
function initTutorialCards() {
    document.querySelectorAll('.tut-card').forEach(card => {
        const vid = card.querySelector('.work-thumb-video');
        if (vid) {
            card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
            card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
        }
        const btn = card.querySelector('.play-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                if (card.dataset.video) openModal(card.dataset.video);
            });
        }
    });
}

initWorkCards();
initTutorialCards();

/* ── 13. Reveal animations ───────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

function initReveal() {
    // Stagger siblings in grids
    document.querySelectorAll('.works-grid, .tutorials-grid, .edu-grid').forEach(parent => {
        [...parent.querySelectorAll('.reveal-up')].forEach((el, i) => {
            el.style.transitionDelay = `${(i % 3) * 0.1}s`;
        });
    });
    // Observe all reveal elements (static + dynamically rendered)
    document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right')
        .forEach(el => revealObserver.observe(el));
}

initReveal();

/* ── 14. Hero reveals on load ────────────────────────────── */
window.addEventListener('load', () => {
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 160);
    });
});

/* ── 15. Smooth scroll for anchor links ──────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-h')) || 70;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
});
