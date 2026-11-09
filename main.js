/* ==========================================================================
   ROHAN / SHARED BEHAVIOUR
   No framework, no build step. Two pages load this one file.
   ========================================================================== */

(() => {
  "use strict";

  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const modal = document.getElementById("profile-modal");
  const profileTriggers = document.querySelectorAll("[data-profile-toggle]");
  const closeProfileTriggers = document.querySelectorAll("[data-close-profile]");
  const profileCard = modal?.querySelector(".profile-card");
  const saveContact = modal?.querySelector("[data-save-contact]");
  const profileNote = modal?.querySelector(".profile-card__note");

  let lastFocused = null;

  /* ------------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------------ */

  function setMenu(open) {
    if (!nav || !navToggle) return;

    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);

    // One overlay at a time. The card wins if both were somehow open.
    if (open) closeProfile();
  }

  navToggle?.addEventListener("click", () => {
    setMenu(!nav?.classList.contains("is-open"));
  });

  nav?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 768px)").matches) setMenu(false);
  });

  /* ------------------------------------------------------------------------
     Digital business card
     ------------------------------------------------------------------------ */

  function openProfile() {
    if (!modal || !profileCard) return;

    lastFocused = document.activeElement;
    setMenu(false);
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    profileTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "true"));
    document.body.classList.add("modal-open");

    // Focus the dialog itself so the first Tab lands on the close button.
    profileCard.focus();

    if (profileNote) profileNote.textContent = "";
  }

  function closeProfile() {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    profileTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    document.body.classList.remove("modal-open");

    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  }

  profileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (modal?.classList.contains("show")) {
        closeProfile();
      } else {
        openProfile();
      }
    });
  });

  closeProfileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", closeProfile);
  });

  // Keep Tab inside the card. It is a modal, not a dropdown.
  modal?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusables = Array.from(
      modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
    ).filter((element) => element.offsetParent !== null);

    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (document.activeElement === profileCard) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (modal?.classList.contains("show")) closeProfile();
    if (nav?.classList.contains("is-open")) setMenu(false);
  });

  /* ------------------------------------------------------------------------
     vCard download
     A plain string and a Blob. No library, no backend.
     ------------------------------------------------------------------------ */

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Rohan",
    "N:Rohan;;;;",
    "TITLE:Independent developer",
    "EMAIL;TYPE=INTERNET:rohan922007@gmail.com",
    "URL:https://github.com/RohanKodesss",
    "NOTE:I build AI products and small web tools end to end.",
    "END:VCARD",
  ].join("\r\n");

  saveContact?.addEventListener("click", () => {
    try {
      const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "rohan.vcf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.setTimeout(() => URL.revokeObjectURL(url), 1000);

      if (profileNote) profileNote.textContent = "Contact card downloaded.";
    } catch (error) {
      // Safari on some locked-down setups blocks programmatic downloads.
      if (profileNote) profileNote.textContent = "Could not download. Use the email link instead.";
    }
  });

  /* ------------------------------------------------------------------------
     Scroll reveal
     One observer, one class. Items unobserve after they appear.
     ------------------------------------------------------------------------ */

  const revealNodes = Array.from(document.querySelectorAll("[data-reveal]"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          instance.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-in"));
  }
})();
