// Gérer l'ouverture/fermeture des menus (Lycée, BUT...)
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        // Alterne l'affichage du contenu suivant (la div content-dropdown)
        const content = this.nextElementSibling;
        if (content.style.display === "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    });
});