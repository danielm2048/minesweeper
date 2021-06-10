<script>
	import { gameState } from "./stores";
	import { onMount } from "svelte";

	import GameBoard from "./GameBoard.svelte";
	import GameTile from "./GameTile.svelte";
	import Timer from "./Timer.svelte";
	import Size from "./Size.svelte";
	import Instructions from "./Instructions.svelte";

	let timer = 0;
	let bestTimes = {
		easy: null,
		medium: null,
		hard: null,
	};

	onMount(() => {
		if (localStorage.getItem("best-times")) {
			bestTimes = JSON.parse(localStorage.getItem("best-times"));
		} else {
			localStorage.setItem("best-times", JSON.stringify(bestTimes));
		}
	});

	let gameStarted = false;
	let difficulty = "easy";

	$: rows = difficulty === "easy" ? 9 : difficulty === "medium" ? 16 : 30;
	$: columns = difficulty === "easy" ? 9 : 16;
	$: mines = difficulty === "easy" ? 10 : difficulty === "medium" ? 40 : 99;

	let gameTiles = [];
	let gameTilesClicked = 0;
	let gameTilesFlagged = 0;

	function gameInit() {
		for (let i = 0; i < rows; i++) {
			let gameRow = [];

			for (let j = 0; j < columns; j++) {
				gameRow.push({
					component: GameTile,
					value: "",
					isClicked: false,
					isFlagged: false,
				});
			}

			gameTiles.push(gameRow);
		}
		gameStarted = true;
	}

	function placeMines(firstClickedRow, firstClickedColumn) {
		for (let i = 0; i < mines; i++) {
			let taken = true;
			while (taken) {
				const randomRow = Math.floor(Math.random() * rows);
				const randomColumn = Math.floor(Math.random() * columns);

				taken = gameTiles[randomRow][randomColumn].value === "💣";

				// A way to keep first click area free from bombs
				const diffRow = Math.abs(firstClickedRow - randomRow);
				const diffColumn = Math.abs(firstClickedColumn - randomColumn);

				if (diffRow <= 1 && diffColumn <= 1) {
					taken = true;
				}

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
	}

	function revealTiles(i, j) {
		if (
			gameTiles[i] &&
			gameTiles[i][j] &&
			!gameTiles[i][j].isClicked &&
			!gameTiles[i][j].isFlagged
		) {
			gameTiles[i][j].isClicked = true;
			gameTilesClicked++;

			if (gameTiles[i][j].value === "💣") {
				gameState.update(() => "lost");
			}

			if (gameTilesClicked === 1) {
				placeMines(i, j);
			}

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

	function checkChord(i, j, value) {
		let flagCount = 0;

		if (
			gameTiles[i - 1] &&
			gameTiles[i - 1][j - 1] &&
			gameTiles[i - 1][j - 1].isFlagged
		) {
			flagCount++;
		}
		if (gameTiles[i][j - 1] && gameTiles[i][j - 1].isFlagged) {
			flagCount++;
		}
		if (
			gameTiles[i + 1] &&
			gameTiles[i + 1][j - 1] &&
			gameTiles[i + 1][j - 1].isFlagged
		) {
			flagCount++;
		}
		if (gameTiles[i + 1] && gameTiles[i + 1][j].isFlagged) {
			flagCount++;
		}
		if (
			gameTiles[i + 1] &&
			gameTiles[i + 1][j + 1] &&
			gameTiles[i + 1][j + 1].isFlagged
		) {
			flagCount++;
		}
		if (gameTiles[i][j + 1] && gameTiles[i][j + 1].isFlagged) {
			flagCount++;
		}
		if (
			gameTiles[i - 1] &&
			gameTiles[i - 1][j + 1] &&
			gameTiles[i - 1][j + 1].isFlagged
		) {
			flagCount++;
		}
		if (gameTiles[i - 1] && gameTiles[i - 1][j].isFlagged) {
			flagCount++;
		}

		if (value === flagCount) {
			return true;
		}

		return false;
	}

	function handleReveal(e) {
		if (e.detail.isBomb) {
			gameTiles[e.detail.i][e.detail.j].isClicked = true;
			gameState.update(() => "lost");
		} else {
			revealTiles(e.detail.i, e.detail.j);
		}
	}

	function handleFlag(e) {
		gameTiles[e.detail.i][e.detail.j].isFlagged = e.detail.flagState;

		if (e.detail.flagState) {
			gameTilesFlagged++;
		} else {
			gameTilesFlagged--;
		}
	}

	function handleChord(e) {
		const { i, j, value } = e.detail;
		if (checkChord(i, j, value)) {
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

	$: if (
		(difficulty === "easy" && gameTilesClicked === 71) ||
		(difficulty === "medium" && gameTilesClicked === 216) ||
		(difficulty === "hard" && gameTilesClicked === 381)
	) {
		gameState.update(() => "won");
	}

	$: if (
		$gameState === "won" &&
		(!bestTimes[difficulty] || timer < bestTimes[difficulty])
	) {
		bestTimes[difficulty] = timer;
		localStorage.setItem("best-times", JSON.stringify(bestTimes));
	}

	function startOver() {
		gameStarted = false;
		gameState.update(() => "playing");
		gameTiles = [];
		gameTilesClicked = 0;
		gameTilesFlagged = 0;
		timer = 0;
	}

	function formatTimer(timer) {
		let minutes = Math.floor(timer / 60);
		let seconds = Math.floor(timer % 60);

		if (minutes <= 9) {
			minutes = "0" + minutes;
		}

		if (seconds <= 9) {
			seconds = "0" + seconds;
		}

		return minutes + ":" + seconds;
	}
</script>

<main>
	{#if $gameState !== "playing"}
		<button on:click={startOver}>Start over?</button>
		{#if $gameState === "lost"}
			<h2>You Lost 👎</h2>
		{:else if $gameState === "won"}
			<h2>You Won 🙌🎉</h2>
		{/if}
	{/if}

	{#if !gameStarted}
		<h1>Svelte Minesweeper 👷‍♂️👷‍♀️</h1>
		<div class="game-options">
			<Instructions />
			<select bind:value={difficulty}>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
			{#if bestTimes[difficulty] !== null}
				<h2>🏆 Best Time: {formatTimer(bestTimes[difficulty])}</h2>
			{/if}
			<button on:click={gameInit}>Start Game!</button>
		</div>
	{:else}
		<h2>💣 {mines - gameTilesFlagged}</h2>
		<Size />
		<Timer bind:timer {formatTimer} />
		<GameBoard
			{gameTiles}
			on:reveal={handleReveal}
			on:flag={handleFlag}
			on:chord={handleChord}
		/>
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
		font-size: 4em;
		font-weight: 100;
		margin: 25px auto;
	}

	h2 {
		color: #ff3e00;
		font-size: 2em;
		font-weight: 200;
		margin: 10px auto;
	}

	.game-options {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	button {
		background-color: #ff3e00;
		color: white;
		border: none;
		outline: none;
		font-size: 2.5em;
		cursor: pointer;
	}

	select {
		font-size: 2em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
