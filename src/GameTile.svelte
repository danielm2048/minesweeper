<script>
	import { gameState, tileSize } from "./stores";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let isBomb;
	export let value;
	export let isClicked;
	export let isFlagged;
	export let i;
	export let j;

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
		if (!isFlagged) {
			dispatch("reveal", {
				i,
				j,
				isBomb,
			});
		}
	};

	const handleRightClick = () => {
		if (!isClicked) {
			dispatch("flag", {
				i,
				j,
				flagState: !isFlagged,
			});
			sign = !isFlagged ? "🚩" : "";
		}
	};

	const handleDblClick = () => {
		if (isClicked) {
			dispatch("chord", {
				i,
				j,
				value,
			});
		}
	};

	$: if (isClicked && isFlagged) {
		sign = "";
	}
</script>

<button
	on:contextmenu|preventDefault={handleRightClick}
	on:click={handleClick}
	on:dblclick={handleDblClick}
	disabled={$gameState !== "playing"}
	class:isClicked
	class:correct={isBomb && isFlagged && $gameState === "lost"}
	class={`number${value} size${$tileSize}`}
>
	<div class:isFlagged>{sign || (isClicked ? value : "")}</div>
</button>

<style>
	button,
	button:not(.isClicked):focus,
	button:not(.isClicked):active {
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

	.isFlagged {
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

	.correct {
		border: 3px solid red;
	}

	.number1 {
		color: #44b2f1;
	}
	.number2 {
		color: #2ab631;
	}
	.number3 {
		color: #97ad18;
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

	.size3,
	.size3:not(.isClicked):focus,
	.size3:not(.isClicked):active {
		width: 70px;
		height: 70px;
		font-size: 26px;
	}
	.size2,
	.size2:not(.isClicked):focus,
	.size2:not(.isClicked):active {
		width: 45px;
		height: 45px;
		font-size: 20px;
	}
	.size1,
	.size1:not(.isClicked):focus,
	.size1:not(.isClicked):active {
		width: 30px;
		height: 30px;
		font-size: 16px;
	}

	@media (max-width: 768px) {
		button,
		button:not(.isClicked):focus,
		button:not(.isClicked):active {
			width: 45px !important;
			height: 45px !important;
			font-size: 20px !important;
		}
	}

	@media (max-width: 600px) {
		button,
		button:not(.isClicked):focus,
		button:not(.isClicked):active {
			width: 30px !important;
			height: 30px !important;
			font-size: 16px !important;
		}
	}
</style>
