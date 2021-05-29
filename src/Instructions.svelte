<script>
	let visible = false;
</script>

<h2 on:click={() => (visible = !visible)}>Instructions</h2>

<ol class:visible>
	<li>
		You are presented with a board of squares. Some squares contain mines
		(bombs), others don't. If you click on a square containing a bomb, you lose.
		If you manage to click all the squares (without clicking on any bombs) you
		win.
	</li>
	<li>
		Clicking a square which doesn't have a bomb reveals the number of
		neighbouring squares containing bombs. Use this information plus some guess
		work to avoid the bombs.
	</li>
	<li>
		To open a square, point at the square and click on it. To mark a square you
		think is a bomb, point and right-click. To remove a bomb marker from a
		square, point at it and right-click again.
	</li>
	<li>
		You don't have to mark all the bombs to win; you just need to open all
		non-bomb squares.
	</li>
	<li>
		If an open square has the correct number of marked neighboring bombs, double
		click on the open square to open all remaining unopened neighbor squares all
		at once. If an incorrect number of neighbors are marked, or all neighbors
		are marked or open, clicking the square has no effect. If an incorrect
		neighbor is marked, this will cause instant death.
	</li>
	<li>Enjoy the game!! Thanks for playing ⛏️⛏️</li>
</ol>

<style>
	h2 {
		color: #ff3e00;
		font-size: 2.5em;
		font-weight: 200;
		margin: 10px auto;
		cursor: pointer;
	}

	h2:hover {
		text-decoration: underline;
		opacity: 0.8;
	}

	ol {
		display: none;
	}

	li {
		width: 450px;
		margin: 15px auto;
		color: white;
		font-size: 22px;
	}

	.visible {
		display: inline-block;
	}

	@media (max-width: 768px) {
		li {
			width: 350px;
		}
	}
</style>
