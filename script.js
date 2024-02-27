function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -200;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    if (window.pageYOffset !== y) {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

// Start Hero Animate
document.addEventListener("DOMContentLoaded", function () {
  var headingHero = document.getElementById("headingHero");
  headingHero.addEventListener("animationend", function () {
    var boldElements = document.querySelectorAll(".heading-hero .bold");
    boldElements.forEach(function (element) {
      element.classList.add("to-bold");
    });
  });
});

// Start About Animate
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle animation when about section comes into view
function animateAboutSection() {
  const aboutSection = document.getElementById("aboutSection");
  if (isInViewport(aboutSection)) {
    aboutSection.classList.add("animate");
    // Remove the event listener after the animation is triggered once
    window.removeEventListener("scroll", animateAboutSection);
  }
}

window.addEventListener("scroll", animateAboutSection);

// Start Experience Animate
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle animation when about section comes into view
function animateExpSection() {
  const expSection = document.getElementById("expSection");
  if (isInViewport(expSection)) {
    expSection.classList.add("animate");
    // Remove the event listener after the animation is triggered once
    window.removeEventListener("scroll", animateExpSection);
  }
}

// Add event listener to trigger animation when the page is scrolled
window.addEventListener("scroll", animateExpSection);

// Start Project Animate
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle animation when about section comes into view
function animateProjectSection() {
  const projectSection = document.getElementById("projectSection");
  if (isInViewport(projectSection)) {
    projectSection.classList.add("animate");
    // Remove the event listener after the animation is triggered once
    window.removeEventListener("scroll", animateProjectSection);
  }
}

// Add event listener to trigger animation when the page is scrolled
window.addEventListener("scroll", animateProjectSection);
