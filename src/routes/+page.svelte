<script>
	import Coin from '../components/Coin.svelte';
	import Wallet from '../components/Wallet.svelte';
	import Form from '../components/Form.svelte';
	import Greeting from '../components/Greeting.svelte';
</script>

<div class="h-screen max-h-full flex items-center justify-center">
	<div class="h-80 flex items-center flex-col gap-8">
		<Greeting />
		<Form />
		<Coin currencyCode={"ETH-USD"} />
	</div>
	<Wallet />
</div>
