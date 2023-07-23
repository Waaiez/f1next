<script lang="ts">
	import type { Race } from '$lib/types/f1.types';
	export let raceData: Race;
	export let isSprint: boolean;
</script>

{#if isSprint}
	<div class="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 w-full">
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">FP1</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">
			Qualifying
		</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">FP2</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">
			Sprint
		</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">Race</div>
	</div>
{:else}
	<div class="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 w-full">
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">FP1</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">FP2</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">FP3</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">
			Qualifying
		</div>
		<div class="rounded uppercase p-4 bg-green-800 w-1/3 text-center drop-shadow-lg bold">Race</div>
	</div>
{/if}
