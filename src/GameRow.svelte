<script>
	export let gameRow;
	export let i;
</script>

<div>
	<div>
		{#each gameRow as { component, value, isClicked, isFlagged }, j}
			<svelte:component
				this={component}
				isBomb={value === "💣"}
				{value}
				{isClicked}
				{isFlagged}
				{i}
				{j}
				on:reveal
				on:flag
				on:chord
			/>
		{/each}
	</div>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
