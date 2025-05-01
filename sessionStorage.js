document.getElementById("loginForm").addEventListener("submit", function(e){// Ecouteur d'événement pour le formulaire de connexion)
    e.preventDefault(); // Empeche le rechargemant de la ppage
    const email = document.getElementById("email").value; // Récupère l'email
    const password = document.getElementById("password").value; // Récupère le mot de passe

    const users = JSON.parse(localStorage.getItem("users")) || []; // Récupère les utilisateurs du localStorage ou crée un tableau vide
    const user = users.find(user => user.email === email && user.password === password); // Cherche l'utilisateur avec l'email et le mot de passe
    if(user){ // si l'utilisateur existe
        sessionStorage.setItem("userEmail", email); // Enregistre l'email de l'utilisateur dans le sessionStorage
        window.location.href =  "dashboard.html"; // Redirige vers la page dashboard
      } else{
        alert("Identifiants incorrects . Veuillez vous inscrire."); // Alerte d'erreur
        window.location.href = "example.html"; // Redirige vers la page d'inscription
      }
});