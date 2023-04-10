const passwordInput = document.querySelector("#password"),
    eyeIcon = document.querySelector(".pass-field i");

const requirementsList = document.querySelectorAll(".requirement-list li")

const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^a-zA-Z0-9]/, index: 3 },
    { regex: /[A-Z]/, index: 4 },
];
passwordInput.addEventListener("keyup", (el) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(el.target.value);
        const requirementsItem = requirementsList[item.index];

        if (isValid) {
            requirementsItem.firstElementChild.className = "fa-solid fa-check";
            requirementsItem.classList.add("active");
        } else {
            requirementsItem.firstElementChild.className = "fa-solid fa-circle";
            requirementsItem.classList.remove("active");
        }
    });
});




eyeIcon.addEventListener("click", () => {
    // checking the password is hidden or visible
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
})