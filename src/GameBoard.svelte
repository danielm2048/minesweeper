<script>
	import GameRow from "./GameRow.svelte";

	export let gameTiles;
</script>

<div>
	{#each gameTiles as gameRow, i}
		<GameRow {gameRow} {i} on:reveal on:flag on:chord />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
</style>
