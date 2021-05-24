<script>
	import { gameState } from "./stores";

	import GameBoard from "./GameBoard.svelte";
	import GameTile from "./GameTile.svelte";
	import Timer from "./Timer.svelte";

	let gameStarted = false;

	let rows = 9;
	let columns = 9;
	let mines = 10;

	let gameTiles = [];
	let gameTilesClicked = 0;

	for (let i = 0; i < rows; i++) {
		let gameRow = [];

		for (let j = 0; j < columns; j++) {
			gameRow.push({ component: GameTile, value: "", isClicked: false });
		}

		gameTiles.push(gameRow);
	}

	for (let i = 0; i < mines; i++) {
		let taken = true;
		while (taken) {
			const randomRow = Math.floor(Math.random() * rows);
			const randomColumn = Math.floor(Math.random() * columns);

			taken = gameTiles[randomRow][randomColumn].value === "💣";
			if (!taken) {
				gameTiles[randomRow][randomColumn].value = "💣";
			}
		}
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let mineCount = 0;

			if (gameTiles[i][j].value === "💣") {
				continue;
			}

			if (
				gameTiles[i - 1] &&
				gameTiles[i - 1][j - 1] &&
				gameTiles[i - 1][j - 1].value === "💣"
			) {
				mineCount++;
			}
			if (gameTiles[i][j - 1] && gameTiles[i][j - 1].value === "💣") {
				mineCount++;
			}
			if (
				gameTiles[i + 1] &&
				gameTiles[i + 1][j - 1] &&
				gameTiles[i + 1][j - 1].value === "💣"
			) {
				mineCount++;
			}
			if (gameTiles[i + 1] && gameTiles[i + 1][j].value === "💣") {
				mineCount++;
			}
			if (
				gameTiles[i + 1] &&
				gameTiles[i + 1][j + 1] &&
				gameTiles[i + 1][j + 1].value === "💣"
			) {
				mineCount++;
			}
			if (gameTiles[i][j + 1] && gameTiles[i][j + 1].value === "💣") {
				mineCount++;
			}
			if (
				gameTiles[i - 1] &&
				gameTiles[i - 1][j + 1] &&
				gameTiles[i - 1][j + 1].value === "💣"
			) {
				mineCount++;
			}
			if (gameTiles[i - 1] && gameTiles[i - 1][j].value === "💣") {
				mineCount++;
			}

			gameTiles[i][j].value = mineCount || "";
		}
	}

	function revealTiles(i, j) {
		if (gameTiles[i] && gameTiles[i][j] && !gameTiles[i][j].isClicked) {
			gameTiles[i][j].isClicked = true;
			gameTilesClicked++;
			if (gameTiles[i][j].value === "") {
				revealTiles(i - 1, j - 1);
				revealTiles(i, j - 1);
				revealTiles(i + 1, j - 1);
				revealTiles(i + 1, j);
				revealTiles(i + 1, j + 1);
				revealTiles(i, j + 1);
				revealTiles(i - 1, j + 1);
				revealTiles(i - 1, j);
			}
		}
	}

	function handleReveal(e) {
		if (e.detail.isBomb) {
			gameTiles[e.detail.i][e.detail.j].isClicked = true;
			gameState.update(() => "lost");
		} else {
			revealTiles(e.detail.i, e.detail.j);
		}
	}

	$: if (gameTilesClicked === 71) {
		gameState.update(() => "won");
	}
</script>

<main>
	<h1>Svelte Minesweeper 👷‍♂️👷‍♀️</h1>

	{#if $gameState === "lost"}
		<h2>You Lost 👎</h2>
	{:else if $gameState === "won"}
		<h2>You Won 🙌</h2>
	{/if}

	{#if !gameStarted}
		<div class="game-button">
			<button on:click={() => (gameStarted = true)}>Start Game!</button>
		</div>
	{:else}
		<Timer />
		<GameBoard {gameTiles} on:reveal={handleReveal} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 0.6em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 3.2em;
		font-weight: 100;
		margin: 25px auto;
	}

	h2 {
		color: #ff3e00;
		font-size: 2em;
		font-weight: 200;
		margin: 10px auto;
	}

	.game-button {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	button {
		background-color: #ff3e00;
		color: white;
		border: none;
		outline: none;
		font-size: 3em;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
