// On attend que le HTML soit chargé avant d'exécuter le script
const formulaire = document.getElementById("contact-form");
const messageFeedback = document.getElementById("form-feedback");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (nom === "" || email === "" || message === "") {
    messageFeedback.textContent = "Merci de remplir tous les champs obligatoires.";
    messageFeedback.style.color = "red";
    return;
  }

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailValide) {
    messageFeedback.textContent = "Merci d'entrer une adresse email valide.";
    messageFeedback.style.color = "red";
    return;
  }

  messageFeedback.textContent = "Merci " + nom + ", votre message a bien été envoyé !";
  messageFeedback.style.color = "green";

  formulaire.reset();
});