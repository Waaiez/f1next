export function hasSessionPassed(qualifyingDate: string | Date, qualifyingTime: string): boolean {
	const currentDateTime = new Date();
	const qualifyingDateTime = new Date(`${qualifyingDate}T${qualifyingTime}`);

	const currentUTCTime = Date.UTC(
		currentDateTime.getUTCFullYear(),
		currentDateTime.getUTCMonth(),
		currentDateTime.getUTCDate(),
		currentDateTime.getUTCHours(),
		currentDateTime.getUTCMinutes(),
		currentDateTime.getUTCSeconds()
	);

	const qualifyingUTCTime = Date.UTC(
		qualifyingDateTime.getUTCFullYear(),
		qualifyingDateTime.getUTCMonth(),
		qualifyingDateTime.getUTCDate(),
		qualifyingDateTime.getUTCHours(),
		qualifyingDateTime.getUTCMinutes(),
		qualifyingDateTime.getUTCSeconds()
	);

	return currentUTCTime >= qualifyingUTCTime;
}

export function timeTillSession(sessionDate: string | Date, sessionTime: string): string {
	const currentDateTime = new Date();
	const qualifyingDateTime = new Date(`${sessionDate}T${sessionTime}`);

	const timeDifference = qualifyingDateTime.getTime() - currentDateTime.getTime();

	const seconds = Math.floor(timeDifference / 1000);

	if (seconds < 60) {
		// If there are less than 60 seconds remaining, only show seconds
		return `${seconds} second${seconds !== 1 ? 's' : ''}`;
	}

	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	const remainingSeconds = seconds % 60;
	const remainingMinutes = minutes % 60;
	const remainingHours = hours % 24;
	const remainingDays = days % 30;
	const months = Math.floor(days / 30);
	const remainingMonths = months % 12;
	const years = Math.floor(months / 12);

	const prettyFormat = [];

	if (years) prettyFormat.push(`${years} year${years !== 1 ? 's' : ''}`);
	if (remainingMonths)
		prettyFormat.push(`${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`);
	if (remainingDays) prettyFormat.push(`${remainingDays} day${remainingDays !== 1 ? 's' : ''}`);
	if (remainingHours) prettyFormat.push(`${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`);
	if (remainingMinutes)
		prettyFormat.push(`${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`);

	return prettyFormat.join(', ');
}
