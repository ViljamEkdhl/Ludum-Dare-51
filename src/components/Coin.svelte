<script>
	import { onMount } from 'svelte';
	import CalculateWin from '../components/CalculateWin.svelte';

	let coinName;
	let coinCurrencyCost;

	let calculateWinComponent;

	export let currencyCode;

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch(`https://api.coinbase.com/v2/prices/${currencyCode}/buy`);
			coinCurrencyCost = await response.json();
			JSON.stringify(coinCurrencyCost);
			coinName = coinCurrencyCost.data.base;
			coinCurrencyCost = coinCurrencyCost.data.amount;

			calculateWinComponent.savePrice(coinCurrencyCost);
		}, 10000);

		return () => clearInterval(interval);
	});
</script>

<CalculateWin bind:this={calculateWinComponent} />

{#if coinCurrencyCost != undefined}
	<p>
		ETH current price: <span id="ETH-price">{coinCurrencyCost}</span>
	</p>
{/if}
