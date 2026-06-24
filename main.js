/* =================================================================
   Community Corners — main.js
   Tiny, optional enhancements only. The page is fully usable without
   this file: the FAQ uses native <details>, links are real anchors.
   ================================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header shadow once you scroll past the top ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var closeMenu = function () {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });
    // Close after tapping a link, or pressing Escape
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Scroll-reveal: tag the major blocks, then fade them in ---- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .pillar, .card, .step, .rule, .faq details, .callout, .why-credibility, .form-embed"
  );
  if (reduceMotion || !("IntersectionObserver" in window)) {
    // No animation: just make sure everything is visible.
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---- Pause the hero video for reduced-motion visitors ---- */
  if (reduceMotion) {
    var vid = document.querySelector(".hero-video");
    if (vid) { vid.removeAttribute("autoplay"); vid.pause && vid.pause(); }
  }

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
