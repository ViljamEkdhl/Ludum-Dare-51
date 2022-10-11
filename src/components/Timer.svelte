<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { readable } from 'svelte/store';

	let countdown = 1;

	const progress = tweened(1, {
		duration: 900
	});

	const start = () => {
		if (Math.floor(countdown) < 0) {
			countdown = 1;
			progress.set(countdown, { duration: 0 });
		}
		countdown = countdown - 0.1;
		progress.set(countdown);
	};

	onMount(() => {
		setInterval(() => {
			start()
		}, 900);;
	});

	
</script>

<progress class="w-1/2 flex h-2 rounded-full" value={$progress}></progress>

<style>
	progress::-moz-progress-bar {
		background-color: orange !important;
		border-radius: 9999px;
	}
</style>