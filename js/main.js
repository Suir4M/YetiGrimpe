// Yeti 85 – proposition de refonte
// Deux petites choses : le menu mobile, et la mise en avant du jour courant dans le planning.

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');

  function closeMenu(returnFocus) {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);
    });
  }

  // Dimanche = 0 ... samedi = 6, comme Date.getDay()
  var today = new Date().getDay();
  document.querySelectorAll('.day[data-day]').forEach(function (day) {
    if (Number(day.dataset.day) === today) day.classList.add('is-today');
  });
})();
