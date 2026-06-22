(function() {
'use strict';

// ============================================================
// 1. CUSTOM CURSOR
// ============================================================
function initCursor() {
  var cursor = document.createElement('div');
  cursor.className = 'af-cursor';
  document.body.appendChild(cursor);

  var dot = document.createElement('div');
  dot.className = 'af-cursor-dot';
  document.body.appendChild(dot);

  var pos = { x: 0, y: 0 };
  var mouse = { x: 0, y: 0 };

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    cursor.style.opacity = '1';
    dot.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    cursor.style.opacity = '0';
    dot.style.opacity = '0';
  });

  function animate() {
    pos.x += (mouse.x - pos.x) * 0.12;
    pos.y += (mouse.y - pos.y) * 0.12;
    cursor.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
    dot.style.transform = 'translate(' + mouse.x + 'px, ' + mouse.y + 'px)';
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effect on interactive elements
  var hoverEls = document.querySelectorAll('a, button, .tmpl-card, .pb-card, .svc, .case-card, .org-card, .quiz-opt, .qz-opt');
  hoverEls.forEach(function(el) {
    el.addEventListener('mouseenter', function() { cursor.classList.add('af-cursor-hover'); });
    el.addEventListener('mouseleave', function() { cursor.classList.remove('af-cursor-hover'); });
  });
}

// ============================================================
// 2. PARTICLES
// ============================================================
function initParticles() {
  var canvas = document.createElement('canvas');
  canvas.className = 'af-particles';
  document.body.appendChild(canvas);
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';

  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      a: Math.random() * 0.4 + 0.1
    });
  }

  var rafId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(184, 0, 24, ' + p.a + ')';
      ctx.fill();
    });
    rafId = requestAnimationFrame(draw);
  }
  draw();
}

// ============================================================
// 3. ANIMATED COUNTERS
// ============================================================
function initCounters() {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        var duration = parseInt(el.getAttribute('data-duration')) || 2000;
        var start = 0;
        var step = target / (duration / 16);
        var current = 0;

        function update() {
          current += step;
          if (current < target) {
            el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
            requestAnimationFrame(update);
          } else {
            el.textContent = prefix + target.toLocaleString() + suffix;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        }
        update();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    obs.observe(el);
  });
}

// ============================================================
// 4. STAGGER ANIMATIONS
// ============================================================
function initStagger() {
  var containers = document.querySelectorAll('[data-stagger]');
  containers.forEach(function(container) {
    var children = container.children;
    var delay = parseInt(container.getAttribute('data-stagger-delay')) || 80;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          Array.from(children).forEach(function(child, i) {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            child.style.transitionDelay = i * delay + 'ms';
            setTimeout(function() {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, 50);
          });
          obs.unobserve(container);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(container);
  });
}

// ============================================================
// 5. RIPPLE EFFECT ON BUTTONS
// ============================================================
function initRipple() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-ripple, .search-btn, .submit-btn, .qz-btn, .gen-btn, .emergency-btn, .action-btn.primary, .rec-action, .done-wa, .done-tg, [onclick*="btn"], [onclick*="send"], [onclick*="submit"]');
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var r = document.createElement('span');
    r.className = 'af-ripple';
    var size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = (e.clientX - rect.left - size / 2) + 'px';
    r.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(r);
    setTimeout(function() { r.remove(); }, 600);
  });
}

// ============================================================
// 6. PARALLAX HERO
// ============================================================
function initParallax() {
  var hero = document.querySelector('[data-parallax]');
  if (!hero) return;
  var speed = parseFloat(hero.getAttribute('data-parallax-speed')) || 0.3;
  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * speed + 'px';
  });
}

// ============================================================
// 7. GLOW ON ELEMENTS
// ============================================================
function initGlow() {
  var els = document.querySelectorAll('[data-glow]');
  els.forEach(function(el) {
    var color = el.getAttribute('data-glow-color') || 'rgba(184,0,24,0.3)';
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    var glow = document.createElement('div');
    glow.className = 'af-glow';
    glow.style.cssText = 'position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at center,' + color + ',transparent 70%);opacity:0;pointer-events:none;transition:opacity 0.4s;';
    el.appendChild(glow);
    el.addEventListener('mouseenter', function() { glow.style.opacity = '1'; });
    el.addEventListener('mouseleave', function() { glow.style.opacity = '0'; });
  });
}

// ============================================================
// 8. SKELETON LOADER
// ============================================================
function showSkeleton(containerId, count, type) {
  var container = document.getElementById(containerId);
  if (!container) return;
  type = type || 'card';
  var html = '';
  for (var i = 0; i < count; i++) {
    if (type === 'card') {
      html += '<div class="af-skeleton" style="height:120px;border-radius:14px;margin-bottom:10px"></div>';
    } else if (type === 'row') {
      html += '<div class="af-skeleton" style="height:52px;border-radius:10px;margin-bottom:8px"></div>';
    } else if (type === 'text') {
      html += '<div class="af-skeleton" style="height:16px;border-radius:4px;margin-bottom:8px;width:' + (70 + Math.random() * 30) + '%"></div>';
    }
  }
  container.innerHTML = html;
}

function hideSkeleton(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.af-skeleton').forEach(function(s) {
    s.style.opacity = '0';
    s.style.transform = 'scale(0.96)';
    s.style.transition = 'all 0.3s';
    setTimeout(function() { s.remove(); }, 300);
  });
}

// ============================================================
// 9. TYPEWRITER EFFECT
// ============================================================
function initTypewriter() {
  var els = document.querySelectorAll('[data-typewriter]');
  els.forEach(function(el) {
    var text = el.getAttribute('data-typewriter');
    var speed = parseInt(el.getAttribute('data-typewriter-speed')) || 40;
    el.textContent = '';
    el.style.visibility = 'visible';
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    var obs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        setTimeout(type, 300);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

// ============================================================
// 10. FLOATING DECORATIVE ELEMENTS
// ============================================================
function initFloating() {
  var els = document.querySelectorAll('[data-float]');
  els.forEach(function(el) {
    var d = parseInt(el.getAttribute('data-float-distance')) || 10;
    var dur = parseInt(el.getAttribute('data-float-duration')) || 3000;
    var delay = Math.random() * 2000;
    el.style.animation = 'afFloat ' + dur + 'ms ease-in-out ' + delay + 'ms infinite alternate';
    var style = document.createElement('style');
    style.textContent = '@keyframes afFloat { from { transform: translateY(0); } to { transform: translateY(-' + d + 'px); } }';
    document.head.appendChild(style);
  });
}

// ============================================================
// 11. INTERSECTION OBSERVER ENTRANCE
// ============================================================
function initReveal() {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('af-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    obs.observe(el);
  });
}

// ============================================================
// 12. LIVE TIMER FOR SLA
// ============================================================
function initTimers() {
  var timers = document.querySelectorAll('[data-timer]');
  timers.forEach(function(el) {
    var total = parseInt(el.getAttribute('data-timer'));
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var secs = h * 3600 + m * 60 + s;
    var remaining = total - secs;
    if (remaining < 0) remaining = 0;
    var rh = Math.floor(remaining / 3600);
    var rm = Math.floor((remaining % 3600) / 60);
    var rs = remaining % 60;
    el.textContent = String(rh).padStart(2, '0') + ':' + String(rm).padStart(2, '0') + ':' + String(rs).padStart(2, '0');
    setInterval(function() {
      var d2 = new Date();
      var h2 = d2.getHours();
      var m2 = d2.getMinutes();
      var s2 = d2.getSeconds();
      var secs2 = h2 * 3600 + m2 * 60 + s2;
      var remaining2 = total - secs2;
      if (remaining2 < 0) remaining2 = 0;
      var rh2 = Math.floor(remaining2 / 3600);
      var rm2 = Math.floor((remaining2 % 3600) / 60);
      var rs2 = remaining2 % 60;
      el.textContent = String(rh2).padStart(2, '0') + ':' + String(rm2).padStart(2, '0') + ':' + String(rs2).padStart(2, '0');
    }, 1000);
  });
}

// ============================================================
// 13. SMOOTH PAGE TRANSITIONS
// ============================================================
function initPageTransition() {
  var links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="tel:"]):not([href^="javascript"])');
  links.forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || href.indexOf('/antifraud-kz/') === -1 && href.indexOf('.html') === -1) return;
    if (href.indexOf('#') >= 0) return;
    a.addEventListener('click', function(e) {
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      e.preventDefault();
      var overlay = document.createElement('div');
      overlay.className = 'af-page-transition';
      document.body.appendChild(overlay);
      setTimeout(function() {
        window.location.href = href;
      }, 400);
    });
  });
}

// ============================================================
// 14. MAGNETIC BUTTONS
// ============================================================
function initMagnetic() {
  var els = document.querySelectorAll('[data-magnetic]');
  els.forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = 'translate(' + x * 0.3 + 'px, ' + y * 0.3 + 'px)';
    });
    el.addEventListener('mouseleave', function() {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseenter', function() {
      el.style.transition = 'transform 0.1s ease';
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // Only init cursor on non-touch devices
  if (!('ontouchstart' in window) && window.innerWidth > 768) {
    initCursor();
  }
  initParticles();
  initCounters();
  initStagger();
  initRipple();
  initParallax();
  initGlow();
  initTypewriter();
  initFloating();
  initReveal();
  initTimers();
  initMagnetic();
  // Page transition disabled by default — uncomment for SPA-like feel
  // if (!document.querySelector('.no-transition')) initPageTransition();
});

window.AntiFraudEffects = {
  showSkeleton: showSkeleton,
  hideSkeleton: hideSkeleton
};

})();
