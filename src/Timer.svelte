<script>
	import { gameState } from "./stores";
	import { onMount, afterUpdate } from "svelte";

	let timer = 0;
	let interval;

	$: display = formatTimer(timer);

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
