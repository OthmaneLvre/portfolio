document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("form-confirmation");

  if (form && confirmation) {
    form.addEventListener("submit", function () {
      confirmation.classList.add("visible");
      confirmation.style.display = "block";
      form.reset();
      setTimeout(() => {
        confirmation.classList.remove("visible");
        setTimeout(() => {
          confirmation.style.display = "none";
        }, 400);
      }, 5000);
    });
  }
});

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  links.classList.toggle('show');
});

