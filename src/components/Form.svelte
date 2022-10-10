<script>
	import InputField from './InputField.svelte';
	import { betInput } from '../stores/stores';
	import { placeBet } from '../components/CalculateWin.svelte';

	let betValue = '';
	let inputIsValid = false;
	let displayValue = false

	
	betInput.subscribe(value => {
		betValue = value[0]
		inputIsValid = value[1]
	})

	const handleOnSubmit = () => {
		displayValue = betValue
		//Skriva någon subscribe här kanske?
	};

	const buttonStyle = 'bg-gray-200 rounded-lg px-3 py-2 border-b-4 self-baseline border-gray-500 active:border-b-0 active:border-t-2';
</script>

<InputField />

<button class={buttonStyle} on:click={handleOnSubmit}> let's go! </button>

{#if displayValue != ''}
	<p>
		You have just betted
		<span class="font-bold text-amber-500">{displayValue}</span>
		coins 💸
	</p>
{/if}
