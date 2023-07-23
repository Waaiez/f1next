<script lang="ts">
	import type { Race, SessionTimes } from '$lib/types/f1.types';
	import { hasSessionPassed, timeTillSession } from '$lib/utils/time';
	export let raceData: Race;
	export let isSprint: boolean;

	let nextItem: string;
	let nextItemID: string;

	if (isSprint) {
		if (!hasSessionPassed(raceData.FirstPractice.date, raceData.FirstPractice.time)) {
			nextItem = 'FP1';
			nextItemID = 'FirstPractice';
		} else if (!hasSessionPassed(raceData.Qualifying.date, raceData.Qualifying.time)) {
			nextItem = 'Qualifying';
			nextItemID = 'Qualifying';
		} else if (!hasSessionPassed(raceData.SecondPractice.date, raceData.SecondPractice.time)) {
			nextItem = 'FP2';
			nextItemID = 'SecondPractice';
		} else if (!hasSessionPassed(raceData.Sprint!.date, raceData.Sprint!.time)) {
			nextItem = 'Sprint';
			nextItemID = 'Sprint';
		} else {
			nextItem = 'Race';
			nextItemID = 'Race';
		}
	} else {
		if (!hasSessionPassed(raceData.FirstPractice.date, raceData.FirstPractice.time)) {
			nextItem = 'FP1';
			nextItemID = 'FirstPractice';
		} else if (!hasSessionPassed(raceData.SecondPractice.date, raceData.SecondPractice.time)) {
			nextItem = 'FP2';
			nextItemID = 'SecondPractice';
		} else if (!hasSessionPassed(raceData.ThirdPractice!.date, raceData.ThirdPractice!.time)) {
			nextItem = 'FP3';
			nextItemID = 'ThirdPractice';
		} else if (!hasSessionPassed(raceData.Qualifying.date, raceData.Qualifying.time)) {
			nextItem = 'Qualifying';
			nextItemID = 'Qualifying';
		} else {
			nextItem = 'Race';
			nextItemID = 'Race';
		}
	}

	function nextSessionData(item: keyof Race) {
		const value = raceData[item];
		return value;
	}

	let nextSessionDate: Date;
	let nextSessionTime: string;

	if (nextItemID === 'Race') {
		nextSessionDate = raceData.date;
		nextSessionTime = raceData.time;
	} else {
		const data = nextSessionData(nextItemID as keyof Race) as SessionTimes;
		nextSessionDate = data.date;
		nextSessionTime = data.time;
	}

	let timeLeft: string;

	if (hasSessionPassed(nextSessionDate, nextSessionTime)) {
		timeLeft = 'Session has passed';
	} else {
		timeLeft = timeTillSession(nextSessionDate, nextSessionTime);
	}
</script>

<h2 class="h2">{nextItem} starts in</h2>
<h1 class="h1">{timeLeft}</h1>
