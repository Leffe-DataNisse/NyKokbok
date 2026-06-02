document.querySelectorAll("[data-file]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const file = link.dataset.file;

        fetch("recept/" + file)
            .then(r => r.text())
            .then(html => {
                document.getElementById("content").innerHTML = html;

                // Här kan du lägga till näringsberäkning senare
                // beraknaInfo();
            })
            .catch(err => {
                document.getElementById("content").innerHTML =
                    "<p>Kunde inte ladda receptet.</p>";
            });
    });
});
