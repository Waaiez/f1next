<script lang="ts">
	import NextSession from '$lib/components/NextSession.svelte';
	import RaceInfo from '$lib/components/RaceInfo.svelte';
	import Sessions from '$lib/components/Sessions.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let raceData = data.raceData;
	let isSprint = data.isSprint;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 my-10 text-center">
		<div class="space-y-10 mb-10">
			<RaceInfo {raceData} />
			<NextSession {raceData} {isSprint} />
		</div>

		<Sessions {raceData} {isSprint} />

		<div>
			Last Updated: {data.generatedAt}
			<br />
			Data is updated every hour
		</div>
	</div>
</div>
