<script>
	import { onMount } from 'svelte';

	let coinName;
	let coinCurrencyCost;

	export let currencyCode;

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch(`https://api.coinbase.com/v2/prices/${currencyCode}/buy`);
			coinCurrencyCost = await response.json();
			JSON.stringify(coinCurrencyCost);
			coinName = coinCurrencyCost.data.base;
			coinCurrencyCost = coinCurrencyCost.data.amount;
			console.log(coinName + ': ' + coinCurrencyCost);
		}, 10000);

		return () => clearInterval(interval);
	});
</script>
