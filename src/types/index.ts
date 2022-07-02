export type Circuit = {
  circuitId: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
};

export type RaceDateTime = {
  date: string;
  time: string;
};

export type Race = {
  round: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: RaceDateTime;
  SecondPractice: RaceDateTime;
  ThirdPractice: RaceDateTime;
  Qualifying: RaceDateTime;
};
