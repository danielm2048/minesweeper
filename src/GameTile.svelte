<script>
	import { gameState } from "./stores";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let isBomb;
	export let value;
	export let isClicked;
	export let i;
	export let j;

	let isSelected = false;
	let sign = "";

	$: if ($gameState === "lost") {
		if (isBomb) {
			if (isClicked) {
				sign = "💥";
			} else {
				sign = "💣";
			}
		}
	}

	const handleClick = () => {
		if (!isSelected) {
			dispatch("reveal", {
				i,
				j,
				isBomb,
			});
		}
	};

	const handleSelect = () => {
		isSelected = !isSelected;
		sign = isSelected ? "🚩" : "";
	};

	$: if (isClicked && isSelected) {
		isSelected = false;
		sign = "";
	}
</script>

<button
	on:contextmenu|preventDefault={handleSelect}
	on:click={handleClick}
	disabled={$gameState !== "playing" || isClicked}
	class:isClicked
	class={`number${value}`}
>
	<div class:isSelected>{sign || (isClicked ? value : "")}</div>
</button>

<style>
	button,
	button:focus,
	button:active {
		background-color: #319cc0;
		width: 70px;
		height: 70px;
		margin: 2px;
		font-size: 26px;
		font-weight: 700;
		border: none;
		border-radius: 5px;
		outline: none;
		padding: 0;
	}

	.isClicked {
		background-color: #d3d2d2;
		animation: popout 0.2s ease;
		-webkit-animation: popout 0.2s ease;
	}

	.isSelected {
		animation: popout 0.1s ease-in-out;
		-webkit-animation: popout 0.1s ease-in-out;
	}

	@keyframes popout {
		from {
			transform: scale(0);
		}
		80% {
			transform: scale(1.2);
		}
		to {
			transform: scale(1);
		}
	}
	@-webkit-keyframes popout {
		from {
			-webkit-transform: scale(0);
		}
		80% {
			-webkit-transform: scale(1.2);
		}
		to {
			-webkit-transform: scale(1);
		}
	}

	.number1 {
		color: #44b2f1;
	}
	.number2 {
		color: #2ab631;
	}
	.number3 {
		color: #a6be1a;
	}
	.number4 {
		color: #f1b444;
	}
	.number5 {
		color: #f15844;
	}
	.number6 {
		color: #ca0e0e;
	}
	.number7 {
		color: #b11010;
	}
	.number8 {
		color: #8f1d09;
	}
</style>
