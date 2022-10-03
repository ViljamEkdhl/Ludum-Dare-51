<script>
	import Wallet from '../components/Wallet.svelte';
	import BetInputField from '../components/BetInputField.svelte';
	import GreetingTitle from '../components/GreetingTitle.svelte';
</script>

<div class="h-screen max-h-full flex items-center justify-center">
	<div class="h-80 flex items-center flex-col gap-8">
		<GreetingTitle />
		<BetInputField />
	</div>
	<Wallet />
</div>
