<script>
	import { to_number } from 'svelte/internal';
	import { betInput } from '../stores/stores';

	let inputValue;
	let betValue;
	let inputIsValid = true

	export const lockInBet = () => {
		betInput.set(betValue)
	};
	
	const handleOnChange = () => {
		if (to_number(inputValue) || inputValue === '') {
			inputIsValid = true;
			betValue = inputValue;
		} else {
			inputIsValid = false;
		}
	};

	const inputStyle = 'border-b-2 rounded-lg p-1 px-2 m-1 focus:outline-none active:outline-none text-amber-500 font-bold w-36 border-t-2 border-t-transparent';
	const inputStyleError = ' border-2 border-red-500 border-t-red-500';

</script>

<div class="flex flex-col justify-start gap-5">
	<div class="flex gap-2">
		<div class="flex items-baseline pt-1">
			<p>
				I would like to bet
				<input
					class={inputStyle + (!inputIsValid ? inputStyleError : '')}
					bind:value={inputValue}
					on:keyup={handleOnChange}
					id="inputField"
					type="text"
				/>
				coins,
			</p>
		</div>
	</div>
</div>

