let stars = document.querySelectorAll(".stars i");
let selectedStarIndex = parseInt(localStorage.getItem("selectedStarIndex"));

if (!isNaN(selectedStarIndex)) {
    stars.forEach((star, index) => {
        if (index <= selectedStarIndex) {
            star.classList.add("active");
        }
    });
}

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });

        localStorage.setItem("selectedStarIndex", index1);
    });
});






