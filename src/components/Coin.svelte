<script>
	import { timer } from '../stores/stores';
	import CalculateWin from '../components/CalculateWin.svelte';

	let currentCoinCost;
	let calculateWinComponent;
	timer.subscribe(time => {
		if (time === 0) getCoinValue()
	})

	export let currencyCode;

	async function getCoinValue() {
		const response = await fetch(`https://api.coinbase.com/v2/prices/${currencyCode}/buy`);
		currentCoinCost = await response.json();
		JSON.stringify(currentCoinCost);
		currentCoinCost = currentCoinCost.data.amount;

		calculateWinComponent.savePrice(currentCoinCost);
	}

</script>

<CalculateWin bind:this={calculateWinComponent} />

{#if currentCoinCost != undefined}
	<p>
		ETH current price: <span id="ETH-price">{currentCoinCost}</span>
	</p>
{/if}
