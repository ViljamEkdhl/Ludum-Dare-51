<script>
	import { onMount } from 'svelte';
	import CalculateWin from '../components/CalculateWin.svelte';

	let currentCoinCost;
	let calculateWinComponent;

	export let currencyCode;

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch(`https://api.coinbase.com/v2/prices/${currencyCode}/buy`);
			currentCoinCost = await response.json();
			JSON.stringify(currentCoinCost);
			currentCoinCost = currentCoinCost.data.amount;

			calculateWinComponent.savePrice(currentCoinCost);

		}, 10000);

		return () => clearInterval(interval);
	});
</script>

<CalculateWin bind:this={calculateWinComponent} />

{#if currentCoinCost != undefined}
	<p>
		ETH current price: <span id="ETH-price">{currentCoinCost}</span>
	</p>
{/if}
