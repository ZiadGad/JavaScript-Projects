let formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form-close"),
    SignupBtn = document.querySelector("#signup"),
    LoginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
});
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
});

SignupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
})
LoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
})