<script>
	import { tileSize } from "./stores";
</script>

<div>
	<label>
		<input type="radio" bind:group={$tileSize} value={1} />
		Small
	</label>

	<label>
		<input type="radio" bind:group={$tileSize} value={2} />
		Medium
	</label>

	<label>
		<input type="radio" bind:group={$tileSize} value={3} />
		Large
	</label>
</div>

<style>
	div {
		position: absolute;
		top: 25px;
		right: 25px;
	}

	label {
		width: 100px;
		color: white;
		font-size: 20px;
	}

	@media (max-width: 768px) {
		div {
			display: none;
		}
	}
</style>
