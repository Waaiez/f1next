export interface F1Data {
	MRData: {
		xmlns: string;
		series: string;
		url: string;
		limit: string;
		offset: string;
		total: string;
		RaceTable: RaceTable;
	};
}

export interface RaceTable {
	season: string;
	round: string;
	Races: Race[];
}

export interface Race {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: Circuit;
	date: Date;
	time: string;
	FirstPractice: SessionTimes;
	SecondPractice: SessionTimes;
	ThirdPractice?: SessionTimes;
	Qualifying: SessionTimes;
	Sprint?: SessionTimes;
}

export interface Circuit {
	circuitId: string;
	url: string;
	circuitName: string;
	Location: Location;
}

export interface Location {
	lat: string;
	long: string;
	locality: string;
	country: string;
}

export interface SessionTimes {
	date: Date;
	time: string;
}
