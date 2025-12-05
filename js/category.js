const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const selected = btn.dataset.category;
        localStorage.setItem("selectedCategory", selected);
        window.location.href = "taste.html";
    });
});

