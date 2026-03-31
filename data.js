/* ============================================================
   PORTFOLIO DATA
   Add / edit projects, tutorials, experience and education here.
   No HTML knowledge required — just edit the arrays below.
   ============================================================ */

const PORTFOLIO_DATA = {

  /* ── Works ─────────────────────────────────────────────────
     tags: array of lowercase filter keys
       "water" | "ocean" | "pyro" | "rbd" | "explosion" | "ai"
     video: local path string, or null
     link:  fallback href when no video (use "#" as placeholder)
  ─────────────────────────────────────────────────────────── */
  works: [
    {
      id:     'ps2',
      title:  'Ponniyin Selvan: II',
      studio: 'Pixl Visual Effects',
      year:   '2023',
      badge:  'Ocean FX',
      tags:   ['ocean', 'water'],
      grad:   'linear-gradient(135deg,#0a2e5e 0%,#1a6494 60%,#0d4a7a 100%)',
      video:  'assets/videos/ps2.mp4',
      link:   null,
      desc:   '50+ shots of large-scale ocean water simulations for Mani Ratnam\'s epic historical blockbuster.'
    },
    {
      id:     'apple-watch',
      title:  'Apple Watch 10',
      studio: 'Black Kite Studios',
      year:   '2024',
      badge:  'Water FX',
      tags:   ['water'],
      grad:   'linear-gradient(135deg,#0c2340 0%,#1e5799 60%,#4a9eff 100%)',
      video:  'assets/videos/apple-watch.mp4',
      link:   null,
      desc:   'Massive ocean waves and slow-motion water simulation for Apple\'s Series 10 launch campaign.'
    },
    {
      id:     'loreal',
      title:  'L\'Oréal Professional Paris',
      studio: 'Axio',
      year:   '2024',
      badge:  'Water FX',
      tags:   ['water'],
      grad:   'linear-gradient(135deg,#1a0530 0%,#6b3fa0 60%,#a78be0 100%)',
      video:  null,
      link:   '#',
      desc:   'Small-scale precision water drop simulation for L\'Oréal Professionnel Paris advertising campaign.'
    },
    {
      id:     'burning-city',
      title:  'The Burning City (焚城)',
      studio: 'Axio',
      year:   '2024',
      badge:  'Pyro FX',
      tags:   ['pyro'],
      grad:   'linear-gradient(135deg,#2d0a00 0%,#8b2500 60%,#e85d00 100%)',
      video:  null,
      link:   '#',
      desc:   'Large-scale pyro trail smoke and fire simulations for Chow Ka-sang\'s disaster epic.'
    },
    {
      id:     'the-rig',
      title:  'The Rig',
      studio: 'Misc Studios',
      year:   '2022',
      badge:  'Ocean / Pyro FX',
      tags:   ['ocean', 'pyro'],
      grad:   'linear-gradient(135deg,#0d1a2e 0%,#1a3a5c 60%,#2a6080 100%)',
      video:  'assets/videos/the-rig.mp4',
      link:   null,
      desc:   'Ocean FX, large-scale smoke, environmental fog and dust for Amazon Prime\'s supernatural thriller.'
    },
    {
      id:     'nautilus',
      title:  'Nautilus',
      studio: 'Misc Studios',
      year:   '2022',
      badge:  'Ocean FX',
      tags:   ['ocean', 'water'],
      grad:   'linear-gradient(135deg,#00131a 0%,#004d5e 60%,#007a8c 100%)',
      video:  'assets/videos/nautilus.mp4',
      link:   null,
      desc:   'Underwater waterfalls and ocean FX for Disney+\'s adventure series based on Jules Verne\'s classic.'
    },
    {
      id:     'bodies',
      title:  'Bodies',
      studio: 'Misc Studios',
      year:   '2023',
      badge:  'Explosion FX',
      tags:   ['explosion'],
      grad:   'linear-gradient(135deg,#1a0a00 0%,#5c2800 60%,#c05c00 100%)',
      video:  'assets/videos/bodies.mp4',
      link:   null,
      desc:   'Air explosion FX for Netflix\'s time-travel crime thriller, blending practical and digital elements.'
    },
    {
      id:     'coyote',
      title:  'Coyote vs. Acme',
      studio: 'Misc Studios',
      year:   '2023',
      badge:  'Pyro / RBD',
      tags:   ['pyro', 'rbd'],
      grad:   'linear-gradient(135deg,#1a0d00 0%,#7a3500 60%,#d4650a 100%)',
      video:  'assets/videos/coyote.mp4',
      link:   null,
      desc:   'Pyro fire, vellum rope dynamics, smoke and RBD destruction for the hybrid live-action feature.'
    },
    {
      id:     'taurus',
      title:  'Taurus',
      studio: 'Atlantic Productions',
      year:   '2024',
      badge:  'Ocean FX',
      tags:   ['ocean', 'water'],
      grad:   'linear-gradient(135deg,#071a30 0%,#0d3d60 60%,#1a6090 100%)',
      video:  'assets/videos/atlantic.mp4',
      link:   null,
      desc:   'Ocean splash, whitewater and foam simulations for the Apple Vision Pro TV series.'
    }
  ],

  /* ── Tutorials ──────────────────────────────────────────────
     previewVideo: local path for hover preview, or null
     link: page href, or null when comingSoon
  ─────────────────────────────────────────────────────────── */
  tutorials: [
    {
      id:           'houdini-wetmap',
      title:        'Houdini Wetmap',
      category:     'Houdini · Water FX',
      desc:         'Wetmap setup and rain-driven wetness accumulation — attribute transfer, VEX logic and Karma material blending.',
      duration:     '2 Videos',
      grad:         'linear-gradient(135deg,#0a2e5e,#1a6494)',
      previewVideo: 'assets/videos/tutorials/houdini_wetmap/wetmap.mp4',
      link:         'tutorials/houdini_wetmap.html',
      comingSoon:   false
    },
    {
      id:           'pyro-production',
      title:        'Pyro FX: Production Smoke &amp; Fire',
      category:     'Houdini · Pyro FX',
      desc:         'Large-scale pyro for film — substep strategy, velocity control, and render optimisation.',
      duration:     'Coming Soon',
      grad:         'linear-gradient(135deg,#2d0a00,#8b2500)',
      previewVideo: null,
      link:         null,
      comingSoon:   true
    },
    {
      id:           'ai-comfyui',
      title:        'AI-Driven FX: ComfyUI for VFX Artists',
      category:     'AI · ComfyUI',
      desc:         'Integrating AI image generation into a professional VFX pipeline — concept to comp.',
      duration:     'Coming Soon',
      grad:         'linear-gradient(135deg,#1a0530,#6b3fa0)',
      previewVideo: null,
      link:         null,
      comingSoon:   true
    }
  ],

  /* ── Experience ─────────────────────────────────────────────
     desc may contain <em> HTML — rendered with innerHTML
  ─────────────────────────────────────────────────────────── */
  experience: [
    {
      role:     'AI Artist · AI Specialist &amp; Advisor',
      company:  'Atlantic Studios',
      location: 'London',
      date:     'Feb 2026 – Present',
      desc:     'Visual AI specialist, AI consultant, AI Director and researcher. Advising on AI-driven creative workflows for visual production.'
    },
    {
      role:     'FX Artist',
      company:  'Atlantic Productions',
      location: 'London',
      date:     'Nov – Dec 2024',
      desc:     'Ocean splash, whitewater and foam simulations.'
    },
    {
      role:     'FX TD',
      company:  'Black Kite Studios',
      location: 'London',
      date:     'Aug – Sep 2024',
      desc:     'Water FX for Apple Watch 10 — massive ocean and wave splash simulations, small-scale slow-motion water simulation.'
    },
    {
      role:     'FX Artist',
      company:  'Axio',
      location: 'London',
      date:     'Apr – Jul 2024',
      desc:     'Small-scale water drop simulation for L\'Oréal Professionnel Paris. Pyro trail smoke and fire simulation for <em>The Burning City (焚城)</em>.'
    },
    {
      role:     'FX Artist',
      company:  'Pixl Visual Effects',
      location: 'London',
      date:     'Jul 2022 – Oct 2023',
      desc:     '50+ shots of ocean water simulations for <em>Ponniyin Selvan: II</em>. Water FX for <em>Noah\'s Ark</em>.'
    },
    {
      role:     'Junior FX Artist',
      company:  'Misc Studios',
      location: 'London',
      date:     'Nov 2021 – Jul 2023',
      desc:     '<em>The Rig</em> (Ocean FX, smoke, fog) · <em>Nautilus</em> (waterfalls, ocean) · <em>Bodies</em> (air explosions) · <em>Coyote vs. Acme</em> (pyro, vellum, RBD).'
    },
    {
      role:     'Trainee',
      company:  'Technicolor Creative Studios',
      location: 'London',
      date:     'Oct – Dec 2021',
      desc:     'ACADEMY@TheFocus — FX for VFX intensive course.'
    }
  ],

  /* ── Education ──────────────────────────────────────────── */
  education: [
    {
      degree: 'MA Digital Effects',
      school: 'Bournemouth University',
      years:  '2020 – 2021'
    },
    {
      degree: 'BA Communication &amp; Media Studies',
      school: 'Shandong University',
      years:  '2006 – 2010'
    }
  ]
};
