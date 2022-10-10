<script>
	import { walletAmount } from '../stores/stores';


	let displayValue;

	walletAmount.subscribe(value => {
		displayValue = value
	})

</script>

<div class="absolute p-4 top-12 left-12 border-4 border-gray-400 rounded-xl shadow-md">
	<p>
		Your wallet has <span class="font-bold text-amber-500">{displayValue}</span> coins 💰
	</p>
</div>
