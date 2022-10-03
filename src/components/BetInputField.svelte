<script>
	import { to_number } from "svelte/internal";

	let inputValue = '';
	let displayValue = '';
	let inputIsValid = true;
	const handleOnSubmit = () => {
		if (inputIsValid) {
			displayValue = inputValue;
		}
	}
	const handleOnChange = () => {
		if (!to_number(inputValue)) {
			inputIsValid = false;
			console.log("change")
			if (inputValue === '') inputIsValid = true
		} else {
			inputIsValid = true
		}
	}
</script>

<div class="flex flex-col justify-start gap-5">

	<div class="flex gap-2">
		<div class="flex items-baseline pt-1">
			<p>
				I would like to bet
				<input
					class={'border-b-2 rounded-lg p-1 px-2 m-1 focus:outline-none active:outline-none text-amber-500 font-bold w-36' + (!inputIsValid ? ' border-2 border-red-500' : '')}
					bind:value={inputValue}
					on:keyup={handleOnChange}
					id="inputField"
					type="text"
				/>
				coins,
			</p>
		</div>
		<button
			class="bg-gray-200 rounded-lg px-3 py-2 border-b-4 self-baseline border-gray-500 active:border-b-0 active:border-t-2"
			on:click={handleOnSubmit}
		>
			let's go!
		</button>
	</div>
	
	{#if displayValue != ''}
		<p>
			You have just betted
			<span class="font-bold text-amber-500">{displayValue}</span>
			coins 💸
		</p>
	{:else}
		<p />
	{/if}

</div>

