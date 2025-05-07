document.addEventListener("DOMContentLoaded", function(){
    const questionType = document.getElementById("questionType");
    const directeFields = document.getElementById("directeFields");
    const qsmFields = document.getElementById("qsmFields");

    questionType.addEventListener("change", () => {
        directeFields.classList.add("hidden");
        qsmFields.classList.add("hidden");
        if(questionType.value === "directe"){
            directeFields.classList.remove("hidden");
        } else if(questionType.value === "qsm"){
            qsmFields.classList.remove("hidden");
        }
    });

    const form = document.getElementById("questionForm");
    const questionsList = document.getElementById("questionsList");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const type = questionType.value;
        const enonce = document.getElementById("enonce").value;
        const media = document.getElementById("media").files[0]?.name || "";
        const note = document.getElementById("note").value;
        const duree = document.getElementById("duree").value;

        let html = `<div class="question-container"><strong>Type :</strong> ${type}<br><strong>Énoncé :</strong> ${enonce}<br>`;
        if(media) html += `<strong>Média :</strong> ${media}<br>`;

        if(type === "directe"){
            const rep = document.getElementById("reponseDirecte").value;
            const tol = document.getElementById("Tolerance").value;
            html += `<strong>Réponse :</strong> ${rep}<br><strong>Tolérance :</strong> ${tol}%<br>`;
        } else if(type === "qsm"){
            const optionsRaw = document.getElementById("qsmOptions").value.trim().split("\n");
            html += `<strong>Options :</strong><ul>`;
            optionsRaw.forEach(opt => {
                const isCorrect = opt.startsWith("*");
                html += `<li>${isCorrect ? "✅" : "⬜"} ${opt.replace("*", "")}</li>`;
            });
            html += `</ul>`;
        }

        html += `<strong>Note :</strong> ${note}<br><strong>Durée :</strong> ${duree} sec<br>`;
        html += `<button onclick="this.parentElement.remove()">🗑 Supprimer</button></div>`;
        questionsList.insertAdjacentHTML("beforeend", html);

        form.reset();
        directeFields.classList.add("hidden");
        qsmFields.classList.add("hidden");
    });
});
