/**
 * =============================================================================
 * APP.JS — Core Application Logic
 * =============================================================================
 * You should NOT need to edit this file during normal maintenance.
 * All content configuraion lives in config/slides.js
 * =============================================================================
 */

// ---------------------------------------------------------------------------
// STATE
// ---------------------------------------------------------------------------
const State = {
  currentSlideIndex: 0,  // 0-based index into SLIDE_CONFIG.slides [CHANGE BACK TO ZERO WHEN DONE EDITING SLIDES]
  history: [],           // navigation stack for dynamic Back behavior
  isTransitioning: false,
  sourceDrawerOpen: false,
  lang: "en", //Language var
};

// ---------------------------------------------------------------------------
// DOM REFERENCES
// ---------------------------------------------------------------------------
const DOM = {
  slideImage: document.getElementById("slide-image"),
  overlayLayer: document.getElementById("overlay-layer"),
  sourceDrawer: document.getElementById("source-drawer"),
  drawerTitle: document.getElementById("drawer-title"),
  drawerDescription: document.getElementById("drawer-description"),
  drawerVisitBtn: document.getElementById("drawer-visit-btn"),
  drawerCloseBtn: document.getElementById("drawer-close-btn"),
  drawerBackdrop: document.getElementById("drawer-backdrop"),
  loadingScreen: document.getElementById("loading-screen"),
  slideContainer: document.getElementById("slide-container"),
};

// ---------------------------------------------------------------------------
// NAVIGATION — History Stack
// ---------------------------------------------------------------------------

/**
 * Navigate to a slide by its 1-based ID.
 * addToHistory: push current slide onto the back-stack before navigating.
 */
function goToSlide(slideId, addToHistory = true) {
  if (State.isTransitioning) return;

  const targetIndex = SLIDE_CONFIG.slides.findIndex((s) => s.id === slideId);
  if (targetIndex === -1) {
    console.warn(`[CivicSlides] Slide ID ${slideId} not found.`);
    return;
  }

  if (addToHistory) {
    State.history.push(State.currentSlideIndex);
  }

  State.currentSlideIndex = targetIndex;
  renderSlide();
}

/** Go to the next slide in linear order. */
function goNext() {
  const nextIndex = State.currentSlideIndex + 1;
  if (nextIndex >= SLIDE_CONFIG.slides.length) return;
  const nextSlide = SLIDE_CONFIG.slides[nextIndex];
  goToSlide(nextSlide.id, true);
}

/**
 * Go back — pops the history stack.
 * If stack is empty, does nothing (already at start).
 */
function goBack() {
  if (State.history.length === 0) return;
  const previousIndex = State.history.pop();
  State.currentSlideIndex = previousIndex;
  // Do NOT push to history — we're going back, not forward
  renderSlide();
}

/** Go home — clear all history and return to slide 1. */
function goHome() {
  State.history = [];
  State.currentSlideIndex = 0;
  renderSlide();
}

// ---------------------------------------------------------------------------
// RENDERING
// ---------------------------------------------------------------------------

function renderSlide() {
  const slide = SLIDE_CONFIG.slides[State.currentSlideIndex];
  const transition = SLIDE_CONFIG.settings.transition;

  State.isTransitioning = true;

  const doRender = () => {
    // Update slide image
    const folder = State.lang === "es" ? "slides-es" : "slides";
    DOM.slideImage.src = slide.image.replace(/^slides\//, `${folder}/`);
    DOM.slideImage.alt = slide.alt || `Slide ${slide.id}`;

    // Rebuild overlay layer (buttons + GIFs)
    renderOverlayLayer(slide);

    fitOverlayToImage();

    // Re-enable transitioning after animation
    if (transition === "none") {
      State.isTransitioning = false;
    }
  };

  if (transition === "fade") {
    DOM.slideContainer.classList.add("transitioning");
    setTimeout(() => {
      doRender();
      DOM.slideContainer.classList.remove("transitioning");
      State.isTransitioning = false;
    }, 200);
  } else if (transition === "slide") {
    DOM.slideContainer.classList.add("slide-out");
    setTimeout(() => {
      doRender();
      DOM.slideContainer.classList.remove("slide-out");
      DOM.slideContainer.classList.add("slide-in");
      setTimeout(() => {
        DOM.slideContainer.classList.remove("slide-in");
        State.isTransitioning = false;
      }, 250);
    }, 200);
  } else {
    doRender();
    State.isTransitioning = false;
  }
}

// ---------------------------------------------------------------------------
// OVERLAY LAYER — Buttons and GIFs
// ---------------------------------------------------------------------------

function renderOverlayLayer(slide) {
  // Clear existing overlays
  DOM.overlayLayer.innerHTML = "";

  const disabledIds = slide.disableGlobal || [];

  // 1. Render GIF/media overlays first (below buttons)
  (slide.overlays || []).forEach((overlay) => {
    const el = document.createElement("img");
    el.src = overlay.src;
    el.alt = overlay.alt || "";
    el.className = "gif-overlay";
    el.style.top = overlay.top;
    el.style.left = overlay.left;
    el.style.width = overlay.width;
    applyStyles(el);
    DOM.overlayLayer.appendChild(el);
  });

  // 2. Render global buttons (unless disabled for this slide)
  SLIDE_CONFIG.globalButtons.forEach((btnConfig) => {
    if (disabledIds.includes(btnConfig.id)) return;
    renderButton(btnConfig);
  });

  // 3. Render slide-specific buttons
  (slide.buttons || []).forEach((btnConfig) => {
    renderButton(btnConfig);
  });
}

function renderButton(cfg) {
  const btn = document.createElement("button");
  btn.className = "overlay-btn";
  btn.setAttribute("data-id", cfg.id);
  btn.setAttribute("aria-label", cfg.label || cfg.action);
  btn.setAttribute("title", cfg.label || "");

  // Position
  btn.style.top = cfg.top;
  btn.style.left = cfg.left;
  btn.style.width = cfg.width;
  btn.style.height = cfg.height;

  // Debug mode: show button outlines so you can position them
  if (SLIDE_CONFIG.settings.debugButtons) {
    btn.classList.add("debug");
  }

  // Wire up action
  btn.addEventListener("click", () => handleButtonAction(cfg));
  btn.addEventListener("touchend", (e) => {
    e.preventDefault(); // Prevents 300ms tap delay on mobile
    handleButtonAction(cfg);
  });

  DOM.overlayLayer.appendChild(btn);
}

function applyStyles(el) {
  el.style.position = "absolute";
  el.style.pointerEvents = "none"; // GIFs don't block clicks
}

function fitOverlayToImage() {
  const container = DOM.slideContainer;
  const img = DOM.slideImage;

  const containerW = container.clientWidth;
  const containerH = container.clientHeight;

  const imageRatio = 16 / 9;
  const containerRatio = containerW / containerH;

  let visibleW, visibleH;

  if (containerRatio > imageRatio) {
    // Black bars on left/right
    visibleH = containerH;
    visibleW = containerH * imageRatio;
  } else {
    // Black bars on top/bottom
    visibleW = containerW;
    visibleH = containerW / imageRatio;
  }

  const offsetX = (containerW - visibleW) / 2;
  const offsetY = (containerH - visibleH) / 2;

  DOM.overlayLayer.style.width  = `${visibleW}px`;
  DOM.overlayLayer.style.height = `${visibleH}px`;
  DOM.overlayLayer.style.left   = `${offsetX}px`;
  DOM.overlayLayer.style.top    = `${offsetY}px`;
}



// ---------------------------------------------------------------------------
// BUTTON ACTION HANDLER
// ---------------------------------------------------------------------------

function handleButtonAction(cfg) {
  closeSourceDrawer(); // Close drawer if open when any button is pressed

  switch (cfg.action) {
    case "next":
      goNext();
      break;

    case "back":
      goBack();
      break;

    case "home":
      goHome();
      break;

    case "goto":
      if (cfg.target !== undefined) {
        goToSlide(cfg.target, true);
      }
      break;

    case "source":
      handleSourceAction(cfg);
      break;

    case "external":
      if (cfg.url) {
        window.open(cfg.url, "_blank", "noopener,noreferrer");
      }
      break;
    
    case "calendar":
      handleCalendarAction(cfg);
      break;

    case "language":
      State.lang = cfg.target;
      if (cfg.then === "next") {
        goNext();
      } else if (cfg.then === "back") {
        goBack();
      } else if (cfg.then === "goto" && cfg.thenTarget !== undefined) {
        goToSlide(cfg.thenTarget);
      } else {
        renderSlide(); // just re-render in new language if no follow-up
      }
      break;

    default:
      console.warn(`[CivicSlides] Unknown action: ${cfg.action}`);
  }
}

// ---------------------------------------------------------------------------
// SOURCE BEHAVIOR — Plan A (drawer) or Plan B (new tab)
// ---------------------------------------------------------------------------

function handleSourceAction(cfg) {
  const behavior = SLIDE_CONFIG.settings.sourceBehavior;

  if (behavior === "drawer") {
    openSourceDrawer(cfg);
  } else {
    // Plan B: just open in new tab
    if (cfg.url) {
      window.open(cfg.url, "_blank", "noopener,noreferrer");
    }
  }
}

function openSourceDrawer(cfg) {
  const isEs = State.lang === "es";

  DOM.drawerTitle.textContent = cfg.title || "Source";
  DOM.drawerTitle.textContent =
    isEs && cfg.titleEs ? cfg.titleEs : (cfg.title || "Source");

  DOM.drawerDescription.textContent =
    isEs && cfg.descriptionEs ? cfg.descriptionEs : (cfg.description || "Visit the source for more information.");

  DOM.drawerVisitBtn.textContent =
    isEs ? "Visitar Fuente " : "Visit Source ";

  DOM.drawerVisitBtn.href = cfg.url || "#";

  DOM.sourceDrawer.classList.add("open");
  DOM.drawerBackdrop.classList.add("visible");
  State.sourceDrawerOpen = true;

  // Trap focus in drawer for accessibility
  setTimeout(() => DOM.drawerCloseBtn.focus(), 50);
}

function closeSourceDrawer() {
  if (!State.sourceDrawerOpen) return;
  DOM.sourceDrawer.classList.remove("open");
  DOM.drawerBackdrop.classList.remove("visible");
  State.sourceDrawerOpen = false;
}

// ---------------------------------------------------------------------------
// KEYBOARD NAVIGATION
// ---------------------------------------------------------------------------

document.addEventListener("keydown", (e) => {
  if (State.sourceDrawerOpen) {
    if (e.key === "Escape") closeSourceDrawer();
    return;
  }
  if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") goBack();
  if (e.key === "Home") goHome();
});

// ---------------------------------------------------------------------------
// SWIPE NAVIGATION (Mobile)
// ---------------------------------------------------------------------------

let touchStartX = 0;
let touchStartY = 0;

DOM.slideContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

DOM.slideContainer.addEventListener("touchend", (e) => {
  if (State.sourceDrawerOpen) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Only trigger on horizontal swipes, ignore vertical scrolling
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    if (dx < 0) goNext();  // Swipe left = next
    if (dx > 0) goBack();  // Swipe right = back
  }
}, { passive: true });

// ---------------------------------------------------------------------------
// DRAWER EVENT LISTENERS
// ---------------------------------------------------------------------------

DOM.drawerCloseBtn.addEventListener("click", closeSourceDrawer);
DOM.drawerBackdrop.addEventListener("click", closeSourceDrawer);

// Prevent closing when clicking inside the drawer
DOM.sourceDrawer.addEventListener("click", (e) => e.stopPropagation());

// ---------------------------------------------------------------------------
// LOADING — Preload first slide image
// ---------------------------------------------------------------------------

function init() {
  if (!SLIDE_CONFIG.slides.length) {
    console.error("[CivicSlides] No slides configured.");
    return;
  }

  // Preload first image, then show app
  const firstSlide = SLIDE_CONFIG.slides[0];
  const img = new Image();
  img.onload = () => {
    renderSlide();
    setTimeout(() => {
      DOM.loadingScreen.classList.add("hidden");
    }, 400);
  };
  img.onerror = () => {
    // Image failed (probably placeholder path), show app anyway
    renderSlide();
    DOM.loadingScreen.classList.add("hidden");
  };
  img.src = firstSlide.image;
}

// ---------------------------------------------------------------------------
// CALENDAR FUNCTION FOR ELECTION DATE
// ---------------------------------------------------------------------------
function handleCalendarAction(cfg) {
  const { title, description, location, startDate, endDate, allDay } = cfg;

  // Format: YYYYMMDDTHHMMSS or YYYYMMDD for all-day events
  const formatDate = (dateStr, isAllDay) => {
    return dateStr.replace(/[-:]/g, "").replace("T", "T").split(".")[0];
  };

  const start = allDay ? startDate.replace(/-/g, "") : formatDate(startDate);
  const end   = allDay
    ? (endDate || startDate).replace(/-/g, "")
    : formatDate(endDate || startDate);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Alabama Civic Guide//EN",
    "BEGIN:VEVENT",
    `SUMMARY:${title || "Important Date"}`,
    `DESCRIPTION:${description || ""}`,
    `LOCATION:${location || ""}`,
    allDay ? `DTSTART;VALUE=DATE:${start}` : `DTSTART:${start}`,
    allDay ? `DTEND;VALUE=DATE:${end}`   : `DTEND:${end}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  // Trigger download
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `${(title || "event").replace(/\s+/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

// ---------------------------------------------------------------------------
// START
// ---------------------------------------------------------------------------
init();

window.addEventListener("resize", () => {   // ← add this after init()
  fitOverlayToImage();
});