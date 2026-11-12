const searchInput = document.getElementById("gameSearch");
const categorySelect = document.getElementById("gameCategory");

const games = document.querySelectorAll(".game-card");

const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");

function filterGames() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedCategory = categorySelect.value;

    let visibleCount = 0;

    games.forEach(function(game) {

        const title = game.querySelector("h3")
            .textContent.toLowerCase();

        const category = game.dataset.category;

        const matchesSearch = title.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        const shouldShow = matchesSearch && matchesCategory;

        game.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }

    });

    noResults.hidden = visibleCount !== 0;

    resultsCount.textContent =
        "Найдено игр: " + visibleCount;
}

searchInput.addEventListener("input", filterGames);

categorySelect.addEventListener("change", filterGames);

filterGames();
