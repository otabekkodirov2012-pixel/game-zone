const searchInput = document.getElementById("gameSearch");
const categorySelect = document.getElementById("gameCategory");

const games = document.querySelectorAll(".game-card");

function filterGames() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    games.forEach(function(game) {
        const title = game.querySelector("h3").textContent.toLowerCase();
        const category = game.dataset.category;

        const matchesSearch = title.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            game.style.display = "";
        } else {
            game.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterGames);
categorySelect.addEventListener("change", filterGames);
