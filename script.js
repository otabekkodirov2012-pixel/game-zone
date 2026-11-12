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
/* Центрированный блок поиска */
.game-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    max-width: 850px;
    margin: 35px auto 45px;
    padding: 0 15px;
}

/* Большое поле поиска */
.game-controls input {
    flex: 1;
    max-width: 550px;
    height: 60px;
    padding: 0 22px;
    background: #151a27;
    color: white;
    border: 2px solid #00bcd4;
    border-radius: 12px;
    font-size: 18px;
    outline: none;
    box-shadow: 0 0 15px #00bcd433;
}

.game-controls input:focus {
    border-color: #00e5ff;
    box-shadow: 0 0 20px #00e5ff77;
}

/* Выбор категории */
.game-controls select {
    height: 60px;
    padding: 0 15px;
    background: #151a27;
    color: white;
    border: 2px solid #00bcd4;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
}

@media (max-width: 600px) {
    .game-controls {
        flex-direction: column;
    }

    .game-controls input,
    .game-controls select {
        width: 100%;
        max-width: 100%;
    }
}
