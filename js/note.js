document.querySelector("#editNote").addEventListener("click", () => {
    window.location.pathname = "/html/notionWithoutReact/newNote.html";
});

document.querySelector("#deleteNote").addEventListener("click", () => {
    if (confirm("¿Estás seguro de borrar esta nota?")) {
        console.log("Eliminado");
    } else {
        return;
    }
});
