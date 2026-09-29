const formulaire = document.getElementById("contact-form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();

    formData.append("access_key", "781c3964-5b9a-473a-b679-129581b61303");
    formData.append("name", nom);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if (data.success) {
            alert("Message envoyé avec succès !");
            formulaire.reset();
        } else {
            alert("Une erreur est survenue.");
        }

    })
    .catch(function() {
        alert("Impossible d'envoyer le message.");
    });
});