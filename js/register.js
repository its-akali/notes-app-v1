import { checkIfEmpty } from "./login";

// Redirect to login page
const loginButton = document.querySelector("#loginButton");

loginButton.addEventListener("click", () => {
    if (window.location.pathname !== "/html/notionWithoutReact/index.html") {
        window.location.pathname = "/html/notionWithoutReact/index.html";
    }
});

// Disable register option button, as we're already there
const registerButton = document.querySelector("#registerButton");

if (window.location.pathname == "/html/notionWithoutReact/register.html") {
    registerButton.disabled = true;
}

// Prevent default submit and check field values first
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("sent!");
});
