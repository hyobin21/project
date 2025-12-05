const tasteButtons = document.querySelectorAll(".taste-btn");

tasteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedTaste = btn.dataset.taste;
        localStorage.setItem("selectedTaste", selectedTaste);
        window.location.href = "roulette.html";
    });
});
