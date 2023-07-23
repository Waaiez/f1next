<script lang="ts">
	import type { Race } from '$lib/types/f1.types';
	export let raceData: Race;

	let raceName = raceData.raceName;
	let circuitName = raceData.Circuit.circuitName;
</script>

<div>
	<h4 class="h4">{raceName}</h4>
	<h5 class="h5">{circuitName}</h5>
</div>
