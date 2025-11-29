document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavMenu();
  initDropdowns();
  initHeroSlider();
  initScrollButtons();
  initExpandableBlocks();
  initTestimonialCarousel();
  initContactForm();
  initRevealOnScroll();
  setCurrentYear();
});

function initThemeToggle() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  const storageKey = "as-electricals-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);
  toggle.setAttribute("aria-pressed", initialTheme === "dark");

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(storageKey, next);
    toggle.setAttribute("aria-pressed", next === "dark");
  });
}

function initNavMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  });
}

function initDropdowns() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  dropdowns.forEach((drop) => {
    const trigger = drop.querySelector("[data-dropdown-trigger]");
    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop) return;
      event.preventDefault();
      const isOpen = drop.getAttribute("data-open") === "true";
      drop.setAttribute("data-open", String(!isOpen));
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function initHeroSlider() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const slides = hero.querySelectorAll("[data-hero-slide]");
  const dots = hero.querySelectorAll("[data-hero-dot]");
  const prevBtn = hero.querySelector("[data-hero-prev]");
  const nextBtn = hero.querySelector("[data-hero-next]");
  if (!slides.length || !dots.length) return;

  let current = 0;
  let autoPlay = true;

  const setActive = (index) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("is-active", idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === index);
      dot.setAttribute("aria-selected", String(idx === index));
    });
    current = index;
  };

  const next = () => setActive((current + 1) % slides.length);
  const prev = () => setActive((current - 1 + slides.length) % slides.length);

  let intervalId = setInterval(() => {
    if (autoPlay) next();
  }, 6000);

  const pause = () => (autoPlay = false);
  const resume = () => (autoPlay = true);

  hero.addEventListener("mouseenter", pause);
  hero.addEventListener("mouseleave", resume);

  prevBtn?.addEventListener("click", () => {
    pause();
    prev();
  });

  nextBtn?.addEventListener("click", () => {
    pause();
    next();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      pause();
      setActive(idx);
    });
  });

  setActive(0);

  hero.addEventListener("touchstart", pause, { passive: true });
  hero.addEventListener("touchend", resume);
}

function initScrollButtons() {
  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-target");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initExpandableBlocks() {
  document.querySelectorAll("[data-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-expand");
      if (!targetId) return;
      const target = document.querySelector(`[data-expand-target="${targetId}"]`);
      if (!target) return;
      const isExpanded = target.classList.toggle("is-expanded");
      button.textContent = isExpanded ? "Show Less" : "Read More";
    });
  });
}

function initTestimonialCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-carousel-track]");
  const cards = carousel.querySelectorAll(".testimonial-card");
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  if (!track || !cards.length) return;

  let cardsPerView = getCardsPerView();
  let current = 0;

  function getCardsPerView() {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function clampIndex(value) {
    const max = Math.max(cards.length - cardsPerView, 0);
    return Math.min(Math.max(value, 0), max);
  }

  function update() {
    carousel.style.setProperty("--cards-per-view", cardsPerView);
    const offset = (100 / cardsPerView) * current;
    track.style.transform = `translateX(-${offset}%)`;
    if (prevBtn) prevBtn.toggleAttribute("disabled", current === 0);
    if (nextBtn) nextBtn.toggleAttribute("disabled", current >= cards.length - cardsPerView);
  }

  prevBtn?.addEventListener("click", () => {
    current = clampIndex(current - cardsPerView);
    update();
  });

  nextBtn?.addEventListener("click", () => {
    current = clampIndex(current + cardsPerView);
    update();
  });

  window.addEventListener("resize", () => {
    cardsPerView = getCardsPerView();
    current = clampIndex(current);
    update();
  });

  update();
}

function initContactForm() {
  const forms = document.querySelectorAll("[data-contact-form]");
  if (!forms.length) return;

  forms.forEach((form) => {
    const status = form.querySelector("[data-form-status]");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!status || !submitBtn) return;

      submitBtn.disabled = true;
      const original = submitBtn.textContent;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Message Sent!";
        status.hidden = false;
        status.textContent = "✅ Thanks! We'll get back to you shortly.";
        form.reset();

        setTimeout(() => {
          submitBtn.textContent = original;
          status.hidden = true;
        }, 2500);
      }, 1000);
    });
  });
}

function initRevealOnScroll() {
  const animatedEls = document.querySelectorAll("[data-animate]");
  if (!animatedEls.length || typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedEls.forEach((el) => observer.observe(el));
}

function setCurrentYear() {
  const yearSpan = document.querySelector("[data-current-year]");
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
}

