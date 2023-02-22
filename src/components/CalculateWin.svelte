<script>
	import { to_number } from 'svelte/internal';
	import { betInput, walletAmount } from '../stores/stores';

	let oldCoinCost;
	let betAmount;

	betInput.subscribe((value) => (betAmount = value));

	let win;

	export function savePrice(currentCoinCost) {
		console.log(currentCoinCost); // TODO: Glöm inte att ta bort
		if (betAmount != ' ') {
			if (currentCoinCost > oldCoinCost) {
				win = true;
				walletAmount.update((currentWalletAmount) => currentWalletAmount + to_number(betAmount));
			}
			if (currentCoinCost == oldCoinCost) {
				win = 'draw';
				return;
			}
			if (currentCoinCost < oldCoinCost) {
				win = false;
				walletAmount.update((currentWalletAmount) => currentWalletAmount - betAmount);
			}
		}
		oldCoinCost = currentCoinCost;
	}
</script>

{#if win == true}
	<span>You WIN!</span>
{/if}

{#if win == 'draw'}
	<span>It neither went up or down :c</span>
{/if}

{#if win == false}
	<span>You LOSE!</span>
{/if}
