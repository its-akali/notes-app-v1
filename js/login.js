/**
 * Checks if input is empty and changes styles if yes/no
 * @param {*} input > variable input
 * @param {*} error > variable error field to show/hide
 * @returns > true if empty, false if not
 */
function checkIfEmpty(input, error) {
    if (input.value == "") {
        input.classList.add("errorInput");
        error.innerText = "El campo no puede estar vacío.";
        error.style.display = "block";
        return true;
    } else {
        input.classList.remove("errorInput");
        error.style.display = "none";
        return false;
    }
}

// Disable login option button, as we're already there
const loginButton = document.querySelector("#loginButton");

if (window.location.pathname == "/html/notionWithoutReact/index.html") {
    loginButton.disabled = true;
}

// Redirect to register page
const registerButton = document.querySelector("#registerButton");

registerButton.addEventListener("click", () => {
    window.location.pathname = "/html/notionWithoutReact/register.html";
});

// Adds a key up event listener in every input to check in real-time if the field is empty or not
document.querySelectorAll(".labelAndInput").forEach((div) => {
    div.addEventListener("keyup", (e) => {
        if (!checkIfEmpty(e.target, e.currentTarget.querySelector("span"))) {
            // Validación con la bdd
        }
    });
});

// Prevent default submit and check field values first
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("sent!");
});

/* const logIn = async (e) => {
    e.preventDefault();

    const data = new FormData(document.querySelector("form")),
        request = await fetch("/html/notionWithoutReact/a.php", {
            method: "POST",
            body: data,
        }),
        response = await request.json();
    console.log(response);
};

document.querySelector("form").addEventListener("submit", logIn);

const result = async () => {
    console.log("aquí");
    const request = await fetch(
            "http://localhost/html/notionWithoutReact/a.php"
        ),
        response = await request.json();
    console.log(response);
};
result(); */
