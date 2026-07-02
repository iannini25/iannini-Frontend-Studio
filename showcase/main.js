/* ═══════════════════════════════════════════════════════════════════
   FRONTEND STUDIO KIT · SHOWCASE · motion
   Stack: GSAP 3.13 + ScrollTrigger + SplitText + Lenis 1.3 (skill scroll-cinematic).
   Regras duras: só transform/opacity · um motor por elemento ·
   prefers-reduced-motion desliga scroll-motion · mobile sem pin (não há pin).
   Justificativa de cada animação (regra "motion motivado"):
     1. Herói SplitText  -> momento cinematográfico 1 (assinatura de abertura).
     2. Morph de fundo   -> assinatura da página: cada capítulo veste sua pele.
     3. Scrub de palavras-> desejo (AIDA) no capítulo conversão.
     4. Batch reveals    -> hierarquia de leitura ao entrar em cada bloco.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Menu mobile (CSS transitions; funciona também sem GSAP/reduced) ── */
  var burger = document.querySelector('.nav-burger');
  var overlay = document.getElementById('nav-overlay');
  if (burger && overlay) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
      overlay.classList.toggle('open', !open);
    });
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Abrir menu');
        overlay.classList.remove('open');
      });
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasStack = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  /* Sem stack (offline) ou com reduced-motion: página estática íntegra.
     body fica sem .js-motion -> CSS aplica fundos por seção e mostra tudo. */
  if (reduce || !hasStack) { return; }

  document.body.classList.add('js-motion');

  gsap.registerPlugin(ScrollTrigger);
  if (typeof SplitText !== 'undefined') { gsap.registerPlugin(SplitText); }

  /* ── Lenis + GSAP dividem o mesmo tick (receita da skill) ── */
  var lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);

    /* âncoras da nav passam pelo Lenis */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: 0 }); }
      });
    });
  }

  /* ── 1 · Herói: reveal tipográfico (momento cinematográfico 1) ── */
  if (typeof SplitText !== 'undefined') {
    var split = new SplitText('.hero-title', { type: 'chars, words', mask: 'chars' });
    gsap.from(split.chars, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.02,
      duration: 0.9,
      ease: 'power4.out',
      delay: 0.15
    });
  } else {
    gsap.from('.hero-title', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' });
  }
  gsap.from('#hero .hero-eyebrow, #hero .hero-sub, #hero .hero-ctas', {
    opacity: 0,
    y: 16,
    duration: 0.8,
    stagger: 0.09,
    ease: 'power3.out',
    delay: 0.5
  });

  /* ── 2 · Morph de fundo entre capítulos (opacity-only, scrub) ── */
  document.querySelectorAll('.chapter[data-bg]').forEach(function (section) {
    var id = section.getAttribute('data-bg');
    if (id === 'none') { return; }
    var layer = document.getElementById(id);
    if (!layer) { return; }

    /* o layer fica opaco ANTES da faixa de reveal ('top 86%'):
       texto escuro do capítulo claro nunca aparece sobre fundo escuro */
    gsap.to(layer, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top 60%',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    gsap.to(layer, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'bottom 70%',
        end: 'bottom 25%',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  /* nav escurece levemente sobre os capítulos claros: opacidade da própria
     pílula já resolve contraste (fundo escuro fixo da pílula), nada a animar. */

  /* ── 3 · Conversão: palavras do manifesto em scrub (AIDA / desejo) ── */
  var scrubPara = document.querySelector('.conv-scrub');
  if (scrubPara && typeof SplitText !== 'undefined') {
    var words = new SplitText(scrubPara, { type: 'words', wordsClass: 'word' }).words;
    gsap.to(words, {
      opacity: 1,
      stagger: 0.35,
      ease: 'none',
      scrollTrigger: {
        trigger: scrubPara,
        start: 'top 80%',
        end: 'bottom 45%',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  } else if (scrubPara) {
    scrubPara.style.opacity = '1';
  }

  /* ── 4 · Reveals em lote (hierarquia de entrada) ── */
  ScrollTrigger.batch('.reveal', {
    start: 'top 86%',
    once: true,
    onEnter: function (els) {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
        overwrite: true
      });
    }
  });

  /* garantia: nada fica invisível se um trigger não disparar (resize, etc.) */
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
