export class FuelStatistic {
public unitId: number;
public errorCode: string;
public intervals: [{'beginFuel': {'value': number, 'noValueReason': string}, 'endFuel': {'value': number, 'noValueReason': string},
  'begin': Date, 'end': Date}];
}

