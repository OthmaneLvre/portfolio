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

const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    links.classList.toggle('show');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi traditionnel

    const data = new FormData(form);

    fetch("https://formspree.io/f/xblyjvgv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    }).then(response => {
      if (response.ok) {
        form.reset(); // Vide le formulaire
        message.classList.remove("hidden"); // Affiche le message
      } else {
        alert("Une erreur est survenue. Merci de réessayer.");
      }
    }).catch(error => {
      alert("Erreur réseau.");
    });
  });
});


