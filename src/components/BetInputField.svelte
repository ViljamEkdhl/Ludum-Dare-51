<script>
	let inputValue = '';
	let inputValueIsANumber = true;
	let displayValue = '';
	function handleOnSubmit() {
		displayValue = inputValue;
	}
</script>

<div class="flex gap-2">
	<div class="flex items-baseline pt-1">
		<p>
			I would like to bet
			<input
				class={'border-b-2 rounded-lg p-1 px-2 m-1 focus:outline-none active:outline-none text-amber-500 font-bold w-36' +
					(inputValueIsANumber ? ' ' : ' border-red-500')}
				bind:value={inputValue}
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
		{displayValue}
		coins
	</p>
{:else}
	<p />
{/if}
