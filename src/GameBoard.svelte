<script>
	import GameRow from "./GameRow.svelte";

	export let gameTiles;
</script>

{#each gameTiles as gameRow, i}
	<GameRow {gameRow} {i} on:reveal />
{/each}
