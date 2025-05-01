document.querySelector("form").addEventListener("submit", function(e){ // Ecouteur d'événement pour le formulaire d'inscription
     e.preventDefault(); // Empêche le rechargement de la page
     const user = { // Crée un objet utilisateur
        nom : document.getElementById("nom").value, // Récupère le nom
        prenom : document.getElementById("prenom").value, // Récupère le prénom
        email : document.getElementById("email").value, // Récupère l'email
        password : document.getElementById("password").value // Récupère le mot de passe
        };

        let users = JSON.parse(localStorage.getItem("users")) || []; // Récupère les utilisateurs du localStorage ou crée un tableau vide
        users.push(user); // Ajoute l'utilisateur au tableau
        localStorage.setItem("users", JSON.stringify(users)); // Enregistre le tableau d'utilisateurs dans le localStorage
        alert("Inscription réussie !"); // Alerte de succès
        window.location.href = "dashboard.html"; // Redirige vers la page dashboard
}); // Fin de l'écouteur d'événement