<script>
	import { onMount } from 'svelte';
	import { timer } from '../stores/stores';
	import {tweened} from 'svelte/motion'

	let countdown;
	let progressCount = 1;
	timer.subscribe(time => countdown = time);

	const progress = tweened(1, {
		duration: 10
	});

	const runTimer = () => {
		timer.update(time => time - 1)
		progressCount -= 0.1
		progress.set(progressCount)
		if (countdown === 0) {
			timer.set(10);
			progressCount = 1
			progress.set(progressCount)
		}
	};

	onMount(() => {
		setInterval(runTimer, 1000);
	});

</script>

<progress class="w-1/2 flex h-2 rounded-full" value={$progress}></progress>
<p>{countdown}</p>

<style>
	progress::-moz-progress-bar {
		background-color: orange !important;
		border-radius: 9999px;
	}
</style>
