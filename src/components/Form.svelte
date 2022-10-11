<script>
	import InputField from './InputField.svelte';
	import { betInput } from '../stores/stores';

	let betValue;

	betInput.subscribe((value) => {
		betValue = value;
	});

	const handleOnSubmit = () => {
		betValue;
	};

	const buttonStyle =
		'bg-gray-200 rounded-lg px-3 py-2 border-b-4 self-baseline border-gray-500 active:border-b-0 active:border-t-2';
</script>

<InputField />

<button class={buttonStyle} on:click={handleOnSubmit}> let's go! </button>

{#if betValue != ''}
	<p>
		You have just betted
		<span class="font-bold text-amber-500">{betValue}</span>
		coins 💸
	</p>
{/if}
