/* ============================================================
   SHARED SCRIPT — the site nav and the page crossfade.

   Include it exactly where the nav should appear:
     <script src="site.js" data-page="projects"></script>
   data-page marks the current page: home | projects | drivetrain | rc-aircraft
   (case-study pages highlight "Projects").

   The nav is written once, here, so every page shows the same links,
   in the same order, with the same capitalization.
   ============================================================ */
(function () {
  var me = document.currentScript;
  var page = (me && me.getAttribute('data-page')) || '';

  var LINKS = [
    { key: 'home',     label: 'Home',     href: 'index.html' },
    { key: 'projects', label: 'Projects', href: 'projects.html', also: ['drivetrain', 'rc-aircraft'] },
    { key: 'resume',   label: 'Resume',   href: 'Chayanth_Suthahar_Resume.pdf', external: true },
    { key: 'connect',  label: 'Connect',  href: 'https://www.linkedin.com/in/chayanth/', external: true }
    /* TODO(Chay): confirm github.com/Chayanths312 is your profile, then add:
       { key: 'github', label: 'GitHub', href: 'https://github.com/Chayanths312', external: true } */
  ];

  var html = '<nav class="sitenav" aria-label="Primary">';
  LINKS.forEach(function (l) {
    var current = l.key === page || (l.also && l.also.indexOf(page) !== -1);
    html += '<a href="' + l.href + '" data-nav="' + l.key + '"' +
      (l.external ? ' target="_blank" rel="noopener"' : '') +
      (current ? ' aria-current="page"' : '') + '>' + l.label + '</a>';
  });
  html += '</nav>';

  if (me) me.insertAdjacentHTML('beforebegin', html);

  /* ---- smooth crossfade between pages (dissolves through the bg colour) ---- */
  function initCurtain() {
    var c = document.getElementById('curtain');
    if (!c) return;
    var reveal = function () { c.classList.add('clear'); };
    requestAnimationFrame(function () { requestAnimationFrame(reveal); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) reveal(); });

    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a') : null;
      if (!a || a.target === '_blank') return;
      var raw = a.getAttribute('href') || '';
      if (!raw || raw.charAt(0) === '#' || raw.indexOf('mailto:') === 0) return;
      var url;
      try { url = new URL(a.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;          // external → normal
      if (!/\.html$/.test(url.pathname)) return;           // only html pages
      if (url.pathname === location.pathname) return;      // same page → ignore
      e.preventDefault();
      var target = a.href;
      c.classList.remove('clear');
      var done = false, go = function () { if (done) return; done = true; window.location.assign(target); };
      c.addEventListener('transitionend', go, { once: true });
      setTimeout(go, 600);
    });
  }
  /* ---- case-study figures: show the "Image coming soon" slot until the file is uploaded ---- */
  function initFigures() {
    [].forEach.call(document.querySelectorAll('.fig img'), function (img) {
      var fig = img.closest('.fig');
      img.addEventListener('error', function () { fig.classList.add('is-missing'); });
      if (img.complete && img.naturalWidth === 0) fig.classList.add('is-missing');
    });
  }

  function init() { initCurtain(); initFigures(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
