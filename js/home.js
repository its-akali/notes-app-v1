const notes = document.querySelectorAll(".userNotes li");

if (notes != []) {
    notes.forEach((note) => {
        note.addEventListener("click", (e) => {
            if (e.target == note.querySelector(".edit")) {
                window.location.pathname =
                    "/html/notionWithoutReact/newNote.html";
            } else if (e.target == note.querySelector(".delete")) {
                if (confirm("¿Estás seguro de borrar esta nota?")) {
                    console.log("Eliminado");
                } else {
                    return;
                }
            } else {
                window.location.pathname = "/html/notionWithoutReact/note.html";
            }
        });
    });
}
