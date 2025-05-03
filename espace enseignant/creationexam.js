document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("examForm"); // Assurez-vous que l'ID du formulaire est correct
    const linkDisplay = document.getElementById("examLink"); // Assurez-vous que l'ID de l'élément où le lien sera affiché est correct

    form.addEventListener("submit", function (e) {
        e.preventDefault();// Empêche le rechargement de la page

        const titre = document.getElementById("titre").value;// Assurez-vous que l'ID du champ titre est correct
        const description = document.getElementById("description").value;// Assurez-vous que l'ID du champ description est correct
        const ppublic = document.getElementById("public").value;// Assurez-vous que l'ID du champ public est correct

        if (!titre || !description || !ppublic) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const uniqueId = Math.random().toString(36).substring(2, 15);// Génère un ID unique aléatoire
        const link = `https://example.com/exam/${uniqueId}`;// Remplacez par l'URL de votre application

        linkDisplay.innerHTML = `Votre examen a été créé avec succès ! Voici le lien : 
        <a href="${link}" target="_blank">${link}</a>`;// Affiche le lien
    });
});
