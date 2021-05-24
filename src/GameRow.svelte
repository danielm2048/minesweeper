<script>
	export let gameRow;
	export let i;
</script>

<div>
	<div>
		{#each gameRow as { component, value, isClicked }, j}
			<svelte:component
				this={component}
				isBomb={value === "💣"}
				{value}
				{isClicked}
				{i}
				{j}
				on:reveal
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
