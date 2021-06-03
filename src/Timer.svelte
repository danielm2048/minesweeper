<script>
	import { gameState } from "./stores";
	import { onMount, afterUpdate } from "svelte";

	export let timer = 0;
	export let formatTimer;
	let interval;

	$: display = formatTimer(timer);

	onMount(() => {
		interval = setInterval(() => {
			timer++;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	afterUpdate(() => {
		if ($gameState !== "playing") {
			clearInterval(interval);
		}
	});
</script>

<p>{display}</p>

<style>
	p {
		color: white;
		font-size: 30px;
		margin: 15px 0;
	}
</style>
