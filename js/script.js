/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      menuBtn.setAttribute("aria-label", "Close menu");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      menuBtn.setAttribute("aria-label", "Open menu");
    }
  });
}


/* ===============================
   CLOSE MOBILE MENU AFTER CLICK
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

    if (menuBtn) {
      const icon = menuBtn.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }

      menuBtn.setAttribute("aria-label", "Open menu");
    }
  });
});


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - 150;

    const sectionBottom =
      sectionTop + section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionBottom
    ) {
      current = section.getAttribute("id");
    }

  });

  links.forEach(link => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === "#" + current) {
      link.classList.add("active");
    }

  });
}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


/* ===============================
   BACK TO TOP
================================ */

const backTop = document.getElementById("backTop");

if (backTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }

  });

  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* ===============================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameInput =
      this.querySelector('input[type="text"]');

    const emailInput =
      this.querySelector('input[type="email"]');

    const select =
      this.querySelector("select");

    const subjectInput =
      this.querySelectorAll('input[type="text"]')[1];

    const message =
      this.querySelector("textarea");

    const name =
      nameInput ? nameInput.value.trim() : "";

    const email =
      emailInput ? emailInput.value.trim() : "";

    const category =
      select ? select.value : "";

    const subject =
      subjectInput ? subjectInput.value.trim() : "";

    const messageText =
      message ? message.value.trim() : "";


    /* Basic validation */

    if (!name || !email || !category || !messageText) {

      alert(
        "Tafadhali jaza sehemu zote muhimu kabla ya kutuma ujumbe."
      );

      return;
    }


    /* Email validation */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert(
        "Tafadhali ingiza email address sahihi."
      );

      return;
    }


    /* Demo submission */

    console.log("Contact Form Data:", {
      name: name,
      email: email,
      category: category,
      subject: subject,
      message: messageText
    });


    alert(
      "Asante " +
      name +
      "! Ujumbe wako umepokelewa.\n\n" +
      "Hii ni demo ya website. " +
      "Kwa website halisi, form hii itaunganishwa na email au database."
    );


    /* Reset form */

    this.reset();

  });

}


/* ===============================
   NEWSLETTER
================================ */

function subscribeNewsletter(event) {

  event.preventDefault();

  const emailInput =
    document.getElementById("newsletterEmail");

  if (!emailInput) {
    return false;
  }

  const email =
    emailInput.value.trim();


  if (!email) {

    alert(
      "Tafadhali ingiza email yako."
    );

    return false;
  }


  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {

    alert(
      "Tafadhali ingiza email address sahihi."
    );

    return false;
  }


  console.log(
    "Newsletter subscription:",
    email
  );


  alert(
    "Asante! " +
    email +
    " imepokelewa kwenye demo ya newsletter."
  );


  emailInput.value = "";

  return false;
}


/* ===============================
   CURRENT YEAR
================================ */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ===============================
   SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (event) {

    const targetId =
      this.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const header =
      document.querySelector("header");

    const headerHeight =
      header ? header.offsetHeight : 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* ===============================
   GALLERY CLICK EFFECT
================================ */

document.querySelectorAll(".gallery-item").forEach(item => {

  item.addEventListener("click", () => {

    const image =
      item.querySelector("img");

    if (!image) {
      return;
    }

    /* Simple image preview */

    const overlay =
      document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.padding = "30px";
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "zoom-out";

    const preview =
      document.createElement("img");

    preview.src = image.src;
    preview.alt = image.alt;

    preview.style.maxWidth = "100%";
    preview.style.maxHeight = "90vh";
    preview.style.width = "auto";
    preview.style.borderRadius = "12px";
    preview.style.boxShadow =
      "0 20px 60px rgba(0,0,0,.5)";

    overlay.appendChild(preview);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

  });

});


/* ===============================
   ESC KEY
   CLOSE GALLERY / MOBILE MENU
================================ */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    /* Close mobile menu */

    if (navLinks) {
      navLinks.classList.remove("open");
    }

    if (menuBtn) {

      const icon =
        menuBtn.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }

    }


    /* Close gallery preview */

    const galleryPreview =
      document.querySelector(
        'body > div[style*="z-index: 9999"]'
      );

    if (galleryPreview) {
      galleryPreview.remove();
    }

  }

});


/* ===============================
   INITIALIZE
================================ */

document.addEventListener("DOMContentLoaded", () => {

  updateActiveNavigation();

  console.log(
    "Iyunga Technical Secondary School website loaded successfully."
  );

});